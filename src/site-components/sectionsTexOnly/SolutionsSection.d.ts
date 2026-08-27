import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SolutionsSection(props: {
  colorVariant?: "Light" | "Dark";
  item1DescriptionText?: React.ReactNode;
  item1Headline?: React.ReactNode;
  item1HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  item1Icon?: Types.Asset.Image;
  item1IconAltText?: Types.Basic.AltText;
  item1Link?: Types.Basic.Link;
  item1NumberText?: React.ReactNode;
  item2DescriptionText?: React.ReactNode;
  item2Headline?: React.ReactNode;
  item2HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  item2Icon?: Types.Asset.Image;
  item2IconAltText?: Types.Basic.AltText;
  item2Link?: Types.Basic.Link;
  item2NumberText?: React.ReactNode;
  item3DescriptionText?: React.ReactNode;
  item3Headline?: React.ReactNode;
  item3HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  item3Icon?: Types.Asset.Image;
  item3IconAltText?: Types.Basic.AltText;
  item3Link?: Types.Basic.Link;
  item3NumberText?: React.ReactNode;
  item4DescriptionText?: React.ReactNode;
  item4Headline?: React.ReactNode;
  item4HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  item4Icon?: Types.Asset.Image;
  item4IconAltText?: Types.Basic.AltText;
  item4Link?: Types.Basic.Link;
  item4NumberText?: React.ReactNode;
  mainSectionEyebrowText?: React.ReactNode;
  mainSectionParagraphText?: React.ReactNode;
  mainSectionResponsiveTextSizeVariants?:
    | "jumbo"
    | "xxxl"
    | "xxl"
    | "xl"
    | "lg"
    | "md"
    | "base"
    | "sm"
    | "xs"
    | "xxs"
    | "tiny";
  mainSectionSubheadlineText?: React.ReactNode;
  slotHeadline?: React.ReactNode;
}): React.JSX.Element;
