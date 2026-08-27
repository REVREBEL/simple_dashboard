import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ContactForm(props: {
  buttonButtonLoadingMessage?: string;
  buttonButtonText?: string;
  contactUsContactUsHeadline?: React.ReactNode;
  contactUsContactUsHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  formStyleFormColor?: "Dark" | "Light";
  settingsFormId?: string;
  settingsFormVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
