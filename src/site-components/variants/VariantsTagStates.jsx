"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsTagStates({ slotTagStates, variant = "None" }) {
  const _styleVariantMap = {
    None: "",
    Solid: "w-variant-b2663337-37ec-0769-c5ef-b5f8c14d4cb8",
    "Solid Clickable": "w-variant-cce0a5b3-85fa-5b9e-fd3c-5144f551c6c0",
    Outline: "w-variant-e303ad82-5ee8-0fe9-eaa7-e0b930c2f0cd",
    "Outline Clickable": "w-variant-00e3ae07-179f-32e0-dab6-36df22b682c8",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_tag-states ${_activeStyleVariant}`}
        tag={"div"}
      >
        {slotTagStates}
      </Block>
    </div>
  );
}
