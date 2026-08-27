import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function AuthorSection(props: {
  authorMetaAuthorBioSummary?: React.ReactNode;
  authorMetaAuthorImage?: Types.Asset.Image;
  authorMetaAuthorImageAltText?: Types.Basic.AltText;
  authorMetaAuthorLocationText?: React.ReactNode;
  authorMetaEmailAddress?: Types.Basic.Link;
  authorMetaEmailAddressText?: React.ReactNode;
  authorMetaEmailVisibility?: Types.Visibility.VisibilityConditions;
  authorMetaSlotHeadline?: React.ReactNode;
  authorMetaWebsite?: Types.Basic.Link;
  authorMetaWebsiteText?: React.ReactNode;
  authorMetaWebsiteVisibility?: Types.Visibility.VisibilityConditions;
  facebookFacebookLink?: Types.Basic.Link;
  facebookFacebookVisibility?: Types.Visibility.VisibilityConditions;
  facebookIconSize?: "2x2" | "3x3" | "4x4";
  instagramIconSize?: "2x2" | "3x3" | "4x4";
  instagramInstagramLink?: Types.Basic.Link;
  instagramInstagramVisibility?: Types.Visibility.VisibilityConditions;
  linkedinIconSize?: "2x2" | "3x3" | "4x4";
  linkedinLinkedInLink?: Types.Basic.Link;
  linkedinLinkedInVisibility?: Types.Visibility.VisibilityConditions;
  socialsVisibility?: Types.Visibility.VisibilityConditions;
  xIconSize?: "2x2" | "3x3" | "4x4";
  xXLink?: Types.Basic.Link;
  xXVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
