"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { InnerHotelMetricStyle1 } from "../innerComponents/InnerHotelMetricStyle1";
import { VariantsTextColor } from "../variants/VariantsTextColor";

export function HotelMetricStyle1({
  hotelMetricsLayoutVariant = "Horizontal Layout",
  hotelMetricsText2 = (
    <>
      {"Urban "}
      <br />
      {"Metros"}
    </>
  ),
  hotelMetricsTitle = "32",
  iconIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf0bf_sky-mask.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColor = "Color 2",
  iconIconSize = "Regular",
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
      <Block tag={"div"}>
        <VariantsTextColor
          settingsFontColorVariants={optionsFontColorVariants}
          slotTextColorSlotFontColor={
            <InnerHotelMetricStyle1
              hotelStatName={hotelMetricsText2}
              hotelStatNo={hotelMetricsTitle}
              icon={iconIcon}
              iconIconAltText={iconIconAltText}
              iconIconColor={
                optionsFontColorVariants === "Primary"
                  ? "Primary"
                  : optionsFontColorVariants === "Color 1"
                  ? "Color 1"
                  : optionsFontColorVariants === "Color 2"
                  ? "Color 2"
                  : optionsFontColorVariants === "Color 3"
                  ? "Color 3"
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
              iconIconSize={iconIconSize}
              iconIconVisibility={iconIconVisibility}
              variant={hotelMetricsLayoutVariant}
            />
          }
        />
      </Block>
    </div>
  );
}
