import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function PhotoCard(props: {
  cardBlogMetaId?: string;
  cardSlotHeadline?: React.ReactNode;
  cardSlotMeta?: React.ReactNode;
  cardSlotReadMore?: React.ReactNode;
  cardSlotRelativeDate?: React.ReactNode;
  previewImagePreviewImage?: Types.Asset.Image;
  previewImagePreviewImageAltText?: Types.Basic.AltText;
}): React.JSX.Element;
