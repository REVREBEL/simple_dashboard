"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function HighlighterHeadlineSubHeadlineHashtag({
  alignment = "Left",
  highlighterColorVariant = null,
  responsiveTextSizeVariants = "base",
}) {
  const _styleVariantMap = {
    Left: "",
    Center: "w-variant-f209a09c-0ef7-85d2-d5d9-ee406c87d17f",
    Right: "w-variant-97c54828-8ea9-674e-c073-ff5ae094630f",
  };

  const _activeStyleVariant = _styleVariantMap[alignment];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`c-responsive-headline is-full-width max-width_none ${_activeStyleVariant}`}
        tag={"div"}
      />
    </div>
  );
}
