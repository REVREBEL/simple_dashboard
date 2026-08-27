import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SocialsElement(props: {
  iconSize?: "2x2" | "3x3" | "4x4";
  socialButtonIconSettingsSocialButtonId?: string;
  socialButtonIconSettingsSocialButtonVisibility?: Types.Visibility.VisibilityConditions;
  socialButtonLinksSocialButtonLinkLink?: Types.Basic.Link;
  socialPlatform?:
    | "Base"
    | "Instagram"
    | "Instagram Filled"
    | "Linkedin"
    | "LinkedIn Filled"
    | "Facebook"
    | "Facebook Filled"
    | "X"
    | "X Filled"
    | "Blog"
    | "Blog Filled"
    | "Github"
    | "Github Filled"
    | "Google"
    | "Google Drive"
    | "Telegram"
    | "Telegram Solid"
    | "Email"
    | "Email Solid";
}): React.JSX.Element;
