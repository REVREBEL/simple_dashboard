"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContentCards2X3({
  card1Card1Icon,
  card1Card1Link,
  card1CardHeadline = (
    <>
      {"Revenue "}
      <br />
      {"Management"}
    </>
  ),
  card1ParagraphText = "Drive profit with expert pricing, leveraging deep market intelligence and agile rate strategies tailored for independent hotels seeking a competitive edge.",
  card2Card2Icon,
  card2Card2Link,
  card2CardHeadline = (
    <>
      {"Optimized "}
      <br />
      {"Distribution"}
    </>
  ),
  card2ParagraphText = "Expand your reach with a curated channel mix, maximizing exposure and seamless connectivity across all major booking platforms for optimal demand capture.",
  card3Card3Icon,
  card3Card3Link,
  card3CardHeadline = (
    <>
      {"Brand "}
      <br />
      {"Positioning"}
    </>
  ),
  card3ParagraphText = "Shape a distinctive identity that attracts modern travelers, blending authenticity and differentiation to ensure your property stands out in a crowded market.",
  card4Card4Icon,
  card4Card4Link,
  card4CardHeadline = (
    <>
      {"Marketing "}
      <br />
      {"Execution"}
    </>
  ),
  card4ParagraphText = "Activate high-impact campaigns and creative content, using data-driven tactics to engage audiences and convert interest into direct bookings.",
  card5Card5Icon,
  card5Card5Link,
  card5CardHeadline = (
    <>
      {"Social "}
      <br />
      {"Media Impact"}
    </>
  ),
  card5ParagraphText = "Strengthen guest loyalty and engagement with tailored social strategies, delivering relevant storytelling that amplifies your unique brand voice.",
  card6Card6Icon,
  card6Card6Link,
  card6CardHeadline = (
    <>
      {"Performance "}
      <br />
      {"Analytics"}
    </>
  ),
  card6ParagraphText = "Turn complex data into actionable insights, empowering faster, smarter decisions that fuel growth and reveal new revenue opportunities.",
  cardColorVariants = "Light",
  eyebrowText = "Core elements",
  iconsVisibility = false,
  mainHeadline = "Unify. Elevate. Accelerate. Win.",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    "Dark Variant 1": "w-variant-3dfd3f37-ff20-f438-2502-2059c9d02cf9",
    "Dark Variant 2": "w-variant-c86b58f8-cbbb-553c-8e01-0848f58c3ba9",
    "Light Full Width": "w-variant-5e9ad2d3-aa47-d896-a7cf-b045abe49d78",
  };

  const _activeStyleVariant = _styleVariantMap[cardColorVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={`component_size padding-inline_8x text-color-primary ${_activeStyleVariant}`}
        tag={"section"}
      >
        <Block className={`color-variants ${_activeStyleVariant}`} tag={"div"}>
          <Block
            className={`content-cards_header is-align-center text-color-primary ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`content-wrapper padding-inline_responsive-md ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`eyebrow flex-align_center ${_activeStyleVariant}`}
                tag={"div"}
              >
                {eyebrowText}
              </Block>
              <Heading
                className={`headline-md ${_activeStyleVariant}`}
                tag={"h2"}
              >
                {mainHeadline}
              </Heading>
            </Block>
          </Block>
          <Grid
            className={`grid_3-col gap-sm max-width_xlarge margin_left-auto margin_right-auto ${_activeStyleVariant}`}
          >
            <Block
              className={` card is-color-9 padding-block_md padding-inline_responsive-md radius-card ${_activeStyleVariant}`}
              id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34de3-82f34ddb"}
              tag={"div"}
            >
              <Block
                className={`color-card_body ${_activeStyleVariant}`}
                tag={"div"}
              >
                {card1Card1Icon}
                <Heading
                  className={`card-headline ${_activeStyleVariant}`}
                  id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34de8-82f34ddb"}
                  tag={"h3"}
                >
                  {card1CardHeadline}
                </Heading>
                <Paragraph
                  className={`paragraph margin-bottom_xs ${_activeStyleVariant}`}
                >
                  {card1ParagraphText}
                </Paragraph>
                {card1Card1Link}
              </Block>
            </Block>
            <Block
              className={` card is-color-9 padding-block_md padding-inline_responsive-md radius-card ${_activeStyleVariant}`}
              id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34dec-82f34ddb"}
              tag={"div"}
            >
              <Block
                className={`color-card_body ${_activeStyleVariant}`}
                tag={"div"}
              >
                {card2Card2Icon}
                <Heading
                  className={`card-headline ${_activeStyleVariant}`}
                  id={"w-node-_1ef05dde-4768-ca21-abbb-189edc10b849-82f34ddb"}
                  tag={"h3"}
                >
                  {card2CardHeadline}
                </Heading>
                <Paragraph
                  className={`paragraph margin-block_xs ${_activeStyleVariant}`}
                >
                  {card2ParagraphText}
                </Paragraph>
                {card2Card2Link}
              </Block>
            </Block>
            <Block
              className={` card is-color-9 padding-block_md padding-inline_responsive-md radius-card ${_activeStyleVariant}`}
              id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34df5-82f34ddb"}
              tag={"div"}
            >
              <Block
                className={`color-card_body ${_activeStyleVariant}`}
                tag={"div"}
              >
                {card3Card3Icon}
                <Heading
                  className={`card-headline ${_activeStyleVariant}`}
                  id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34dfa-82f34ddb"}
                  tag={"h3"}
                >
                  {card3CardHeadline}
                </Heading>
                <Paragraph className={`paragraph ${_activeStyleVariant}`}>
                  {card3ParagraphText}
                </Paragraph>
                {card3Card3Link}
              </Block>
            </Block>
            <Block
              className={` card is-color-9 padding-block_md padding-inline_responsive-md radius-card ${_activeStyleVariant}`}
              id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34dfe-82f34ddb"}
              tag={"div"}
            >
              <Block
                className={`color-card_body ${_activeStyleVariant}`}
                tag={"div"}
              >
                {card4Card4Icon}
                <Heading
                  className={`card-headline ${_activeStyleVariant}`}
                  id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34e07-82f34ddb"}
                  tag={"h3"}
                >
                  {card4CardHeadline}
                </Heading>
                <Paragraph
                  className={`paragraph margin-block_xs ${_activeStyleVariant}`}
                >
                  {card4ParagraphText}
                </Paragraph>
                {card4Card4Link}
              </Block>
            </Block>
            <Block
              className={` card is-color-9 padding-block_md padding-inline_responsive-md radius-card ${_activeStyleVariant}`}
              id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34e0b-82f34ddb"}
              tag={"div"}
            >
              <Block
                className={`color-card_body ${_activeStyleVariant}`}
                tag={"div"}
              >
                {card5Card5Icon}
                <Heading
                  className={`card-headline ${_activeStyleVariant}`}
                  id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34e10-82f34ddb"}
                  tag={"h3"}
                >
                  {card5CardHeadline}
                </Heading>
                <Paragraph
                  className={`paragraph margin-block_xs ${_activeStyleVariant}`}
                >
                  {card5ParagraphText}
                </Paragraph>
                {card5Card5Link}
              </Block>
            </Block>
            <Block
              className={` card is-color-9 padding-block_md padding-inline_responsive-md radius-card ${_activeStyleVariant}`}
              id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34e14-82f34ddb"}
              tag={"div"}
            >
              <Block
                className={`color-card_body ${_activeStyleVariant}`}
                tag={"div"}
              >
                {card6Card6Icon}
                <Heading
                  className={`card-headline ${_activeStyleVariant}`}
                  id={"w-node-a4d1183e-0a30-73b4-11dc-9a2782f34e1a-82f34ddb"}
                  tag={"h3"}
                >
                  {card6CardHeadline}
                </Heading>
                <Paragraph
                  className={`paragraph margin-bottom_none ${_activeStyleVariant}`}
                >
                  {card6ParagraphText}
                </Paragraph>
                {card6Card6Link}
              </Block>
            </Block>
          </Grid>
        </Block>
      </Section>
    </div>
  );
}
