"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { VColorMode } from "./VColorMode";

export function VColor({
  optionsClickable = true,
  optionsColor = "yellow",
  optionsColorMode = "normal",
  optionsColorStyle = true,
  optionsDropShadowOnHover = true,

  slotColorAttributes = {
    "data-icon-color": "",
    "data-clickable": "",
    "data-color": "",
    "data-color-style": "",
    "data-color-mode": "",
  },

  slotSlotColor,
}) {
  const _styleVariantMap = {
    primary: "",
    teal: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a0",
    cyan: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a1",
    aqua: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a2",
    powder: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a3",
    yellow: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a4",
    orange: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a5",
    red: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a6",
    purple: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a7",
    frost: "w-variant-5cdedf19-6231-183a-43be-0495c826b2a8",
    "grey-1": "w-variant-40e976ed-a142-6362-d6c0-ddd044c4b60f",
    "grey-2": "w-variant-54fcb3d9-a0b9-dce3-c502-03b63249b3d7",
    "grey-3": "w-variant-03a91ba9-35b8-7f25-0c27-eeab50c3c8da",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`v-color ${_activeStyleVariant}`}
        data-clickable={null}
        data-color={"primary"}
        data-color-style={null}
        data-shadow-on-hover={null}
        tag={"div"}
        {...slotColorAttributes}
      >
        <VColorMode colorMode={optionsColorMode} slotColor={slotSlotColor} />
      </Block>
    </div>
  );
}
