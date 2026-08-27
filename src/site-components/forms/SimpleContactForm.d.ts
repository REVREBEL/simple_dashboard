import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SimpleContactForm(props: {
  buttonText?: string;
  eyebrowText?: React.ReactNode;
  eyebrowVisibility?: Types.Boolean.Boolean;
  formId?: string;
  paragraphText?: React.ReactNode;
  slotHeadline?: React.ReactNode;
  submitButtonLoading?: string;
  text?: React.ReactNode;
  variant?: "Light" | "Primary" | "Dark" | "Color 2";
}): React.JSX.Element;
