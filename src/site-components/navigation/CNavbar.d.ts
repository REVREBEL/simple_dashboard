import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function CNavbar(props: {
  brandLogoBrandLogoVisibility?: Types.Visibility.VisibilityConditions;
  brandLogoImage?: Types.Asset.Image;
  brandLogoImageAltText?: Types.Basic.AltText;
  brandLogoLogoLink?: Types.Basic.Link;
  contactButtonButtonColor?:
    | "Base"
    | "Color Primary"
    | "Color Primary Inverse"
    | "Color Primary Outline"
    | "Light"
    | "Light Outline"
    | "Color 1"
    | "Color 1 Outline"
    | "Color 1 Outline Inverse"
    | "Color 2"
    | "Color 2 Outline"
    | "Color 2 Outline Inverse"
    | "Color 3"
    | "Color 3 Outline"
    | "Color 4"
    | "Color 5"
    | "Color 5 Outline"
    | "Color 5 Outline Inverse"
    | "Color 6"
    | "Color 6 Outline"
    | "Color 7"
    | "Color 8"
    | "Color 8 Outline"
    | "Color 8 Inverse"
    | "Color 9"
    | "Color 9 Outline"
    | "Alert"
    | "Alert Outline"
    | "Disabled";
  contactButtonButtonId?: string;
  contactButtonButtonLink?: Types.Basic.Link;
  contactButtonButtonSize?: "Small" | "Base" | "Large";
  contactButtonButtonText?: React.ReactNode;
  contactButtonButtonVisibility?: Types.Visibility.VisibilityConditions;
  contactButtonIconAltText?: Types.Basic.AltText;
  contactButtonIconColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  contactButtonIconImage?: Types.Asset.Image;
  contactButtonIconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  contactButtonIconVisibility?: Types.Boolean.Boolean;
  dropdownMenu2MenuVisibility1?: Types.Visibility.VisibilityConditions;
  dropdownMenu2MenuVisibility2?: Types.Visibility.VisibilityConditions;
  menuLink1MenuLink?: Types.Basic.Link;
  menuLink1MenuLinkText?: React.ReactNode;
  menuLink1MenuLinkVisibility?: Types.Visibility.VisibilityConditions;
  menuLink2MenuLink?: Types.Basic.Link;
  menuLink2MenuLinkText?: React.ReactNode;
  menuLink2MenuLinkVisibility?: Types.Visibility.VisibilityConditions;
  menuLink3MenuLink?: Types.Basic.Link;
  menuLink3MenuLinkText?: React.ReactNode;
  menuLink3MenuLinkVisibility?: Types.Visibility.VisibilityConditions;
  menuLink4MenuLink?: Types.Basic.Link;
  menuLink4MenuLinkText?: React.ReactNode;
  menuLink4MenuLinkVisibility?: Types.Visibility.VisibilityConditions;
  menuLink5MenuLink?: Types.Basic.Link;
  menuLink5MenuLinkText?: React.ReactNode;
  menuLink5MenuLinkVisibility?: Types.Visibility.VisibilityConditions;
  navcardColorCard1CardHeadlineText?: React.ReactNode;
  navcardColorCard1CardImage?: Types.Asset.Image;
  navcardColorCard1CardParagraphText?: React.ReactNode;
  navcardColorCard1Link?: Types.Basic.Link;
  navcardColorCard2CardHeadlineText?: React.ReactNode;
  navcardColorCard2CardImage?: Types.Asset.Image;
  navcardColorCard2CardParagraphText?: React.ReactNode;
  navcardColorCard2Link?: Types.Basic.Link;
  navcardColorCard3CardHeadlineText?: React.ReactNode;
  navcardColorCard3CardImage?: Types.Asset.Image;
  navcardColorCard3CardParagraphText?: React.ReactNode;
  navcardColorCard3Link?: Types.Basic.Link;
  navcardColorCard4CardHeadlineText?: React.ReactNode;
  navcardColorCard4CardImage?: Types.Asset.Image;
  navcardColorCard4CardParagraphText?: React.ReactNode;
  navcardColorCard4Link?: Types.Basic.Link;
  navcardWhiteCard1CardVariant?: "Light" | "Dark";
  navcardWhiteCard1HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  navcardWhiteCard1HeadlineText?: React.ReactNode;
  navcardWhiteCard1Icon?: Types.Asset.Image;
  navcardWhiteCard1IconAltText?: Types.Basic.AltText;
  navcardWhiteCard1IconVisibility?: Types.Boolean.Boolean;
  navcardWhiteCard1Link?: Types.Basic.Link;
  navcardWhiteCard1Paragraph?: React.ReactNode;
  navcardWhiteCard2CardVariant?: "Light" | "Dark";
  navcardWhiteCard2HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  navcardWhiteCard2HeadlineText?: React.ReactNode;
  navcardWhiteCard2Icon?: Types.Asset.Image;
  navcardWhiteCard2IconAltText?: Types.Basic.AltText;
  navcardWhiteCard2IconVisibility?: Types.Boolean.Boolean;
  navcardWhiteCard2Link?: Types.Basic.Link;
  navcardWhiteCard2Paragraph?: React.ReactNode;
  navcardWhiteCard3CardVariant?: "Light" | "Dark";
  navcardWhiteCard3HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  navcardWhiteCard3HeadlineText?: React.ReactNode;
  navcardWhiteCard3Icon?: Types.Asset.Image;
  navcardWhiteCard3IconAltText?: Types.Basic.AltText;
  navcardWhiteCard3IconVisibility?: Types.Boolean.Boolean;
  navcardWhiteCard3Link?: Types.Basic.Link;
  navcardWhiteCard3Paragraph?: React.ReactNode;
  navcardWhiteCard4CardVariant?: "Light" | "Dark";
  navcardWhiteCard4HeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  navcardWhiteCard4HeadlineText?: React.ReactNode;
  navcardWhiteCard4Icon?: Types.Asset.Image;
  navcardWhiteCard4IconAltText?: Types.Basic.AltText;
  navcardWhiteCard4IconVisibility?: Types.Boolean.Boolean;
  navcardWhiteCard4Link?: Types.Basic.Link;
  navcardWhiteCard4Paragraph?: React.ReactNode;
  navigationBarSettingsNavigationColor?: "Light" | "Dark";
  navigationBarSettingsNavigationVisibility?: Types.Visibility.VisibilityConditions;
  tagIcon1Color?:
    | "Light"
    | "Clear"
    | "Dark"
    | "Base"
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9";
  tagIcon1Icon?: Types.Asset.Image;
  tagIcon1IconAltText?: Types.Basic.AltText;
  tagIcon1IconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  tagIcon1IconVisibility?: Types.Boolean.Boolean;
  tagIcon1TagClickable?:
    | "None"
    | "Solid"
    | "Solid Clickable"
    | "Outline"
    | "Outline Clickable";
  tagIcon1TagId?: string;
  tagIcon1TagSize?: "Extra Small" | "Small" | "Regular" | "Medium";
  tagIcon1TagText?: React.ReactNode;
  tagIcon1TagVisibility?: Types.Visibility.VisibilityConditions;
  tagIcon2TagColor?:
    | "Light"
    | "Clear"
    | "Dark"
    | "Base"
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9";
  tagIcon2TagIcon?: Types.Asset.Image;
  tagIcon2TagIconAltText?: Types.Basic.AltText;
  tagIcon2TagIconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  tagIcon2TagIconVisibility?: Types.Boolean.Boolean;
  tagIcon2TagTagClickable?:
    | "None"
    | "Solid"
    | "Solid Clickable"
    | "Outline"
    | "Outline Clickable";
  tagIcon2TagTagId?: string;
  tagIcon2TagTagSize?: "Extra Small" | "Small" | "Regular" | "Medium";
  tagIcon2TagTagText?: React.ReactNode;
  tagIcon2TagTagVisibility?: Types.Visibility.VisibilityConditions;
  tagIcon3Color?:
    | "Light"
    | "Clear"
    | "Dark"
    | "Base"
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9";
  tagIcon3Icon?: Types.Asset.Image;
  tagIcon3IconAltText?: Types.Basic.AltText;
  tagIcon3IconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  tagIcon3IconVisibility?: Types.Boolean.Boolean;
  tagIcon3TagClickable?:
    | "None"
    | "Solid"
    | "Solid Clickable"
    | "Outline"
    | "Outline Clickable";
  tagIcon3TagId?: string;
  tagIcon3TagSize?: "Extra Small" | "Small" | "Regular" | "Medium";
  tagIcon3TagText?: React.ReactNode;
  tagIcon3TagVisibility?: Types.Visibility.VisibilityConditions;
  tagIcon4TagColor?:
    | "Light"
    | "Clear"
    | "Dark"
    | "Base"
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9";
  tagIcon4TagIcon?: Types.Asset.Image;
  tagIcon4TagIconAltText?: Types.Basic.AltText;
  tagIcon4TagIconSizeVariants?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  tagIcon4TagIconVisibility?: Types.Boolean.Boolean;
  tagIcon4TagTagClickable?:
    | "None"
    | "Solid"
    | "Solid Clickable"
    | "Outline"
    | "Outline Clickable";
  tagIcon4TagTagId?: string;
  tagIcon4TagTagSize?: "Extra Small" | "Small" | "Regular" | "Medium";
  tagIcon4TagTagText?: React.ReactNode;
  tagIcon4TagTagVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
