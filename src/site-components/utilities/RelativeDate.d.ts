import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function RelativeDate(props: {
  /** Bind this to a CMS date field. Accepts any valid date string (ISO 8601, etc.).*/
  dateValue?: string;
  /** Optional text before the relative date, e.g. 'Published'*/
  prefix?: string;
  /** Optional text after the relative date*/
  suffix?: string;
}): React.JSX.Element;
