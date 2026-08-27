import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function CButton(props: {
  buttonButtonLink?: Types.Basic.Link;
  buttonButtonText?: React.ReactNode;
  buttonDropShadowOnHover?: Types.Boolean.Boolean;
  buttonSize?: "xl" | "lg" | "md" | "base" | "sm" | "xs";
  color?:
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
  colorMode?: "normal" | "inverse" | "inherit";
  colorStyle?: Types.Boolean.Boolean;
  iconClickable?: Types.Boolean.Boolean;
  iconIconImage?: Types.Asset.Image;
  iconIconPlacement?: Types.Boolean.Boolean;
  iconIconVisibility?: Types.Boolean.Boolean;
  iconSize?: "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
  size?: "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
}): React.JSX.Element;
