"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import NotSupported from "../webflow_modules/Builtin/components/NotSupported";

export function ContentSlider({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <NotSupported _atom={"Code Island"}>
        {header}
        {slide1Content}
        {slide1TopLeft}
        {slide1BottomRight}
        {slide2Content}
        {slide2TopLeft}
        {slide2BottomRight}
        {slide3Content}
        {slide3TopLeft}
        {slide3BottomRight}
        {slide4Content}
        {slide4TopLeft}
        {slide4BottomRight}
      </NotSupported>
    </div>
  );
}
