"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-156":{"id":"e-156","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-953"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c19a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c19a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1755436931260},"e-158":{"id":"e-158","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-955"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c19c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c19c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1755437250752},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1060":{"id":"e-1060","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1061"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1a7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1a7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044080563},"e-1062":{"id":"e-1062","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1063"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1b5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1b5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":575,"direction":null,"effectIn":true},"createdOn":1774044089483},"e-1064":{"id":"e-1064","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1065"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1ab","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1ab","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044099118},"e-1066":{"id":"e-1066","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1067"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1ad","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1ad","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":450,"direction":null,"effectIn":true},"createdOn":1774044108666},"e-1068":{"id":"e-1068","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1069"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1a9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1a9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044119866},"e-1070":{"id":"e-1070","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1071"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1af","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1af","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":500,"direction":null,"effectIn":true},"createdOn":1774044129420},"e-1072":{"id":"e-1072","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1073"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4e57adc2-36b3-12c2-c821-6fbe7c827ea1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4e57adc2-36b3-12c2-c821-6fbe7c827ea1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":475,"direction":null,"effectIn":true},"createdOn":1774044142289},"e-1074":{"id":"e-1074","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1075"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":350,"direction":null,"effectIn":true},"createdOn":1774044152349},"e-1076":{"id":"e-1076","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1077"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"df9c5b7b-1fc0-788f-859b-57b80182c1b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":550,"direction":null,"effectIn":true},"createdOn":1774044170506},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainContentBlock6IconsColumns({
  imageImage1 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb5_amadeus_circle.png",
  imageImage2 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee55_SHR%20Group.svg",
  imageImage3 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf292_Duetto%20RMS.svg",
  imageImage4 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf27e_Olive%20AI.svg",
  imageImage5 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf28c_IDeas%20RMS.svg",
  imageImage6 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf28d_Trip%20Tease.svg",
  imageImage7 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf28f_Lighthouse.svg",
  imageImage8 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf291_Oracle%20Hospitality.svg",
  imageImage9 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf293_Sabre%20Hospitality.svg",
  mainEyebrowText = "Tech Fluency",
  mainHeadlineTag = "h2",
  mainHeadlineText = "Technology Mastery. ",
  mainParagraphText = (
    <>
      {
        "We help hotels harness the full potential of their technology. In an industry often tied to conventional approaches, we take a different path—leveraging deep expertise to streamline operations, optimize platforms, and drive results. "
      }
      <br />
      <br />
      {
        "From Opera Cloud and Sabre Hospitality Solutions to the latest PMS and distribution tools, our team doesn’t just use systems—we master them, ensuring your technology works harder for you."
      }
    </>
  ),
  mainSubHeadlineTag = "h3",
  mainSubHeadlineText = "Elevated Efficiency.",
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={"component_wrapper"}
          grid={{
            type: "section",
          }}
          id={settingsSectionId}
          tag={"section"}
        >
          <Block
            className={"component_container text-color_primary"}
            tag={"div"}
          >
            <BlockContainer
              className={"component_padding"}
              grid={{
                type: "container",
              }}
              tag={"div"}
            >
              <Block className={"grid_2-col gap-md"} tag={"div"}>
                <Block
                  className={"headline-wrapper text-color-blue"}
                  id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c197-0182c190"}
                  tag={"div"}
                >
                  <Block
                    className={"eyebrow text-color-2 flex-align-left"}
                    tag={"div"}
                  >
                    {mainEyebrowText}
                  </Block>
                  <Heading
                    className={"headline-medium"}
                    data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c19a"}
                    tag={mainHeadlineTag}
                    value={"TY"}
                  >
                    {mainHeadlineText}
                  </Heading>
                  <Heading
                    className={
                      "headline-sm flex-algin_stretch text-color-bright-blue mobile-headline-sm scroll-in-view_sticky-fade-in"
                    }
                    data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c19c"}
                    tag={mainSubHeadlineTag}
                    value={"TY"}
                  >
                    {mainSubHeadlineText}
                  </Heading>
                  <Paragraph className={"paragraph"}>
                    {mainParagraphText}
                  </Paragraph>
                </Block>
                <Block
                  className={"space-md is-hidden_desktop"}
                  id={"w-node-_212831eb-b258-565a-a7a3-793693d2ca63-0182c190"}
                  tag={"div"}
                />
                <Block
                  className={"partners_logo-wrapper"}
                  id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1a5-0182c190"}
                  tag={"div"}
                >
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1a6-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1a7"}
                      height={"auto"}
                      id={
                        "w-node-df9c5b7b-1fc0-788f-859b-57b80182c1a7-0182c190"
                      }
                      loading={"lazy"}
                      src={imageImage1}
                      width={"Auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1b4-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1b5"}
                      height={"auto"}
                      loading={"lazy"}
                      src={imageImage2}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1aa-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1ab"}
                      height={"auto"}
                      id={
                        "w-node-df9c5b7b-1fc0-788f-859b-57b80182c1ab-0182c190"
                      }
                      loading={"lazy"}
                      src={imageImage3}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1ac-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1ad"}
                      height={"auto"}
                      loading={"lazy"}
                      src={imageImage4}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1a8-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1a9"}
                      height={"auto"}
                      id={
                        "w-node-df9c5b7b-1fc0-788f-859b-57b80182c1a9-0182c190"
                      }
                      loading={"lazy"}
                      src={imageImage5}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1ae-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1af"}
                      height={"auto"}
                      id={
                        "w-node-df9c5b7b-1fc0-788f-859b-57b80182c1af-0182c190"
                      }
                      loading={"lazy"}
                      src={imageImage6}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-_4e57adc2-36b3-12c2-c821-6fbe7c827ea0-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"4e57adc2-36b3-12c2-c821-6fbe7c827ea1"}
                      height={"auto"}
                      id={
                        "w-node-_4e57adc2-36b3-12c2-c821-6fbe7c827ea1-0182c190"
                      }
                      loading={"lazy"}
                      src={imageImage7}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1b0-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1b1"}
                      height={"auto"}
                      loading={"lazy"}
                      src={imageImage8}
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={"partners_icon-wrapper"}
                    id={"w-node-df9c5b7b-1fc0-788f-859b-57b80182c1b2-0182c190"}
                    tag={"div"}
                  >
                    <Image
                      alt={"Integration icon"}
                      className={"partner-icon"}
                      data-w-id={"df9c5b7b-1fc0-788f-859b-57b80182c1b3"}
                      height={"auto"}
                      id={
                        "w-node-df9c5b7b-1fc0-788f-859b-57b80182c1b3-0182c190"
                      }
                      loading={"lazy"}
                      src={imageImage9}
                      width={"auto"}
                    />
                  </Block>
                </Block>
              </Block>
            </BlockContainer>
          </Block>
        </Section>
      ) : null}
    </div>
  );
}
