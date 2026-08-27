import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ContentSlide2Bottom(props: {
  content1?: Types.Basic.RichTextChildren;
  content2?: Types.Basic.RichTextChildren;
  headlineCol1?: React.ReactNode;
  headlineCol1Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineCol1Visibility?: Types.Boolean.Boolean;
  headlineCol2?: React.ReactNode;
  headlineCol2Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineCol2Visibility?: Types.Boolean.Boolean;
  paragraphVIsibilityMobile?: Types.Boolean.Boolean;
  text?: React.ReactNode;
  variant?: "Base" | "1x";
}): React.JSX.Element;
