import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ColorCard(props: {
  cardSettingsCardId?: string;
  cardSettingsCardVisible?: Types.Visibility.VisibilityConditions;
  cardStyleCardColors?:
    | "BG: White Text: Blue"
    | "BG: Blue Text: White"
    | "BG: Purple Text: Yellow"
    | "BG: Purple Text: Bright Blue"
    | "BG: Red Text: Blue"
    | "BG: Blue Offset Text: Blue"
    | "BG: Green Text: Yellow"
    | "BG: Yellow Text: Blue"
    | "BG: Dark Green Text: Bright Green";
  headlineFontSize?: unknown;
  linksLink?: Types.Basic.Link;
  linksLinkText?: React.ReactNode;
  previewImageCardPreviewImage?: Types.Asset.Image;
  previewImageCardPreviewImageAltText?: Types.Basic.AltText;
}): React.JSX.Element;
