import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function AboutCtrlShift(props: {
  sectionBackgroundTextColor?:
    | "Base"
    | "Light"
    | "Dark"
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Primary Inverse"
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse";
  sectionHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  sectionHeadlineText?: React.ReactNode;
  sectionId?: string;
  sectionParagraph?: React.ReactNode;
  sectionVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
