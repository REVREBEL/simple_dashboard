import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SmallParagraphHeadline(props: {
  contentHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  contentHeadlineText?: React.ReactNode;
  contentLink?: Types.Basic.Link;
  contentLinkText?: React.ReactNode;
  contentText?: React.ReactNode;
  optionsColor?:
    | "Light"
    | "Dark"
    | "Brand Color 1"
    | "Brand Color 2"
    | "Brand Color 3"
    | "Brand Color 4"
    | "Brand Color 5"
    | "Brand Color 6"
    | "Brand Color 7"
    | "Brand Color 8"
    | "Brand Color 1 Inverse"
    | "Brand Color 2 Inverse"
    | "Brand Color 3 Inverse"
    | "Brand Color 4 Inverse"
    | "Brand Color 5 Inverse"
    | "Brand Color 6 Inverse"
    | "Brand Color 7 Inverse"
    | "Brand Color 8 Inverse";
  settingsSectionId?: string;
  settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
