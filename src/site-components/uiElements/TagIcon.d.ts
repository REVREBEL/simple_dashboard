import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function TagIcon(props: {
  iconIcon?: Types.Asset.Image;
  iconIconAltText?: Types.Basic.AltText;
  iconIconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  iconIconVisibility?: Types.Boolean.Boolean;
  tagColor?:
    | "Light"
    | "Clear"
    | "Dark"
    | "Base"
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9";
  tagTagClickable?:
    | "None"
    | "Solid"
    | "Solid Clickable"
    | "Outline"
    | "Outline Clickable";
  tagTagId?: string;
  tagTagSize?: "Extra Small" | "Small" | "Regular" | "Medium";
  tagTagText?: React.ReactNode;
  tagTagVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
