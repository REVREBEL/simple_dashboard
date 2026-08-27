import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function FeaturedArticle(props: {
  cardCardVariants?: "Regular Card" | "Border";
  cardDescriptionText?: React.ReactNode;
  cardInverseLayout?: Types.Boolean.Boolean;
  cardSlotHeadline?: React.ReactNode;
  cardSlotMeta?: React.ReactNode;
  cardSlotReadMore?: React.ReactNode;
  cardSlotViewsLikes?: React.ReactNode;
  previewImagePreviewImage?: Types.Asset.Image;
  previewImagePreviewImageAltText?: Types.Basic.AltText;
}): React.JSX.Element;
