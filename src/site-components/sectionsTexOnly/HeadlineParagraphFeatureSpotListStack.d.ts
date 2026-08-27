import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function HeadlineParagraphFeatureSpotListStack(props: {
  headlineSizeVariants?:
    | "Level 4 Biggest"
    | "Level 3 Bigger"
    | "Level 2 Bigger"
    | "Level 1 Bigger"
    | "Regular"
    | "Level 1 Smaller"
    | "Level 2 Smaller"
    | "Level 3 Smaller"
    | "Level 4 Smaller"
    | "Level 5 Smallest";
  headlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineText?: React.ReactNode;
  headlineTopText?: React.ReactNode;
  paragraphText?: React.ReactNode;
}): React.JSX.Element;
