"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { InnerComponentDateLabelText } from "../innerComponents/InnerComponentDateLabelText";
import { VariantsLabelFontSize } from "../variants/VariantsLabelFontSize";
import { VariantsTextColor } from "../variants/VariantsTextColor";

export function DateLabel({
  dateLabelFontColorVariants = "Primary",
  dateLabelText = "Month YYYY",
  dateLabelTextSizeVariants = "Regular Label",
  dateLabelVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {dateLabelVisibility ? (
        <Block className={"component_date-label"} tag={"div"}>
          <VariantsLabelFontSize
            settingsResponsiveTextVariants={dateLabelTextSizeVariants}
            slotResponsiveTextSlotResponsiveText={
              <VariantsTextColor
                settingsFontColorVariants={dateLabelFontColorVariants}
                slotTextColorSlotFontColor={
                  <InnerComponentDateLabelText dateLabelText={dateLabelText} />
                }
              />
            }
          />
        </Block>
      ) : null}
    </div>
  );
}
