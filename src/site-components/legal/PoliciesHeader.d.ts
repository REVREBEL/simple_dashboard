import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function PoliciesHeader(props: {
  headlineText?: React.ReactNode;
  headlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  paragraphText?: React.ReactNode;
  policiesLink1Link?: Types.Basic.Link;
  policiesLink1LinkText?: React.ReactNode;
  policiesLink1LinkVisibility?: Types.Visibility.VisibilityConditions;
  policiesLink2Link?: Types.Basic.Link;
  policiesLink2LinkText?: React.ReactNode;
  policiesLink2LinkVisibility?: Types.Visibility.VisibilityConditions;
  policiesLink3Link?: Types.Basic.Link;
  policiesLink3LinkText?: React.ReactNode;
  policiesLink3LinkVisibility?: Types.Visibility.VisibilityConditions;
  policiesLink4Link?: Types.Basic.Link;
  policiesLink4LinkText?: React.ReactNode;
  policiesLink4LinkVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
