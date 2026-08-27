import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function PhotoCardSwap(props: {
  layout?: Types.Boolean.Boolean;
  optionsCardPaddingVariants?:
    | "None"
    | "0x1 Gap"
    | "0x2 Gap"
    | "0x3 Gap"
    | "1x1 Gap"
    | "1x2 Gap"
    | "2x1 Gap"
    | "2x2 Gap"
    | "3x2 Gap"
    | "3x3 Gap";
  webflowComponentSlotsSlotHeadline?: React.ReactNode;
  webflowComponentSlotsSlotMeta?: React.ReactNode;
  webflowComponentSlotsSlotReadMore?: React.ReactNode;
  webflowComponentSlotsSlotRelativeDate?: React.ReactNode;
  /** Turn Webflow Component Slots On/Off*/
  webflowComponentSlotsWebflowComponentSlots?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
