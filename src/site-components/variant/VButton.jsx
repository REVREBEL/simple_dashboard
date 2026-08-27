"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";

export function VButton({
  buttonLink = {
    href: "#",
  },

  buttonText = "[ Icon Button ]",
  dataIconPlacement = "",
  iconVisibility = true,
  slotSlotIcon,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"v-button-wrapper"}
        data-icon-placement={dataIconPlacement}
        tag={"div"}
      >
        <Link button={true} className={"v-button"} options={buttonLink}>
          {buttonText}
        </Link>
        {iconVisibility ? (
          <Block className={"icon_spacer"} tag={"div"} />
        ) : null}
        {iconVisibility ? (
          <Block className={"v-button-icon"} tag={"div"}>
            {slotSlotIcon}
          </Block>
        ) : null}
      </Block>
    </div>
  );
}
