import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function VLabel(props: {
  dataAttributesDataCategorySlug?: string;
  dataAttributesDataColorMode?: string;
  dataAttributesDataFontSize?: string;
  dataAttributesDataFontWeight?: React.ReactNode;
  dataAttributesDataPaddingLeft?: string;
  dataAttributesDataTextAlign?: React.ReactNode;
  iconDataAttributesDataIconColor?: string;
  iconDataAttributesDataIconSize?: string;
  iconIconClickable?: Types.Boolean.Boolean;
  iconIconImage?: Types.Asset.Image;
  iconIconPosition?: Types.Boolean.Boolean;
  iconIconSize?: "xl" | "lg" | "md" | "base" | "sm" | "xs" | "xxs";
  iconIconVisibility?: Types.Boolean.Boolean;
  labelText?: React.ReactNode;
}): React.JSX.Element;
