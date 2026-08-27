import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function ResponsiveHeadlineParagraph(props: {
  eyebrowEyebrowText?: React.ReactNode;
  eyebrowEyebrowVisibility?: Types.Boolean.Boolean;
  headlineAlignment?: "Left" | "Right" | "Center";
  headlineBackgroundTextColor?:
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
  headlineColorInherit?: Types.Boolean.Boolean;
  headlineFontWeight?: Types.Boolean.Boolean;
  headlineHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineHeadlineText?: React.ReactNode;
  headlineHeadlineVisibility?: Types.Boolean.Boolean;
  headlineResponsiveTextSizeVariants?:
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
  paragraphParagraphFontSizeVariant?:
    | "paragraph-xs"
    | "paragraph_sm"
    | "paragraph-base"
    | "paragraph-md"
    | "paragraph-lg"
    | "paragraph-xl";
  paragraphParagraphText?: React.ReactNode;
}): React.JSX.Element;
