"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { InnerComponentDateLabelText } from "../innerComponents/InnerComponentDateLabelText";
import { VariantsLabelFontSize } from "../variants/VariantsLabelFontSize";
import { VariantsTextColor } from "../variants/VariantsTextColor";

export function HashtagLabel({
  dateLabelDateLabelId = "",
  dateLabelDateLabelText = "Month YYYY",
  dateLabelDateLabelVisibility = true,
  dateLabelFontColorVariants = "Primary",
  dateLabelResponsiveTextVariants = "Regular Label",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {dateLabelDateLabelVisibility ? (
        <Block
          className={"component_date-label"}
          id={dateLabelDateLabelId}
          tag={"div"}
        >
          <VariantsTextColor
            settingsFontColorVariants={dateLabelFontColorVariants}
            slotTextColorSlotFontColor={
              <VariantsLabelFontSize
                settingsResponsiveTextVariants={dateLabelResponsiveTextVariants}
                slotResponsiveTextSlotResponsiveText={
                  <InnerComponentDateLabelText
                    dateLabelText={dateLabelDateLabelText}
                  />
                }
              />
            }
          />
        </Block>
      ) : null}
    </div>
  );
}
