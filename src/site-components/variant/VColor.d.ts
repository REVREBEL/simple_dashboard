import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VColor(props: {
  optionsClickable?: Types.Boolean.Boolean;
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
  optionsDropShadowOnHover?: Types.Boolean.Boolean;
  slotColorAttributes?: Types.Basic.Attributes;
  slotSlotColor?: React.ReactNode;
}): React.JSX.Element;
