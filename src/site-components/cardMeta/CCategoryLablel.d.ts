import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function CCategoryLablel(props: {
  labelCategoryText?: React.ReactNode;
  labelCategoryVisibility?: Types.Boolean.Boolean;
  labelColor?:
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
  labelColorMode?: "normal" | "inverse" | "inherit";
  labelColorStyle?: Types.Boolean.Boolean;
  labelFontSize?:
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
  labelFontWeight?:
    | "black"
    | "bold"
    | "semibold"
    | "regular"
    | "medium"
    | "light"
    | "extra-light"
    | "thin";
  labelLink?: Types.Basic.Link;
  labelPaddingLeft?: Types.Boolean.Boolean;
  labelTextAlign?: "left" | "right" | "center" | "justify";
}): React.JSX.Element;
