import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SimpleCard(props: {
  cardCardLayout?: Types.Boolean.Boolean;
  cardCardStyles?: "Regular Card" | "Flat Card" | "Flat Card No Borders";
  cardSlotHeadline?: React.ReactNode;
  cardSlotReadMore?: React.ReactNode;
  previewImageImageAltText?: Types.Basic.AltText;
  previewImagePreviewImage?: Types.Asset.Image;
  slotMeta?: React.ReactNode;
}): React.JSX.Element;
