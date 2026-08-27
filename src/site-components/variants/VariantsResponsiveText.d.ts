import * as React from "react";

declare function VariantsResponsiveText(props: {
  settingsResponsiveTextVariants?:
    | "Extra Small Text Label"
    | "Regular Text Label"
    | "Small Text Label"
    | "Medium Text Label"
    | "Small Paragraph"
    | "Regular Paragraph"
    | "Medium Paragraph"
    | "Large Pararaph"
    | "Text Pair Label"
    | "Text Pair Body";
  slotResponsiveTextSlotResponsiveText?: React.ReactNode;
}): React.JSX.Element;
