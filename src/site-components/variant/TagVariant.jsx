"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { InnerTagIcon } from "../uiElements/InnerTagIcon";
import { VariantsIconColor } from "../variants/VariantsIconColor";

export function TagVariant({
  icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf129_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
  iconIconVisibility = true,
  iconSizeVariants = "Extra Small",
  tagTagText = "Mavericks 4 Life",
  variantsIconColorIconColor = "Primary",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"tag-variant_wrapper"} tag={"div"}>
        <Block className={"tag-variant"} tag={"div"}>
          {tagTagText}
        </Block>
        {iconIconVisibility ? (
          <Block className={"tag_icon-spacer"} tag={"div"} />
        ) : null}
        <Block className={"varient_icon-align-adjust"} tag={"div"}>
          <VariantsIconColor
            iconColor={variantsIconColorIconColor}
            slotIconColor={
              <InnerTagIcon
                icon={icon}
                iconAltText={iconAltText}
                iconSizeVariants={iconSizeVariants}
                iconVisibility={iconIconVisibility}
              />
            }
          />
        </Block>
      </Block>
    </div>
  );
}
