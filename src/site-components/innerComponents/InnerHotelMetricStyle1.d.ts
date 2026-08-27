import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function InnerHotelMetricStyle1(props: {
  hotelStatName?: React.ReactNode;
  hotelStatNo?: React.ReactNode;
  icon?: Types.Asset.Image;
  iconIconAltText?: Types.Basic.AltText;
  iconIconColor?:
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
  iconIconSize?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  iconIconVisibility?: Types.Boolean.Boolean;
  variant?: "Horizontal Layout" | "Vertical Layout";
}): React.JSX.Element;
