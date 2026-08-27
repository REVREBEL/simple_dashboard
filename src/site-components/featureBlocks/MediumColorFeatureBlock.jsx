"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import { InnerMediumColorFeatureBlock } from "../innerComponents/InnerMediumColorFeatureBlock";
import { VariantsBgFontColor } from "../variants/VariantsBgFontColor";

export function MediumColorFeatureBlock({
  buttonSlot,
  headlineHeadlineTag = "h2",
  headlineHeadlineText = "CTRLSHIFT",
  headlineSubHeadlineText = (
    <>
      {"Shift Happens. "}
      <br />
      {"Get New Strategies."}
    </>
  ),
  optionsBlockColor = "Base",
  optionsBlockId = "",
  optionsBlockLayout = "Base",
  optionsBlockVisibility = true,
  paragraphParagraphText = "Helping hotels take control of the levers that shift their revenue story. Read the blog and get the latest hotel strategy insights",
}) {
  const _styleVariantMap = {
    Base: "",
    "Full Width": "w-variant-f616cebb-7d63-7452-e2c6-1b59211f5898",
  };

  const _activeStyleVariant = _styleVariantMap[optionsBlockLayout];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {optionsBlockVisibility ? (
        <BlockContainer
          className={`component_headlne-4-subsections ${_activeStyleVariant}`}
          grid={{
            type: "container",
          }}
          id={optionsBlockId}
          tag={"div"}
        >
          <VariantsBgFontColor
            optionsBackgroundTextColor={optionsBlockColor}
            slotBgColor={
              <InnerMediumColorFeatureBlock
                buttonButtonVisibility={true}
                headlineHeadlineTag={headlineHeadlineTag}
                headlineHeadlineText={headlineHeadlineText}
                headlineSubHeadlineText={headlineSubHeadlineText}
                paragraphParagraphText={paragraphParagraphText}
                slotButton={buttonSlot}
              />
            }
          />
        </BlockContainer>
      ) : null}
    </div>
  );
}
