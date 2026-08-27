import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VResponsiveHeadline(props: {
  dataFontWeight?: string;
  dataTextWrap?: string;
  eyebrowText?: React.ReactNode;
  eyebrowVisibility?: Types.Boolean.Boolean;
  headlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineText?: React.ReactNode;
  headlineVisibility?: Types.Boolean.Boolean;
  headlineWrapping?: Types.Boolean.Boolean;
  responsiveTextSizeVariants?:
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
  subheadlineText?: React.ReactNode;
  subheadlineVisibility?: Types.Boolean.Boolean;
  valueWrapHeadline?: string;
}): React.JSX.Element;
