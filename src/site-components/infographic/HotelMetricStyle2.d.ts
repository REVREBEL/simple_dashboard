import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function HotelMetricStyle2(props: {
  hotelMetricsHotelsLabelVisibility?: Types.Boolean.Boolean;
  hotelMetricsLayoutVariant?:
    | "Count | Label | Icon Horizontal"
    | "Count | Icon | Label Horizontal"
    | "Label | Count | Icon Horizontal"
    | "Icon | Count | Label Horizontal"
    | "Count | Icon | Label Stacked";
  hotelMetricsMetric1?: React.ReactNode;
  hotelMetricsMetric2?: React.ReactNode;
  hotelMetricsResortsLabelVisibility?: Types.Boolean.Boolean;
  hotelMetricsStackedStatVisibility?: Types.Boolean.Boolean;
  hotelMetricsStatCount?: React.ReactNode;
  hotelMetricsStatName?: Types.Basic.AltText;
  hotelMetricsText2?: React.ReactNode;
  iconIcon?: Types.Asset.Image;
  iconIconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  iconIconVisibility?: Types.Boolean.Boolean;
  optionsFontColorVariants?:
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
}): React.JSX.Element;
