import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VLayout(props: {
  dataLayout?: string;
  layout?: "row" | "row-compact" | "column" | "column-compact";
  layoutSlotVisibility?: Types.Boolean.Boolean;
  slotLayout?: React.ReactNode;
}): React.JSX.Element;
