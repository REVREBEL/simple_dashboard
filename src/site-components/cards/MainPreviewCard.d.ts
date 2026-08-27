import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function MainPreviewCard(props: {
  customCodeArticleSlugValue?: React.ReactNode;
  likeColorVariants?: unknown;
  likedSlot?: React.ReactNode;
  likeSizeVariant?: unknown;
  linkColor?: unknown;
  linkPositionVariant?: unknown;
  linkSlot?: React.ReactNode;
  mainCardCardId?: string;
  mainCardCardVisibility?: Types.Visibility.VisibilityConditions;
  mainCardHeadinlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  mainCardHeadlineText?: React.ReactNode;
  mainCardId?: string;
  mainCardImage?: Types.Asset.Image;
  mainCardImageAltText?: Types.Basic.AltText;
  mainCardImageVisibility?: Types.Visibility.VisibilityConditions;
  mainCardVisibility?: Types.Visibility.VisibilityConditions;
  metaLabelFontSize?: unknown;
  metaSlot?: React.ReactNode;
  viewsLikesColorVariants?: unknown;
  viewsLikesMetricsSlot?: React.ReactNode;
  viewsLikesSizeVariant?: unknown;
}): React.JSX.Element;
