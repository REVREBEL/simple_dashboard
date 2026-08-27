"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormCheckboxInput from "../webflow_modules/Form/components/FormCheckboxInput";
import FormCheckboxWrapper from "../webflow_modules/Form/components/FormCheckboxWrapper";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormInlineLabel from "../webflow_modules/Form/components/FormInlineLabel";
import FormSelect from "../webflow_modules/Form/components/FormSelect";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextarea from "../webflow_modules/Form/components/FormTextarea";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import SliderArrow from "../webflow_modules/Slider/components/SliderArrow";
import SliderMask from "../webflow_modules/Slider/components/SliderMask";
import SliderNav from "../webflow_modules/Slider/components/SliderNav";
import SliderSlide from "../webflow_modules/Slider/components/SliderSlide";
import SliderWrapper from "../webflow_modules/Slider/components/SliderWrapper";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-464":{"id":"e-464","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-465"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"92389809-f124-6010-0c48-80c5ee456da4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"92389809-f124-6010-0c48-80c5ee456da4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":450,"direction":null,"effectIn":true},"createdOn":1625409279374},"e-466":{"id":"e-466","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-467"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".form_multi-step_form-block","originalId":"ac3b8f53-e0ca-26c0-f272-7a13b915e8ce","appliesTo":"CLASS"},"targets":[{"selector":".form_multi-step_form-block","originalId":"ac3b8f53-e0ca-26c0-f272-7a13b915e8ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":400,"direction":"BOTTOM","effectIn":true},"createdOn":1626109558552},"e-1172":{"id":"e-1172","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777611932897},"e-1173":{"id":"e-1173","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777611932902},"e-1174":{"id":"e-1174","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1175"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777613686193},"e-1175":{"id":"e-1175","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777613686196},"e-1176":{"id":"e-1176","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777614402573},"e-1177":{"id":"e-1177","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777614402578},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-263":{"id":"a-263","title":"is-select_form-trigger [ON-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-263-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":1,"unit":""}},{"id":"a-263-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-263-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":0,"unit":""}},{"id":"a-263-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1777611937512},"a-264":{"id":"a-264","title":"is-select_form-trigger [OFF-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-264-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":1,"unit":""}},{"id":"a-264-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1777611937512},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DataSubjectAccessRequestForm({
  checkbox1CheckboxLabel = "Under penalty of perjury, I declare all the above information to be true and accurate.",
  checkbox2CheckboxLabel = (
    <>
      {
        "I understand that the deletion or restriction of my personal data is irreversible and "
      }
      <br />
      {"may result in the termination of services with "}
    </>
  ),
  checkbox3CheckboxLabel = (
    <>
      {
        "I understand that I will be required to validate my request by email, and I may be "
      }
      <br />
      {"contacted in order to complete the request."}
    </>
  ),
  checkboxIcon1CheckboxIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cedca_profile_solid.svg",
  checkboxIcon1CheckboxIconAltText = "__wf_reserved_inherit",
  checkboxIcon1CheckboxIconLabel = "I'm the person or the parent/guardian of the person named in the prior step.",
  checkboxIcon2CheckboxIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cedcc_call_solid.svg",
  checkboxIcon2CheckboxIconAltText = "__wf_reserved_inherit",
  checkboxIcon2CheckboxIconLabel = "An agent authorized by the consumer to make this request on their behalf.",
  settingsFormId = "",
  settingsFormVisibility = true,
  slide1Slide1Headline = "Contact details",
  slide1SlideHeadlineTag = "h2",
  slide1SlideInputInstructions = "Let's start with your contact information:",
  slide2DropDownInputDescription = "Under the rights of which law are you making this request?",
  slide2SlideHeadlineTag = "h2",
  slide2SlideHeadlineText = "REQUEST DETAILS",
  slide3Checkbox1Label = "To understand what information is being collected ",
  slide3SlideHeadlineTag = "h2",
  slide3SlideHeadlineText = "submitting a request to ",
  slide4SlideDescription = "Please leave details regarding your action request or question. Also, please include the email address used to access the above website if different than above.",
  slide4SlideHeadlineTag = "h2",
  slide4SlideHeadlineText = "ADDITIONAL DETAILS",
  slide5SlideHeadlineTag = "h2",
  slide5SlideHeadlineText = "Confirmation Statements",
  textInput1InputLabel = "first name",
  textInput1TextInputId = "dataSubjectFirstName",
  textInput1TextInputVisibility = true,
  textInput2InputLabel = "Last Name",
  textInput2TextInputId = "dataSubjectLastName",
  textInput2TextInputVisibility = true,
  textInput3Checkbox2Label = "To request my information to be deleted",
  textInput3Checkbox3Label = "Other (please specify in the comment box below)",
  textInput3CheckboxInputDescription = (
    <>
      {"Which Option Best "}
      <br />
      {"Describes Your Request"}
    </>
  ),
  textInput3InputLabel = "Phone Number",
  textInput3MessageInputDescription = "Other Reason",
  textInput3TextInputId = "dataSubjectPhoneNumber",
  textInput3TextInputVisibility = true,
  textInput4InputLabel = "email",
  textInput4TextInputId = "dataSubjectEmail",
  textInput4TextInputVisibility = true,
  textInput5InputDescription = "Name of the website where you believe your information has been recorded.",
  textInput5TextInputId = "dataSubjectSourceWebsite",
  textInput5TextInputVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsFormVisibility ? (
        <Section
          className={"component_size"}
          grid={{
            type: "section",
          }}
          id={settingsFormId}
          tag={"section"}
          x-model={"form.understand"}
        >
          <HtmlEmbed className={"code-embed"} />
          <BlockContainer
            className={"color-variants"}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={"big-headline_component-padding padding_none"}
              tag={"div"}
            >
              <Block className={"component_mobile-padding"} tag={"div"}>
                <Section
                  className={"form_multi-step_section"}
                  grid={{
                    type: "section",
                  }}
                  tag={"main"}
                >
                  <Block className={"form_multi-step_container"} tag={"div"}>
                    <Block
                      className={"form_multi-step"}
                      data-w-id={"92389809-f124-6010-0c48-80c5ee456da4"}
                      tag={"div"}
                    >
                      <Block
                        className={"form_multi-step_wrapper preview-page"}
                        tag={"div"}
                      >
                        <FormWrapper className={"form_multi-step_form-block"}>
                          <FormForm
                            className={"data-subject-request-form"}
                            data-name={"Data Subject Request Form"}
                            id={"data-subject-request-form"}
                            method={"get"}
                            name={"wf-form-"}
                          >
                            <SliderWrapper
                              animation={"slide"}
                              autoMax={0}
                              autoplay={false}
                              className={"form_multi-step_slider"}
                              data-animation={"slide"}
                              data-duration={"500"}
                              data-hide-arrows={"1"}
                              delay={4000}
                              disableSwipe={true}
                              duration={500}
                              easing={"ease"}
                              hideArrows={true}
                              iconArrows={true}
                              infinite={false}
                              navInvert={false}
                              navNumbers={false}
                              navRound={false}
                              navShadow={false}
                              navSpacing={3}
                            >
                              <SliderMask className={"form_step_mask"}>
                                <SliderSlide
                                  className={"form_step_slide _1"}
                                  data-step={"1"}
                                  id={"data-subject-form_step-1"}
                                  tag={"div"}
                                >
                                  <Block
                                    className={"progress-bar_wrapper"}
                                    tag={"div"}
                                  >
                                    <Block className={"step-bar"} tag={"div"}>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba55d",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"1"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "progress-bar current-step"
                                          }
                                          tag={"div"}
                                        />
                                      </Block>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba58e",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"2"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5bd",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"3"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5f2",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"4"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba614",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"5"}
                                        </Block>
                                      </Link>
                                    </Block>
                                    <Block
                                      className={"step-bar_mobile"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"step-bar_mobile step-1"}
                                        tag={"div"}
                                      />
                                    </Block>
                                  </Block>
                                  <Block className={"space-sm"} tag={"div"} />
                                  <Block
                                    className={"form_step-wrapper"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"form_multi-step_content"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={
                                          "form_step-headline-wrapper text-color-primary"
                                        }
                                        tag={"div"}
                                      >
                                        <Heading
                                          className={"headline-sm"}
                                          tag={slide1SlideHeadlineTag}
                                        >
                                          {slide1Slide1Headline}
                                        </Heading>
                                        <Paragraph className={"text-size-base"}>
                                          {slide1SlideInputInstructions}
                                        </Paragraph>
                                      </Block>
                                      <Grid
                                        className={"grid_2-col"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={"form-input_wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456dcc-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <FormBlockLabel
                                            className={"form_label"}
                                            htmlFor={"Name-2"}
                                          >
                                            {textInput1InputLabel}
                                          </FormBlockLabel>
                                          <Block tag={"div"}>
                                            {textInput1TextInputVisibility ? (
                                              <FormTextInput
                                                // @ts-ignore - User-defined custom attribute(s)
                                                autoComplete={"given-name"}
                                                autoFocus={false}
                                                className={
                                                  "form_input is-first-name"
                                                }
                                                data-name={
                                                  "dataSubjectFirstName"
                                                }
                                                disabled={false}
                                                id={textInput1TextInputId}
                                                maxLength={256}
                                                name={"dataSubjectFirstName"}
                                                placeholder={"first name"}
                                                required={true}
                                                required-field={"true"}
                                                type={"text"}
                                              />
                                            ) : null}
                                          </Block>
                                        </Block>
                                        <Block
                                          className={"form-input_wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456dd1-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <FormBlockLabel
                                            className={"form_label"}
                                            htmlFor={"dataSubjectLastName"}
                                          >
                                            {textInput2InputLabel}
                                          </FormBlockLabel>
                                          {textInput2TextInputVisibility ? (
                                            <FormTextInput
                                              // @ts-ignore - User-defined custom attribute(s)
                                              autoComplete={"family-name"}
                                              autoFocus={false}
                                              className={
                                                "form_input is-last-name"
                                              }
                                              data-name={"dataSubjectLastName"}
                                              disabled={false}
                                              id={textInput2TextInputId}
                                              maxLength={256}
                                              name={"dataSubjectLastName"}
                                              placeholder={"last name"}
                                              required={true}
                                              required-field={"true"}
                                              type={"text"}
                                            />
                                          ) : null}
                                        </Block>
                                        <Block
                                          className={"space-sm"}
                                          tag={"div"}
                                        />
                                        <Block
                                          className={"form-input_wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456dd6-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <FormBlockLabel
                                            className={"form_label"}
                                            htmlFor={"dataSubjectPhoneNumber"}
                                          >
                                            {textInput3InputLabel}
                                          </FormBlockLabel>
                                          {textInput3TextInputVisibility ? (
                                            <FormTextInput
                                              // @ts-ignore - User-defined custom attribute(s)
                                              autoComplete={"tel-national"}
                                              autoFocus={false}
                                              className={
                                                "form_input is-phone-number"
                                              }
                                              data-name={
                                                "dataSubjectPhoneNumber"
                                              }
                                              disabled={false}
                                              id={textInput3TextInputId}
                                              maxLength={256}
                                              name={"dataSubjectPhoneNumber"}
                                              placeholder={"(123) 456 - 7890"}
                                              required={true}
                                              required-field={"true"}
                                              type={"tel"}
                                            />
                                          ) : null}
                                        </Block>
                                        <Block
                                          className={"form-input_wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456dda-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <FormBlockLabel
                                            className={"form_label"}
                                            htmlFor={"dataSubjectEmail"}
                                          >
                                            {textInput4InputLabel}
                                          </FormBlockLabel>
                                          {textInput4TextInputVisibility ? (
                                            <FormTextInput
                                              // @ts-ignore - User-defined custom attribute(s)
                                              autoComplete={"email"}
                                              autoFocus={false}
                                              className={"form_input is-email"}
                                              data-name={"dataSubjectEmail"}
                                              disabled={false}
                                              id={textInput4TextInputId}
                                              maxLength={256}
                                              name={"dataSubjectEmail"}
                                              placeholder={
                                                "email@yourdomain.com"
                                              }
                                              required={true}
                                              required-field={"true"}
                                              type={"email"}
                                            />
                                          ) : null}
                                        </Block>
                                        <Block
                                          className={
                                            "form-input_wrapper is-col-span_2"
                                          }
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456dde-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <Block
                                            className={
                                              "paragraph margin-top_xxs"
                                            }
                                            id={
                                              "w-node-_92389809-f124-6010-0c48-80c5ee456ddf-ee456d9d"
                                            }
                                            tag={"div"}
                                          >
                                            {textInput5InputDescription}
                                          </Block>
                                          {textInput5TextInputVisibility ? (
                                            <FormTextInput
                                              autoFocus={false}
                                              className={"form_input"}
                                              data-name={
                                                "dataSubjectSourceWebsite"
                                              }
                                              disabled={false}
                                              id={
                                                "w-node-_92389809-f124-6010-0c48-80c5ee456de1-ee456d9d"
                                              }
                                              maxLength={256}
                                              name={"dataSubjectSourceWebsite"}
                                              placeholder={
                                                "example: https://revrebel.io"
                                              }
                                              required={true}
                                              required-field={"true"}
                                              type={"text"}
                                            />
                                          ) : null}
                                        </Block>
                                      </Grid>
                                    </Block>
                                  </Block>
                                </SliderSlide>
                                <SliderSlide
                                  className={"form_step_slide _2"}
                                  data-step={"2"}
                                  id={"data-subject-form_step-2"}
                                  tag={"div"}
                                >
                                  <Block
                                    className={"progress-bar_wrapper"}
                                    tag={"div"}
                                  >
                                    <Block className={"step-bar"} tag={"div"}>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba55d",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"1"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba58e",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"2"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "progress-bar current-step"
                                          }
                                          tag={"div"}
                                        />
                                      </Block>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={
                                          "step-number_wrapper text-color-3"
                                        }
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5bd",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"3"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={
                                          "step-number_wrapper text-color-3"
                                        }
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5f2",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"4"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={
                                          "step-number_wrapper text-color-3"
                                        }
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba614",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"5"}
                                        </Block>
                                      </Link>
                                    </Block>
                                    <Block
                                      className={"step-bar_mobile"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"step-bar_mobile step-1"}
                                        tag={"div"}
                                      />
                                    </Block>
                                  </Block>
                                  <Block className={"space-sm"} tag={"div"} />
                                  <Block
                                    className={"form_step-wrapper"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"form_multi-step_content"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={
                                          "form_step-headline-wrapper text-color-primary"
                                        }
                                        data-required-group={"contact-detail"}
                                        tag={"div"}
                                      >
                                        <Heading
                                          className={"headline-sm"}
                                          tag={slide2SlideHeadlineTag}
                                        >
                                          {slide2SlideHeadlineText}
                                        </Heading>
                                        <Paragraph
                                          className={
                                            "form_multi-step_paragraph text-green"
                                          }
                                        >
                                          {
                                            "Please fill in the information below"
                                          }
                                        </Paragraph>
                                      </Block>
                                      <Grid
                                        className={"grid_2-col"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={"icon-checkbox_button"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e04-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <FormCheckboxWrapper
                                            className={
                                              "icon-checkbox_wrapper height_100pct"
                                            }
                                            id={"development-preview"}
                                          >
                                            <FormCheckboxInput
                                              checked={false}
                                              className={"icon-checkbox"}
                                              customClassName={
                                                "w-checkbox-input--inputType-custom"
                                              }
                                              data-name={"submissionForSelf"}
                                              form={{
                                                type: "checkbox-input",
                                                name: "submissionForSelf",
                                              }}
                                              id={"submissionForSelf"}
                                              inputType={"custom"}
                                              name={"submissionForSelf"}
                                              required={false}
                                              type={"checkbox"}
                                            />
                                            <Image
                                              className={"icon-checkbox_icon"}
                                              height={"auto"}
                                              src={checkboxIcon1CheckboxIcon}
                                              width={"50"}
                                            />
                                            <FormInlineLabel
                                              className={"label"}
                                              htmlFor={"development"}
                                            >
                                              {checkboxIcon1CheckboxIconLabel}
                                            </FormInlineLabel>
                                          </FormCheckboxWrapper>
                                        </Block>
                                        <Block
                                          className={"icon-checkbox_button"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e0a-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <FormCheckboxWrapper
                                            className={
                                              "icon-checkbox_wrapper height_100pct"
                                            }
                                            id={"web-design-1"}
                                          >
                                            <FormCheckboxInput
                                              checked={false}
                                              className={
                                                "icon-checkbox height_100pct"
                                              }
                                              customClassName={
                                                "w-checkbox-input--inputType-custom"
                                              }
                                              data-name={"agentForConsumer"}
                                              form={{
                                                type: "checkbox-input",
                                                name: "agentForConsumer",
                                              }}
                                              id={"agentForConsumer"}
                                              inputType={"custom"}
                                              name={"agentForConsumer"}
                                              required={false}
                                              type={"checkbox"}
                                            />
                                            <Image
                                              className={"icon-checkbox_icon"}
                                              height={"50"}
                                              src={checkboxIcon2CheckboxIcon}
                                              width={"50"}
                                            />
                                            <FormInlineLabel
                                              className={"label"}
                                              htmlFor={"web-design-1"}
                                            >
                                              {checkboxIcon2CheckboxIconLabel}
                                            </FormInlineLabel>
                                          </FormCheckboxWrapper>
                                        </Block>
                                        <Block
                                          className={
                                            "form-input_wrapper margin-top_sm"
                                          }
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e10-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <Block
                                            className={"form_label"}
                                            id={
                                              "w-node-_92389809-f124-6010-0c48-80c5ee456e11-ee456d9d"
                                            }
                                            tag={"div"}
                                          >
                                            {slide2DropDownInputDescription}
                                          </Block>
                                          <Block
                                            className={
                                              "form_item-wrapper includes-select"
                                            }
                                            id={
                                              "w-node-_92389809-f124-6010-0c48-80c5ee456e13-ee456d9d"
                                            }
                                            tag={"div"}
                                          >
                                            <FormSelect
                                              className={
                                                "form_input is-select w-node-_92389809-f124-6010-0c48-80c5ee456e14-ee456d9d"
                                              }
                                              data-name={
                                                "dataSubjectRightOfLaw"
                                              }
                                              id={"dataSubjectRightOfLaw"}
                                              multiple={false}
                                              name={"dataSubjectRightOfLaw"}
                                              options={[
                                                {
                                                  t: "Select one...",
                                                  v: "",
                                                },
                                                {
                                                  t: "General Data Protection Regulation (GDPR)",
                                                  v: "GDPR",
                                                },
                                                {
                                                  t: "California Consumer Privacy Act (CCPA)",
                                                  v: "CCPA",
                                                },
                                                {
                                                  t: "Other",
                                                  v: "Other",
                                                },
                                              ]}
                                              required={true}
                                              required-field={"true"}
                                            />
                                            <Image
                                              alt={
                                                "Triangle Arrow Pointing Downward"
                                              }
                                              className={
                                                "form-icon is-icon-color-blue"
                                              }
                                              height={"auto"}
                                              id={
                                                "w-node-_92389809-f124-6010-0c48-80c5ee456e15-ee456d9d"
                                              }
                                              loading={"lazy"}
                                              src={
                                                "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9f3_triangle-down.svg"
                                              }
                                              width={"auto"}
                                            />
                                          </Block>
                                        </Block>
                                      </Grid>
                                    </Block>
                                  </Block>
                                </SliderSlide>
                                <SliderSlide
                                  className={"form_step_slide _3"}
                                  data-step={"3"}
                                  id={"data-subject-form_step-3"}
                                  tag={"div"}
                                >
                                  <Block
                                    className={"progress-bar_wrapper"}
                                    tag={"div"}
                                  >
                                    <Block className={"step-bar"} tag={"div"}>
                                      <Block
                                        className={"step-number_wrapper"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"1"}
                                        </Block>
                                      </Block>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Block
                                        className={"step-number_wrapper"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"2"}
                                        </Block>
                                      </Block>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Block
                                        className={"step-number_wrapper"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"3"}
                                        </Block>
                                      </Block>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "progress-bar current-step"
                                          }
                                          tag={"div"}
                                        />
                                      </Block>
                                      <Block
                                        className={
                                          "step-number_wrapper text-color-3"
                                        }
                                        tag={"div"}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"4"}
                                        </Block>
                                      </Block>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      />
                                      <Block
                                        className={
                                          "step-number_wrapper text-color-3"
                                        }
                                        tag={"div"}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"5"}
                                        </Block>
                                      </Block>
                                    </Block>
                                    <Block
                                      className={"step-bar_mobile"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"step-bar_mobile step-1"}
                                        tag={"div"}
                                      />
                                    </Block>
                                  </Block>
                                  <Block className={"space-sm"} tag={"div"} />
                                  <Block
                                    className={"form_step-wrapper"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={"form_multi-step_content"}
                                      data-required-group={"request-detail"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={
                                          "form_step-headline-wrapper text-color-primary"
                                        }
                                        tag={"div"}
                                      >
                                        <Heading
                                          className={"headline-sm"}
                                          tag={slide3SlideHeadlineTag}
                                        >
                                          {slide3SlideHeadlineText}
                                        </Heading>
                                      </Block>
                                      <Grid
                                        className={
                                          "form_multi-step_third-step-grid uniform-square"
                                        }
                                        tag={"div"}
                                      >
                                        <FormCheckboxWrapper
                                          className={
                                            "checkbox_container text-color-3"
                                          }
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e36-ee456d9d"
                                          }
                                        >
                                          <FormCheckboxInput
                                            checked={false}
                                            className={"checkbox_button"}
                                            customClassName={
                                              "w-checkbox-input--inputType-custom"
                                            }
                                            data-name={"requestingDeletion"}
                                            form={{
                                              type: "checkbox-input",
                                              name: "requestingDeletion",
                                            }}
                                            id={"dataSubjectDeletion"}
                                            inputType={"custom"}
                                            name={"requestingDeletion"}
                                            required={false}
                                            type={"checkbox"}
                                          />
                                          <FormInlineLabel
                                            className={
                                              "checkbox_label text-color-bright-green"
                                            }
                                          >
                                            {textInput3Checkbox2Label}
                                          </FormInlineLabel>
                                        </FormCheckboxWrapper>
                                        <FormCheckboxWrapper
                                          className={
                                            "checkbox_container text-color-6"
                                          }
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e3a-ee456d9d"
                                          }
                                        >
                                          <FormCheckboxInput
                                            checked={false}
                                            className={"checkbox_button"}
                                            customClassName={
                                              "w-checkbox-input--inputType-custom"
                                            }
                                            data-name={"other"}
                                            form={{
                                              type: "checkbox-input",
                                              name: "other",
                                            }}
                                            id={"dataSubjectRequest"}
                                            inputType={"custom"}
                                            name={"other"}
                                            required={false}
                                            type={"checkbox"}
                                          />
                                          <FormInlineLabel
                                            className={
                                              "checkbox_label text-color-orange"
                                            }
                                          >
                                            {textInput3Checkbox3Label}
                                          </FormInlineLabel>
                                        </FormCheckboxWrapper>
                                        <FormTextarea
                                          autoFocus={false}
                                          className={
                                            "form_input is-text-area w-node-_92389809-f124-6010-0c48-80c5ee456e3e-ee456d9d"
                                          }
                                          data-name={
                                            "dataSubjectOtherReasonClarification"
                                          }
                                          id={
                                            "dataSubjectOtherReasonClarification"
                                          }
                                          maxLength={5000}
                                          name={
                                            "dataSubjectOtherReasonClarification"
                                          }
                                          placeholder={
                                            "Please describe additional details here."
                                          }
                                          required={false}
                                        />
                                        <FormCheckboxWrapper
                                          className={
                                            "checkbox_container text-color-primary"
                                          }
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e3f-ee456d9d"
                                          }
                                        >
                                          <FormCheckboxInput
                                            checked={false}
                                            className={"checkbox_button"}
                                            customClassName={
                                              "w-checkbox-input--inputType-custom"
                                            }
                                            data-name={"dataSubjectUnderstand"}
                                            form={{
                                              type: "checkbox-input",
                                              name: "dataSubjectUnderstand",
                                            }}
                                            id={"dataSubjectUnderstand"}
                                            inputType={"custom"}
                                            name={"dataSubjectUnderstand"}
                                            required={false}
                                            type={"checkbox"}
                                          />
                                          <FormInlineLabel
                                            className={
                                              "checkbox_label text-color-blue"
                                            }
                                          >
                                            {slide3Checkbox1Label}
                                          </FormInlineLabel>
                                        </FormCheckboxWrapper>
                                        <Block
                                          className={"label"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e43-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          {textInput3MessageInputDescription}
                                        </Block>
                                        <Block
                                          className={"label"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e45-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          {textInput3CheckboxInputDescription}
                                        </Block>
                                      </Grid>
                                    </Block>
                                  </Block>
                                </SliderSlide>
                                <SliderSlide
                                  className={"form_step_slide _4"}
                                  data-step={"4"}
                                  id={"data-subject-form_step-4"}
                                  tag={"div"}
                                >
                                  <Block
                                    className={"progress-bar_wrapper"}
                                    tag={"div"}
                                  >
                                    <Block className={"step-bar"} tag={"div"}>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba55d",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"1"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba58e",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"2"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5bd",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"3"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5f2",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"4"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "progress-bar current-step"
                                          }
                                          tag={"div"}
                                        />
                                      </Block>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={
                                          "step-number_wrapper text-color-3"
                                        }
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba614",
                                        }}
                                      >
                                        <Block
                                          className={"label_large"}
                                          tag={"div"}
                                        >
                                          {"5"}
                                        </Block>
                                      </Link>
                                    </Block>
                                    <Block
                                      className={"step-bar_mobile"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"step-bar_mobile step-1"}
                                        tag={"div"}
                                      />
                                    </Block>
                                  </Block>
                                  <Block className={"space-sm"} tag={"div"} />
                                  <Block
                                    className={"form_step-wrapper"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={
                                        "form_multi-step_content text-color-primary"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"form_step-headline-wrapper"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={"form-input_wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e66-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <Heading
                                            className={"headline-sm"}
                                            tag={slide4SlideHeadlineTag}
                                          >
                                            {slide4SlideHeadlineText}
                                          </Heading>
                                          <Block
                                            className={"paragraph"}
                                            id={
                                              "w-node-_92389809-f124-6010-0c48-80c5ee456e69-ee456d9d"
                                            }
                                            tag={"div"}
                                          >
                                            {slide4SlideDescription}
                                          </Block>
                                          <FormTextarea
                                            autoFocus={false}
                                            className={
                                              "form_input is-big-text-area w-node-_92389809-f124-6010-0c48-80c5ee456e6b-ee456d9d"
                                            }
                                            data-name={"additionalDetail"}
                                            id={"dataSubjectMessage"}
                                            maxLength={5000}
                                            name={"additionalDetail"}
                                            placeholder={"Additional Detail"}
                                            required={false}
                                          />
                                        </Block>
                                      </Block>
                                    </Block>
                                  </Block>
                                </SliderSlide>
                                <SliderSlide
                                  className={"form_step_slide _5"}
                                  data-step={"5"}
                                  id={"data-subject-form_step-5"}
                                  tag={"div"}
                                >
                                  <Block
                                    className={"progress-bar_wrapper"}
                                    tag={"div"}
                                  >
                                    <Block className={"step-bar"} tag={"div"}>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba55d",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-completed"
                                          }
                                          tag={"div"}
                                        >
                                          {"1"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "progress-bar current-step"
                                          }
                                          tag={"div"}
                                        />
                                      </Block>
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba58e",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"2"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5bd",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"3"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba5f2",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"4"}
                                        </Block>
                                      </Link>
                                      <Block
                                        className={"progress-bar step-complete"}
                                        tag={"div"}
                                      />
                                      <Link
                                        block={"inline"}
                                        button={false}
                                        className={"step-number_wrapper"}
                                        options={{
                                          href: "https://revrebel-rebuild.webflow.io#2eb59ae8-aa78-2325-2ca7-20fd91cba614",
                                        }}
                                      >
                                        <Block
                                          className={
                                            "label_large step-complete"
                                          }
                                          tag={"div"}
                                        >
                                          {"5"}
                                        </Block>
                                      </Link>
                                    </Block>
                                    <Block
                                      className={"step-bar_mobile"}
                                      tag={"div"}
                                    >
                                      <Block
                                        className={
                                          "form-step-progress-mobile step-6"
                                        }
                                        tag={"div"}
                                      />
                                    </Block>
                                  </Block>
                                  <Block className={"space-sm"} tag={"div"} />
                                  <Block
                                    className={"form_step-wrapper"}
                                    tag={"div"}
                                  >
                                    <Block
                                      className={
                                        "form_multi-step_content text-color-primary"
                                      }
                                      tag={"div"}
                                    >
                                      <Block
                                        className={"form_step-headline-wrapper"}
                                        tag={"div"}
                                      >
                                        <Heading
                                          className={"headline-sm"}
                                          tag={slide5SlideHeadlineTag}
                                        >
                                          {slide5SlideHeadlineText}
                                        </Heading>
                                      </Block>
                                      <Grid
                                        className={
                                          "form_multi-step_fifth-step-grid uniform-square margin-bottom_medium gap-sm"
                                        }
                                        tag={"div"}
                                      >
                                        <Block
                                          className={
                                            "flex-horizontal margin-top_sm blockquote-font text-color-bright-green margin-bottom_xs"
                                          }
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e8c-ee456d9d"
                                          }
                                          tag={"div"}
                                        >
                                          <Block
                                            id={
                                              "w-node-_92389809-f124-6010-0c48-80c5ee456e8d-ee456d9d"
                                            }
                                            tag={"div"}
                                          >
                                            {"I"}
                                          </Block>
                                          <Block
                                            className={
                                              "w-node-_92389809-f124-6010-0c48-80c5ee456e8f-ee456d9d"
                                            }
                                            id={"recall_fullName"}
                                            tag={"div"}
                                          >
                                            {""}
                                          </Block>
                                          <Block
                                            id={
                                              "w-node-_92389809-f124-6010-0c48-80c5ee456e91-ee456d9d"
                                            }
                                            tag={"div"}
                                          >
                                            {"confirm"}
                                          </Block>
                                        </Block>
                                        <FormCheckboxWrapper
                                          className={"form_checkbox-wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e93-ee456d9d"
                                          }
                                        >
                                          <FormCheckboxInput
                                            checked={false}
                                            className={"form_checkbox"}
                                            customClassName={
                                              "w-checkbox-input--inputType-custom"
                                            }
                                            data-name={"ackPenaltyOfPerjury"}
                                            data-required={"true"}
                                            form={{
                                              type: "checkbox-input",
                                              name: "ackPenaltyOfPerjury",
                                            }}
                                            id={"dataSubjectAccurate"}
                                            inputType={"custom"}
                                            name={"ackPenaltyOfPerjury"}
                                            required={true}
                                            type={"checkbox"}
                                          />
                                          <FormInlineLabel
                                            className={
                                              "form_checkbox-label is-base-font"
                                            }
                                          >
                                            {checkbox1CheckboxLabel}
                                          </FormInlineLabel>
                                        </FormCheckboxWrapper>
                                        <FormCheckboxWrapper
                                          className={"form_checkbox-wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e97-ee456d9d"
                                          }
                                        >
                                          <FormCheckboxInput
                                            checked={false}
                                            className={"form_checkbox"}
                                            customClassName={
                                              "w-checkbox-input--inputType-custom"
                                            }
                                            data-name={
                                              "ackTerminationOfService"
                                            }
                                            data-required={"true"}
                                            form={{
                                              type: "checkbox-input",
                                              name: "ackTerminationOfService",
                                            }}
                                            id={"dataSubjectIrreversible"}
                                            inputType={"custom"}
                                            name={"ackTerminationOfService"}
                                            required={true}
                                            type={"checkbox"}
                                          />
                                          <FormInlineLabel
                                            className={
                                              "form_checkbox-label is-base-font"
                                            }
                                          >
                                            {checkbox2CheckboxLabel}
                                          </FormInlineLabel>
                                        </FormCheckboxWrapper>
                                        <FormCheckboxWrapper
                                          className={"form_checkbox-wrapper"}
                                          id={
                                            "w-node-_92389809-f124-6010-0c48-80c5ee456e9f-ee456d9d"
                                          }
                                        >
                                          <FormCheckboxInput
                                            checked={false}
                                            className={"form_checkbox"}
                                            customClassName={
                                              "w-checkbox-input--inputType-custom"
                                            }
                                            data-name={"ackValidateByEmail"}
                                            data-required={"true"}
                                            form={{
                                              type: "checkbox-input",
                                              name: "ackValidateByEmail",
                                            }}
                                            id={"dataSubjectValidateRequest"}
                                            inputType={"custom"}
                                            name={"ackValidateByEmail"}
                                            required={true}
                                            type={"checkbox"}
                                          />
                                          <FormInlineLabel
                                            className={
                                              "form_checkbox-label is-base-font"
                                            }
                                          >
                                            {checkbox3CheckboxLabel}
                                          </FormInlineLabel>
                                        </FormCheckboxWrapper>
                                      </Grid>
                                      <FormButton
                                        className={
                                          "component_button-size-variant form-button-submit"
                                        }
                                        data-wait={"Sending..."}
                                        // @ts-ignore - User-defined custom attribute(s)
                                        hasErrors={"hasErrors"}
                                        type={"submit"}
                                        value={"[ Submit ]"}
                                      />
                                    </Block>
                                  </Block>
                                </SliderSlide>
                              </SliderMask>
                              <SliderArrow
                                className={
                                  "component_button-size-variant previous-btn"
                                }
                                data-step={"1"}
                                dir={"left"}
                                id={"previous.step"}
                              >
                                <Block tag={"div"}>{"[ go back ]"}</Block>
                              </SliderArrow>
                              <SliderArrow
                                className={
                                  "component_button-size-variant next-btn"
                                }
                                dir={"right"}
                                id={"next-btn"}
                              >
                                <Block tag={"div"}>{"[ Next step ]"}</Block>
                              </SliderArrow>
                              <SliderNav className={"is-hidden"} />
                            </SliderWrapper>
                          </FormForm>
                          <FormSuccessMessage
                            className={"form_step-success-message"}
                          >
                            <Block
                              className={"form_step-submit-wrapper"}
                              tag={"div"}
                            >
                              <Heading className={"headline-sm"} tag={"h3"}>
                                {"Your submission "}
                                <br />
                                {"has been received."}
                              </Heading>
                              <Paragraph
                                className={"paragraph text-align_center"}
                              >
                                {
                                  "The website administrator or data protection officer will be notified of your request within 72 hours, and will need an appropriate amount of time to respond."
                                }
                              </Paragraph>
                            </Block>
                          </FormSuccessMessage>
                          <FormErrorMessage
                            className={"form_step-error-message"}
                          >
                            <Block tag={"div"}>
                              {
                                "Oops! Something went wrong while submitting the form."
                              }
                            </Block>
                          </FormErrorMessage>
                        </FormWrapper>
                      </Block>
                    </Block>
                  </Block>
                  <Block tag={"div"}>
                    <HtmlEmbed className={"html-embed"} />
                  </Block>
                </Section>
              </Block>
            </Block>
          </BlockContainer>
        </Section>
      ) : null}
    </div>
  );
}
