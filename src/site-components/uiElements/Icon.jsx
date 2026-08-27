"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { IconColorFilter } from "./IconColorFilter";
import { VariantsIconSize } from "../variants/VariantsIconSize";

export function Icon({
  icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf0e2_rocket.svg",
  iconAltText = "__wf_reserved_inherit",
  iconColor = "Primary",
  iconSizeVariant = "Extra Small",
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
            iconSizeVariant={iconSizeVariant}
            slotIconSize={
              <IconColorFilter
                icon={icon}
                iconAltText={iconAltText}
                iconColor={iconColor}
                iconVisibility={iconVisibility}
              />
            }
          />
        </Block>
      ) : null}
    </div>
  );
}
