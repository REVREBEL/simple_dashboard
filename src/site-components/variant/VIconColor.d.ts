import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VIconColor(props: {
  dataClickable?: Types.Basic.Attributes;
  iconColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "Inherit";
  slotIconColor?: React.ReactNode;
}): React.JSX.Element;
