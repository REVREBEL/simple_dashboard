import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function RetroPattern(props: {
  id?: string;
  settingsVisibility?: Types.Visibility.VisibilityConditions;
  variant?:
    | "Retro Pattern Primary"
    | "Retro Pattern Color 5 Faded"
    | "Retro Pattern Color 2"
    | "Retro Pattern Color 5"
    | "Retro Pattern Color 8"
    | "Retro Pattern Color 9"
    | "Retro Pattern Pac Man"
    | "Retro Pattern Pac Man Dark"
    | "Retro Pattern Donkee Kong Red"
    | "Retro Pattern Donkee Kong Blue"
    | "Retro Pattern Space Invadors";
}): React.JSX.Element;
