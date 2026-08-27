"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UnknownComponent2ColumnsCardList({
  featureSection1FeatureParagraphText = "We offer scalable solutions for hotels of all sizes, whether you need a short-term boost or long-term strategy support. Flexible engagement options allowus to adapt to your unique goals, ensuring success with minimal disruption.",
  featureSection1FeatureSubheadline = "CUSTOM-TAILORED SOLUTIONS",
  featureSection1FeatureSubheadlineTag = "h3",
  text = "REVENUE REWRITERS ",
  text2 = "Short-term, flexible support.",
  text3 = "Comprehensive agency-backed solutions with integrated tools.",
  text4 = "Dedicated support for specific projects.",
  text5 = "Deep dives uncovering untapped revenue opportunities.",
  title = "DROP-IN SPECIALISTS",
  title2 = "FULL CAST + CREW ",
  title3 = "PROJECT CLOSER ",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"card-body margin-block_md"} tag={"div"}>
        <Heading
          className={
            "headline-sm w-node-a3988600-9589-f075-089a-f2e75deabe57-5deabe56"
          }
          id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
          tag={featureSection1FeatureSubheadlineTag}
        >
          {featureSection1FeatureSubheadline}
        </Heading>
        <Paragraph className={"paragraph"}>
          {featureSection1FeatureParagraphText}
        </Paragraph>
        <Block className={"space-xs"} tag={"div"} />
        <Grid className={"grid_2-col is-max-width_650px"} tag={"div"}>
          <Block
            className={
              "item-heading w-node-a3988600-9589-f075-089a-f2e75deabe5b-5deabe56"
            }
            id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
            tag={"div"}
          >
            {text}
          </Block>
          <Paragraph
            className={"paragraph margin-bottom_none"}
            id={"w-node-a3988600-9589-f075-089a-f2e75deabe5d-5deabe56"}
          >
            {text2}
          </Paragraph>
          <Heading
            className={
              "item-heading w-node-a3988600-9589-f075-089a-f2e75deabe5f-5deabe56"
            }
            id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
            tag={"h3"}
          >
            {title}
          </Heading>
          <Paragraph
            className={"paragraph margin-bottom_none"}
            id={"w-node-a3988600-9589-f075-089a-f2e75deabe61-5deabe56"}
          >
            {text3}
          </Paragraph>
          <Heading
            className={
              "item-heading w-node-a3988600-9589-f075-089a-f2e75deabe63-5deabe56"
            }
            id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
            tag={"h3"}
          >
            {title2}
          </Heading>
          <Paragraph
            className={"paragraph margin-bottom_none"}
            id={"w-node-a3988600-9589-f075-089a-f2e75deabe65-5deabe56"}
          >
            {text4}
          </Paragraph>
          <Heading
            className={
              "item-heading w-node-a3988600-9589-f075-089a-f2e75deabe67-5deabe56"
            }
            id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
            tag={"h3"}
          >
            {title3}
          </Heading>
          <Paragraph
            className={"paragraph margin-bottom_none"}
            id={"w-node-a3988600-9589-f075-089a-f2e75deabe69-5deabe56"}
          >
            {text5}
          </Paragraph>
        </Grid>
      </Block>
    </div>
  );
}
