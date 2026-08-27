"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function ArticlesListBlock({
  articlesListBlockId = "",
  articlesListBlockVisibility = true,
  cardContentHeadlineTag = "h3",
  cardContentHeadlineText = "Tell Me something Good",
  cardContentParagraphVisibility = true,
  cardContentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  slotCardMeta,
  slotLink,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {articlesListBlockVisibility ? (
        <Block
          className={"margin-inline_xxs margin-block_md padding_xs bg-color-9"}
          id={articlesListBlockId}
          tag={"div"}
        >
          <Block className={"divider"} tag={"div"} />
          <Block className={"color-card_body"} tag={"div"}>
            {slotCardMeta}
            <Heading
              className={"headline-xxs margin-block_xs"}
              tag={cardContentHeadlineTag}
            >
              {cardContentHeadlineText}
            </Heading>
            {cardContentParagraphVisibility ? (
              <Paragraph className={" paragraph_sm"}>
                {cardContentText}
              </Paragraph>
            ) : null}
            <Block className={"button-wrapper"} tag={"div"}>
              {slotLink}
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
