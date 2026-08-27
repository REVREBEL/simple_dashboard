"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { InnerHotelMetricStyle2 } from "../innerComponents/InnerHotelMetricStyle2";
import { VariantsTextColor } from "../variants/VariantsTextColor";

export function HotelMetricStyle2({
  hotelMetricsHotelsLabelVisibility = true,
  hotelMetricsLayoutVariant = "Count | Label | Icon Horizontal",
  hotelMetricsMetric1 = "25%",
  hotelMetricsMetric2 = "03",
  hotelMetricsResortsLabelVisibility = false,
  hotelMetricsStackedStatVisibility = false,
  hotelMetricsStatCount = "02",
  hotelMetricsStatName = "__wf_reserved_inherit",
  hotelMetricsText2 = "LOCATED ON CAMPUS AT A UNIVERSITY",
  iconIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf100_university.svg",
  iconIconSizeVariant = "Medium",
  iconIconVisibility = true,
  optionsFontColorVariants = "Dark",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"div-block-773"} tag={"div"}>
        <VariantsTextColor
          settingsFontColorVariants={optionsFontColorVariants}
          slotTextColorSlotFontColor={
            <InnerHotelMetricStyle2
              hotelsLabelVisibility={hotelMetricsHotelsLabelVisibility}
              iconIcon={iconIcon}
              iconIconAltText={hotelMetricsStatName}
              iconIconColor={
                optionsFontColorVariants === "Primary"
                  ? "Primary"
                  : optionsFontColorVariants === "Color 1"
                  ? "Color 1"
                  : optionsFontColorVariants === "Color 2"
                  ? "Color 2"
                  : optionsFontColorVariants === "Color 3"
                  ? "Color 4"
                  : optionsFontColorVariants === "Color 4"
                  ? "Color 4"
                  : optionsFontColorVariants === "Color 5"
                  ? "Color 5"
                  : optionsFontColorVariants === "Color 6"
                  ? "Color 6"
                  : optionsFontColorVariants === "Color 7"
                  ? "Color 7"
                  : optionsFontColorVariants === "Color 8"
                  ? "Color 8"
                  : optionsFontColorVariants === "Color 9"
                  ? "Color 9"
                  : optionsFontColorVariants === "Light"
                  ? "Light"
                  : "Primary"
              }
              iconIconSizeVariant={iconIconSizeVariant}
              iconIconVisibility={iconIconVisibility}
              metric1={hotelMetricsMetric1}
              metric2={hotelMetricsMetric2}
              resortsLabelVisibility={hotelMetricsResortsLabelVisibility}
              stackedStatVisability={hotelMetricsStackedStatVisibility}
              statCount={hotelMetricsStatCount}
              statName={hotelMetricsText2}
              variant={hotelMetricsLayoutVariant}
            />
          }
        />
      </Block>
    </div>
  );
}
