import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ArticlesCategoryRichTextBlock(props: {
  bodyContent?: Types.Basic.RichTextChildren;
  buttonSlotVisibility?: Types.Boolean.Boolean;
  categoryFeatureBlockButtonColor?: unknown;
  categoryFeatureBlockButtonTypeSize?: unknown;
  categoryFeatureBlockHeadlineText?: React.ReactNode;
  categoryFeatureBlockHeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  categoryFeatureBlockId?: string;
  categoryFeatureBlockRuntimeProps?: Types.Basic.Attributes;
  categoryFeatureBlockSlot?: Types.Devlink.Slot;
  categoryFeatureBlockSubHeadlineText?: React.ReactNode;
  categoryFeatureBlockSubHeadlineTextTag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  categoryFeatureBlockSubHeadlineVisibility?: Types.Visibility.VisibilityConditions;
  categoryFeatureBlockVisibility?: Types.Visibility.VisibilityConditions;
  listContent?: Types.Basic.RichTextChildren;
  settingsVisibility?: Types.Visibility.VisibilityConditions;
  slotButton?: React.ReactNode;
}): React.JSX.Element;
