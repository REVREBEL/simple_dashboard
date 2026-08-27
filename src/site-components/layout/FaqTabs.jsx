"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import NotSupported from "../webflow_modules/Builtin/components/NotSupported";

export function FaqTabs({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <NotSupported _atom={"Code Island"}>
        {headline}
        {tab1Tab1Content}
        {tab2Tab2Content}
        {tab3Tab3Content}
      </NotSupported>
    </div>
  );
}
