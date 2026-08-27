import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function TopicCountLabel(props: {
  colorsBgColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  colorsBgColorHover?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  colorsBorderColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  colorsBorderColorHover?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  colorsFontColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  colorsFontColorHover?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  spacingPaddingBottom?: number;
  spacingPaddingLeft?: number;
  spacingPaddingRight?: number;
  spacingPaddingTop?: number;
  topicText?: string;
  typographyFontFamily?: "Headline" | "Body";
  typographyFontSize?: number;
}): React.JSX.Element;
