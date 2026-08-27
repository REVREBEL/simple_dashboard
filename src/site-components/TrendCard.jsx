"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";

export function TrendCard({
  slot,
  slot2,
  slot20,
  slot3,
  slotIcon,
  subheadline = "Corporate Room Night Growth",
  trendCta = "Flip for the read",
  trendHeadline = "Corporate Travel is Back On-the-Books.",
  trendNumber = "[01]",
  trendStat = "59%",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block className={"card is-trend-card"} tag={"div"}>
          <Block
            className={
              "card_body padding_sm width_100pct height_100pct flex-space-between"
            }
            tag={"div"}
          >
            <Block
              className={
                "flex_horizontal width_100pct flex-space-between flex-align_top is-trend-card"
              }
              tag={"div"}
            >
              <Block
                className={"text-size-base font-headline font-weight-bold"}
                tag={"div"}
              >
                {trendNumber}
              </Block>
              {slotIcon}
            </Block>
            <Block
              className={
                "flex_vertical gap-xxs height_100pct padding-block_responsive-sm"
              }
              tag={"div"}
            >
              <Heading tag={"h1"}>{trendStat}</Heading>
              <Block className={"eyebrow"} tag={"div"}>
                {subheadline}
              </Block>
              <Block className={"text-size-lg"} tag={"div"}>
                {trendHeadline}
              </Block>
            </Block>
            <Block
              className={
                "flex_horizontal width_100pct height_100pct is-trend-card"
              }
              tag={"div"}
            >
              {slot}
              {slot2}
              {slot3}
            </Block>
            <Block
              className={
                "flex_horizontal width_100pct flex-space-between flex-align_bottom"
              }
              tag={"div"}
            >
              <Block tag={"div"}>{trendCta}</Block>
              {slot20}
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
