import galaxyMarketplaceVerticalLogo from "@/public/marketplace/galaxy_marketplace_logo_vertical.svg";
import galaxyMarketplaceHorizontalLogo from "@/public/marketplace/galaxy_marketplace_logo_horizontal.svg";
import vrgame from "@/public/marketplace/vrgalaxy_image/vrgame.svg";
import vrcamera from "@/public/marketplace/vrgalaxy_image/vrcamera.svg";
import vrheadset from "@/public/marketplace/vrgalaxy_image/vrheadset.svg";
import vrsoftware from "@/public/marketplace/vrgalaxy_image/vrsoftware.svg";
import vrtreadmill from "@/public/marketplace/vrgalaxy_image/vrtreadmill.svg";
import hapticgloves from "@/public/marketplace/vrgalaxy_image/hapticgloves.svg";
import vrheadsetcleaningkit from "@/public/marketplace/vrgalaxy_image/vrheadsetcleaningkit.svg";
import vrcontrollers from "@/public/marketplace/vrgalaxy_image/vrcontrollers.svg";
import { InventoryItem } from "@/utils/typescriptTypesInterfaceIndustry";
import releaseHoverImage from "@/public/homepage/release-card-hovering.svg";
import releaseNoHoverImage from "@/public/homepage/release-card-not-hovering.svg";
import monitorHoverImage from "@/public/homepage/card-demo-desktop-monitorfeatures-hover.svg";
import monitorNoHoverImage from "@/public/homepage/card-demo-desktop-monitorfeatures.svg";
import aiHoverImage from "@/public/homepage/card-demo-desktop-accelerateai-hover.svg";
import aiNoHoverImage from "@/public/homepage/card-demo-desktop-accelerateai.svg";
import experimentHoverImage from "@/public/homepage/card-demo-desktop-experimenteverywhere-hover.svg";
import experimentNoHoverImage from "@/public/homepage/card-demo-desktop-experimenteverywhere.svg";
import architectureIconCSNAV from "@/public/sidenav/architecture-icon.svg";
import aiHoverCSNAV from "@/public/sidenav/card-demo-sidenav-accelerateai-hover.svg";
import aiNoHoverCSNAV from "@/public/sidenav/card-demo-sidenav-accelerateai.svg";
import architectureHoverCSNAV from "@/public/sidenav/card-demo-sidenav-architecture-hover.svg";
import architectureNoHoverCSNAV from "@/public/sidenav/card-demo-sidenav-architecture.svg";
import releaseHoverCSNAV from "@/public/sidenav/card-demo-sidenav-automatereleases-hover.svg";
import releaseNoHoverCSNAV from "@/public/sidenav/card-demo-sidenav-automatereleases.svg";
import codeexamplesHoverCSNAV from "@/public/sidenav/card-demo-sidenav-codeexamples-hover.svg";
import codeexamplesNoHoverCSNAV from "@/public/sidenav/card-demo-sidenav-codeexamples.svg";
import experimentHoverCSNAV from "@/public/sidenav/card-demo-sidenav-experimenteverywhere-hover.svg";
import experimentNoHoverCSNAV from "@/public/sidenav/card-demo-sidenav-experimenteverywhere.svg";
import monitorHoverCSNAV from "@/public/sidenav/card-demo-sidenav-monitorfeatures-hover.svg";
import monitorNoHoverCSNAV from "@/public/sidenav/card-demo-sidenav-monitorfeatures.svg";
import curlyBrackets from "@/public/sidenav/curly-brackets.svg";
import aiIconHover from "@/public/sidenav/illo-ai-hover.svg";
import aiIcon from "@/public/sidenav/illo-ai.svg";
import experimentIconHover from "@/public/sidenav/illo-experiment-hover.svg";
import experimentIcon from "@/public/sidenav/illo-experiment.svg";
import releaseIconHover from "@/public/sidenav/illo-release-1.svg";
import releaseIcon from "@/public/sidenav/illo-release.svg";
import monitorIconHover from "@/public/sidenav/illo-monitor-hover.svg";
import monitorIcon from "@/public/sidenav/illo-monitor.svg";
import arrowIconCSNAV from "@/public/sidenav/arrow.svg";

// Stock logo images removed - not needed for marketplace

export const ALERT_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

export const PERSONA_TIER_STANARD = "Standard";
export const PERSONA_TIER_PLATINUM = "Platinum";
export const PERSONA_ROLE_BETA = "Beta";
export const PERSONA_ROLE_DEVELOPER = "Developer";
export const PERSONA_ROLE_USER = "User";
export const LAUNCH_CLUB_STANDARD = "standard";
export const LAUNCH_CLUB_PLATINUM = "platinum";
export const LD_CONTEXT_COOKIE_KEY = "ld-context";

export const MARKET = "market";

export const ANTHROPIC = "anthropic";
export const COHERE = "cohere";
export const META = "meta";


export const COMPANY_LOGOS = {
  market: {
    vertical: galaxyMarketplaceVerticalLogo,
    horizontal: galaxyMarketplaceHorizontalLogo,
  },
};

export const VR_GALAXY_DATA: InventoryItem[] = [
  {
    id: 1,
    vendor: "vrgalaxy",
    item: "VR Headset - Advanced Model",
    cost: "499.99",
    image: vrheadset,
  },
  {
    id: 2,
    vendor: "vrgalaxy",
    item: "Wireless VR Controllers (Pair)",
    cost: "119.99",
    image: vrcontrollers,
  },
  {
    id: 3,
    vendor: "vrgalaxy",
    item: "VR Treadmill for Immersive Movement",
    cost: "899.99",
    image: vrtreadmill,
  },
  {
    id: 4,
    vendor: "vrgalaxy",
    item: "Haptic Feedback Gloves",
    cost: "259.99",
    image: hapticgloves,
  },
  {
    id: 5,
    vendor: "vrgalaxy",
    item: "Virtual Reality Game - Space Adventure",
    cost: "59.99",
    image: vrgame,
  },
  {
    id: 6,
    vendor: "vrgalaxy",
    item: "VR Headset Cleaning Kit",
    cost: "29.99",
    image: vrheadsetcleaningkit,
  },
  {
    id: 7,
    vendor: "vrgalaxy",
    item: "360° VR Camera",
    cost: "349.99",
    image: vrcamera,
  },
  {
    id: 8,
    vendor: "vrgalaxy",
    item: "Virtual Reality Development Software",
    cost: "199.99",
    image: vrsoftware,
  },
  {
    id: 9,
    vendor: "vrgalaxy",
    item: "Adjustable VR Headset Stand",
    cost: "39.99",
  },
  {
    id: 10,
    vendor: "vrgalaxy",
    item: "Virtual Reality Experience Ticket - Underwater World",
    cost: "14.99",
  },
];

export const THE_BOOMIN_BOX_DATA: InventoryItem[] = [
  {
    id: 22,
    vendor: "boominbox",
    item: "Bluetooth Noise-Canceling Headphones",
    cost: "299.99",
  },
  {
    id: 23,
    vendor: "boominbox",
    item: "Wireless Earbuds - Waterproof Edition",
    cost: "159.99",
  },
  {
    id: 24,
    vendor: "boominbox",
    item: "High-Fidelity Turntable",
    cost: "349.99",
  },
  {
    id: 25,
    vendor: "boominbox",
    item: "Portable Bluetooth Speaker - Rugged Design",
    cost: "119.99",
  },
  {
    id: 26,
    vendor: "boominbox",
    item: "Studio Monitor Speakers (Pair)",
    cost: "499.99",
  },
  {
    id: 27,
    vendor: "boominbox",
    item: "Multi-Channel Home Theater System",
    cost: "999.99",
  },
  {
    id: 28,
    vendor: "boominbox",
    item: "Digital Audio Interface - Pro Series",
    cost: "229.99",
  },
  {
    id: 29,
    vendor: "boominbox",
    item: "Smart Home Sound System with Voice Control",
    cost: "399.99",
  },
  {
    id: 30,
    vendor: "boominbox",
    item: "Professional DJ Mixer",
    cost: "699.99",
  },
];

export const MACROCENTER_DATA: InventoryItem[] = [
  {
    id: 11,
    vendor: "macrocenter",
    item: "High-Performance Graphics Card - 8GB",
    cost: "699.99",
  },
  {
    id: 12,
    vendor: "macrocenter",
    item: "Gaming Motherboard - RGB Lighting",
    cost: "259.99",
  },
  {
    id: 13,
    vendor: "macrocenter",
    item: "Solid State Drive (SSD) - 1TB",
    cost: "129.99",
  },
  {
    id: 14,
    vendor: "macrocenter",
    item: "DDR4 RAM - 16GB Kit (2x8GB)",
    cost: "89.99",
  },
  {
    id: 15,
    vendor: "macrocenter",
    item: "Modular Power Supply - 750W",
    cost: "119.99",
  },
  {
    id: 16,
    vendor: "macrocenter",
    item: "CPU Cooler - Liquid Cooling System",
    cost: "139.99",
  },
  {
    id: 17,
    vendor: "macrocenter",
    item: "Full-Tower PC Case - Tempered Glass",
    cost: "199.99",
  },
  {
    id: 18,
    vendor: "macrocenter",
    item: "Wireless Gaming Keyboard and Mouse Combo",
    cost: "99.99",
  },
  {
    id: 19,
    vendor: "macrocenter",
    item: "27-inch Gaming Monitor - 144Hz",
    cost: "329.99",
  },
  {
    id: 20,
    vendor: "macrocenter",
    item: "Internal Sound Card - 7.1 Surround",
    cost: "79.99",
  },
];



export const HOMEPAGE_CARDS = {
  experiment: {
    name: "Galaxy Marketplace",
    description:
      "LaunchDarkly empowers engineering, product, and data teams to seamlessly unify feature delivery and experimentation. By leveraging the same feature flags engineers rely on, engineering teams can run experiments that deliver real-time insights for product managers to act on and statistical rigor that data scientists trust, providing the data needed to make informed decisions and optimize business outcomes.",
    desktopNoHoveringImage: experimentNoHoverImage,
    desktopHoveringImage: experimentHoverImage,
    link: "/marketplace",
  },
};

export const DEFAULT_AI_MODEL = {
  messages: [
    {
      content:
        "As an AI bot for Galaxy Marketplace, your purpose is to answer questions related to our products and shopping experience. Act as a customer representative. Only answer queries related to shopping and our products. Remove quotation in response. Limit response to 100 characters. Here is the user prompt: ${userInput}.",
      role: "system",
    },
  ],
  model: {
    parameters: { temperature: 0.5, maxTokens: 500 },
    id: "cohere.command-text-v14",
  },
};



export const CSNAV_ITEMS = {
  arrow: arrowIconCSNAV,
  codeexamples: {
    hoverBackground: codeexamplesHoverCSNAV,
    noHoverBackground: codeexamplesNoHoverCSNAV,
    icon: curlyBrackets,
    type: "resource",
    link: "/examples",
    title: "Code Examples",
  },
  architecture: {
    icon: architectureIconCSNAV,
    hoverBackground: architectureHoverCSNAV,
    noHoverBackground: architectureNoHoverCSNAV,
    type: "resource",
    link: "/architecture",
    title: "Architecture",
  },
  experiment: {
    icon: experimentIcon,
    hoverBackground: experimentHoverCSNAV,
    noHoverBackground: experimentNoHoverCSNAV,
    iconHover: experimentIconHover,
    type: "usecase",
    link: "/marketplace",
    title: "GalaxyMarketplace",
  },
};

export const NAV_ELEMENTS_VARIANT = {
  market: {
    navLinks: [
      { text: "All", href: "/marketplace" },
      { text: "Account", href: "/marketplace" },
      { text: "Buy Again", href: "/marketplace" },
      { text: "Today's Deals", href: "/marketplace" },
      { text: "Sale", href: "/marketplace" },
    ],
    navLinkColor: "gradient-experimentation",
    popoverMessage: "Thank you for shopping with us, ",
    logoImg: COMPANY_LOGOS["market"].horizontal,
  },
};
