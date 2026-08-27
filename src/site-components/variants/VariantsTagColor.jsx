"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function VariantsTagColor({
  settingsColor = "Base",
  slotVariantsTagColor,
}) {
  const _styleVariantMap = {
    Light: "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d50",
    Clear: "w-variant-db1a48f5-746a-3230-0f60-ea7d14ee59b2",
    Dark: "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d52",
    Base: "",
    Primary: "w-variant-26efa6e7-f52d-6886-fb3b-185b35ad1748",
    "Color 1": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d3e",
    "Color 2": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d40",
    "Color 3": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d42",
    "Color 4": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d44",
    "Color 5": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d46",
    "Color 6": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d48",
    "Color 7": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4a",
    "Color 8": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4c",
    "Color 9": "w-variant-f5ed6ecd-6291-3360-87ee-59d35e024d4e",
  };

  const _activeStyleVariant = _styleVariantMap[settingsColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_tag-color ${_activeStyleVariant}`}
        tag={"div"}
      >
        <HtmlEmbed
          className={`embed_variants-tag-color ${_activeStyleVariant}`}
        />
        {slotVariantsTagColor}
      </Block>
    </div>
  );
}
