import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function BlogArticleSection(props: {
  mainSectionRichText?: Types.Basic.RichTextChildren;
  mainSectionSlotLikeButton?: React.ReactNode;
  settingsBlogArticleSectionId?: string;
  settingsSummaryBlockVisibility?: Types.Visibility.VisibilityConditions;
  summarySectionSlotCategoryLabel?: React.ReactNode;
  summarySectionSlotDate?: React.ReactNode;
  summarySectionSlotHeadline?: React.ReactNode;
  summarySectionSlotViewsLikes?: React.ReactNode;
  summarySectionSummaryBlockId?: string;
  summarySectionSummaryParagraphText?: React.ReactNode;
  summarySectionSummaryParagraphVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
