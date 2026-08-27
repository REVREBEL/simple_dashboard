import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VariantsResponsiveHeadlineParagraph(props: {
  eyebrowEyebrowText?: React.ReactNode;
  eyebrowEyebrowVisibility?: Types.Boolean.Boolean;
  paragraphParagraphFontSizeVariant?:
    | "paragraph-xs"
    | "paragraph_sm"
    | "paragraph-base"
    | "paragraph-md"
    | "paragraph-lg"
    | "paragraph-xl";
  paragraphParagraphText?: React.ReactNode;
  responsiveHeadlineAlignment?: unknown;
  responsiveHeadlineColorInherit?: Types.Boolean.Boolean;
  responsiveHeadlineFontWeight?: Types.Boolean.Boolean;
  responsiveHeadlineHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  responsiveHeadlineHeadlineText?: React.ReactNode;
  responsiveHeadlineHeadlineVisibility?: Types.Boolean.Boolean;
  responsiveHeadlineResponsiveFontSizeVariant?:
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
}): React.JSX.Element;
