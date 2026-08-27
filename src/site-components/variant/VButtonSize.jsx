"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VButtonSize({
  buttonAttributes = {},
  buttonSize = "base",
  slotButtonSize,
}) {
  const _styleVariantMap = {
    xl: "w-variant-d907d486-5fb6-1ca6-8a0b-bc3fbc149b0f",
    lg: "w-variant-af46c590-a906-ed88-a62a-9243e7d2be7c",
    md: "w-variant-cc52b105-088f-251f-1499-69443acb9c10",
    base: "",
    sm: "w-variant-16076b6b-bd06-183b-a6ad-13f9e97c7a73",
    xs: "w-variant-24b523bb-a022-26af-ca6a-72366f9bbe52",
  };

  const _activeStyleVariant = _styleVariantMap[buttonSize];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`v-button-size ${_activeStyleVariant}`}
        tag={"div"}
        {...buttonAttributes}
      >
        {slotButtonSize}
      </Block>
    </div>
  );
}
