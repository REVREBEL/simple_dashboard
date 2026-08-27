"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";

export function VBorder({
  dataBorderAttributes = {
    "data-border-top": "",
    "data-border-left": "",
    "data-border-bottom": "",
    "data-border-right": "",
    "data-border-value": "",
  },
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block
          className={"data-borders"}
          tag={"div"}
          {...dataBorderAttributes}
        />
      </Block>
    </div>
  );
}
