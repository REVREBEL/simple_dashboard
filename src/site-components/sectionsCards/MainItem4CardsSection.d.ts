import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function MainItem4CardsSection(props: {
  /** Give the cards is this component a unique group name. The custom code will them equalizes the height of elements that share the same data-match-height group name attribute.*/
  customCodeMatchHeightGroupName?: string;
  item1HeadlineText?: React.ReactNode;
  item1HeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  item1Icon?: Types.Asset.Image;
  item1IconAltText?: Types.Basic.AltText;
  item1IconVisible?: Types.Visibility.VisibilityConditions;
  item1ItemVisibility?: Types.Visibility.VisibilityConditions;
  item1ParagraphText?: React.ReactNode;
  item2HeadlineText?: React.ReactNode;
  item2HeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  item2Icon?: Types.Asset.Image;
  item2IconAltText?: Types.Basic.AltText;
  item2IconVisible?: Types.Visibility.VisibilityConditions;
  item2ItemVisibility?: Types.Visibility.VisibilityConditions;
  item2ParagraphText?: React.ReactNode;
  item3HeadlineText?: React.ReactNode;
  item3Icon?: Types.Asset.Image;
  item3IconAltText?: Types.Basic.AltText;
  item3IconVisible?: Types.Visibility.VisibilityConditions;
  item3ItemVisibility?: Types.Visibility.VisibilityConditions;
  item3ParagraphText?: React.ReactNode;
  item4HeadlineText?: React.ReactNode;
  item4HeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  item4Icon?: Types.Asset.Image;
  item4IconAltText?: Types.Basic.AltText;
  item4IconVisible?: Types.Visibility.VisibilityConditions;
  item4ItemVisibility?: Types.Visibility.VisibilityConditions;
  item4ParagraphText?: React.ReactNode;
  mainItemEyebrowText?: React.ReactNode;
  mainItemEyebrowVisibility?: Types.Visibility.VisibilityConditions;
  mainItemHeadlineText?: React.ReactNode;
  mainItemHeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  mainItemParagraphText?: React.ReactNode;
  mainItemSubHeadline?: React.ReactNode;
  mainItemSubHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  mainItemSubHeadlineVisibility?: Types.Visibility.VisibilityConditions;
  sectionStyleSectionColor?:
    | "Light"
    | "Brand Color Primary Light"
    | "Brand Color Primary Dark"
    | "Brand Color 8"
    | "Brand Color 7";
  settingsSectionId?: string;
  settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
