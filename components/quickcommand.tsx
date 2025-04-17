"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";
import { useRouter } from "next/router";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { toast } from "./ui/use-toast";
import ExperimentGenerator from "@/components/generators/experimentation-automation/experimentGeneratorGeneral";
import {
  TOGGLEBANK_CHATBOT_AI_EXPERIMENTATION_KEY,
  MARKETPLACE_STORE_HEADER_EXPERIMENTATION_KEY,
  MARKETPLACE_SHORTEN_COLLECTIONS_PAGE_EXPERIMENTATION_KEY,
  MARKETPLACE_SUGGESTED_ITEMS_EXPERIMENTATION_KEY,
  MARKETPLACE_NEW_SEARCH_ENGINE_EXPERIMENTATION_KEY,
} from "@/components/generators/experimentation-automation/experimentationConstants";

import {
  generateSuggestedItemsFeatureExperimentResults,
  generateAIChatBotFeatureExperimentResults,
  generateNewSearchEngineFeatureExperimentResults,
} from "@/components/generators/experimentation-automation/featureExperimentGeneratorFunctions";
import {
  generateStoreHeaderFunnelExperimentResults,
  generateShortenCollectionsPageFunnelExperimentResults,
} from "@/components/generators/experimentation-automation/funnelExperimentGeneratorFunctions";
import GuardedReleaseGenerator from "@/components/generators/guarded-release-generator/guardedReleaseGenerator";

export function QuickCommandDialog({ children }: { children: any }) {
  const [open, setOpen] = React.useState(false);
  const location = useRouter();
  const [timer, setTimer] = React.useState(0);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [showScrollIcon, setShowScrollIcon] = React.useState(false); 
  const commandListRef = React.useRef(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    const checkOverflow = () => {
      if (commandListRef.current) {
        const { scrollHeight, clientHeight } = commandListRef.current;
        setShowScrollIcon(scrollHeight > clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [open]);

  const resetFeatureFlags = async () => {
    toast({
      title: "Resetting",
      description:
        "Currently resetting all LaunchDarkly flags for this environment. Give us 30 seconds.",
    });

    setTimer(30); 
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(intervalId); 
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    await fetch("/api/ldreset");
    location.reload();
    location.push("/");
  };

  return (
    <>
      {children}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandList className="!max-h-[100rem] h-full">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Demo Tools">
            <CommandItem>
              <ExperimentGenerator
                title={"[Marketplace] Feature Experiment Results Generator for Suggested Items"}
                experimentationKey={MARKETPLACE_SUGGESTED_ITEMS_EXPERIMENTATION_KEY}
                functionGenerator={generateSuggestedItemsFeatureExperimentResults}
              />
            </CommandItem>
            <CommandItem>
              <ExperimentGenerator
                title={"[Marketplace] Funnel Experiment Results Generator for Store Header"}
                experimentationKey={MARKETPLACE_STORE_HEADER_EXPERIMENTATION_KEY}
                functionGenerator={generateStoreHeaderFunnelExperimentResults}
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
