import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Banner(props: {
  bannerBannerText?: React.ReactNode;
  iconIcon?: Types.Asset.Image;
  iconVisibility?: Types.Visibility.VisibilityConditions;
  variant?: "Light" | "Dark" | "White";
}): React.JSX.Element;
