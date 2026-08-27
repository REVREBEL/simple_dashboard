"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";
import { Button } from "../buttons/Button";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Headline4Stats2Buttons({
  button1ButtonColor = null,
  button1ButtonColorVariants = "Color Primary",
  button1ButtonSizeVariants = null,
  button1ButtonText = "[ Icon Button ] ",
  button1ButtonTypeSize = null,
  button1ButtonVisibility = true,

  button1Link = {
    href: "#",
  },

  button2ButtonColor = null,
  button2ButtonColorVariants = "Color Primary",
  button2ButtonSizeVariants = null,
  button2ButtonText = "[ Icon Button ] ",
  button2ButtonTypeSize = null,
  button2ButtonVisibility = true,

  button2Link = {
    href: "#",
  },

  headlineEyebrowText = "Tagline",
  headlineHeadlineTag = "h1",
  headlineHeadlineText = (
    <>
      {"Your value proposition "}
      {"."}
      <br />
    </>
  ),
  headlineSubHeadlineText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  metric1Metric = "50%",
  metric1Text = "Short heading goes here",
  metric2Metric = "50%",
  metric2Text = "Short heading goes here",
  metric3Metric = "50%",
  metric3Text = "Short heading goes here",
  metric4Metric = "50%",
  metric4Text = "Short heading goes here",
  optionsColor = "Light",
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-89154665-8d7c-3079-ddf6-3ec170c709ec",
    "Color 1": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709ed",
    "Color 2": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709ee",
    "Color 3": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709ef",
    "Color 4": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f0",
    "Color 5": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f1",
    "Color 6": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f2",
    "Color 7": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f3",
    "Color 8": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f4",
    "Color 9": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f5",
    "Color 1 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f6",
    "Color 2 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f7",
    "Color 3 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f8",
    "Color 4 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709f9",
    "Color 5 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709fa",
    "Color 6 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709fb",
    "Color 7 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709fc",
    "Color 8 Inverse": "w-variant-89154665-8d7c-3079-ddf6-3ec170c709fd",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={`component_headlne-4-subsections bg-color-light ${_activeStyleVariant}`}
          data-copilot={"true"}
          id={settingsSectionId}
          tag={"section"}
        >
          <Section
            className={`component_wrapper ${_activeStyleVariant}`}
            grid={{
              type: "section",
            }}
            tag={"section"}
          >
            <BlockContainer
              className={`component_container ${_activeStyleVariant}`}
              grid={{
                type: "container",
              }}
              id={"fixed-root"}
              tag={"div"}
            >
              <Block
                className={`color-variants ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`component_padding padding-block_responsive-xxl padding-inline_responsive-md ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`stats_component ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`stats_container ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`stats_wrapper text-color-white ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`stats_headline-wrapper ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`eyebrow_wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`eyebrow margin-bottom_none ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {headlineEyebrowText}
                            </Block>
                          </Block>
                          <Block
                            className={`stats_headline-content ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`div-block-665 ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Heading
                                className={`headline-base margin-bottom_none text-align_left ${_activeStyleVariant}`}
                                tag={headlineHeadlineTag}
                              >
                                {headlineHeadlineText}
                              </Heading>
                              <Block
                                className={`paragraph margin-top_xs ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {headlineSubHeadlineText2}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block
                          className={`stats_action-group margin-top_sm ${_activeStyleVariant}`}
                          id={
                            "w-node-_1b2d1985-3d33-9bb2-b210-1b4b90579afd-70c709e5"
                          }
                          tag={"div"}
                        >
                          <Button
                            buttonColor={button1ButtonColorVariants}
                            buttonLink={button1Link}
                            buttonText={button1ButtonText}
                            buttonVisibility={button1ButtonVisibility}
                          />
                          <Button
                            buttonColor={button2ButtonColorVariants}
                            buttonLink={button2Link}
                            buttonText={button2ButtonText}
                            buttonVisibility={button2ButtonVisibility}
                          />
                        </Block>
                        <Block
                          className={`stat_wrapper ${_activeStyleVariant}`}
                          id={
                            "w-node-_1b2d1985-3d33-9bb2-b210-1b4b90579b02-70c709e5"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={`stat_row ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`stat_item ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`stat_metic ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {metric1Metric}
                              </Block>
                              <Block
                                className={`stat_description ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {metric1Text}
                              </Block>
                            </Block>
                            <Block
                              className={` stat_item ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block tag={"div"}>
                                <Block
                                  className={` stat_metic ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {metric2Metric}
                                </Block>
                                <Block
                                  className={` stat_description ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {metric2Text}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block
                            className={` stat_row ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={` stat_item ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={` stat_metic ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {metric3Metric}
                              </Block>
                              <Block
                                className={` stat_description ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {metric3Text}
                              </Block>
                            </Block>
                            <Block
                              className={` stat_item ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={` stat_metic ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {metric4Metric}
                              </Block>
                              <Block
                                className={` stat_description ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {metric4Text}
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </BlockContainer>
          </Section>
        </Section>
      ) : null}
    </div>
  );
}
