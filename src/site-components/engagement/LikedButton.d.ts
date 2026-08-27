import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function LikedButton(props: {
  /** Horizontal alignment of the button.*/
  align?: "Left" | "Center" | "Right";
  /** Base URL of the Cloudflare counter API.*/
  baseUrl?: string;
  /** Color for the outline heart on hover (when unliked).*/
  hoverColor?:
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
  /** Bind this to the Webflow CMS Likes field.*/
  initialLikes?: number;
  /** Arrange icon and label horizontally or vertically.*/
  layout?: "Row" | "Column";
  /** Label shown when the user has liked.*/
  likedLabel?: string;
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
  size?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
  /** Base localStorage key; the article slug is appended automatically.*/
  storageKey?: string;
  /** Preview the unliked or liked state in the Designer.*/
  toggleState?: "Unliked" | "Liked";
  /** Label shown when the user has not liked.*/
  unlikedLabel?: string;
}): React.JSX.Element;
