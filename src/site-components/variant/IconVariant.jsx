"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Image from "../webflow_modules/Basic/components/Image";

export function IconVariant({
  icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf129_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Image
        className={"icon-variant"}
        height={"auto"}
        id={"w-node-f7d66fea-1cae-f7a0-eaea-2a1e2b532eec-2b532eec"}
        loading={"lazy"}
        src={icon}
        width={"auto"}
      />
    </div>
  );
}
