import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function FaqAccordion(props: {
  anwserText?: React.ReactNode;
  borderVariants?: "Base" | "No Borders" | "Borders" | "Underline";
  questionText?: React.ReactNode;
}): React.JSX.Element;
