import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ButtonVariant(props: {
  buttonButtonSizeVariants?: "Small" | "Base" | "Large";
  buttonButtonText?: React.ReactNode;
  buttonId?: string;
  buttonLink?: Types.Basic.Link;
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
