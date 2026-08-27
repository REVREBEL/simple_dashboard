import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function GoogleSpreadsheet(props: {
  sectionId?: string;
  sectionVisibility?: Types.Visibility.VisibilityConditions;
  settingsGoogleSpreadsheetId?: React.ReactNode;
}): React.JSX.Element;
