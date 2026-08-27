"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";
import { Button } from "../buttons/Button";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BlogArticleVerticalList({
  blogListHeadlineText = "Heading",
  blogListHeadlineTextTag = "h3",
  blogListLinkColor = null,
  blogListParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  exploreAllPostsLinkColor = null,
  mainContentBlogListHeadline = "Unlock Hotel Revenue Secrets",
  mainContentBlogListHeadlineTag = "h3",
  mainContentColor = null,
  mainContentLabelText = "[ Discover Trend ] ",
  mainContentParagraph = "Discover the latest trends, tips, and stories shaping the travel and hospitality industry. Stay ahead with expert insights and actionable advice.",
  mainContentTypeSize = null,
  sectionId = "",
  sectionVisibility = true,
  slot,
  slot2,
  slotReadMore,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {sectionVisibility ? (
        <BlockContainer
          className={"component_wrapper"}
          grid={{
            type: "container",
          }}
          id={sectionId}
          tag={"div"}
        >
          <BlockContainer
            className={"component_container"}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={
                "component_padding padding-inline_sm padding-block_xxl max-width_medium"
              }
              tag={"div"}
            >
              <Grid className={"grid_2-col text-color-primary"}>
                <Block className={"content-wrapper"} tag={"div"}>
                  <Block className={"color-card_body"} tag={"div"}>
                    <Heading
                      className={"headline-sm"}
                      tag={mainContentBlogListHeadlineTag}
                    >
                      {mainContentBlogListHeadline}
                    </Heading>
                    <Paragraph className={"paragraph"}>
                      {mainContentParagraph}
                    </Paragraph>
                    <Block
                      className={"buton-wrapper margin-top_sm"}
                      tag={"div"}
                    >
                      <Button buttonText={mainContentLabelText} />
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={
                    "flex_vertical gap-md color-card_body w-node-a9471b66-ec3c-f3fc-6177-6d1194ef6f66-94ef6f5d"
                  }
                  id={"w-node-_678e5512-efc0-e6c2-82d1-566e0aa480c2-0aa480b2"}
                  tag={"div"}
                >
                  <Block className={"color-card_body"} tag={"div"}>
                    <Block
                      className={" headline-sm margin-bottom-md"}
                      tag={"div"}
                    >
                      {"Recent Articles"}
                    </Block>
                    <Block
                      className={"divider margin-bottom_large"}
                      tag={"div"}
                    />
                    <Block className={"color-card_body"} tag={"div"}>
                      {slot}
                      <Heading
                        className={"headline-xxs margin-block_xs"}
                        tag={blogListHeadlineTextTag}
                      >
                        {blogListHeadlineText}
                      </Heading>
                      <Paragraph className={"paragraph_sm  slot_card-meta"}>
                        {blogListParagraph}
                      </Paragraph>
                      <Block
                        className={"button-wrapper slot_read-more"}
                        tag={"div"}
                      >
                        {slot2}
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={"button-wrapper flex-align_right"}
                    tag={"div"}
                  >
                    {slotReadMore}
                  </Block>
                </Block>
              </Grid>
            </Block>
          </BlockContainer>
        </BlockContainer>
      ) : null}
    </div>
  );
}
