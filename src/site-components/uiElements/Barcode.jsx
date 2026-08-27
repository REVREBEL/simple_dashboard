"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";
import Image from "../webflow_modules/Basic/components/Image";

export function Barcode({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Grid className={"barcode-grid"} tag={"div"}>
        <Block className={"barcode"} tag={"div"}>
          <Image
            alt={"Image of a barcode"}
            className={"image-82"}
            height={"auto"}
            loading={"lazy"}
            src={
              "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceb1b_645e2dc73a1bfedf0560cd18_about-sticker.webp"
            }
            width={"auto"}
          />
        </Block>
        <Block
          className={"barcode-headline"}
          id={"w-node-_803f513c-4a5a-3633-dbd2-50acf2d398bb-f2d398b8"}
          tag={"div"}
        >
          {"LOSANGELES., CALIFORNIA"}
          <br />
          {"SANDIEGO,CALIFORNIA"}
          <br />
          {"BASED"}
          <br />
          {"WORKINGWORLDWIDE"}
        </Block>
        <Image
          alt={"REVREBEL Logo"}
          height={"auto"}
          id={"w-node-_803f513c-4a5a-3633-dbd2-50acf2d398c3-f2d398b8"}
          loading={"lazy"}
          src={
            "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceb24_revrebel-logo-white-stacked.webp"
          }
          width={"auto"}
        />
        <Block className={"barcode-textblock"} tag={"div"}>
          {"revenue strategy"}
          <br />
          {"performance marketing"}
          <br />
          {"optimized distribution"}
          <br />
          {"tie in branding +partnerships"}
          <br />
          {"curated tech"}
        </Block>
      </Grid>
    </div>
  );
}
