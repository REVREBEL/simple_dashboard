import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ArticlesListBlock(props: {
  articlesListBlockId?: string;
  articlesListBlockVisibility?: Types.Visibility.VisibilityConditions;
  cardContentHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  cardContentHeadlineText?: React.ReactNode;
  cardContentParagraphVisibility?: Types.Visibility.VisibilityConditions;
  cardContentText?: React.ReactNode;
  slotCardMeta?: React.ReactNode;
  slotLink?: React.ReactNode;
}): React.JSX.Element;
