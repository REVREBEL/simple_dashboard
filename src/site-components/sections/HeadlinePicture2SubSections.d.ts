import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function HeadlinePicture2SubSections(props: {
  fontColorVariants?:
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
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse"
    | "Light"
    | "Dark";
  headline2SubSectionsHeadlineSubHeadlineText?: React.ReactNode;
  headline2SubSectionsImageImage?: Types.Asset.Image;
  headline2SubSectionsImageImageAltText?: Types.Basic.AltText;
  headline2SubSectionsSubSection1ParagraphText?: React.ReactNode;
  headline2SubSectionsSubSection2ParagraphText?: React.ReactNode;
  slotHeadline?: React.ReactNode;
  slotHeadline2?: React.ReactNode;
  variantsBgFontColorOptionsBackgroundTextColor?:
    | "Base"
    | "Light"
    | "Dark"
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
    | "Primary Inverse"
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse";
}): React.JSX.Element;
