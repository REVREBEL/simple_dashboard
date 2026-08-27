import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Button(props: {
  buttonColor?:
    | "Base"
    | "Color Primary"
    | "Color Primary Inverse"
    | "Color Primary Outline"
    | "Light"
    | "Light Outline"
    | "Color 1"
    | "Color 1 Outline"
    | "Color 1 Outline Inverse"
    | "Color 2"
    | "Color 2 Outline"
    | "Color 2 Outline Inverse"
    | "Color 3"
    | "Color 3 Outline"
    | "Color 4"
    | "Color 5"
    | "Color 5 Outline"
    | "Color 5 Outline Inverse"
    | "Color 6"
    | "Color 6 Outline"
    | "Color 7"
    | "Color 8"
    | "Color 8 Outline"
    | "Color 8 Inverse"
    | "Color 9"
    | "Color 9 Outline"
    | "Alert"
    | "Alert Outline"
    | "Disabled";
  buttonId?: string;
  buttonLink?: Types.Basic.Link;
  buttonSize?: "Small" | "Base" | "Large";
  buttonText?: React.ReactNode;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  iconIconAltText?: Types.Basic.AltText;
  iconIconColorVariants?:
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
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  iconIconImage?: Types.Asset.Image;
  iconIconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  iconIconVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
