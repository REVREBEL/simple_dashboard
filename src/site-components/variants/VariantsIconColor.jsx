"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsIconColor({ iconColor = "Primary", slotIconColor }) {
  const _styleVariantMap = {
    Primary: "",
    "Color 1": "w-variant-1b4d0e0c-af83-12f5-573c-3246cda533b1",
    "Color 2": "w-variant-550c9c4f-1593-5408-24b5-cf3516d5db84",
    "Color 3": "w-variant-b4617825-cbaf-9092-eaac-54e73ed461b7",
    "Color 4": "w-variant-19559c4f-2429-fc43-bef1-418a215370f4",
    "Color 5": "w-variant-0db5901d-3f58-28eb-25d7-675b73bb9f27",
    "Color 6": "w-variant-f66d019c-3aaa-a973-78ce-dcfa6e811cfe",
    "Color 7": "w-variant-563849bc-f141-b6a1-f403-56a78efa74c7",
    "Color 8": "w-variant-5c92c85b-1872-653e-d308-2dfc80b27647",
    "Color 9": "w-variant-9f076dfb-a308-052f-4437-b8d7ab502aae",
    Light: "w-variant-4d9b3a4b-bde4-b93a-9f38-4ecc61c28062",
    Dark: "w-variant-edb0e39e-d236-dd0f-9747-0470e84d6291",
    "Grey 1": "w-variant-938e271a-70f9-2294-889e-9a4189f3cc90",
    "Grey 2": "w-variant-f77d9550-cfdf-c1cd-3c29-af6d1d4b232d",
    "Grey 3": "w-variant-852b4b46-af07-204f-75a2-884bfc6b4d66",
    None: "w-variant-9980ed9c-a0cf-07b6-0b39-d7e010540b89",
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
        className={`variants_icon-color ${_activeStyleVariant}`}
        tag={"div"}
      >
        {slotIconColor}
      </Block>
    </div>
  );
}
