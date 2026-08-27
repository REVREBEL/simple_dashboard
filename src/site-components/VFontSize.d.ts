import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function VFontSize(props: {
  dataFontSize?: string;
  dataFontWeight?: string;
  dataTextAlign?: React.ReactNode;
  fontSize?:
    | "jumbo"
    | "xxl"
    | "xl"
    | "lg"
    | "md"
    | "base"
    | "sm"
    | "xs"
    | "xxs"
    | "tiny";
  fontWeight?:
    | "black"
    | "bold"
    | "semibold"
    | "regular"
    | "medium"
    | "light"
    | "extra-light"
    | "thin";
  slotSlotFontSize?: React.ReactNode;
  textAlign?: "left" | "right" | "center" | "justify";
}): React.JSX.Element;
