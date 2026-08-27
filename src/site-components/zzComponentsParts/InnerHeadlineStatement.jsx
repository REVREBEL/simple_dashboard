"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InnerHeadlineStatement({
  componentId = "",
  componentVisibility = true,
  headlineHeadlineSizeVariant = null,
  headlineSlot,
  optionsBackgroundTextColor = "Light",
  paragraphBottomParagraphText = "Handcrafted by hoteliers for hoteliers. An agency that empowers independent hotels to generate more demand with dynamic solutions to build awareness through data-informed strategy.",
  paragraphBottomParagraphVisibility = true,
  paragraphTopParagraphText = "We help independent hotels unlock growth and drive profitability —minus the red tape of big-brand limitations. From flexible project work to full-scale revenue operations, our approach is data-led,obsessively strategic, and unapologetically independent.",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6d9",
    "Color 1": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6da",
    "Color 2": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6db",
    "Color 3": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6dc",
    "Color 4": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6dd",
    "Color 5": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6de",
    "Color 6": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6df",
    "Color 7": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e0",
    "Color 8": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e1",
    "Color 9": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e2",
    "Color 1 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e3",
    "Color 2 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e4",
    "Color 3 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e5",
    "Color 4 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e6",
    "Color 5 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e7",
    "Color 6 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e8",
    "Color 7 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6e9",
    "Color 8 Inverse": "w-variant-4a46fc11-46de-34ec-8386-18c1380dd6ea",
    "Color 9 Inverse": "w-variant-5a7c4331-efa6-20d2-2cb5-1212324fdf0d",
  };

  const _activeStyleVariant = _styleVariantMap[optionsBackgroundTextColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentVisibility ? (
        <Section
          className={`component_headlne-4-subsections ${_activeStyleVariant}`}
          id={componentId}
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
              tag={"div"}
            >
              <Block
                className={`component_background-variants ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`component_padding padding-responsive-lg ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {headlineSlot}
                  <Block
                    className={`space_2rem ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <Block
                    className={`grid_2-col gap-md is-column-1-2 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {paragraphBottomParagraphVisibility ? (
                      <Paragraph
                        className={`paragraph text-wrap_pretty ${_activeStyleVariant}`}
                      >
                        {paragraphBottomParagraphText}
                      </Paragraph>
                    ) : null}
                    <Paragraph
                      className={`paragraph text-wrap_pretty ${_activeStyleVariant}`}
                      id={
                        "w-node-_7120c236-e665-ec4d-877c-e0f5fa07e5e2-380dd6ce"
                      }
                    >
                      {paragraphTopParagraphText}
                    </Paragraph>
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
