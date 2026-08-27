import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function CNavcard(props: {
  cardCardVisibility?: Types.Boolean.Boolean;
  cardColor?:
    | "primary"
    | "teal"
    | "cyan"
    | "aqua"
    | "powder"
    | "yellow"
    | "orange"
    | "red"
    | "purple"
    | "frost"
    | "grey-1"
    | "grey-2"
    | "grey-3";
  cardColorMode?: "normal" | "inverse" | "inherit";
  cardHeadline?: React.ReactNode;
  cardImage?: Types.Asset.Image;
  cardLink?: Types.Basic.Link;
  cardParagraph?: React.ReactNode;
  slotSlotIcon?: React.ReactNode;
  slotSlotLabel?: React.ReactNode;
}): React.JSX.Element;
