import * as React from "react";

declare function VColorMode(props: {
  colorMode?: "normal" | "inverse" | "inherit";
  slotColor?: React.ReactNode;
}): React.JSX.Element;
