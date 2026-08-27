"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function ContentSlide1Left({
  moveParagraphToCol1 = false,
  paragraph = "We embed into your weekly rhythm to ensure every rate, restriction, and strategy is working toward your hotel’s upside.",
  readMoreReadMoreFontColorVariants = "Primary",
  readMoreReadMoreResponsiveTextVariants = "Regular Label",
  readMoreReadMoreUnderlineVariants = "Underline",
  slotHeadline,
  slotLabel,
  slotLabel2,
  tagIcon2IconIconSizeVariants = "Extra Small",
  tagIcon2TagColor = "Color 8",
  tagIcon2TagTagBackgroundClickable = "Solid",
  tagIcon2TagTagSize = "Regular",
  tagIconIconIconSizeVariants = "Extra Small",
  tagIconTagColor = "Color 2",
  tagIconTagTagBackgroundClickable = "Solid",
  tagIconTagTagSize = "Regular",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"strategy-card padding-top_none"}
        id={"w-node-_6145044c-6ae3-9e8c-0d5a-b6d622ea9226-22ea9226"}
        tag={"div"}
      >
        <Block
          className={"padding_sm padding_mobile-xs is-padding_1x"}
          id={"w-node-_6145044c-6ae3-9e8c-0d5a-b6d622ea9227-22ea9226"}
          tag={"div"}
        >
          <Block className={"strategy-card_body is-layout-1"} tag={"div"}>
            <Block
              className={
                "strategy-card_section is-left is-layout-1 is-padding-top_2rem"
              }
              tag={"div"}
            >
              <Block
                className={"top-content-wraper is-layout-1 flex-align_left"}
                tag={"div"}
              >
                <Block
                  className={
                    "headline-wrapper flex-align_left margin-block_none is-layout-1"
                  }
                  tag={"div"}
                >
                  {slotHeadline}
                </Block>
                <Block
                  className={
                    "tags-group flex-vertical is-layout-1 padding-top_xs"
                  }
                  tag={"div"}
                >
                  <Block className={"label-wrapper"} tag={"div"}>
                    {slotLabel}
                  </Block>
                  <Block className={"label-wrapper"} tag={"div"}>
                    {slotLabel2}
                  </Block>
                </Block>
              </Block>
              <Block className={"content-wrapper padding-top_xs"} tag={"div"}>
                {!moveParagraphToCol1 ? (
                  <Paragraph
                    className={
                      "paragraph-md font-weight-regular text-wrap_balance"
                    }
                  >
                    {!moveParagraphToCol1 ? paragraph : [""]}
                  </Paragraph>
                ) : null}
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
