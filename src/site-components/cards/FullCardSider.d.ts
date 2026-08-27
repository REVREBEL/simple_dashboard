import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function FullCardSider(props: {
  contentCardHeadline?: React.ReactNode;
  contentCardHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  contentImage?: Types.Asset.Image;
  contentImageAltText?: Types.Basic.AltText;
  linkColor?: unknown;
  metaBlogMetaId?: string;
  optionsLabelFontSize?: unknown;
  originalPublishDateDateTextColor?: unknown;
  viewsLikesColorVariants?: unknown;
  viewsLikesSizeVariant?: unknown;
}): React.JSX.Element;
