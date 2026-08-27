"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import BlockContainer from "./webflow_modules/Layout/components/BlockContainer";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-69":{"id":"e-69","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046},"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1090":{"id":"e-1090","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1091"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7471affc-6368-6f4b-9914-0a1144595607","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7471affc-6368-6f4b-9914-0a1144595607","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774044474697},"e-1092":{"id":"e-1092","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1093"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7471affc-6368-6f4b-9914-0a1144595610","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7471affc-6368-6f4b-9914-0a1144595610","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774044489766},"e-1094":{"id":"e-1094","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1095"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7471affc-6368-6f4b-9914-0a1144595612","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7471affc-6368-6f4b-9914-0a1144595612","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774044507444},"e-1096":{"id":"e-1096","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1097"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7471affc-6368-6f4b-9914-0a1144595625","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7471affc-6368-6f4b-9914-0a1144595625","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774046439465},"e-1098":{"id":"e-1098","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1099"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7471affc-6368-6f4b-9914-0a1144595627","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7471affc-6368-6f4b-9914-0a1144595627","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774046450280},"e-1101":{"id":"e-1101","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7471affc-6368-6f4b-9914-0a1144595632","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7471affc-6368-6f4b-9914-0a1144595632","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1774046460985},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SoloOperators({
  featureBoxHeadline = "Streamlined Support for Seamless Distribution Execution",
  featureBoxParagraph = (
    <>
      {
        "Our step in distribution support liberates your team to architect + focus on strategy while we engineer the execution. From full system builds and seasonal recalibrations to RFP-season reinforcements, wedon't just input rates; we optimize the entire flow. "
      }
      <br />
      <br />
      {
        "Our expertise in advanced CRS pricing rules and conversion-centric policy logic transforms configuration from a checklist item into a potent performance tool."
      }
    </>
  ),
  mainSectionMainHeadline = "Strategic Backup for Solo Operators.",
  mainSectionSubHeadline = "Going independent doesn’t mean going without expert support. We plug in like a regional — guiding your team, optimizing your systems, or giving you the support to ensure your hotel performs like it has a whole fleet behind it.",
  section1Eyebrow = "revenue management support",
  section1Headline = "A Dedicated Strategy Advisor",
  section1Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf213_Brainstorming%20Sketches%2C%20Wireframes%2C%20%26%20Design%20Mockups%20Alt.avif",
  section1Paragraph = (
    <>
      {
        "If you're operating solo — no brand, no management company — you've probably felt the gap. Especially when it comes to revenue. Strategy gets siloed. Tech gets underutilized. And your on-property team ends up doing Olympic-level multitasking with no real safety net. That’s where we come in."
      }
      <br />
      <br />
      {
        "We provide regional-style revenue support without the bloated overhead. Think of us as your remote-but-plugged-in revenue command center — the ones who show up to your weekly strategy calls with insights that are sharp, doable, and backed by actual data (not guesswork)."
      }
      <br />
      <br />
      {
        "We don’t just suggest ideas — we roll up our sleeves and pressure-test them alongside your team. We make sure the right levers are being pulled across pricing, positioning, content, and channel mix — and we make it easy to track the wins. You’ll get quarterly performance reviews that go beyond recaps. These are roadmap-level deep dives: what we recommended, what moved the needle, and where we’re steering next. "
      }
      <br />
    </>
  ),
  section1SubHeadline = "Guidance Like a Brand. Freedom Like an Indie.",
  section1SummaryLine = "This isn’t support. It’s revenue reinforcement.",
  section2Eyebrow = "rate loading, connecting new partners +more",
  section2Headline = "Distribution Support",
  section2Paragraph = (
    <>
      {
        "For independent operators, the absence of brand or management support often translates to siloed strategy, under leveraged tech, and a lack of a dedicated revenue sounding board. We provide regional-level revenue support without the overhead. "
      }
      <br />
      <br />
      {
        "Consider us your remote, integrated revenue command center, from complex system setup questions to delivering sharp, data-backed insightsdirectly to your weekly strategy calls."
      }
    </>
  ),
  section2SubHeadline = "Get Your Rates Together (Literally).",
  section2SummaryLine = "Skip the guesswork, get actionable intelligence and the answers when you need them most.",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"g-container"} tag={"div"}>
        <Section
          className={"component_wrapper"}
          grid={{
            type: "section",
          }}
          tag={"section"}
        >
          <BlockContainer
            className={"component_container"}
            grid={{
              type: "container",
            }}
            id={"fixed-root"}
            tag={"div"}
          >
            <Block className={"component_size text-color-primary"} tag={"div"}>
              <Block
                className={"component_padding is-mobile-padding_2rem"}
                tag={"div"}
              >
                <Block className={"color-variants"} tag={"div"}>
                  <Block
                    className={"padding-inline_md"}
                    id={"w-node-_7471affc-6368-6f4b-9914-0a1144595605-445955ff"}
                    tag={"div"}
                  />
                  <Block
                    className={
                      "margin-bottom_lg is-mobile-padding_2rem w-node-_7471affc-6368-6f4b-9914-0a1144595606-445955ff"
                    }
                    id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5be-035ee5ba"}
                    tag={"div"}
                  >
                    <Heading
                      className={"headline-xl"}
                      data-w-id={"7471affc-6368-6f4b-9914-0a1144595607"}
                      tag={"h2"}
                    >
                      {mainSectionMainHeadline}
                    </Heading>
                    <Paragraph
                      className={
                        "subheadline-base padding-block_xs is-normal-case"
                      }
                    >
                      {mainSectionSubHeadline}
                    </Paragraph>
                  </Block>
                  <Block
                    className={
                      "grid_2-col is-col-2-1 gap-md w-node-_7471affc-6368-6f4b-9914-0a114459560b-445955ff"
                    }
                    id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5c4-035ee5ba"}
                    tag={"div"}
                  >
                    <Block
                      className={"card_body"}
                      id={
                        "w-node-_7471affc-6368-6f4b-9914-0a114459560c-445955ff"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"icon margin-bottom_xs is-hidden"}
                        tag={"div"}
                      />
                      <Block className={"eyebrow text-color-3"} tag={"div"}>
                        {section1Eyebrow}
                      </Block>
                      <Heading
                        className={
                          "headline-lg w-node-_7471affc-6368-6f4b-9914-0a1144595610-445955ff"
                        }
                        data-w-id={"7471affc-6368-6f4b-9914-0a1144595610"}
                        id={
                          "w-node-_35bf060b-8a13-deba-de16-d8c5035ee5ca-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {section1Headline}
                      </Heading>
                      <Heading
                        className={
                          "headline-xs w-node-_7471affc-6368-6f4b-9914-0a1144595612-445955ff"
                        }
                        data-w-id={"7471affc-6368-6f4b-9914-0a1144595612"}
                        id={
                          "w-node-_35bf060b-8a13-deba-de16-d8c5035ee5ca-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {section1SubHeadline}
                      </Heading>
                      <Paragraph className={"paragraph margin-block_xs"}>
                        {section1Paragraph}
                      </Paragraph>
                      <Paragraph className={"headline-xxs text-size-md"}>
                        {section1SummaryLine}
                      </Paragraph>
                    </Block>
                    <Image
                      alt={""}
                      className={"gallery04_image"}
                      height={"auto"}
                      id={
                        "w-node-_7471affc-6368-6f4b-9914-0a114459561f-445955ff"
                      }
                      loading={"lazy"}
                      src={section1Image}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={
                      "flex-horizontal gap-md padding-top_xl is-stack-on-tablet"
                    }
                    id={"w-node-_7471affc-6368-6f4b-9914-0a1144595620-445955ff"}
                    tag={"div"}
                  >
                    <Block
                      className={"col-1 is-60pt width_100pct_tablet"}
                      id={
                        "w-node-_7471affc-6368-6f4b-9914-0a1144595621-445955ff"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"icon margin-bottom_xs is-hidden"}
                        tag={"div"}
                      />
                      <Block className={"eyebrow text-color-3"} tag={"div"}>
                        {section2Eyebrow}
                      </Block>
                      <Heading
                        className={
                          "headline-md w-node-_7471affc-6368-6f4b-9914-0a1144595625-445955ff"
                        }
                        data-w-id={"7471affc-6368-6f4b-9914-0a1144595625"}
                        id={
                          "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {section2Headline}
                      </Heading>
                      <Heading
                        className={
                          "headline-xs w-node-_7471affc-6368-6f4b-9914-0a1144595627-445955ff"
                        }
                        data-w-id={"7471affc-6368-6f4b-9914-0a1144595627"}
                        id={
                          "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {section2SubHeadline}
                      </Heading>
                      <Paragraph className={"paragraph margin-block_xs"}>
                        {section2Paragraph}
                      </Paragraph>
                      <Paragraph className={"headline-xxs text-size-md"}>
                        {section2SummaryLine}
                      </Paragraph>
                    </Block>
                    <Block
                      className={"col-2 is-40pct width_100pct_tablet"}
                      id={
                        "w-node-_7471affc-6368-6f4b-9914-0a1144595630-445955ff"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"bg-color-frost padding_sm"}
                        id={
                          "w-node-_7471affc-6368-6f4b-9914-0a1144595631-445955ff"
                        }
                        tag={"div"}
                      >
                        <Heading
                          className={"headline-xxs"}
                          data-w-id={"7471affc-6368-6f4b-9914-0a1144595632"}
                          id={
                            "w-node-_7471affc-6368-6f4b-9914-0a1144595632-445955ff"
                          }
                          tag={"h3"}
                        >
                          {featureBoxHeadline}
                        </Heading>
                        <Paragraph className={"paragraph margin-top_xs"}>
                          {featureBoxParagraph}
                        </Paragraph>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </BlockContainer>
        </Section>
      </Block>
    </div>
  );
}
