"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import * as _interactions from "../webflow_modules/interactions";
import { InnerHeadlineStatement } from "../zzComponentsParts/InnerHeadlineStatement";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeadlineStatement({
  componentId = "",
  componentVisibility = true,
  contentBottomParagraphText = "Handcrafted by hoteliers for hoteliers. An agency that empowers independent hotels to generate more demand with dynamic solutions to build awareness through data-informed strategy.",
  contentBottomParagraphVisibility = true,
  contentTopParagraphText = (
    <>
      {"We help independent hotels unlock growth and drive profitability —"}
      <br />
      {"minus the red tape of big-brand limitations. From flexible project"}
      <br />
      {"work to full-scale revenue operations, our approach is data-led,"}
      <br />
      {"obsessively strategic, and unapologetically independent."}
    </>
  ),
  headlineSizeVariants = "Level 2 Bigger",
  optionsBackgroundTextColor = "Color 9",
  slotHeadline,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"g-component-base component_statement-paragraph-layout"}
        tag={"div"}
      >
        <InnerHeadlineStatement
          componentId={componentId}
          componentVisibility={componentVisibility}
          headlineHeadlineSizeVariant={"499214ab-20ec-c129-72e4-4ae9c70284ff"}
          headlineSlot={slotHeadline}
          optionsBackgroundTextColor={optionsBackgroundTextColor}
          paragraphBottomParagraphText={contentBottomParagraphText}
          paragraphBottomParagraphVisibility={contentBottomParagraphVisibility}
          paragraphTopParagraphText={contentTopParagraphText}
        />
      </Block>
    </div>
  );
}
