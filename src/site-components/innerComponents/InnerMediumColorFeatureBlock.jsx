"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import VFlex from "../webflow_modules/Layout/components/VFlex";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-138":{"id":"e-138","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1031"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a2499941-a028-16b3-88e4-b598e1b957ff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a2499941-a028-16b3-88e4-b598e1b957ff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1755341867480}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InnerMediumColorFeatureBlock({
  buttonButtonVisibility = true,
  headlineHeadlineTag = "h2",
  headlineHeadlineText = "CTRLSHIFT",
  headlineSubHeadlineText = (
    <>
      {"Shift Happens. "}
      <br />
      {"Get New Strategies."}
    </>
  ),
  paragraphParagraphText = "Helping hotels take control of the levers that shift their revenue story. Read the blog and get the latest hotel strategy insights",
  slotButton,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"card is-max-width_60pct"} tag={"div"}>
        <Block
          className={"card-body medium-feature-color-block_padding"}
          tag={"div"}
        >
          <Block
            className={"travel-trends_teaser_headline-weapper"}
            id={"w-node-a2499941-a028-16b3-88e4-b598e1b957fe-e1b957f8"}
            tag={"div"}
          >
            <Heading
              className={"  headline-lg is-color-inherit"}
              data-w-id={"a2499941-a028-16b3-88e4-b598e1b957ff"}
              tag={headlineHeadlineTag}
            >
              {headlineHeadlineText}
            </Heading>
            <Block className={"  headline-sm is-color-inherit"} tag={"div"}>
              {headlineSubHeadlineText}
            </Block>
          </Block>
          <Block className={"travel-trends_text-wrapper"} tag={"div"}>
            <Paragraph className={"paragraph-md is-color-inherit"}>
              {paragraphParagraphText}
            </Paragraph>
          </Block>
          {buttonButtonVisibility ? (
            <Block
              className={"travel-trends_teaser_button-wrapper"}
              id={"w-node-a2499941-a028-16b3-88e4-b598e1b95804-e1b957f8"}
              tag={"div"}
            >
              <VFlex className={"travel-trends_button_align"} tag={"div"}>
                {slotButton}
              </VFlex>
            </Block>
          ) : null}
        </Block>
      </Block>
    </div>
  );
}
