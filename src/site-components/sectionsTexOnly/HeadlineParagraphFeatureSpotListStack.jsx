"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";
import { ComponentHeadlineSizeVariants } from "../componentTemplates/ComponentHeadlineSizeVariants";

const _interactionsData = JSON.parse(
  '{"events":{"e-1128":{"id":"e-1128","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1129"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5536133d-c641-31c1-c1b3-ef5ac3f5a7c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5536133d-c641-31c1-c1b3-ef5ac3f5a7c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774047031558},"e-1132":{"id":"e-1132","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1133"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5536133d-c641-31c1-c1b3-ef5ac3f5a7cd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5536133d-c641-31c1-c1b3-ef5ac3f5a7cd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774047103330}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeadlineParagraphFeatureSpotListStack({
  headlineSizeVariants = "Level 2 Bigger",
  headlineTag = "h2",
  headlineText = "We Speak it Fluently.",
  headlineTopText = "Masters in Hospitality Tech.",
  paragraphText = "In a world of clunky systems and cookie-cutter rollouts, we brings clarity, fluency, and just the right amount of obsession to your hotel’s tech stack. We don’t just plug into platforms like Opera Cloud, SynXis, and iDeas — we master them, configure them, and train your team to make the most of them. Whether it’s a single-propertydeployment or a full chain rollout, we ensure everything runs smoother than your check-in queue at 3pm on a Friday.",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"g-component-base component_section"} tag={"div"}>
        <Block className={"global_container"} data-copilot={"true"} tag={"div"}>
          <Block className={"margin-bottom-md"} tag={"div"}>
            <Block className={"headline_variant-wrapper"} tag={"div"}>
              <Block
                className={"headline-base"}
                data-w-id={"5536133d-c641-31c1-c1b3-ef5ac3f5a7c5"}
                tag={"div"}
              >
                {headlineTopText}
              </Block>
              <Block className={"headline_slot text-color-2"} tag={"div"}>
                <ComponentHeadlineSizeVariants
                  headlineSizeVariants={headlineSizeVariants}
                  headlineTag={headlineTag}
                  headlineText={headlineText}
                />
              </Block>
            </Block>
            <Paragraph className={"paragraph_variant"}>
              {paragraphText}
            </Paragraph>
          </Block>
          <Block className={"grid_2-col gap-col-md is-col-1-2"} tag={"div"}>
            <Heading
              className={"headline-sm margin-bottom_none"}
              data-w-id={"5536133d-c641-31c1-c1b3-ef5ac3f5a7cd"}
              id={"w-node-_5536133d-c641-31c1-c1b3-ef5ac3f5a7cd-cca74abe"}
              tag={"h3"}
            >
              {"More Than Support. a Strategic Tech Ally."}
            </Heading>
            <Block
              className={"column-left"}
              id={"w-node-_5536133d-c641-31c1-c1b3-ef5ac3f5a7cf-cca74abe"}
              tag={"div"}
            />
            <Block
              className={"column-right"}
              id={"w-node-_5536133d-c641-31c1-c1b3-ef5ac3f5a7da-cca74abe"}
              tag={"div"}
            />
          </Block>
          <Section
            className={"component_wrapper"}
            grid={{
              type: "section",
            }}
            tag={"section"}
          />
        </Block>
      </Block>
    </div>
  );
}
