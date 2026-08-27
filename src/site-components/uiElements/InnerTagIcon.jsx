"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { IconVariant } from "../variant/IconVariant";
import { VariantsIconSize } from "../variants/VariantsIconSize";

export function InnerTagIcon({
  icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf129_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
  iconSizeVariants = "Extra Small",
  iconVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {iconVisibility ? (
        <Block className={"inner-component_icon"} tag={"div"}>
          <VariantsIconSize
            iconSizeVariant={iconSizeVariants}
            slotIconSize={<IconVariant icon={icon} iconAltText={iconAltText} />}
          />
        </Block>
      ) : null}
    </div>
  );
}
