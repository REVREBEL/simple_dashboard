"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function InnerComponentDateLabelText({ dateLabelText = "Month YYYY" }) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"global_container component_date-label"}
        data-copilot={"true"}
        tag={"div"}
      >
        <Block className={"component_date-wrapper"} tag={"div"}>
          <Block className={"component_date-label-text"} tag={"div"}>
            {dateLabelText}
          </Block>
        </Block>
      </Block>
    </div>
  );
}
