import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function CResponsiveHeadline(props: {
  eyebrowEyebrowText?: React.ReactNode;
  eyebrowEyebrowVisibility?: Types.Boolean.Boolean;
  headlineColorInherit?: Types.Boolean.Boolean;
  headlineFontWeight?: Types.Boolean.Boolean;
  headlineHeadlineSize?:
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
  headlineHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineHeadlineText?: React.ReactNode;
  headlineHeadlineVisibility?: Types.Boolean.Boolean;
  headlineHeadlineWrapping?: Types.Boolean.Boolean;
  headlineTextWrap?: Types.Boolean.Boolean;
  optionsTextAlign?: "left" | "right" | "center" | "justify";
  subheadlineSubheadlineText?: React.ReactNode;
  subheadlineSubheadlineVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
