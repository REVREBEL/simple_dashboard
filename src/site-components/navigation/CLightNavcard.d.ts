import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function CLightNavcard(props: {
  variant?: "Light" | "Dark";
  whiteCardHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  whiteCardHeadlineText?: React.ReactNode;
  whiteCardIcon?: Types.Asset.Image;
  whiteCardIconAltText?: Types.Basic.AltText;
  whiteCardIconVisibility?: Types.Boolean.Boolean;
  whiteCardLink?: Types.Basic.Link;
  whiteCardParagraph?: React.ReactNode;
  whiteCardSlotLabel?: React.ReactNode;
}): React.JSX.Element;
