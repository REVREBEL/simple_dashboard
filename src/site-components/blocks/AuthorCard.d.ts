import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function AuthorCard(props: {
  /** The location for the author.*/
  authorAuthorLocation?: React.ReactNode;
  authorAuthorName?: React.ReactNode;
  authorAuthorPageLink?: Types.Basic.Link;
  authorAuthorParagraphText?: React.ReactNode;
  authorAuthorPicture?: Types.Asset.Image;
  authorSlotButton?: React.ReactNode;
  settingsAuthorCardVisibility?: Types.Visibility.VisibilityConditions;
  socialButtonsLinkedInLink?: Types.Basic.Link;
  socialButtonsSlotSocialButton?: React.ReactNode;
  socialButtonsSlotSocialButton2?: React.ReactNode;
  socialButtonsSlotSocialButton3?: React.ReactNode;
}): React.JSX.Element;
