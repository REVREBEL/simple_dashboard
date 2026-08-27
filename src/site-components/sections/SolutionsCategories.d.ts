import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SolutionsCategories(props: {
  category1CategoryText?: React.ReactNode;
  category1Link?: Types.Basic.Link;
  category2CategoryText?: React.ReactNode;
  category2Link?: Types.Basic.Link;
  category3CategoryText?: React.ReactNode;
  category3Link?: Types.Basic.Link;
  category4CategoryText?: React.ReactNode;
  category4Link?: Types.Basic.Link;
  category5CategoryText?: React.ReactNode;
  category5Link?: Types.Basic.Link;
  headlineBottomAreaText?: React.ReactNode;
  headlineCategorySubHeadlineText?: React.ReactNode;
  headlineSubHeadlineText?: React.ReactNode;
  settingsSectionId?: string;
  settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
  slotHeadline?: React.ReactNode;
}): React.JSX.Element;
