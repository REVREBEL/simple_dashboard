import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VSize(props: {
  size?: "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
  sizeAttributes?: Types.Basic.Attributes;
  slotSize?: React.ReactNode;
}): React.JSX.Element;
