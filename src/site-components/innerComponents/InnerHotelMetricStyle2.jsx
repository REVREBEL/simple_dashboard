"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { IconColorFilter } from "../uiElements/IconColorFilter";
import { VariantsIconSize } from "../variants/VariantsIconSize";

export function InnerHotelMetricStyle2({
  hotelsLabelVisibility = true,
  iconIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf0bf_sky-mask.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColor = "Color 2",
  iconIconSizeVariant = "Medium",
  iconIconVisibility = true,
  metric1 = "25%",
  metric2 = "75%",
  resortsLabelVisibility = false,
  stackedStatVisability = false,
  statCount = "02",
  statName = "LOCATED ON CAMPUS AT A UNIVERSITY",
  variant = "Count | Label | Icon Horizontal",
}) {
  const _styleVariantMap = {
    "Count | Label | Icon Horizontal": "",
    "Count | Icon | Label Horizontal":
      "w-variant-eed9a3cf-f255-58e6-e64b-5cef3e722040",
    "Label | Count | Icon Horizontal":
      "w-variant-a592b0f8-235d-97e2-95ba-cfad5afe2f77",
    "Icon | Count | Label Horizontal":
      "w-variant-ed470d7c-582b-8357-db7f-8a8cb1131710",
    "Count | Icon | Label Stacked":
      "w-variant-f2395f36-ceb2-1818-73f9-373a969424b3",
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
        <Block className={`hotel-stat_item ${_activeStyleVariant}`} tag={"div"}>
          <Block
            className={`hotel-stat_grid tablet-horizontal is-style-2 ${_activeStyleVariant}`}
            tag={"div"}
          >
            {hotelsLabelVisibility ? (
              <Block
                className={`hotel-stat_count-wrapper ${_activeStyleVariant}`}
                id={"w-node-_5b02ff86-ef89-3aa8-16b2-ac70c01aaeda-c01aaed2"}
                tag={"div"}
              >
                <Block
                  className={`hotel-stat_count ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {statCount}
                </Block>
                <Block
                  className={`hotel-stat_count-label is-big is-hotel ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"Hotels"}
                </Block>
              </Block>
            ) : null}
            {resortsLabelVisibility ? (
              <Block
                className={`hotel-stat_count-wrapper is-resort ${_activeStyleVariant}`}
                id={"w-node-_7369baee-cc1f-799b-4fb7-0140596f4e5a-c01aaed2"}
                tag={"div"}
              >
                <Block
                  className={`hotel-stat_count ${_activeStyleVariant}`}
                  id={"w-node-_7369baee-cc1f-799b-4fb7-0140596f4e5b-c01aaed2"}
                  tag={"div"}
                >
                  {statCount}
                </Block>
                <Block
                  className={`hotel-stat_count-label is-big is-resort ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"Resorts"}
                </Block>
              </Block>
            ) : null}
            <Block
              className={`hotel-stat_name-wrapper ${_activeStyleVariant}`}
              id={"w-node-_5b02ff86-ef89-3aa8-16b2-ac70c01aaedf-c01aaed2"}
              tag={"div"}
            >
              <Block
                className={`hotel-stat_name ${_activeStyleVariant}`}
                tag={"div"}
              >
                {statName}
              </Block>
            </Block>
            {iconIconVisibility ? (
              <Block
                className={`hotel-stat_icon ${_activeStyleVariant}`}
                id={"w-node-_5b02ff86-ef89-3aa8-16b2-ac70c01aaee2-c01aaed2"}
                tag={"div"}
              >
                <Block
                  className={`hotel-stat_icon-wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`hotel-stat_icon-align ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <VariantsIconSize
                      iconSizeVariant={iconIconSizeVariant}
                      slotIconSize={
                        <IconColorFilter
                          icon={iconIcon}
                          iconAltText={iconIconAltText}
                          iconColor={iconIconColor}
                          iconVisibility={iconIconVisibility}
                        />
                      }
                    />
                  </Block>
                </Block>
              </Block>
            ) : null}
            {stackedStatVisability ? (
              <Block
                className={`hotel-stat_metric-wrapper ${_activeStyleVariant}`}
                id={"w-node-_5b02ff86-ef89-3aa8-16b2-ac70c01aaed5-c01aaed2"}
                tag={"div"}
              >
                <Block
                  className={`hotel-stat_metric ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {metric1}
                </Block>
                <Block
                  className={`hotel-stat_metric ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {metric2}
                </Block>
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
    </div>
  );
}
