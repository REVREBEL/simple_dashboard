import * as React from "react";

declare function SocialButton(props: {
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
