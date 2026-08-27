"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Grid from "../webflow_modules/Layout/components/Grid";

export function InnerHeadline4SubSections({ slot14, slot15 }) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Grid className={"sub-secton-grid"}>
        {slot14}
        {slot15}
      </Grid>
    </div>
  );
}
