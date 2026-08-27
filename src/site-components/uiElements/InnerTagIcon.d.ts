import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function InnerTagIcon(props: {
  icon?: Types.Asset.Image;
  iconAltText?: Types.Basic.AltText;
  iconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  iconVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
