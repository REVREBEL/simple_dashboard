import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function CClassLabel(props: {
  iconColor?:
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
  labelsFontSize?:
    | "jumbo"
    | "xxl"
    | "xl"
    | "lg"
    | "md"
    | "base"
    | "sm"
    | "xs"
    | "xxs"
    | "tiny";
  labelsLabel1Text?: React.ReactNode;
  labelsLabel2Text?: React.ReactNode;
  labelsLabel3Text?: React.ReactNode;
  labelsLabel4Text?: React.ReactNode;
  labelsLayout?: "row" | "row-compact" | "column" | "column-compact";
  labelsNumberOfLabels?: "1 Label" | "2 Labels" | "3 Labels" | "4 Labels";
  optionsColor?:
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
  optionsColorMode?: "normal" | "inverse" | "inherit";
  optionsColorStyle?: Types.Boolean.Boolean;
}): React.JSX.Element;
