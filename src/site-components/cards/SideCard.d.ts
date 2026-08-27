import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SideCard(props: {
  image?: Types.Asset.Image;
  imageAltText?: Types.Basic.AltText;
  slotCardMeta?: React.ReactNode;
  slotReadMore?: React.ReactNode;
  text?: React.ReactNode;
  title?: React.ReactNode;
}): React.JSX.Element;
