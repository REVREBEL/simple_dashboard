import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function LargeContactForm(props: {
  buttonButtonLoadingMessage?: string;
  buttonButtonText?: string;
  contactUsContactUsHeadline?: React.ReactNode;
  contactUsContactUsHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  contactUsContactUsText?: React.ReactNode;
  emailAddressEmailAddressLink?: Types.Basic.Link;
  emailAddressEmailAddressLink2?: React.ReactNode;
  emailAddressFormText?: React.ReactNode;
  formStyleFormColor?: "Dark" | "Light" | "Cyan";
  settingsFormId?: string;
  settingsFormVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
