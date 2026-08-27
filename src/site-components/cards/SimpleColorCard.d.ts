import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SimpleColorCard(props: {
  headlineAlignmentVariants?: unknown;
  headlineTextSizeVariants?:
    | "jumbo"
    | "xxxl"
    | "xxl"
    | "xl"
    | "lg"
    | "md"
    | "base"
    | "sm"
    | "xs"
    | "xxs"
    | "tiny";
  imageImage?: Types.Asset.Image;
  imageImageAltText?: Types.Basic.AltText;
  readMoreFontColorVariants?:
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
  readMoreResponsiveTextVariants?:
    | "Label LG"
    | "Medium Label"
    | "Regular Label"
    | "Small Label"
    | "Extra Small Label";
  readMoreUnderlineVariants?: "Underline" | "Underline [ON-HOVER]";
  simpleCardAlignmentVariants?: unknown;
  simpleCardColorVariants?:
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
  simpleCardLayoutVariants?: unknown;
}): React.JSX.Element;
