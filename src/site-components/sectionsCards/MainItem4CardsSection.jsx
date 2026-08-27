"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Container from "../webflow_modules/Layout/components/Container";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-456":{"id":"e-456","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"813d7324-d624-8c85-9af5-9375e7578b6a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"813d7324-d624-8c85-9af5-9375e7578b6a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564785767},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainItem4CardsSection({
  customCodeMatchHeightGroupName = "audit-card-items",
  item1HeadlineText = "Process",
  item1HeadlineTextTag = "h3",
  item1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee77_data-transer.svg",
  item1IconAltText = "__wf_reserved_inherit",
  item1IconVisible = true,
  item1ItemVisibility = true,
  item1ParagraphText = "Deep dive evualuation into the daily, weekly, and monthly revenue management activities",
  item2HeadlineText = "Strategy",
  item2HeadlineTextTag = "h3",
  item2Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf0e9_strategy.svg",
  item2IconAltText = "__wf_reserved_inherit",
  item2IconVisible = true,
  item2ItemVisibility = true,
  item2ParagraphText = "Forecasting techniques, reporting frameworks, strategic evaluations, and group management",
  item3HeadlineText = "Pricing",
  item3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf064_data-sheet_1.svg",
  item3IconAltText = "__wf_reserved_inherit",
  item3IconVisible = true,
  item3ItemVisibility = true,
  item3ParagraphText = "Review of key pricing strategies and potential additional room + ancillary revenue sources",
  item4HeadlineText = "Systems",
  item4HeadlineTextTag = "h3",
  item4Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf061_code.svg",
  item4IconAltText = "__wf_reserved_inherit",
  item4IconVisible = true,
  item4ItemVisibility = true,
  item4ParagraphText = "Comprehensive audit of distribution channels and property management systems",
  mainItemEyebrowText = "Revenue Audit",
  mainItemEyebrowVisibility = true,
  mainItemHeadlineText = "Explore your potenial.",
  mainItemHeadlineTextTag = "h2",
  mainItemParagraphText = "Independent hotels are as unique as their revenue management needs. Our approach starts with a comprehensive review of your current practices, company culture, and day-to-day operations. Our team takes a deep dive to carefully assess:",
  mainItemSubHeadline = "Our in depth revenue audit.",
  mainItemSubHeadlineTag = "h3",
  mainItemSubHeadlineVisibility = true,
  sectionStyleSectionColor = "Light",
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    "Brand Color Primary Light":
      "w-variant-3e8937c9-0229-5acf-5dae-94f933374215",
    "Brand Color Primary Dark":
      "w-variant-bf8eac41-5c65-917e-8bd8-75e63a76e0a9",
    "Brand Color 8": "w-variant-4ae736fc-1244-31e7-7ae7-df9639ceafc5",
    "Brand Color 7": "w-variant-22e23a5a-ccb1-3e11-fe88-11095ab49a33",
  };

  const _activeStyleVariant = _styleVariantMap[sectionStyleSectionColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={`component_size  ${_activeStyleVariant}`}
          grid={{
            type: "section",
          }}
          id={settingsSectionId}
          tag={"section"}
        >
          <Container
            className={`grid_2-col is-3-1 component-color ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`solutions-groups_headline-container ${_activeStyleVariant}`}
              id={"w-node-_813d7324-d624-8c85-9af5-9375e7578b57-e7578b55"}
              tag={"div"}
            >
              <Block
                className={`item-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                {mainItemEyebrowVisibility ? (
                  <Block
                    className={`eyebrow ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {mainItemEyebrowText}
                  </Block>
                ) : null}
                <Heading
                  className={`headline-base font-weight-bold scroll-in-view_slide-left ${_activeStyleVariant}`}
                  tag={mainItemHeadlineTextTag}
                >
                  {mainItemHeadlineText}
                </Heading>
              </Block>
              <Block
                className={`item-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                {mainItemSubHeadlineVisibility ? (
                  <Heading
                    className={`headline-sm text-color-bright-blue scroll-in-view_slide-left ${_activeStyleVariant}`}
                    tag={mainItemSubHeadlineTag}
                  >
                    {mainItemSubHeadline}
                  </Heading>
                ) : null}
              </Block>
              <Block
                className={`item-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Paragraph
                  className={`paragraph margin-top_xxs ${_activeStyleVariant}`}
                >
                  {mainItemParagraphText}
                </Paragraph>
              </Block>
              <Block
                className={`space-md is-hidden_desktop is-hidden_mobile ${_activeStyleVariant}`}
                tag={"div"}
              />
            </Block>
            <Block
              className={`cards_2x2 ${_activeStyleVariant}`}
              id={"w-node-_6e3948c0-029c-e081-c69b-b419f3b7efec-e7578b55"}
              tag={"div"}
            >
              {item1ItemVisibility ? (
                <Block
                  className={`card shadow-blue bg-color-blue-offset ${_activeStyleVariant}`}
                  id={"w-node-_813d7324-d624-8c85-9af5-9375e7578b66-e7578b55"}
                  tag={"div"}
                >
                  <Block
                    className={`card-body_sm ${_activeStyleVariant}`}
                    data-match-height={customCodeMatchHeightGroupName}
                    tag={"div"}
                  >
                    <Block
                      className={`card_audit-item_top ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {item1IconVisible ? (
                        <Image
                          className={`is-component-icon ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={item1Icon}
                          width={"auto"}
                        />
                      ) : null}
                      <Heading
                        className={`headline-sm scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                        data-w-id={"813d7324-d624-8c85-9af5-9375e7578b6a"}
                        tag={item1HeadlineTextTag}
                      >
                        {item1HeadlineText}
                      </Heading>
                    </Block>
                    <Block
                      className={`card_audit-item_bottom ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Paragraph
                        className={`paragraph text-color-component scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                      >
                        {item1ParagraphText}
                      </Paragraph>
                    </Block>
                  </Block>
                </Block>
              ) : null}
              {item2ItemVisibility ? (
                <Block
                  className={`card shadow-blue bg-color-blue-offset ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`card-body_sm ${_activeStyleVariant}`}
                    data-match-height={customCodeMatchHeightGroupName}
                    tag={"div"}
                  >
                    <Block
                      className={`card_audit-item_top ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {item2IconVisible ? (
                        <Image
                          className={`is-component-icon ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={item2Icon}
                          width={"auto"}
                        />
                      ) : null}
                      <Heading
                        className={`headline-sm scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                        tag={item2HeadlineTextTag}
                      >
                        {item2HeadlineText}
                      </Heading>
                    </Block>
                    <Block
                      className={`card_audit-item_bottom ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Paragraph
                        className={`paragraph text-color-component scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                      >
                        {item2ParagraphText}
                      </Paragraph>
                    </Block>
                  </Block>
                </Block>
              ) : null}
              {item3ItemVisibility ? (
                <Block
                  className={`card shadow-blue bg-color-blue-offset ${_activeStyleVariant}`}
                  id={"w-node-_813d7324-d624-8c85-9af5-9375e7578b84-e7578b55"}
                  tag={"div"}
                >
                  <Block
                    className={`card-body_sm ${_activeStyleVariant}`}
                    data-match-height={customCodeMatchHeightGroupName}
                    id={"w-node-_813d7324-d624-8c85-9af5-9375e7578b85-e7578b55"}
                    tag={"div"}
                  >
                    <Block
                      className={`card_audit-item_top ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {item4IconVisible ? (
                        <Image
                          className={`is-component-icon ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={item4Icon}
                          width={"auto"}
                        />
                      ) : null}
                      <Heading
                        className={`headline-sm scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                        tag={item4HeadlineTextTag}
                      >
                        {item4HeadlineText}
                      </Heading>
                    </Block>
                    <Block
                      className={`card_audit-item_bottom ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Paragraph
                        className={`paragraph text-color-component scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                      >
                        {item4ParagraphText}
                      </Paragraph>
                    </Block>
                  </Block>
                </Block>
              ) : null}
              {item4ItemVisibility ? (
                <Block
                  className={`card shadow-blue bg-color-blue-offset ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`card-body_sm ${_activeStyleVariant}`}
                    data-match-height={customCodeMatchHeightGroupName}
                    tag={"div"}
                  >
                    <Block
                      className={`card_audit-item_top ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {item3IconVisible ? (
                        <Image
                          className={`is-component-icon ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={item3Icon}
                          width={"auto"}
                        />
                      ) : null}
                      <Heading
                        className={`headline-sm scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                        tag={"h3"}
                      >
                        {item3HeadlineText}
                      </Heading>
                    </Block>
                    <Block
                      className={`card_audit-item_bottom ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Paragraph
                        className={`paragraph text-color-component scroll-in-view_sticky-fade-in ${_activeStyleVariant}`}
                      >
                        {item3ParagraphText}
                      </Paragraph>
                    </Block>
                  </Block>
                </Block>
              ) : null}
            </Block>
          </Container>
        </Section>
      ) : null}
    </div>
  );
}
