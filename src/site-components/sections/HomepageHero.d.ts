import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function HomepageHero(props: {
  settingsSectionId?: string;
  settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "Full Width";
  word1HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  word1HeadlineText?: React.ReactNode;
  word2HeadlineText?: React.ReactNode;
  word2HeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  word3HeadlineText?: React.ReactNode;
  word3HeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  word4HeadlineText?: React.ReactNode;
  word4HeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}): React.JSX.Element;
