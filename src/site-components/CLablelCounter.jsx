"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";

export function CLablelCounter({ count = "03", label = "Label" }) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"text-primary"} tag={"div"}>
        <Block className={"display_inline-block is-label-count"} tag={"div"}>
          <Block className={"flex_horizontal label-padding"} tag={"div"}>
            <Block
              className={"label padding-right_none is-label-count"}
              data-label-value={""}
              tag={"div"}
            >
              {label}
            </Block>
            <Block
              className={"label is-count"}
              data-label-count={""}
              tag={"div"}
            >
              {count}
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
