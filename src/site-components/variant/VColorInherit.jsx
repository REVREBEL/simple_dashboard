"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VColorInherit({ colorInherit = true, slotColorInherit }) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"v-color-inherit"}
        data-color-inherit={colorInherit ? "On" : !colorInherit ? "Off" : "Off"}
        tag={"div"}
      >
        {slotColorInherit}
      </Block>
    </div>
  );
}
