import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function PageLayoutTemplate(props: {
  footerSlot?: React.ReactNode;
  navBarSlot?: React.ReactNode;
  pageNavSlot?: React.ReactNode;
}): React.JSX.Element;
