"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Grid from "../webflow_modules/Layout/components/Grid";
import Image from "../webflow_modules/Basic/components/Image";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";
import { ComponentHeadlineSizeVariants } from "../componentTemplates/ComponentHeadlineSizeVariants";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ExtraLargeHeroPhotoSection({
  button1ButtonColor = null,
  button1ButtonSizeVariants = null,
  button1ButtonTypeSize = null,
  button2ButtonColor = null,
  button2ButtonColorVariants = "Color 7",
  button2ButtonSizeVariants = null,
  button2ButtonTypeSize = null,
  buttonSlot,
  buttonSlot2,
  headlineHeadlineFontSizeVariant = null,
  headlineSubHeadlineText = "This is a subheading about one sentence in length. Use it to explain how your product solves a meaningful problem.",
  heroImageEyebrowText = "Key Focus Areas",
  variant = "Light",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426887",
    "Brand Color 1": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426888",
    "Brand Color 2": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426889",
    "Brand Color 3": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688a",
    "Brand Color 4": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688b",
    "Brand Color 5": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688c",
    "Brand Color 6": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688d",
    "Brand Color 7": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688e",
    "Brand Color 8": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e42688f",
    "Brand Color 1 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426890",
    "Brand Color 2 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426891",
    "Brand Color 3 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426892",
    "Brand Color 4 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426893",
    "Brand Color 5 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426894",
    "Brand Color 6 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426895",
    "Brand Color 7 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426896",
    "Brand Color 8 Inverse": "w-variant-7e91747f-8acc-b8e9-4f4b-1b185e426897",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={`component_size text-color-primary ${_activeStyleVariant}`}
        data-copilot={"true"}
        tag={"section"}
      >
        <Section
          className={`component_wrapper overflow_visible ${_activeStyleVariant}`}
          grid={{
            type: "section",
          }}
          tag={"section"}
        >
          <BlockContainer
            className={`component_container padding-inline_none ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            id={"fixed-root"}
            tag={"div"}
          >
            <Block
              className={`component_size text-color-primary ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`component_padding padding-md padding-right_none padding-inline_mobile-none ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Grid
                  className={`grid-hero ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`section ${_activeStyleVariant}`}
                    id={"w-node-_7e91747f-8acc-b8e9-4f4b-1b185e42687a-5e426877"}
                    tag={"div"}
                  >
                    <Block
                      className={`eyebrow ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {heroImageEyebrowText}
                    </Block>
                    <ComponentHeadlineSizeVariants
                      headlineSizeVariants={"Level 4 Biggest"}
                      headlineText={"Big Headline"}
                    />
                    <Paragraph
                      className={`paragraph margin-bottom_sm ${_activeStyleVariant}`}
                    >
                      {headlineSubHeadlineText}
                    </Paragraph>
                    <Block
                      className={`button-group ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {buttonSlot}
                      {buttonSlot2}
                    </Block>
                  </Block>
                  <Block
                    id={"w-node-_7e91747f-8acc-b8e9-4f4b-1b185e426881-5e426877"}
                    tag={"div"}
                  >
                    <Block
                      className={`hero_image-wrapper overflow_visible ${_activeStyleVariant}`}
                      id={
                        "w-node-d81ff678-982b-555b-8f0b-9b390eba1db5-5e426877"
                      }
                      tag={"div"}
                    >
                      <Image
                        alt={
                          "Person in a sun hat and polka dot dress stands by a pool, facing away."
                        }
                        className={`image_long-shadow ${_activeStyleVariant}`}
                        height={"auto"}
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebe0_revrebel_a-guest-relaxes-at-the-balcony-of-a-palm-springs-m__83436.avif"
                        }
                        width={"auto"}
                      />
                    </Block>
                  </Block>
                </Grid>
              </Block>
            </Block>
          </BlockContainer>
        </Section>
      </Section>
    </div>
  );
}
