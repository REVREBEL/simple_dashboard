"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VIconSize({
  dataSize = {
    "data-color": "Purple",
    "data-color-style": "Filled",
    "data-color-mode": "Normal",
  },

  iconSizeVariant = "Base",
  slotIconSize,
}) {
  const _styleVariantMap = {
    "Extra Small": "w-variant-9b69d218-f384-ddb3-4c21-47122fcdd996",
    Small: "w-variant-9b69d218-f384-ddb3-4c21-47122fcdd997",
    Base: "",
    Medium: "w-variant-9b69d218-f384-ddb3-4c21-47122fcdd998",
    Large: "w-variant-9b69d218-f384-ddb3-4c21-47122fcdd999",
    "Extra Large": "w-variant-9b69d218-f384-ddb3-4c21-47122fcdd99a",
  };

  const _activeStyleVariant = _styleVariantMap[iconSizeVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`v-icon-size ${_activeStyleVariant}`}
        tag={"div"}
        {...dataSize}
      >
        {slotIconSize}
      </Block>
    </div>
  );
}
