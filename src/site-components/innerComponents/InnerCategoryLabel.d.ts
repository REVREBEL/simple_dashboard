import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function InnerCategoryLabel(props: {
  /** Used as the text color for the label.*/
  categoryInverseColor?: string;
  categoryLink?: Types.Basic.Link;
  /** Used as the background color for the label.*/
  categoryPrimaryColor?: string;
  categorySlug?: string;
  categoryText?: React.ReactNode;
  valuePadding?: string;
}): React.JSX.Element;
