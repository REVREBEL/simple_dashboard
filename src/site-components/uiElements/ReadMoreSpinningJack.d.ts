import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ReadMoreSpinningJack(props: {
  readMoreButtonButtonCtaText?: React.ReactNode;
  readMoreButtonIcon?: Types.Asset.Image;
  readMoreButtonIconAltText?: Types.Basic.AltText;
  readMoreButtonLink?: Types.Basic.Link;
  settingsButtonId?: string;
  settingsButtonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
