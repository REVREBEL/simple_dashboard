import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VIconSize(props: {
  dataSize?: Types.Basic.Attributes;
  iconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Base"
    | "Medium"
    | "Large"
    | "Extra Large";
  slotIconSize?: React.ReactNode;
}): React.JSX.Element;
