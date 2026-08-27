"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormCheckboxInput from "../webflow_modules/Form/components/FormCheckboxInput";
import FormCheckboxWrapper from "../webflow_modules/Form/components/FormCheckboxWrapper";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormInlineLabel from "../webflow_modules/Form/components/FormInlineLabel";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextarea from "../webflow_modules/Form/components/FormTextarea";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Span from "../webflow_modules/Basic/components/Span";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProjectContactForm({
  button10Visibility = true,
  button11Visibility = true,
  button1Visibility = true,
  button2Visibility = true,
  button3Visibility = true,
  button4Visibility = true,
  button5Visibility = true,
  button6Visibility = true,
  button7Visibility = true,
  button8Visibility = true,
  button9Visibility = true,
  formDescriptionText = "Click the boxes that best match your goals.",
  formHeadline = "Let Us know how we can help",
  formId = "Project-Contact-Form",
  formVisibility = true,
  startDateLabel1 = "Right away",
  startDateLabel2 = "Next 60-90 Days",
  startDateLabel3 = "It's Flexible",
  submitButtonLoading = "Transmitting ...",
  submitButtonText = "[ INITIATE SHIFT ]",
  successMessageText = (
    <>
      {
        "Our team is currently reviewing your property’s digital footprint and distribution health. We treat every inquiry with the same precision we apply to a Linux kernel—looking for the signal in the noise. A senior strategist will reach out within 48 hours to discuss how we can refine your commercial strategy."
      }
      <br />
      <br />
      {"We’re mobilizing the strategy crew. You’ll hear from us soon."}
    </>
  ),
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"component_project-form"} tag={"div"}>
        {formVisibility ? (
          <FormWrapper className={"project-contact-form_block"} id={formId}>
            <FormForm
              className={"project-contact-form"}
              data-name={"Project Contact Form"}
              id={"wf-form-Project-Contact-Form"}
              method={"get"}
              name={"wf-form-Project-Contact-Form"}
            >
              <Block className={"form_input-wrapper"} tag={"div"}>
                <Block className={"project-form_label-wrapper"} tag={"div"}>
                  <FormBlockLabel
                    className={
                      "project-form_label margin-bottom_none margin-left_none"
                    }
                    htmlFor={"name"}
                  >
                    {formHeadline}
                  </FormBlockLabel>
                  <Block
                    className={"paragraph text-primary project-form"}
                    tag={"div"}
                  >
                    {formDescriptionText}
                  </Block>
                </Block>
                <Block className={"checkbox-wrapper"} tag={"div"}>
                  {button1Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-primary"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <Block className={"checkbox_button"} tag={"div"}>
                            <Block
                              className={"checkbox_container"}
                              tag={"div"}
                            />
                          </Block>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Revenue Management"}
                            form={{
                              type: "checkbox-input",
                              name: "Revenue Management",
                            }}
                            id={"Revenue-Management"}
                            inputType={"custom"}
                            name={"Revenue-Management"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Revenue Management ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button2Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-teal"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          {button2Visibility ? (
                            <FormCheckboxInput
                              checked={false}
                              className={"checkbox-button"}
                              customClassName={
                                "w-checkbox-input--inputType-custom"
                              }
                              data-name={"Distribution"}
                              form={{
                                type: "checkbox-input",
                                name: "Distribution",
                              }}
                              id={"Distribution"}
                              inputType={"custom"}
                              name={"Distribution"}
                              required={false}
                              type={"checkbox"}
                            />
                          ) : null}
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Distribution ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button3Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-cyan"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Digital Marketing"}
                            form={{
                              type: "checkbox-input",
                              name: "Digital Marketing",
                            }}
                            id={"Digital-Marketing"}
                            inputType={"custom"}
                            name={"Digital-Marketing"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Digital Marketing ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button4Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-aqua"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Project Management"}
                            form={{
                              type: "checkbox-input",
                              name: "Project Management",
                            }}
                            id={"Project-Management"}
                            inputType={"custom"}
                            name={"Project-Management"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Project Management ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button5Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-powder"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Tech Solutions"}
                            form={{
                              type: "checkbox-input",
                              name: "Tech Solutions",
                            }}
                            id={"Tech-Solutions"}
                            inputType={"custom"}
                            name={"Tech-Solutions"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Tech Solutions ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button6Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-yellow"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Data Services"}
                            form={{
                              type: "checkbox-input",
                              name: "Data Services",
                            }}
                            id={"Data-Services"}
                            inputType={"custom"}
                            name={"Data-Services"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Data Services ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button7Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-orange"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Health Checks + Audits"}
                            form={{
                              type: "checkbox-input",
                              name: "Health Checks + Audits",
                            }}
                            id={"Health-Checks-Audits"}
                            inputType={"custom"}
                            name={"Health-Checks-Audits"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Health Checks + Audits ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button8Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-red"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Hotel Openings"}
                            form={{
                              type: "checkbox-input",
                              name: "Hotel Openings",
                            }}
                            id={"Hotel-Openings"}
                            inputType={"custom"}
                            name={"Hotel-Openings"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Hotel Openings ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button9Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-purple"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Task Force"}
                            form={{
                              type: "checkbox-input",
                              name: "Task Force",
                            }}
                            id={"Task-Force"}
                            inputType={"custom"}
                            name={"Task-Force"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Task Force ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button10Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-frost"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Short Term"}
                            form={{
                              type: "checkbox-input",
                              name: "Short Term",
                            }}
                            id={"Short-Term"}
                            inputType={"custom"}
                            name={"Short-Term"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Short Term ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                  {button11Visibility ? (
                    <Block className={"checkbox-button-wrapper"} tag={"div"}>
                      <Block
                        className={"checkbox_color-button is-color-frost"}
                        tag={"div"}
                      >
                        <FormCheckboxWrapper className={"checkbox-container"}>
                          <FormCheckboxInput
                            checked={false}
                            className={"checkbox-button"}
                            customClassName={
                              "w-checkbox-input--inputType-custom"
                            }
                            data-name={"Long Term"}
                            form={{
                              type: "checkbox-input",
                              name: "Long Term",
                            }}
                            id={"Long-Term"}
                            inputType={"custom"}
                            name={"Long-Term"}
                            required={false}
                            type={"checkbox"}
                          />
                          <FormInlineLabel className={"checkbox-label"}>
                            {"[ Long Term ]"}
                          </FormInlineLabel>
                        </FormCheckboxWrapper>
                      </Block>
                    </Block>
                  ) : null}
                </Block>
              </Block>
              <Block className={"contact-form_bottom"} tag={"div"}>
                <Block className={"project-form_wrapper"} tag={"div"}>
                  <FormBlockLabel
                    className={"project-form_label"}
                    htmlFor={"name"}
                  >
                    {"Details"}
                  </FormBlockLabel>
                  <Block className={"project-form_details"} tag={"article"}>
                    <Block
                      className={"form_input-wrapper is-column-gap_20px"}
                      id={
                        "w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5bf-45e6e56c"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"grid_2-col margin-block_xxs gap-xs"}
                        id={
                          "w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5c0-45e6e56c"
                        }
                        tag={"div"}
                      >
                        <FormTextInput
                          // @ts-ignore - User-defined custom attribute(s)
                          autoComplete={"given-name"}
                          autoFocus={false}
                          className={
                            "form is-input w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5c1-45e6e56c"
                          }
                          data-name={"First Name"}
                          disabled={false}
                          id={"First-Name"}
                          maxLength={256}
                          name={"First-Name"}
                          placeholder={"First Name"}
                          required={true}
                          type={"text"}
                          user-input={"first-name"}
                          // @ts-ignore - User-defined custom attribute(s)
                          wized={"first-name"}
                        />
                        <FormTextInput
                          // @ts-ignore - User-defined custom attribute(s)
                          autoComplete={"family-name"}
                          autoFocus={false}
                          className={"form is-input"}
                          data-name={"lastName"}
                          disabled={false}
                          id={"Last-Name"}
                          maxLength={256}
                          name={"lastName"}
                          placeholder={"Last Name"}
                          required={true}
                          type={"text"}
                          user-input={"first-name"}
                          // @ts-ignore - User-defined custom attribute(s)
                          wized={"input_last-name"}
                        />
                      </Block>
                      <Block
                        className={"grid_2-col margin-block_xxs gap-xs"}
                        id={
                          "w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5c3-45e6e56c"
                        }
                        tag={"div"}
                      >
                        <FormTextInput
                          // @ts-ignore - User-defined custom attribute(s)
                          autoComplete={"email"}
                          autoFocus={false}
                          className={"form is-input"}
                          data-name={"Email Address"}
                          disabled={false}
                          id={"Email-Address"}
                          maxLength={256}
                          name={"Email-Address"}
                          placeholder={"Email Address"}
                          required={true}
                          type={"email"}
                          user-input={"email"}
                        />
                        <FormTextInput
                          // @ts-ignore - User-defined custom attribute(s)
                          autoComplete={"tel-area-code"}
                          autoFocus={false}
                          className={
                            "form is-input w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5c5-45e6e56c"
                          }
                          data-name={"Phone Number"}
                          disabled={false}
                          id={"Phone-Number"}
                          maxLength={256}
                          name={"Phone-Number"}
                          placeholder={"Phone Number"}
                          required={true}
                          type={"tel"}
                          user-input-phone-number={"ca,gb,us"}
                          // @ts-ignore - User-defined custom attribute(s)
                          wized={"input_phone"}
                        />
                      </Block>
                      <Block
                        className={"grid_2-col margin-block_xxs gap-xs"}
                        tag={"div"}
                      >
                        <FormTextInput
                          // @ts-ignore - User-defined custom attribute(s)
                          autoComplete={"organization"}
                          autoFocus={true}
                          className={
                            "form is-input w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5c7-45e6e56c"
                          }
                          data-name={"Company Name"}
                          disabled={false}
                          id={"Company-Name"}
                          maxLength={256}
                          name={"Company-Name"}
                          placeholder={"Hotel or Company Name"}
                          required={true}
                          type={"text"}
                          // @ts-ignore - User-defined custom attribute(s)
                          wized={"input_hotel_company"}
                        />
                        <FormTextInput
                          // @ts-ignore - User-defined custom attribute(s)
                          autoComplete={"url"}
                          autoFocus={true}
                          className={"form is-input"}
                          data-name={"Website"}
                          disabled={false}
                          id={"Company-Website"}
                          maxLength={256}
                          name={"Website"}
                          placeholder={"Company Website"}
                          required={true}
                          type={"text"}
                          user-input={"company-website"}
                          // @ts-ignore - User-defined custom attribute(s)
                          wized={"input_website"}
                        />
                      </Block>
                    </Block>
                    <Block className={"form-input_wrapper"} tag={"div"}>
                      <FormTextarea
                        autoFocus={false}
                        className={"form is-input"}
                        data-name={"Message"}
                        id={"Message"}
                        maxLength={5000}
                        name={"Message"}
                        placeholder={"Any Additional Information?"}
                        required={false}
                      />
                    </Block>
                    <Block
                      className={"project-form_start-date-wrapper"}
                      tag={"div"}
                    >
                      <FormBlockLabel
                        className={"project-form_label"}
                        htmlFor={"name"}
                      >
                        {"When are you looking to start?"}
                      </FormBlockLabel>
                      <Block
                        className={"project-form_start-time-button-group"}
                        tag={"div"}
                      >
                        <Block tag={"div"}>
                          <Block
                            className={
                              "component_checkbox_color-variants base-2"
                            }
                            tag={"div"}
                          >
                            <FormCheckboxWrapper
                              className={"component_checkbox-container base-3"}
                            >
                              <FormCheckboxInput
                                checked={false}
                                className={"component_checkbox-button_variants"}
                                customClassName={
                                  "w-checkbox-input--inputType-custom"
                                }
                                data-name={"Right away"}
                                form={{
                                  type: "checkbox-input",
                                  name: "Right away",
                                }}
                                id={"Right-away"}
                                inputType={"custom"}
                                name={"Right-away"}
                                required={false}
                                type={"checkbox"}
                              />
                              <FormInlineLabel
                                className={"component_checkbox-label base-5"}
                              >
                                {startDateLabel1}
                              </FormInlineLabel>
                            </FormCheckboxWrapper>
                          </Block>
                        </Block>
                        <Block tag={"div"}>
                          <Block
                            className={
                              "component_checkbox_color-variants base-10"
                            }
                            tag={"div"}
                          >
                            <FormCheckboxWrapper
                              className={"component_checkbox-container base-11"}
                            >
                              <FormCheckboxInput
                                checked={false}
                                className={"component_checkbox-button_variants"}
                                customClassName={
                                  "w-checkbox-input--inputType-custom"
                                }
                                data-name={"Next 60-90 Days"}
                                form={{
                                  type: "checkbox-input",
                                  name: "Next 60-90 Days",
                                }}
                                id={"Next-60-90-Days"}
                                inputType={"custom"}
                                name={"Next-60-90-Days"}
                                required={false}
                                type={"checkbox"}
                              />
                              <FormInlineLabel
                                className={"component_checkbox-label base-13"}
                              >
                                {startDateLabel2}
                              </FormInlineLabel>
                            </FormCheckboxWrapper>
                          </Block>
                        </Block>
                        <Block tag={"div"}>
                          <Block
                            className={
                              "component_checkbox_color-variants base-6"
                            }
                            tag={"div"}
                          >
                            <FormCheckboxWrapper
                              className={"component_checkbox-container base-7"}
                            >
                              <FormCheckboxInput
                                checked={false}
                                className={"component_checkbox-button_variants"}
                                customClassName={
                                  "w-checkbox-input--inputType-custom"
                                }
                                data-name={"It's Flexible"}
                                form={{
                                  type: "checkbox-input",
                                  name: "It's Flexible",
                                }}
                                id={"It-s-Flexible"}
                                inputType={"custom"}
                                name={"It-s-Flexible"}
                                required={false}
                                type={"checkbox"}
                              />
                              <FormInlineLabel
                                className={"component_checkbox-label base-9"}
                              >
                                {startDateLabel3}
                              </FormInlineLabel>
                            </FormCheckboxWrapper>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Block
                      className={"project-form_button-wrapper"}
                      id={
                        "w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5e1-45e6e56c"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"is-color-frost"}
                        id={
                          "w-node-_275ce245-63e6-b34b-eac7-89ec95dca98e-45e6e56c"
                        }
                        tag={"div"}
                      >
                        <FormButton
                          className={
                            "button text-size-lg is-btn-rebel font-logo"
                          }
                          data-wait={submitButtonLoading}
                          id={
                            "w-node-eb9b70e6-7f01-c0ce-62cc-264445e6e5e2-45e6e56c"
                          }
                          type={"submit"}
                          value={submitButtonText}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </FormForm>
            <FormSuccessMessage className={"success-message_project-form"}>
              <Block className={"flex_horizontal"} tag={"div"}>
                <Heading className={"headline-md"} tag={"h1"}>
                  {"Contact form: 100% completed. Bonus round begins now."}
                </Heading>
                <Block
                  className={
                    "success_message-wrapper flex-vertical flex-align_space-between"
                  }
                  tag={"div"}
                >
                  <Block
                    className={"success-message_text margin-bottom_medium"}
                    tag={"div"}
                  >
                    {successMessageText}
                  </Block>
                  <Image
                    alt={"REVREBEL Logo"}
                    className={"logo_sm"}
                    height={"auto"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec6a_revrebel_vertical_logo.svg"
                    }
                    width={"auto"}
                  />
                </Block>
              </Block>
            </FormSuccessMessage>
            <FormErrorMessage className={"error-message"}>
              <Block className={"error-message_text"} tag={"div"}>
                {
                  "Oops! There seems to have been an error while submitting the form. "
                }
                <br />
                {"Feel free to reach out to us directly at "}
                <Span className={""}>{"hello@revrebel.io"}</Span>
              </Block>
            </FormErrorMessage>
          </FormWrapper>
        ) : null}
      </Block>
    </div>
  );
}
