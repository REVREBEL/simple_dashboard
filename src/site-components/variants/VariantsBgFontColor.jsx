"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsBgFontColor({
  optionsBackgroundTextColor = "Base",
  slotBgColor,
}) {
  const _styleVariantMap = {
    Base: "",
    Light: "w-variant-9956605b-243f-98fe-6aeb-594a301aa79d",
    Dark: "w-variant-9956605b-243f-98fe-6aeb-594a301aa79e",
    Primary: "w-variant-9956605b-243f-98fe-6aeb-594a301aa7b0",
    "Color 1": "w-variant-9956605b-243f-98fe-6aeb-594a301aa79f",
    "Color 2": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a0",
    "Color 3": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a1",
    "Color 4": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a2",
    "Color 5": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a3",
    "Color 6": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a4",
    "Color 7": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a5",
    "Color 8": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a6",
    "Color 9": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a7",
    "Primary Inverse": "w-variant-ee37ccba-f017-591a-c13b-55d45c52af5d",
    "Color 1 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a8",
    "Color 2 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7a9",
    "Color 3 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7aa",
    "Color 4 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7ab",
    "Color 5 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7ac",
    "Color 6 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7ad",
    "Color 7 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7ae",
    "Color 8 Inverse": "w-variant-9956605b-243f-98fe-6aeb-594a301aa7af",
    "Color 9 Inverse": "w-variant-d1f22f42-b883-671b-ee58-0beea8edb3f0",
  };

  const _activeStyleVariant = _styleVariantMap[optionsBackgroundTextColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_bg-font-color ${_activeStyleVariant}`}
        data-copilot={"true"}
        tag={"div"}
      >
        {slotBgColor}
      </Block>
    </div>
  );
}
