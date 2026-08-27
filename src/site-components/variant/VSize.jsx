"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VSize({
  size = "base",

  sizeAttributes = {
    "data-size": "",
  },

  slotSize,
}) {
  const _styleVariantMap = {
    xl: "w-variant-7662bad6-80fd-b5c9-fd23-af6d2f3dd6fe",
    lg: "w-variant-7998c157-ada4-a64e-b203-1bf057209c28",
    md: "w-variant-7998c157-ada4-a64e-b203-1bf057209c27",
    base: "",
    sm: "w-variant-7998c157-ada4-a64e-b203-1bf057209c26",
    xs: "w-variant-7998c157-ada4-a64e-b203-1bf057209c25",
    xxs: "w-variant-bca6063b-a8fd-6914-cbdf-18e9fd3e57ad",
  };

  const _activeStyleVariant = _styleVariantMap[size];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`v-size ${_activeStyleVariant}`}
        tag={"div"}
        {...sizeAttributes}
      >
        {slotSize}
      </Block>
    </div>
  );
}
