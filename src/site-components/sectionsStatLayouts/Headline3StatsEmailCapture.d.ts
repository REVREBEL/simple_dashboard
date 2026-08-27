import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Headline3StatsEmailCapture(props: {
  headlineEyebrowText?: React.ReactNode;
  headlineHeadlineText?: React.ReactNode;
  headlineHeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineSubHeadlineText?: React.ReactNode;
  headlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  image?: Types.Asset.Image;
  stat1LargeNumberStat?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  stat1StatDescriptionText?: React.ReactNode;
  stat2StatDescriptionText?: React.ReactNode;
  stat3HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  stat3StatDescriptionText?: React.ReactNode;
}): React.JSX.Element;
