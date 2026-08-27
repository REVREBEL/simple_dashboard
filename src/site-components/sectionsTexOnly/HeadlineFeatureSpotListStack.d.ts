import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function HeadlineFeatureSpotListStack(props: {
  contentMainParagraph?: React.ReactNode;
  contentResponsiveTextVariants?:
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
  labelLabelColor?:
    | "primary"
    | "teal"
    | "cyan"
    | "aqua"
    | "powder"
    | "yellow"
    | "orange"
    | "red"
    | "purple"
    | "frost"
    | "grey-1"
    | "grey-2"
    | "grey-3";
  labelTheResultText?: React.ReactNode;
  listListDescriptionText?: React.ReactNode;
  listListHeadline?: React.ReactNode;
  listListItemText1?: React.ReactNode;
  listListItemText2?: React.ReactNode;
  listListItemText3?: React.ReactNode;
  listListItemText4?: React.ReactNode;
  optionsColor?:
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
  optionsId?: string;
  optionsVisibility?: Types.Visibility.VisibilityConditions;
  slotHeadline?: React.ReactNode;
  slotLabel?: React.ReactNode;
}): React.JSX.Element;
