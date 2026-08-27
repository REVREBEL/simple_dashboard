"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { VariantsLabelFontSize } from "../variants/VariantsLabelFontSize";
import { VariantsTextColor } from "../variants/VariantsTextColor";

export function ReadTme({
  readTimeResponsiveTextVariants = "Regular Label",
  readTimeTextColorVariants = "Color 2",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"base component_read-time"} tag={"div"}>
        <VariantsTextColor
          settingsFontColorVariants={readTimeTextColorVariants}
          slotTextColorSlotFontColor={
            <VariantsLabelFontSize
              settingsResponsiveTextVariants={readTimeResponsiveTextVariants}
              slotResponsiveTextSlotResponsiveText={""}
            />
          }
        />
      </Block>
    </div>
  );
}
