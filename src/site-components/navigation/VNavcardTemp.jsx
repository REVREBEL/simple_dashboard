"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";

export function VNavcardTemp({
  cardCardButtonText = "Read the Blog",
  cardCardHeadlineText = "CTRLShift Blog",
  cardCardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec02_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.avif",
  cardCardImageAltText = "__wf_reserved_inherit",
  cardCardParagraphText = (
    <>
      {
        "Where we share our tips and ideas on generating revenueat your property"
      }
      <br />
    </>
  ),
  cardSlotIcon,
  slotLabel,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"v-navcard is-color"} tag={"div"}>
        <Block
          className={"v-navcard_right-content is-color is-outline"}
          id={"w-node-_873aa802-5977-125a-3d00-b85f2de300eb-2de300ea"}
          tag={"div"}
        >
          <Block className={"v-navcard_top-content"} tag={"div"}>
            {cardSlotIcon}
            <Heading className={"c-navcard_headline"} tag={"h3"}>
              {cardCardHeadlineText}
            </Heading>
          </Block>
          <Block className={"v-navcard_mid-content"} tag={"div"}>
            <Block className={"c-navcard-paragraph"} tag={"div"}>
              {cardCardParagraphText}
            </Block>
          </Block>
          <Block className={"v-navcard_bottom-content"} tag={"div"}>
            {slotLabel}
          </Block>
        </Block>
        <Block className={"v-navcard_left-content is-color"} tag={"div"}>
          <Image
            className={"v-navcard_image"}
            height={"auto"}
            loading={"lazy"}
            src={cardCardImage}
            width={"auto"}
          />
        </Block>
      </Block>
    </div>
  );
}
