"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { SimpleCard } from "./SimpleCard";
import { VariantsBgFontColor } from "../variants/VariantsBgFontColor";

export function SimpleColorCard({
  headlineAlignmentVariants = null,
  headlineTextSizeVariants = "base",
  imageImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb7_Placeholder%20Image.png",
  imageImageAltText = "__wf_reserved_inherit",
  readMoreFontColorVariants = "Color 8 Inverse",
  readMoreResponsiveTextVariants = "Regular Label",
  readMoreUnderlineVariants = "Underline",
  simpleCardAlignmentVariants = null,
  simpleCardColorVariants = "Base",
  simpleCardLayoutVariants = null,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"g-container"} tag={"div"}>
        <VariantsBgFontColor
          optionsBackgroundTextColor={simpleCardColorVariants}
          slotBgColor={
            <SimpleCard
              previewImageImageAltText={imageImageAltText}
              previewImagePreviewImage={imageImage}
            />
          }
        />
      </Block>
    </div>
  );
}
