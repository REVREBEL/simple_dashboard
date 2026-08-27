"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VTextAlign({ slotTextAlign, textAlign = "left" }) {
  const _styleVariantMap = {
    left: "",
    right: "w-variant-1643160f-534d-71c0-5f18-3b1a4772c5cb",
    center: "w-variant-85719f1c-9791-fe19-a10d-967859a556b9",
    justify: "w-variant-4673fc58-38ef-74bc-fdfe-da8140782f97",
  };

  const _activeStyleVariant = _styleVariantMap[textAlign];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`v-text-align ${_activeStyleVariant}`}
        data-text-align={
          textAlign === "Playlist"
            ? "Left"
            : textAlign === "right"
            ? "Right"
            : textAlign === "center"
            ? "Center"
            : textAlign === "justify"
            ? "Justify"
            : "Left"
        }
        tag={"div"}
      >
        {slotTextAlign}
      </Block>
    </div>
  );
}
