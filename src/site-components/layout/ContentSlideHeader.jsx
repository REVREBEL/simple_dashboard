"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Section from "../webflow_modules/Layout/components/Section";

export function ContentSlideHeader({
  eyebrowText = "No Training Wheels Required.",
  headlineText = "Full-Throttle Revenue Support. ",
  subHeadlineText = "See what our typcial engement &Scope of work inludes",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section className={"strategy-slider_main-headline"} tag={"section"}>
        <Block
          className={"strategy-slider_content-wrapper"}
          data-animate={"runline"}
          tag={"div"}
        >
          <Block className={"strategy-slider_content-align"} tag={"div"}>
            <Block className={"eyebrow"} tag={"div"}>
              {eyebrowText}
            </Block>
            <Heading
              className={"strategy-card_main-headlline margin-block_none"}
              tag={"h2"}
            >
              {headlineText}
            </Heading>
            <Block
              className={"headline-xxs strategy-card_headling"}
              tag={"div"}
            >
              {subHeadlineText}
            </Block>
          </Block>
        </Block>
      </Section>
    </div>
  );
}
