"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import RichText from "../webflow_modules/Basic/components/RichText";

export function ContentSlide1Right({
  list = "",
  moveParagraphToCol1 = false,
  paragraph = "We embed into your weekly rhythm to ensure every rate, restriction, and strategy is working toward your hotel’s upside.",
  readMoreReadMoreFontColorVariants = "Primary",
  readMoreReadMoreResponsiveTextVariants = "Regular Label",
  readMoreReadMoreUnderlineVariants = "Underline",
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
        className={"strategy-card"}
        id={"w-node-_6f107ccd-1248-f65f-ecad-9f50e63a15c4-e63a15c4"}
        tag={"div"}
      >
        <Block
          className={"padding_xs"}
          id={"w-node-_6f107ccd-1248-f65f-ecad-9f50e63a15c5-e63a15c4"}
          tag={"div"}
        >
          <Block className={"strategy-card_body is-layout-1"} tag={"div"}>
            <Block
              className={"strategy-card_section is-right is-layout-1"}
              tag={"div"}
            >
              <Block
                className={"strategy-card_section is-right is-layout-4"}
                tag={"div"}
              >
                {moveParagraphToCol1 ? (
                  <Paragraph className={"strategy-paragraph"}>
                    {moveParagraphToCol1 ? paragraph : [""]}
                  </Paragraph>
                ) : null}
                <RichText className={"rich-text_strategy-list"} tag={"div"}>
                  {list}
                </RichText>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
