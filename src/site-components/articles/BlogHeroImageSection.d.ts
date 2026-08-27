import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function BlogHeroImageSection(props: {
  image?: Types.Asset.Image;
  layoutVariant?: "Base" | "Full Width";
  photoCredit?: Types.Basic.RichTextChildren;
  photoCreditVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
