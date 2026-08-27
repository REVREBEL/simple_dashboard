import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function GlobalComponentBase(props: {
  link?: Types.Basic.Link;
  name?: React.ReactNode;
  variant?: "Playlist" | "Current Playlist";
}): React.JSX.Element;
