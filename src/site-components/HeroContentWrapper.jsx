"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";

export function HeroContentWrapper({
  title1 = "Synchronize.",
  title2 = "Optimize.",
  title3 = "Outperform.",
  title4 = "Repeat.",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"hero_content-wrapper"} tag={"div"}>
        <Block className={"hero-heading-wrapper"} tag={"div"}>
          <Block className={"hero-headlline_align-left"} tag={"div"}>
            <Heading
              className={"hero-headline_word-1"}
              fb-text-highlight={"true"}
              fb-text-highlight-direction={"forward"}
              fb-text-highlight-speed={"3"}
              fb-text-highlight-type={"2"}
              tag={"h1"}
            >
              {title1}
            </Heading>
          </Block>
          <Block className={"hero-headlline_align-left"} tag={"div"}>
            <Heading
              className={"hero-headline_word-2"}
              fb-text-highlight={"true"}
              fb-text-highlight-direction={"forward"}
              fb-text-highlight-speed={"3"}
              fb-text-highlight-type={"2"}
              tag={"h1"}
            >
              {title2}
            </Heading>
          </Block>
          <Block className={"hero-headlline_align-left"} tag={"div"}>
            <Heading
              className={"hero-headline_word-3"}
              fb-text-highlight={"true"}
              fb-text-highlight-direction={"forward"}
              fb-text-highlight-speed={"3"}
              fb-text-highlight-type={"2"}
              tag={"h1"}
            >
              {title3}
            </Heading>
          </Block>
          <Block className={"hero-headlline_align-left"} tag={"div"}>
            <Heading
              className={"hero-headline_word-4"}
              fb-text-highlight={"true"}
              fb-text-highlight-direction={"forward"}
              fb-text-highlight-speed={"3"}
              fb-text-highlight-type={"2"}
              tag={"h1"}
            >
              {title4}
            </Heading>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
