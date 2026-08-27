"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsIconSize({
  iconSizeVariant = "Regular",
  slotIconSize,
}) {
  const _styleVariantMap = {
    "Extra Small": "w-variant-1dfb94d1-b2b3-6af2-8905-577ae96067c7",
    Small: "w-variant-1833206a-3486-0b59-6020-a303fdefa5c9",
    Regular: "",
    Medium: "w-variant-a441894a-e12b-a947-a974-075d4ae3a99c",
    Large: "w-variant-b8494849-ba4e-d8c3-81fc-949431f3e04a",
    "Extra Large": "w-variant-ab5a8a23-9a75-20da-96f1-fa2ae0a44221",
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
        className={`variants_icon-size ${_activeStyleVariant}`}
        tag={"div"}
      >
        {slotIconSize}
      </Block>
    </div>
  );
}
