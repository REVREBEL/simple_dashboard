"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import { IconColorFilter } from "../uiElements/IconColorFilter";
import { VariantsIconSize } from "../variants/VariantsIconSize";

export function InnerHotelMetricStyle1({
  hotelStatName = (
    <>
      {"Urban "}
      <br />
      {"Metros"}
    </>
  ),
  hotelStatNo = "32",
  icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf0bf_sky-mask.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColor = "Color 4",
  iconIconSize = "Extra Large",
  iconIconVisibility = true,
  variant = "Horizontal Layout",
}) {
  const _styleVariantMap = {
    "Horizontal Layout": "",
    "Vertical Layout": "w-variant-841ad3c8-8ee7-7fbf-e048-49381c5ed194",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`hotel-stat_container ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`hotel-stat_item ${_activeStyleVariant}`}
          id={"w-node-a6f539ac-e985-426f-d9ea-dd894881d3ef-4881d3ee"}
          tag={"div"}
        >
          <Block
            className={`hotel-stat_grid ${_activeStyleVariant}`}
            id={"w-node-a6f539ac-e985-426f-d9ea-dd894881d3f0-4881d3ee"}
            tag={"div"}
          >
            <Block
              className={`hotel-stat_icon-wrapper ${_activeStyleVariant}`}
              id={"w-node-a6f539ac-e985-426f-d9ea-dd894881d3f1-4881d3ee"}
              tag={"div"}
            >
              <Block
                className={`hotel-stat_icon-align ${_activeStyleVariant}`}
                tag={"div"}
              >
                <VariantsIconSize
                  iconSizeVariant={iconIconSize}
                  slotIconSize={
                    <IconColorFilter
                      icon={icon}
                      iconAltText={iconIconAltText}
                      iconColor={iconIconColor}
                      iconVisibility={iconIconVisibility}
                    />
                  }
                />
              </Block>
            </Block>
            <Block
              className={`hotel-stat_count-wrapper ${_activeStyleVariant}`}
              id={"w-node-a6f539ac-e985-426f-d9ea-dd894881d3f3-4881d3ee"}
              tag={"div"}
            >
              <Heading
                className={`hotel-stat_count ${_activeStyleVariant}`}
                tag={"h1"}
              >
                {hotelStatNo}
              </Heading>
              <Block
                className={`hotel-stat_count-label ${_activeStyleVariant}`}
                id={"w-node-a6f539ac-e985-426f-d9ea-dd894881d3f6-4881d3ee"}
                tag={"div"}
              >
                {"# of properties"}
              </Block>
            </Block>
            <Block
              className={`hotel-stat_name-wrapper ${_activeStyleVariant}`}
              id={"w-node-a6f539ac-e985-426f-d9ea-dd894881d3f8-4881d3ee"}
              tag={"div"}
            >
              <Block
                className={`hotel-stat_name ${_activeStyleVariant}`}
                tag={"div"}
              >
                {hotelStatName}
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
