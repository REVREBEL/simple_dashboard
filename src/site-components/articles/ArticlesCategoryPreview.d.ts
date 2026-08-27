import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ArticlesCategoryPreview(props: {
  categoryFeatureBlockFontFamily?: string;
  categoryFeatureBlockHashPrefix?: string;
  categoryFeatureBlockHashPrefixVisibility?: Types.Boolean.Boolean;
  categoryFeatureBlockParagraph?: React.ReactNode;
  categoryFeatureBlockParagraphVisibility?: Types.Visibility.VisibilityConditions;
  categoryFeatureBlockSlotHeadline?: React.ReactNode;
  categoryFeatureBlockSubTitle?: React.ReactNode;
  categoryFeatureBlockSubTitleVisibility?: Types.Visibility.VisibilityConditions;
  settingsLayout?: "Base" | "Borders Layout" | "Primary" | "Primary SM";
  settingsVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
