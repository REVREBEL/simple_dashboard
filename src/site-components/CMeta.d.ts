import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function CMeta(props: {
  category1CategoryLink?: Types.Basic.Link;
  category1CategorySlug?: string;
  category1CategoryText?: React.ReactNode;
  category1CategoryVisibility?: Types.Boolean.Boolean;
  category2CategoryLink?: Types.Basic.Link;
  category2CategorySlug?: string;
  category2CategoryText?: React.ReactNode;
  category2CategoryVisibility?: Types.Boolean.Boolean;
  clickable?: Types.Boolean.Boolean;
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
  dateDateLabelFontColorVariants?:
    | "Primary"
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
    | "Color 9 Inverse"
    | "Light"
    | "Dark";
  dateDateLabelTextSizeVariants?:
    | "Label LG"
    | "Medium Label"
    | "Regular Label"
    | "Small Label"
    | "Extra Small Label";
  dateDateText?: React.ReactNode;
  dateDateVisibility?: Types.Visibility.VisibilityConditions;
  fontSize?:
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
  fontWeight?:
    | "black"
    | "bold"
    | "semibold"
    | "regular"
    | "medium"
    | "light"
    | "extra-light"
    | "thin";
  layout?: "row" | "row-compact" | "column" | "column-compact";
  optionsPaddingLeftAlignment?: Types.Boolean.Boolean;
  textAlign?: "left" | "right" | "center" | "justify";
}): React.JSX.Element;
