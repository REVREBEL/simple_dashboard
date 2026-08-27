import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function TagVariant(props: {
  icon?: Types.Asset.Image;
  iconAltText?: Types.Basic.AltText;
  iconIconVisibility?: Types.Boolean.Boolean;
  iconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  tagTagText?: React.ReactNode;
  variantsIconColorIconColor?:
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
}): React.JSX.Element;
