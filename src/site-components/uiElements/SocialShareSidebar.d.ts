import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SocialShareSidebar(props: {
  socialShareBottomLabelText?: React.ReactNode;
  /** This value is applied when content is shared, and the chosen channel receives the associated hashtags, provided they are supported.*/
  socialShareHashtags?: string;
  socialShareTopLabelText?: React.ReactNode;
}): React.JSX.Element;
