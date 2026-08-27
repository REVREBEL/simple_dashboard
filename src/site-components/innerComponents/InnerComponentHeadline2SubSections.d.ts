import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function InnerComponentHeadline2SubSections(props: {
  flexVertical?: React.ReactNode;
  flexVertical2?: React.ReactNode;
  fontColorVariants?:
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
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse"
    | "Light"
    | "Dark";
  headlineFontSize?: unknown;
  headlineSubHeadlineText?: React.ReactNode;
  imageImage?: Types.Asset.Image;
  imageImageAltText?: Types.Basic.AltText;
  subSection1ParagraphText?: React.ReactNode;
  subSection2ParagraphText?: React.ReactNode;
}): React.JSX.Element;
