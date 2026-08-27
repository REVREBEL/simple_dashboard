"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-850":{"id":"e-850","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-229","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-325"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-link_underline-5","originalId":"6a09244ce43d4439301cee91|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"},"targets":[{"selector":".button-link_underline-5","originalId":"6a09244ce43d4439301cee91|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756303378916},"e-851":{"id":"e-851","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-230","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-324"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".button-link_underline-5","originalId":"6a09244ce43d4439301cee91|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"},"targets":[{"selector":".button-link_underline-5","originalId":"6a09244ce43d4439301cee91|6832d1d0-de60-605b-bf34-2e8d0b7e25df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1756303378919},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-229":{"id":"a-229","title":"Hover On  Link Line Green 19","actionItemGroups":[{"actionItems":[{"id":"a-229-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".link-line-2","selectorGuids":["46dd2d49-af05-8235-daa2-f17998f8796e"]},"globalSwatchId":"--color-inputs--aqua","rValue":113,"bValue":197,"gValue":201,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756303386216},"a-230":{"id":"a-230","title":"Hover Off Link Line Blue 19","actionItemGroups":[{"actionItems":[{"id":"a-230-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".link-line-2","selectorGuids":["46dd2d49-af05-8235-daa2-f17998f8796e"]},"globalSwatchId":"--color-inputs--primary","rValue":22,"bValue":102,"gValue":54,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1756303386216},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ArticlesHeadlineSection({
  logoImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf161_CTRL_Logo-Blue.png",
  paragraphBottomRight = "This is where strategic thinking meets tactical execution, providing a clear signal in a world of data static. From optimizing your revenue generation algorithms and fine-tuning distribution channels to deploying high-impact marketing campaigns and leveraging smart tech,CTRLShift provides the blueprints. ",
  paragraphLeft = "Welcome to CTRLShift: your command center for mastering the complex mechanics of hotel performance. In an industry where efficiency and insight are the ultimate currency, we cut through the noise to deliver the essential intelligence you need.",
  paragraphTopRight = "We decode the evolving landscape of hospitality—covering everything from profit-smart segmentation and brand positioning to next-gen social strategy—ensuring your operation is always calibrated for maximum impact and sustained competitive advantage. Consider this your definitive operational upgrade.",
  slotHeadline,
  slotLink,
  subHeadlineTag = "h3",
  subHeadlineText = (
    <>
      {"Shift Happens: "}
      <br />
      {"Helping Hotels Take Control of Their Revenue Story"}
    </>
  ),
  underlinedLinkUnderlinedLinkColor = null,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        grid={{
          type: "section",
        }}
        tag={"section"}
      >
        <HtmlEmbed
          className={"code-embed-10"}
          content={
            "<style>\n/* \n * Applies a color filter to elements with both 'icon' and '{COLOR}' class.\n * The filter uses a combination of invert, sepia, saturate, hue-rotate, brightness, and contrast\n * to achieve the desired purple hue effect on the icon.\n */\n \n/* \n * Gradients\n */\n.bg-gradient-yellow-red {\n  background-image: linear-gradient(to right, #faca78, #fabc6e, #f9ae66, #f8a060, #f6915c, #f48759, #f17d56, #ee7254, #eb6a50, #e7624d, #e4594a, #e05047);\n}\n\n.bg-gradient-blue-green {\n  background-image: linear-gradient(to right, #27498b, #145491, #005e95, #006897, #007198, #067b9c, #1785a0, #278fa3, #3a9dac, #4cacb4, #5ebabd, #71c9c5);\n}\n\n.bg-red-purple {\n  background-image: linear-gradient(to right, #f37d59, #f07555, #ec6d51, #e9654e, #e55c4b, #df554f, #d84e53, #d04856, #c2455f, #b14565, #a04569, #8e456a);\n}\n\n.bg-yellow-purple {\n  background-image: linear-gradient(to right, #faca78, #fabc6e, #f9ae66, #f8a060, #f6915c, #f0835e, #e97660, #e06963, #ce5d68, #ba536b, #a54c6c, #8e456a);\n}\n\n.bg-yellow-red {\n  background-image: linear-gradient(to right, #faca78, #fabc6e, #f9ae66, #f8a060, #f6915c, #f48759, #f17d56, #ee7254, #eb6a50, #e7624d, #e4594a, #e05047);\n}\n\n.bg-blue-red {\n  background-image: linear-gradient(to right, #27498b, #494788, #604583, #72447d, #804375, #8e4372, #9b446e, #a64568, #b74563, #c7475c, #d54a53, #e05047);\n}\n\n.is-rebel,\n.text-rebel {\n  background-image: linear-gradient(to right, #27498b, #145491, #005e95, #006897, #007198, #00789b, #007f9d, #00869f, #008ea5, #0096ab, #009eb1, #00a6b6, #71c9c5, #7aceb5, #8fd2a2, #abd38e, #ccd17e, #dbca73, #ebc16d, #fab86b, #f9aa64, #f89b5e, #f68c5b, #f37d59, #f37d59, #f07555, #ec6d51, #e9654e, #e55c4b, #df554f, #d84e53, #d04856, #c2455f, #b14565, #a04569, #8e456a);\n}\n\n\n\n\n/* \n * Navigation Breakpoint Adjustment\n */\n@media screen and (max-width: 1132px) {\n  .footer_contact-wrapper.margin_left-auto {\n    flex-flow: column;\n    margin-left: unset;\n    width: 100%\n  }\n}\n\n@media screen and (max-width: 991px) {\n  .footer_contact-wrapper.margin_left-auto {\n    flex-flow: column;\n    width: 100%\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .footer_contact-wrapper.margin_left-auto {\n    flex-flow: row;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  .footer_contact-wrapper.margin_left-auto {\n    flex-flow: column;\n  }\n}\n\n\n\n\n</style>"
          }
        />
        <BlockContainer
          className={"component_wrapper max-width_md"}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          <BlockContainer
            className={"component_container text-color_primary"}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block className={"grid_2-col is-article-top-section"} tag={"div"}>
              {slotHeadline}
              <Block
                className={"flex_horizontal flex-align-center"}
                id={"w-node-_01cf9706-c71d-e9ce-904a-43d29292eab1-9292eaa8"}
                tag={"div"}
              >
                <Block className={"flex-align_center"} tag={"div"}>
                  {slotLink}
                </Block>
                <Image
                  alt={""}
                  className={"cntrshift_logo"}
                  height={"Auto"}
                  loading={"lazy"}
                  src={logoImage}
                  width={"100"}
                />
              </Block>
              <Block
                className={"grid_2-col gap-md"}
                id={"w-node-_48f0a192-95fc-f6e1-f26a-ccbb78522920-9292eaa8"}
                tag={"div"}
              >
                <Block
                  className={"article_headline_paragraph-wrapper"}
                  id={"w-node-_01cf9706-c71d-e9ce-904a-43d29292eab6-9292eaa8"}
                  tag={"div"}
                >
                  <Heading
                    className={"headline-xxs margin-bottom_xxs"}
                    id={"w-node-_01cf9706-c71d-e9ce-904a-43d29292eab7-9292eaa8"}
                    tag={subHeadlineTag}
                  >
                    {subHeadlineText}
                  </Heading>
                  <Paragraph
                    className={"paragraph"}
                    id={"w-node-_01cf9706-c71d-e9ce-904a-43d29292eabf-9292eaa8"}
                  >
                    {paragraphLeft}
                  </Paragraph>
                </Block>
                <Block
                  className={"article_headline_paragraph-wrapper"}
                  id={"w-node-_01cf9706-c71d-e9ce-904a-43d29292eabb-9292eaa8"}
                  tag={"div"}
                >
                  <Paragraph className={"paragraph padding-top_none"}>
                    {paragraphTopRight}
                  </Paragraph>
                  <Paragraph className={"paragraph"}>
                    {paragraphBottomRight}
                  </Paragraph>
                </Block>
              </Block>
            </Block>
          </BlockContainer>
        </BlockContainer>
      </Section>
    </div>
  );
}
