import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function SignupEmailOnly(props: {
  formSettingsFormId?: string;
  formSettingsLoadingMessage?: string;
  formSettingsSubmitText?: string;
  variant?: "Light" | "Dark / Light Background" | "Dark / Dark Background";
}): React.JSX.Element;
