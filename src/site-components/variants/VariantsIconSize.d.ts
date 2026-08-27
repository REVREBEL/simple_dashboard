import * as React from "react";

declare function VariantsIconSize(props: {
  iconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  slotIconSize?: React.ReactNode;
}): React.JSX.Element;
