import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function HashPrefix(props: {
  /** CSS variable for font-family, e.g. var(--font--headline). Leave empty to inherit.*/
  fontFamily?: string;
  /** Bind this to a CMS field. A # will be prepended if missing.*/
  text?: string;
}): React.JSX.Element;
