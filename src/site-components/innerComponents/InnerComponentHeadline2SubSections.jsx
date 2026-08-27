"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1230":{"id":"e-1230","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1231"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7e79c9c2-79bc-8845-3cb4-32c695263d42","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7e79c9c2-79bc-8845-3cb4-32c695263d42","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"%","delay":5,"direction":null,"effectIn":true},"createdOn":1778675776762},"e-1234":{"id":"e-1234","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1235"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b0f8216d-9e92-3e67-69af-8d532c9d9b28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b0f8216d-9e92-3e67-69af-8d532c9d9b28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":100,"scrollOffsetUnit":"%","delay":5,"direction":null,"effectIn":true},"createdOn":1779212628601},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InnerComponentHeadline2SubSections({
  flexVertical,
  flexVertical2,
  fontColorVariants = "Color 2",
  headlineFontSize = null,
  headlineSubHeadlineText = (
    <>
      {"Integrated strategies "}
      {": we synchronize revenue management, marketing, and distribution to "}
      {", efficiency, and market share."}
    </>
  ),
  imageImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf1ec_Firefly_A%20modern%20bedroom%20seamlessly%20tran%2035515213%20FHV.avif",
  imageImageAltText = "__wf_reserved_inherit",
  subSection1ParagraphText = "Expertly balance pricing, demand + distribution with data-driven insights tailored for independent hotels, ensuring optimal performance & profitability.",
  subSection2ParagraphText = (
    <>
      {
        "Leverage targeted campaigns and brand storytelling to attract the right guests, boost direct bookings, and elevate your hotel"
      }
      {"'"}
      {"s unique identity."}
    </>
  ),
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"component_headline-2-sub-sections-copy"}
        data-copilot={"true"}
        tag={"div"}
      >
        <Block
          id={"w-node-f8640b6e-1788-8c3a-95ff-0f167c1c4f27-4ad5d40b"}
          tag={"div"}
        >
          <Block
            id={"w-node-_7e79c9c2-79bc-8845-3cb4-32c695263d40-4ad5d40b"}
            tag={"div"}
          >
            <Block
              className={
                "margin-bottom_sm w-node-_7e79c9c2-79bc-8845-3cb4-32c695263d41-4ad5d40b"
              }
              id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5be-035ee5ba"}
              tag={"div"}
            >
              <Heading
                className={"headline-base"}
                data-w-id={"7e79c9c2-79bc-8845-3cb4-32c695263d42"}
                tag={"h2"}
              >
                {"Unify revenue. "}
              </Heading>
              <Heading
                className={"headline-md text-color-2"}
                data-w-id={"b0f8216d-9e92-3e67-69af-8d532c9d9b28"}
                tag={"h2"}
              >
                {"Amplify results."}
              </Heading>
              <Paragraph className={"subheadline-base is-text-wrap-balance"}>
                {headlineSubHeadlineText}
              </Paragraph>
            </Block>
            <Block
              className={
                "image-cover ratio_1x1 is-max-height_175px margin-moble-block_sm"
              }
              tag={"div"}
            >
              <Image
                className={"component_image-cover_swap"}
                height={"auto"}
                loading={"lazy"}
                src={imageImage}
                width={"Auto"}
              />
            </Block>
            <Grid className={"grid_2-col gap-md is-gap-none_mobile"}>
              <Block
                className={
                  "card margin-top_sm w-node-_2232451a-cf6e-a9d0-2bf7-77cf6d693e31-4ad5d40b"
                }
                id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5c4-035ee5ba"}
                tag={"div"}
              >
                <Block
                  className={"card_body is-height_100pct color-card_body"}
                  tag={"div"}
                >
                  {flexVertical2}
                  <Paragraph
                    className={"paragraph"}
                    id={"w-node-_2232451a-cf6e-a9d0-2bf7-77cf6d693e36-4ad5d40b"}
                  >
                    {subSection1ParagraphText}
                  </Paragraph>
                  <Block
                    className={"is-color-5_line"}
                    id={"w-node-_110a50f9-3482-849a-058d-b99fc6e0e681-4ad5d40b"}
                    tag={"div"}
                  />
                </Block>
              </Block>
              <Block
                className={
                  "card margin-top_sm w-node-dc726036-c23d-8ff5-d8ad-5467fc895c25-4ad5d40b"
                }
                id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5c4-035ee5ba"}
                tag={"div"}
              >
                <Block
                  className={"card_body is-height_100pct color-card_body"}
                  tag={"div"}
                >
                  {flexVertical}
                  <Paragraph
                    className={"paragraph"}
                    id={"w-node-dc726036-c23d-8ff5-d8ad-5467fc895c29-4ad5d40b"}
                  >
                    {subSection2ParagraphText}
                  </Paragraph>
                  <Block
                    className={"is-color-5_line"}
                    id={"w-node-dc726036-c23d-8ff5-d8ad-5467fc895c2a-4ad5d40b"}
                    tag={"div"}
                  />
                </Block>
              </Block>
            </Grid>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
