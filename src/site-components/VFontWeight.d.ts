import * as React from "react";

declare function VFontWeight(props: {
  fontWeight?:
    | "black"
    | "bold"
    | "semibold"
    | "regular"
    | "medium"
    | "light"
    | "extra-light"
    | "thin";
  slotFontWeight?: React.ReactNode;
}): React.JSX.Element;
