import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function BlogArticleVerticalList(props: {
  blogListHeadlineText?: React.ReactNode;
  blogListHeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  blogListLinkColor?: unknown;
  blogListParagraph?: React.ReactNode;
  exploreAllPostsLinkColor?: unknown;
  mainContentBlogListHeadline?: React.ReactNode;
  mainContentBlogListHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  mainContentColor?: unknown;
  mainContentLabelText?: React.ReactNode;
  mainContentParagraph?: React.ReactNode;
  mainContentTypeSize?: unknown;
  sectionId?: string;
  sectionVisibility?: Types.Visibility.VisibilityConditions;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slotReadMore?: React.ReactNode;
}): React.JSX.Element;
