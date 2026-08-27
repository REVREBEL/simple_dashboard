"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function ComponentSectionsBgColor({
  backgroundColorSlot,
  optionsSectionBackgroundColor = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "BG Light": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e10",
    "BG Dark": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e11",
    "BG Color 1": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e12",
    "BG Color 2": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e13",
    "BG Color 3": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e14",
    "BG Color 4": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e15",
    "BG Color 5": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e16",
    "BG Color 6": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e17",
    "BG Color 7": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e18",
    "BG Color 8": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e19",
    "BG Color 9": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e1a",
    "BG Color 1 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e1b",
    "BG Color 2 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e1c",
    "BG Color 3 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e1d",
    "BG Color 4 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e1e",
    "BG Color 5 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e1f",
    "BG Color 6 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e20",
    "BG Color 7 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e21",
    "BG Color 8 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e22",
    "BG Color 9 Inverse": "w-variant-51adb36e-72fb-aba8-4b74-b4e9562f7e23",
  };

  const _activeStyleVariant = _styleVariantMap[optionsSectionBackgroundColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block data-copilot={"true"} tag={"div"}>
        <Block
          className={`variants_bg-color ${_activeStyleVariant}`}
          tag={"div"}
        >
          {backgroundColorSlot}
        </Block>
      </Block>
    </div>
  );
}
