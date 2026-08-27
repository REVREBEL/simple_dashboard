import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function CIcon(props: {
  clickable?: Types.Boolean.Boolean;
  iconIconSize?: "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
  iconImage?: Types.Asset.Image;
  optionsColorMode?: "normal" | "inverse" | "inherit";
  optionsColorStyle?: Types.Boolean.Boolean;
  optionsIconColor?:
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
}): React.JSX.Element;
