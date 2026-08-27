import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function CSocialButton(props: {
  buttonButtonLink?: Types.Basic.Link;
  buttonCButtonSize?: "xl" | "lg" | "md" | "base" | "sm" | "xs";
  buttonSocialSite?:
    | "google filled"
    | "google outline"
    | "linkedin filled"
    | "linkedin outline"
    | "github filled"
    | "github outline";
  buttonText?: React.ReactNode;
  cButtonIconIconPlacement?: Types.Boolean.Boolean;
  cButtonIconIconSize?: "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
  size?: "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
}): React.JSX.Element;
