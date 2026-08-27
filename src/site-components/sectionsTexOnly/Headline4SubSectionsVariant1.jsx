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

export function Headline4SubSectionsVariant1({
  highlightsHighlightsParagraph = "You could have the perfect package, a killer rate strategy, and the best room descriptions on the planet — but if your distribution isn’t firing on all cylinders, it’s like driving a Bugatti at 20mph. Independent hotels have an edge. We help you use that agility to outperform slower,brand-bound competitors with faster time to market, flexible rate strategies, and channel-specific precision.",
  item1Cta = (
    <>
      {"Every Channel Should Earn its Keep. "}
      <br />
      {"We’ll Make Sure it Does."}
    </>
  ),
  item1Paragraph = "We help you unlock the full value of your IBE, OTA, GDS,and direct distribution partnerships — from selecting theright mix to negotiating deals and executing integrationsthat actually perform.",
  item1SubheadineTag = "h3",
  item1Subheadline = (
    <>
      {"System Audits + "}
      <br />
      {"Config Clean-up"}
    </>
  ),
  item2Cta = "Welcome to the part of the GDS Most Hotels Ignore. We don’t.",
  item2Paragraph = (
    <>
      {
        ". We leverage GDS insights, optimize content, and improve merchandising so your property gets seen — and booked — by the right audiences. Welcome to the part of the GDS most hotels ignore. We don’t."
      }
      <br />
    </>
  ),
  item2Subheadlines = (
    <>
      {"GDS Visibility "}
      <br />
      {"& Optimization"}
    </>
  ),
  item2SubheadlinesTag = "h3",
  item3Cta = "Your crs isn’t Haunted. it Just Needs a Good Exorcist (That’s Us).",
  item3Paragraph = "Full support in Revenue Strategy, Distribution & Performance Marketing, best for long term engagements. One integrated platform, zero fluff. Strategy, execution, optimization — all working in harmony like a tightly-run call sheet.",
  item3Subheadline = (
    <>
      {"Channel Strategy "}
      <br />
      {"& Partner Management"}
    </>
  ),
  item3SubheadlineTag = "h3",
  item4Cta = "ProjectPlans. Executed. Your Offer Hits the Market Only when it's AbsolutelyFlawless.",
  item4Paragraph = "Before a campaign goes live, we test the bookingexperience across every channel. If it’s broken, we fix it. Ifit’s confusing, we simplify it to ensure it’s conversionoptimized for the consumer.",
  item4Subheadline = (
    <>
      {"Test Shops & "}
      <br />
      {"Retail Readiness"}
    </>
  ),
  item4SubheadlineTag = "h3",
  mainSectionParagraph = "Distribution is more than just rates and rooms — it’s the engine behind your hotel’s revenueperformance. We help you build a lean, high-performance machine that connects the right offer tothe right guest at the right time — across every channel that matters. No fluff. No wasted motion.Just calibrated distribution that moves with purpose.",
  optionsBackgroundTextColorVariants = "Light",
  slotHeadline,
  slotHeadline2,
  slotLabel,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcc7",
    "Brand Color 1": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcc8",
    "Brand Color 2": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcc9",
    "Brand Color 3": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcca",
    "Brand Color 5": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dccb",
    "Brand Color 4": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dccc",
    "Brand Color 6": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dccd",
    "Brand Color 7": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcce",
    "Brand Color 8": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dccf",
    "Brand Color 1 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd0",
    "Brand Color 2 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd1",
    "Brand Color 3 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd2",
    "Brand Color 4 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd3",
    "Brand Color 5 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd4",
    "Brand Color 6 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd5",
    "Brand Color 7 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd6",
    "Brand Color 8 Inverse": "w-variant-42c9453f-a1c8-3496-f88c-b911c8e9dcd7",
  };

  const _activeStyleVariant =
    _styleVariantMap[optionsBackgroundTextColorVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={`component_headlne-4-subsections ${_activeStyleVariant}`}
        tag={"section"}
      >
        <Grid className={`grid_1-col ${_activeStyleVariant}`}>
          <Block
            className={`card text-primary w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dc5f-c8e9dc57 ${_activeStyleVariant}`}
            id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5c4-035ee5ba"}
            tag={"div"}
          >
            <Block
              className={`content-cards_wrapper ${_activeStyleVariant}`}
              tag={"div"}
            >
              {slotHeadline}
              {slotHeadline2}
              <Paragraph className={`paragraph-md ${_activeStyleVariant}`}>
                {mainSectionParagraph}
              </Paragraph>
              <Block
                className={`margin-block_sm ${_activeStyleVariant}`}
                id={"w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dc68-c8e9dc57"}
                tag={"div"}
              >
                <Block
                  className={`label-wrapper flex-vertical ${_activeStyleVariant}`}
                  id={"w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dc75-c8e9dc57"}
                  tag={"div"}
                >
                  {slotLabel}
                  <Paragraph className={`paragraph ${_activeStyleVariant}`}>
                    {highlightsHighlightsParagraph}
                  </Paragraph>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            className={`text-color-aqua ${_activeStyleVariant}`}
            id={"w-node-_3426bc21-a221-f4a9-4b9e-2600718920f5-c8e9dc57"}
            tag={"div"}
          >
            <Block
              className={`grid_2-col gap-responsive_xxl w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dca7-c8e9dc57 ${_activeStyleVariant}`}
              id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188de-035ee5ba"}
              tag={"div"}
            >
              <Block
                className={`card ${_activeStyleVariant}`}
                id={"w-node-_6f0ff44e-3c80-f607-4508-e13e6ae84642-c8e9dc57"}
                tag={"div"}
              >
                <Block
                  className={`card_body overview-vertical-card color-card_body ${_activeStyleVariant}`}
                  id={"w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dca8-c8e9dc57"}
                  tag={"div"}
                >
                  <Heading
                    className={`headline-xxs w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dca9-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={item1SubheadineTag}
                  >
                    {item3Subheadline}
                  </Heading>
                  <Paragraph
                    className={`paragraph_sm margin-block_xxs ${_activeStyleVariant}`}
                  >
                    {item1Paragraph}
                  </Paragraph>
                  <Block
                    className={`line-seperator is-1rem ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <Block
                    className={`headline_1-07rem w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcab-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={"div"}
                  >
                    {item1Cta}
                  </Block>
                </Block>
              </Block>
              <Block
                className={`card ${_activeStyleVariant}`}
                id={"w-node-df2b4210-4a2b-78a7-3ee7-275228fdbf29-c8e9dc57"}
                tag={"div"}
              >
                <Block
                  className={`card_body overview-vertical-card color-card_body ${_activeStyleVariant}`}
                  id={"w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcaf-c8e9dc57"}
                  tag={"div"}
                >
                  <Heading
                    className={`headline-xxs w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcb0-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={item2SubheadlinesTag}
                  >
                    {item2Subheadlines}
                  </Heading>
                  <Paragraph
                    className={`paragraph_sm margin-block_xxs ${_activeStyleVariant}`}
                  >
                    {item2Paragraph}
                  </Paragraph>
                  <Block
                    className={`line-seperator is-1rem ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <Block
                    className={`headline_1-07rem w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcb2-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={"div"}
                  >
                    {item2Cta}
                  </Block>
                </Block>
              </Block>
              <Block
                className={`card ${_activeStyleVariant}`}
                id={"w-node-_6dc052a0-29d4-a458-8f7c-e715c3497a10-c8e9dc57"}
                tag={"div"}
              >
                <Block
                  className={`card_body overview-vertical-card color-card_body ${_activeStyleVariant}`}
                  id={"w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcb6-c8e9dc57"}
                  tag={"div"}
                >
                  <Block
                    className={`space-holdier ${_activeStyleVariant}`}
                    id={"w-node-d45a4d6f-a338-62b1-b4ee-b11ccaeef1a6-c8e9dc57"}
                    tag={"div"}
                  />
                  <Heading
                    className={`headline-xxs w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcb7-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={item3SubheadlineTag}
                  >
                    {item1Subheadline}
                  </Heading>
                  <Paragraph
                    className={`paragraph_sm margin-block_xxs ${_activeStyleVariant}`}
                  >
                    {item3Paragraph}
                  </Paragraph>
                  <Block
                    className={`line-seperator is-1rem ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <Block
                    className={`headline_1-07rem w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcb9-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={"div"}
                  >
                    {item3Cta}
                  </Block>
                  <Block
                    className={`is-max-width_450px ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                </Block>
              </Block>
              <Block
                className={`card ${_activeStyleVariant}`}
                id={"w-node-_469bca3d-9698-26af-6899-1b469c324669-c8e9dc57"}
                tag={"div"}
              >
                <Block
                  className={`card_body overview-vertical-card color-card_body ${_activeStyleVariant}`}
                  id={"w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcbd-c8e9dc57"}
                  tag={"div"}
                >
                  <Block
                    className={`space-holdier ${_activeStyleVariant}`}
                    id={"w-node-e099f338-263f-bf8b-7319-0e0085210c54-c8e9dc57"}
                    tag={"div"}
                  />
                  <Heading
                    className={`headline-xxs w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcbe-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={item4SubheadlineTag}
                  >
                    {item4Subheadline}
                  </Heading>
                  <Paragraph
                    className={`paragraph_sm margin-block_xxs ${_activeStyleVariant}`}
                  >
                    {item4Paragraph}
                  </Paragraph>
                  <Block
                    className={`line-seperator is-1rem ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <Block
                    className={`headline_1-07rem w-node-_42c9453f-a1c8-3496-f88c-b911c8e9dcc0-c8e9dc57 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                    tag={"div"}
                  >
                    {item4Cta}
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Grid>
      </Section>
    </div>
  );
}
