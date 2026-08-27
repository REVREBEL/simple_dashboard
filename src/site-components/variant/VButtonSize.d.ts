import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VButtonSize(props: {
  buttonAttributes?: Types.Basic.Attributes;
  buttonSize?: "xl" | "lg" | "md" | "base" | "sm" | "xs";
  slotButtonSize?: React.ReactNode;
}): React.JSX.Element;
