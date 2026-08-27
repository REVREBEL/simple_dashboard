"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VIconColor({
  dataClickable = {},
  iconColor = "Primary",
  slotIconColor,
}) {
  const _styleVariantMap = {
    Primary: "",
    Teal: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de689",
    Cyan: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de68a",
    Aqua: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de68b",
    Powder: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de68c",
    Yellow: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de68d",
    Orange: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de68e",
    Red: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de68f",
    Purple: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de690",
    Frost: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de691",
    "Grey 1": "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de694",
    "Grey 2": "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de695",
    "Grey 3": "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de696",
    Inherit: "w-variant-116f8a17-c916-ffd1-7b5f-3c3b138de697",
  };

  const _activeStyleVariant = _styleVariantMap[iconColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`v-icon-color ${_activeStyleVariant}`}
        data-color-mode={""}
        data-icon-color={
          iconColor === "Playlist"
            ? "Primary"
            : iconColor === "Teal"
            ? "Teal"
            : iconColor === "Cyan"
            ? "Cyan"
            : iconColor === "Aqua"
            ? "Aqua"
            : iconColor === "Powder"
            ? "Powder"
            : iconColor === "Yellow"
            ? "Yellow"
            : iconColor === "Orange"
            ? "Orange"
            : iconColor === "Red"
            ? "Red"
            : iconColor === "Purple"
            ? ""
            : iconColor === "Frost"
            ? "Frost"
            : iconColor === "Grey 1"
            ? "Grey 1"
            : iconColor === "Grey 2"
            ? "Grey 2"
            : iconColor === "Grey 3"
            ? "Grey 3"
            : iconColor === "Inherit"
            ? "Inherit"
            : "Primary"
        }
        tag={"div"}
        {...dataClickable}
      >
        {slotIconColor}
      </Block>
    </div>
  );
}
