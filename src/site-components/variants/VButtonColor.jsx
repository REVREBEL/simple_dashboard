"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VButtonColor({
  optionsButtonColorVariants = "Base",
  slotButtonColor,
}) {
  const _styleVariantMap = {
    Base: "",
    "Color Primary": "w-variant-dbce4bf9-3d42-5666-92f1-91a6bffe95b6",
    "Color Primary Inverse": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b50",
    "Color Primary Outline": "w-variant-e63e5d78-7391-2501-b04c-161a5b67bc3e",
    Light: "w-variant-78a6566d-0706-8532-bbf7-262803ae0b52",
    "Light Outline": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b53",
    "Color 1": "w-variant-6a792e0d-00e6-211b-8f57-54166428ccbf",
    "Color 1 Outline": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b57",
    "Color 1 Outline Inverse": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b58",
    "Color 2": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b59",
    "Color 2 Outline": "w-variant-68e43f44-50f1-839a-4d24-62dc4fb3d79b",
    "Color 2 Outline Inverse": "w-variant-97084d00-6b70-823d-46b0-2999f050fef7",
    "Color 3": "w-variant-8e921891-f60b-376c-9dcc-a2a58a73ce7f",
    "Color 3 Outline": "w-variant-8d977ae7-2492-f6b2-90df-b6a422754841",
    "Color 4": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b5b",
    "Color 5": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b5c",
    "Color 5 Outline": "w-variant-c2788133-ed13-4fe4-6ec8-196355537c4b",
    "Color 5 Outline Inverse": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b5d",
    "Color 6": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b5e",
    "Color 6 Outline": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b5f",
    "Color 7": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b60",
    "Color 8": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b61",
    "Color 8 Outline": "w-variant-66e02d5b-40bd-32f7-08d4-98b34836c530",
    "Color 8 Inverse": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b62",
    "Color 9": "w-variant-ff5b5733-c185-bd1e-fe24-2bed25b302d5",
    "Color 9 Outline": "w-variant-78a6566d-0706-8532-bbf7-262803ae0b64",
    Alert: "w-variant-78a6566d-0706-8532-bbf7-262803ae0b65",
    "Alert Outline": "w-variant-f8079b7c-40c1-a7b6-8b66-38182196f11a",
    Disabled: "w-variant-78a6566d-0706-8532-bbf7-262803ae0b67",
  };

  const _activeStyleVariant = _styleVariantMap[optionsButtonColorVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`component-button_color-variants ${_activeStyleVariant}`}
        tag={"div"}
      >
        {slotButtonColor}
      </Block>
    </div>
  );
}
