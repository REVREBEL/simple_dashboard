import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Gallery3Images(props: {
  image?: Types.Asset.Image;
  image2?: Types.Asset.Image;
  image3?: Types.Asset.Image;
  variant?:
    | "Base"
    | "Full Width"
    | "Single Image"
    | "Two Images"
    | "Full Height";
}): React.JSX.Element;
