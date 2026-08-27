import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function FlipCard(props: {
  buttonColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  buttonText?: string;
  buttonUrl?: string;
  cardColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  description?: string;
  label1?: string;
  label2?: string;
  labelColor?:
    | "Primary"
    | "Teal"
    | "Cyan"
    | "Aqua"
    | "Powder"
    | "Yellow"
    | "Orange"
    | "Red"
    | "Purple"
    | "Frost"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3";
  statLabel?: string;
  statValue?: string;
  stepNumber?: string;
}): React.JSX.Element;
