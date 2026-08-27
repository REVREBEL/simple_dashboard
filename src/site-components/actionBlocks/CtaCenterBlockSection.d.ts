import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function CtaCenterBlockSection(props: {
  buttonButtonText?: React.ReactNode;
  buttonButtonVisibility?: Types.Visibility.VisibilityConditions;
  buttonColor?: unknown;
  buttonTypeSize?: unknown;
  headlineEyebrowText?: React.ReactNode;
  headlineHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineHeadlineText?: React.ReactNode;
  sectionStyleColorTheme?: "Light" | "Dark" | "Accent" | "Rebel";
  settingsSectionId?: string;
}): React.JSX.Element;
