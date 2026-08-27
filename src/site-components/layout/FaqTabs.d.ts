import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function FaqTabs(props: {
  /** Show or hide borders on the content area.*/
  bottomBorder?: Types.Boolean.Boolean;
  /** Drop headline content here.*/
  headline?: React.ReactNode;
  /** Which tab to show in the Designer.*/
  previewTab?: number;
  tab1ShowTab1?: Types.Visibility.VisibilityConditions;
  tab1Tab1Content?: React.ReactNode;
  tab1Tab1Name?: string;
  tab2ShowTab2?: Types.Visibility.VisibilityConditions;
  tab2Tab2Content?: React.ReactNode;
  tab2Tab2Name?: string;
  tab3ShowTab3?: Types.Visibility.VisibilityConditions;
  tab3Tab3Content?: React.ReactNode;
  tab3Tab3Name?: string;
}): React.JSX.Element;
