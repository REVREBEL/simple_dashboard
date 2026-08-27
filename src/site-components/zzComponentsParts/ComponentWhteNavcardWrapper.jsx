"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function ComponentWhteNavcardWrapper({
  navcardWrapper,
  navcardWrapper2,
  navcardWrapper3,
  navcardWrapper4,
  optionsWhiteNavCardColor = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-631b26e1-52f9-a61f-a233-19375fb72b6d",
  };

  const _activeStyleVariant = _styleVariantMap[optionsWhiteNavCardColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`navcard_dropdown-container ${_activeStyleVariant}`}
        tag={"div"}
      >
        {navcardWrapper}
        {navcardWrapper2}
        {navcardWrapper3}
        {navcardWrapper4}
      </Block>
    </div>
  );
}
