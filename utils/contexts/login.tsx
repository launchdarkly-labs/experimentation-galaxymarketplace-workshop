import { useLDClient } from "launchdarkly-react-client-sdk";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { isAndroid, isIOS, isBrowser, isMobile, isMacOs, isWindows } from "react-device-detect";
import { setCookie, getCookie } from "cookies-next";
import { LD_CONTEXT_COOKIE_KEY, LAUNCH_CLUB_PLATINUM } from "../constants";
import { STARTER_PERSONAS } from "./StarterUserPersonas";
import { Persona } from "../typescriptTypesInterfaceLogin";
import type { LoginContextType } from "@/utils/typescriptTypesInterfaceLogin";
import { LDContext } from "launchdarkly-js-client-sdk";

const startingUserObject = {
  personaname: "",
  personatier: "",
  personaimage: "",
  personaemail: "",
  personarole: "",
  personalaunchclubstatus: "",
  personaEnrolledInLaunchClub: false,
};

const LoginContext = createContext<LoginContextType>({
  userObject: startingUserObject,
  isLoggedIn: false,
  async upgradeLaunchClubStatus() {},
  // async setPlaneContext(),
  async enrollInLaunchClub() {},
  async updateUserContext() {},
  async loginUser() {},
  async logoutUser() {},
  allUsers: [],
});

export default LoginContext;

const operatingSystem = isAndroid
  ? "Android"
  : isIOS
  ? "iOS"
  : isWindows
  ? "Windows"
  : isMacOs
  ? "macOS"
  : "";
const device = isMobile ? "Mobile" : isBrowser ? "Desktop" : "";

export const LoginProvider = ({ children }: { children: any }) => {
  const client = useLDClient();
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
const [userObject, setUserObject] = useState<Persona | {}>({});
  const [appMultiContext, setAppMultiContext] = useState({
    ...client?.getContext(),
  });
  const [allUsers, setAllUsers] = useState<Persona[]>(STARTER_PERSONAS);

  const hashEmail = async (email: string): Promise<string> => {
    // Use Web Crypto API to hash the email with SHA-256
    const encoder = new TextEncoder();
    const data = encoder.encode(email);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    // Convert buffer to hex string
    return Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  };

  const getLocation = async (): Promise<{
    key: string;
    name: string;
    timeZone: string;
    country: string;
  }> => {
    const options = Intl.DateTimeFormat().resolvedOptions();
    const country = options.locale.split("-")[1] || "US"; // Default to "US" if country code is not available
    return {
      key: options.timeZone,
      name: options.timeZone,
      timeZone: options.timeZone,
      country: country,
    };
  };

  const loginUser = async (email: string): Promise<void> => {
    if (Object.keys(userObject).length > 0) {
      //to update the all personas array with the changes
      setAllUsers((prevObj) => [
        ...prevObj.filter((persona) => persona?.personaemail !== userObject?.personaemail),
        userObject,
      ]);
    }

    const context: LDContext | undefined = await client?.getContext();
    //don't know how to fix this without using undefined
    const foundPersona: Persona = allUsers?.find((persona) =>
      persona?.personaemail?.includes(email)
    );
    await setUserObject(foundPersona);
    context.user.name = foundPersona?.personaname;
    context.user.email = foundPersona?.personaemail;
    const hashedEmail = await hashEmail(email);
    context.user.anonymous = false;
    context.user.key = hashedEmail;
    context.user.role = foundPersona?.personarole;
    context.user.tier = foundPersona?.personatier;
    context.user.device = device;
    context.user.operating_system = operatingSystem;
    context.user.location = await getLocation();
    context.location = await getLocation();
    context.user.launchclub = foundPersona?.personalaunchclubstatus;
    setAppMultiContext(context);
    await client?.identify(context);
    console.log("loginUser", context);

    setCookie(LD_CONTEXT_COOKIE_KEY, context);
    setIsLoggedIn(true);
  };

  const updateUserContext = async (): Promise<void> => {
    const context = await client?.getContext();
    if(!context) return;
    context.user.key = uuidv4();
    context.user.device = Math.random() < 0.5 ? "Mobile" : "Desktop";
    const osOptions = context.user.device === "Mobile" ? ["iOS", "Android"] : ["macOS", "Windows"];
    context.user.operating_system = osOptions[Math.floor(Math.random() * osOptions.length)];
    context.user.location = `America/${["New_York", "Chicago", "Los_Angeles", "Denver"][Math.floor(Math.random() * 4)]}`;
    context.user.tier = ["Gold", "Silver", "Platinum", "Standard"][Math.floor(Math.random() * 3)];
    context.user.anonymous = false;
    setAppMultiContext(context);
    setCookie(LD_CONTEXT_COOKIE_KEY, context);
    console.log("updateUserContext", context);
    await client?.identify(context);
  };


  const logoutUser = async () => {
    setIsLoggedIn(false);
    setUserObject(startingUserObject);
    setAllUsers(STARTER_PERSONAS);
    const createAnonymousContext = {
      kind: "multi",
      user: {
        anonymous: true,
        key: uuidv4().slice(0, 10),
      },
      device: {
        key: device,
        name: device,
        operating_system: operatingSystem,
        platform: device,
      },
      location: {
        key: "America/New_York",
        name: "America/New_York",
        timeZone: "America/New_York",
        country: "US",
      },
      experience: {
        key: "a380",
        name: "a380",
        airplane: "a380",
      }
    };
    const context = createAnonymousContext;
    setAppMultiContext(context);
    await client?.identify(context);
    setCookie(LD_CONTEXT_COOKIE_KEY, context);
    console.log("Anonymous User", context);
  };

  const enrollInLaunchClub = (): void => {
    setUserObject((prevObj) => ({ ...prevObj, personaEnrolledInLaunchClub: true }));
  };

  return (
    <LoginContext.Provider
      value={{
        userObject,
        isLoggedIn,
        enrollInLaunchClub,
        updateUserContext,
        loginUser,
        logoutUser,
        allUsers,
        appMultiContext,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};