import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function AuthorPageBlock(props: {
  contributorAlignmentVariants?: unknown;
  contributorBioSummary?: React.ReactNode;
  contributorColorInherit?: Types.Boolean.Boolean;
  contributorEmailAddress?: Types.Basic.Link;
  contributorEmailAddressText?: React.ReactNode;
  contributorEmailVisibility?: Types.Visibility.VisibilityConditions;
  contributorFontWeight?: Types.Boolean.Boolean;
  contributorHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  contributorHeadlineVisibility?: Types.Boolean.Boolean;
  contributorLocation?: React.ReactNode;
  contributorMetaContributorImageAltText?: Types.Basic.AltText;
  /** FirstName LastName*/
  contributorName?: React.ReactNode;
  contributorPicture?: Types.Asset.Image;
  contributorTextSizeVariants?:
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
  contributorWebsite?: Types.Basic.Link;
  contributorWebsiteText?: React.ReactNode;
  contributorWebsiteVisibility?: Types.Visibility.VisibilityConditions;
  facebookFacebookProfileLink?: Types.Basic.Link;
  facebookFacebookVisibility?: Types.Visibility.VisibilityConditions;
  facebookIconSize?: "2x2" | "3x3" | "4x4";
  instagramIconSize?: "2x2" | "3x3" | "4x4";
  instagramInstagramProfileUrl?: Types.Basic.Link;
  instagramInstagramVisibility?: Types.Visibility.VisibilityConditions;
  linkedinIconSize?: "2x2" | "3x3" | "4x4";
  linkedinLinkedinProfileLink?: Types.Basic.Link;
  linkedinLinkedInVisibility?: Types.Visibility.VisibilityConditions;
  slotHeadline?: React.ReactNode;
  socialsBlockVisibility?: Types.Visibility.VisibilityConditions;
  xIconIconSize?: "2x2" | "3x3" | "4x4";
  xIconXProfileLink?: Types.Basic.Link;
  xIconXVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
