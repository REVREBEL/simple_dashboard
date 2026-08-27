import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function ComponentCheckboxButton(props: {
  checkboxVisibility?: Types.Visibility.VisibilityConditions;
  labelsBrandColorPrimaryLabelText?: React.ReactNode;
  solidCheckboxesBrandColorPrimaryCheckboxVisible?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Base"
    | "Color Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Primary Outline"
    | "Color 1 Outline"
    | "Color 2 Outline"
    | "Color 3 Outline"
    | "Color 4 Outline"
    | "Color 5 Outline"
    | "Color 6 Outline"
    | "Color 7 Outline"
    | "Color 8 Outline"
    | "Color 9 Outline"
    | "Base 2";
}): React.JSX.Element;
