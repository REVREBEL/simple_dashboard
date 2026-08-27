import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VNavcard(props: {
  cardCardImage?: Types.Asset.Image;
  cardCardVisibility?: Types.Boolean.Boolean;
  cardHeadline?: React.ReactNode;
  cardLink?: Types.Basic.Link;
  cardParagraph?: React.ReactNode;
  cardSlotIcon?: React.ReactNode;
  cardSlotLabel?: React.ReactNode;
}): React.JSX.Element;
