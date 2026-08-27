import * as React from "react";

declare function VariantsTagStates(props: {
  slotTagStates?: React.ReactNode;
  variant?:
    | "None"
    | "Solid"
    | "Solid Clickable"
    | "Outline"
    | "Outline Clickable";
}): React.JSX.Element;
