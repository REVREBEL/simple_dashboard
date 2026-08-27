"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VLayout({
  dataLayout = "",
  layout = "row",
  layoutSlotVisibility = true,
  slotLayout,
}) {
  const _styleVariantMap = {
    row: "",
    "row-compact": "w-variant-0ca65958-6eee-492a-e617-601cb706ebfc",
    column: "w-variant-004e8dd2-5837-2504-a283-9a14cac2bc7e",
    "column-compact": "w-variant-30c62ccb-d52a-b0d5-11e9-6fd168f77a03",
  };

  const _activeStyleVariant = _styleVariantMap[layout];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`v-layout ${_activeStyleVariant}`}
        data-layout={dataLayout}
        tag={"div"}
      >
        {slotLayout}
      </Block>
    </div>
  );
}
