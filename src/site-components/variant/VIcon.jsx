"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";

export function VIcon({
  dataClickable = "",
  dataColorMode = "",
  dataIconColor = "",
  dataIconSize = "",
  iconImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec66_arrow-left.svg",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"v-icon"}
        data-clickable={dataClickable}
        data-color-mode={dataColorMode}
        data-icon-color={dataIconColor}
        data-icon-size={dataIconSize}
        tag={"div"}
      >
        <Image
          alt={""}
          className={"image v-icon"}
          height={"Auto"}
          loading={"lazy"}
          src={iconImage}
          width={"Auto"}
        />
      </Block>
    </div>
  );
}
