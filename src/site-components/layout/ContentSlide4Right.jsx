"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import VFlex from "../webflow_modules/Layout/components/VFlex";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-69":{"id":"e-69","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContentSlide4Right({
  headline = "Key Deliverables",
  paragraphText1 = "For each engagement, we provide a weekly recap and summary of all the tasks we worked on and the accomplishments achieved during that week.",
  paragraphText2 = "A tailored 12-month roadmap of strategic revenue actions and milestones — designed to align with market shifts, property goals, and internal capabilities, updated weekly.",
  paragraphText3 = "A high-impact summary of performance trends, pricing shifts, and pacing data — including key insights and suggested actions to stay ahead of market curves.",
  subHeadline1 = "Weekly Summaries",
  subHeadline2 = "Strategic Revenue Calendar",
  subHeadline3 = "Monthly Performance Pulse",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"strategy-card"} tag={"div"}>
        <VFlex className={"padding_md padding_mobile-xs"} tag={"div"}>
          <Block className={"strategy-content-block"} tag={"div"}>
            <Heading className={"headline-xs"} tag={"h2"}>
              {headline}
            </Heading>
          </Block>
          <Block className={"strategy-content-block"} tag={"div"}>
            <Heading className={"headline-xxs text-size-md"} tag={"h2"}>
              {subHeadline1}
            </Heading>
            <Paragraph className={"paragraph-sm is-text-wrap_balance"}>
              {paragraphText1}
            </Paragraph>
          </Block>
          <Block className={"strategy-content-block"} tag={"div"}>
            <Heading className={"headline-xxs text-size-md"} tag={"h2"}>
              {subHeadline2}
            </Heading>
            <Paragraph className={"paragraph-sm is-text-wrap_balance"}>
              {paragraphText2}
            </Paragraph>
          </Block>
          <Block className={"strategy-content-block"} tag={"div"}>
            <Heading className={"headline-xxs text-size-md"} tag={"h2"}>
              {subHeadline3}
            </Heading>
            <Paragraph className={"paragraph-sm is-text-wrap_balance"}>
              {paragraphText3}
            </Paragraph>
          </Block>
        </VFlex>
      </Block>
    </div>
  );
}
