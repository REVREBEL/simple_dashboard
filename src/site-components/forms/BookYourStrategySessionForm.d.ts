import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function BookYourStrategySessionForm(props: {
  buttonButtonLoadingText?: string;
  buttonButtonText?: string;
  eyebrowText?: React.ReactNode;
  eyebrowVisibility?: Types.Boolean.Boolean;
  formId?: string;
  headlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineText?: React.ReactNode;
  privacyPolicyCheckboxLabelText?: React.ReactNode;
  privacyPolicyPrivacyPolicyLink?: Types.Basic.Link;
  variant?: "Base" | "Text Blue" | "Teal";
}): React.JSX.Element;
