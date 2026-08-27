"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";

export function ContentSlide4Left({
  image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf33f_operational_insights.avif",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"content-wrapper"} tag={"div"}>
        <Block className={"strategy-card"} tag={"div"}>
          <Block className={"image_cover radius_none"} tag={"div"}>
            <Image
              className={"image radius_none"}
              height={"auto"}
              loading={"lazy"}
              src={image}
              width={"412"}
            />
          </Block>
        </Block>
      </Block>
    </div>
  );
}
