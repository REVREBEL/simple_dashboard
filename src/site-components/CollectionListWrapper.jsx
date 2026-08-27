"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import { FaqAccordion } from "./FaqAccordion";

export function CollectionListWrapper({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <NotSupported _atom={"Collection List"}>
        <NotSupported _atom={"Collection List Items"} />
        <NotSupported _atom={"Empty State"} />
      </NotSupported>
    </div>
  );
}
