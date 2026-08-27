"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsTagFontSize({
  tagSlotLabelFontSize,
  tagTagSize = "Regular",
}) {
  const _styleVariantMap = {
    "Extra Small": "w-variant-48320064-1270-3bcc-d867-899fd3c50f95",
    Small: "w-variant-6cceecd5-eb0e-4b89-a99e-b6e0958ff332",
    Regular: "",
    Medium: "w-variant-6cceecd5-eb0e-4b89-a99e-b6e0958ff333",
  };

  const _activeStyleVariant = _styleVariantMap[tagTagSize];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_label-font-size ${_activeStyleVariant}`}
        tag={"div"}
      >
        {tagSlotLabelFontSize}
      </Block>
    </div>
  );
}
