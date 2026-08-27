import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ArticlesHeadlineSection(props: {
  logoImage?: Types.Asset.Image;
  paragraphBottomRight?: React.ReactNode;
  paragraphLeft?: React.ReactNode;
  paragraphTopRight?: React.ReactNode;
  slotHeadline?: React.ReactNode;
  slotLink?: React.ReactNode;
  subHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subHeadlineText?: React.ReactNode;
  underlinedLinkUnderlinedLinkColor?: unknown;
}): React.JSX.Element;
