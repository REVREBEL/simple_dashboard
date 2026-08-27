import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ViewsLikes(props: {
  align?: "Left" | "Center" | "Right";
  /** Base URL of the Cloudflare counter API.*/
  baseUrl?: string;
  /** Bind this to the Webflow CMS Likes field.*/
  initialLikes?: number;
  /** Bind this to the Webflow CMS Views field.*/
  initialViews?: number;
  layout?: "Row" | "Row compact" | "Column" | "Column stacked";
  /** Color for the outline heart.*/
  outlineColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost";
  previewAllLayouts?: Types.Boolean.Boolean;
  showIcon?: Types.Visibility.VisibilityConditions;
  showLikesCount?: Types.Visibility.VisibilityConditions;
  showLikesLabel?: Types.Visibility.VisibilityConditions;
  showViewsCount?: Types.Visibility.VisibilityConditions;
  showViewsLabel?: Types.Visibility.VisibilityConditions;
  size?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
  /** localStorage key to remember if the user has liked.*/
  storageKey?: string;
}): React.JSX.Element;
