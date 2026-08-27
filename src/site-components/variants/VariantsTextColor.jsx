"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsTextColor({
  settingsFontColorVariants = "Primary",
  slotTextColorSlotFontColor,
}) {
  const _styleVariantMap = {
    Primary: "",
    "Color 1": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c99d",
    "Color 2": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c99e",
    "Color 3": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c99f",
    "Color 4": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a0",
    "Color 5": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a1",
    "Color 6": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a2",
    "Color 7": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a3",
    "Color 8": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a4",
    "Color 9": "w-variant-d87b89aa-ac4f-4dc2-8c1c-0d53b069c83f",
    "Color 1 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a5",
    "Color 2 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a6",
    "Color 3 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a7",
    "Color 4 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a8",
    "Color 5 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9a9",
    "Color 6 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9aa",
    "Color 7 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9ab",
    "Color 8 Inverse": "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c9ac",
    "Color 9 Inverse": "w-variant-38af7cd9-72b2-6a62-f484-733d8202343c",
    Light: "w-variant-7ab15625-8b28-a8e5-eb68-a337ddf9c99c",
    Dark: "w-variant-6d725e39-db09-cc19-e923-5f71287c85d5",
  };

  const _activeStyleVariant = _styleVariantMap[settingsFontColorVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_font-color ${_activeStyleVariant}`}
        tag={"div"}
      >
        {slotTextColorSlotFontColor}
      </Block>
    </div>
  );
}
