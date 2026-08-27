"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsBgFontColorInverse({
  optionsBackgroundTextColor = "Base",
  slotColor,
}) {
  const _styleVariantMap = {
    Base: "",
    "BG Light": "w-variant-f1ab241c-4ed1-56fc-2a1e-88acb1680a70",
    "BG Dark": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07c4",
    "BG Primary": "w-variant-673c3733-ac4a-ec8d-25b3-6a60fe5fa7ce",
    "BG Color 1": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07c5",
    "BG Color 2": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07c6",
    "BG Color 3": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07c7",
    "BG Color 4": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07c8",
    "BG Color 5": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07c9",
    "BG Color 6": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07ca",
    "BG Color 7": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07cb",
    "BG Color 8": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07cc",
    "BG Color 9": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07cd",
    "BG Color 1 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07ce",
    "BG Color 2 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07cf",
    "BG Color 3 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07d0",
    "BG Color 4 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07d1",
    "BG Color 5 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07d2",
    "BG Color 6 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07d3",
    "BG Color 7 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07d4",
    "BG Color 8 Inverse": "w-variant-f762083c-8fdb-7ea6-3bdf-998a555b07d5",
    "BG Color 9 Inverse": "w-variant-2b32a4ee-7fbf-633a-27be-7c204ecb321b",
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
        className={`variants_bg-font-color-inverse ${_activeStyleVariant}`}
        data-copilot={"true"}
        tag={"div"}
      >
        {slotColor}
      </Block>
    </div>
  );
}
