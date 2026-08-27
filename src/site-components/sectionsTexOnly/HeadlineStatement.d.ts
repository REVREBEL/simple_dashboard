import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function HeadlineStatement(props: {
  componentId?: string;
  componentVisibility?: Types.Visibility.VisibilityConditions;
  contentBottomParagraphText?: React.ReactNode;
  contentBottomParagraphVisibility?: Types.Visibility.VisibilityConditions;
  contentTopParagraphText?: React.ReactNode;
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
  optionsBackgroundTextColor?:
    | "Light"
    | "Dark"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse";
  slotHeadline?: React.ReactNode;
}): React.JSX.Element;
