"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Section from "../webflow_modules/Layout/components/Section";
import Subscript from "../webflow_modules/Basic/components/Subscript";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Headline3StatsEmailCapture({
  headlineEyebrowText = "Lorem Ipsum is simply",
  headlineHeadlineText = "Lorem Ipsum is simply dummy",
  headlineHeadlineTextTag = "h1",
  headlineSubHeadlineText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  headlineTag = "h1",
  image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf14a_Rectangle%2037-3.png",
  stat1LargeNumberStat = "h1",
  stat1StatDescriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting",
  stat2StatDescriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting",
  stat3HeadlineTag = "h1",
  stat3StatDescriptionText = "Lorem Ipsum is simply dummy text of the printing and typesetting",
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
        className={"section"}
        grid={{
          type: "section",
        }}
        tag={"section"}
      >
        <BlockContainer
          className={"color-variants padding_large"}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          <Block
            className={"content-wrapper padding_medium text-color-primary"}
            tag={"div"}
          >
            <Block className={"grid_2-col gap-medium"} tag={"div"}>
              <Block
                className={"grid_2-row"}
                id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c7d-802d1c79"}
                tag={"div"}
              >
                <Block
                  id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c7e-802d1c79"}
                  tag={"div"}
                >
                  <Block className={"eyebrow"} tag={"div"}>
                    {headlineEyebrowText}
                  </Block>
                  <Heading
                    className={"headline-md"}
                    tag={headlineHeadlineTextTag}
                  >
                    {headlineHeadlineText}
                  </Heading>
                </Block>
                <Block
                  className={"subheadline-base"}
                  id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c83-802d1c79"}
                  tag={"div"}
                >
                  {headlineSubHeadlineText}
                </Block>
                <FormWrapper className={"form-block margin-top_sm"}>
                  <FormForm
                    className={"flex-horizontal"}
                    data-name={"Email Form"}
                    id={"email-form"}
                    method={"get"}
                    name={"email-form"}
                  >
                    <FormTextInput
                      autoFocus={false}
                      className={"form_input radius_right-0"}
                      data-name={"Email"}
                      disabled={false}
                      id={"email"}
                      maxLength={256}
                      name={"email"}
                      placeholder={"Your email address"}
                      required={true}
                      type={"email"}
                    />
                    <FormButton
                      className={
                        "component_button-size-variant is-btn-sm radius_left-0"
                      }
                      data-wait={"Please wait..."}
                      type={"submit"}
                      value={"Gets started"}
                    />
                  </FormForm>
                  <FormSuccessMessage>
                    <Block tag={"div"}>
                      {"Thank you! Your submission has been received!"}
                    </Block>
                  </FormSuccessMessage>
                  <FormErrorMessage>
                    <Block tag={"div"}>
                      {"Oops! Something went wrong while submitting the form."}
                    </Block>
                  </FormErrorMessage>
                </FormWrapper>
              </Block>
              <Block
                className={"image-wrapper"}
                id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c8f-802d1c79"}
                tag={"div"}
              >
                <Image
                  alt={""}
                  className={"image is-hidden_mobile padding_xs"}
                  height={"auto"}
                  loading={"lazy"}
                  src={image}
                  width={"269"}
                />
              </Block>
            </Block>
            <Block className={"bottom-wrapper margin-top_medium"} tag={"div"}>
              <Block className={"grid_3-col"} tag={"div"}>
                <Block
                  className={
                    "flex-vertical padding_xs flex-strech is-x-center is-y-center"
                  }
                  id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c93-802d1c79"}
                  tag={"div"}
                >
                  <Heading
                    className={"headline-md flex-align-center"}
                    tag={stat1LargeNumberStat}
                  >
                    {"1.1 "}
                    <Subscript className={"subscript text-color-4"}>
                      {"m"}
                    </Subscript>
                  </Heading>
                  <Block
                    className={
                      "paragraph text-align_center mobile_text-align-left"
                    }
                    id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c98-802d1c79"}
                    tag={"div"}
                  >
                    {stat1StatDescriptionText}
                  </Block>
                </Block>
                <Block
                  className={
                    "flex-vertical padding_xs flex-strech is-x-center is-y-center"
                  }
                  id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c9a-802d1c79"}
                  tag={"div"}
                >
                  <Heading
                    className={"headline-md flex-align-center"}
                    id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1c9b-802d1c79"}
                    tag={headlineTag}
                  >
                    {"1 "}
                    <Subscript className={"subscript text-color-4"}>
                      {"in"}
                    </Subscript>
                    {" 3"}
                  </Heading>
                  <Block
                    className={
                      "paragraph text-align_center mobile_text-align-left"
                    }
                    tag={"div"}
                  >
                    {stat2StatDescriptionText}
                  </Block>
                </Block>
                <Block
                  className={
                    "flex-vertical padding_xs flex-strech is-x-center is-y-center"
                  }
                  id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1ca2-802d1c79"}
                  tag={"div"}
                >
                  <Heading
                    className={"headline-md flex-align-center"}
                    id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1ca3-802d1c79"}
                    tag={stat3HeadlineTag}
                  >
                    {"85"}
                    <Subscript className={"subscript text-color-4"}>
                      {"%"}
                    </Subscript>
                  </Heading>
                  <Block
                    className={
                      "paragraph text-align_center mobile_text-align-left"
                    }
                    id={"w-node-_2f36d0c7-5fdb-a36d-c638-f847802d1ca7-802d1c79"}
                    tag={"div"}
                  >
                    {stat3StatDescriptionText}
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </BlockContainer>
      </Section>
    </div>
  );
}
