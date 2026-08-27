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
import FormSelect from "../webflow_modules/Form/components/FormSelect";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-1172":{"id":"e-1172","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777611932897},"e-1173":{"id":"e-1173","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777611932902},"e-1174":{"id":"e-1174","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1175"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777613686193},"e-1175":{"id":"e-1175","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777613686196},"e-1176":{"id":"e-1176","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777614402573},"e-1177":{"id":"e-1177","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777614402578}},"actionLists":{"a-263":{"id":"a-263","title":"is-select_form-trigger [ON-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-263-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":1,"unit":""}},{"id":"a-263-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-263-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":0,"unit":""}},{"id":"a-263-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1777611937512},"a-264":{"id":"a-264","title":"is-select_form-trigger [OFF-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-264-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":1,"unit":""}},{"id":"a-264-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1777611937512}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BookYourStrategySessionForm({
  buttonButtonLoadingText = "Please wait...",
  buttonButtonText = "[  Uncover Your Edge ]",
  eyebrowText = "Let’s connect",
  eyebrowVisibility = true,
  formId = "",
  headlineTag = "h3",
  headlineText = "Book a Strategy Session",
  privacyPolicyCheckboxLabelText = "privacy policy",

  privacyPolicyPrivacyPolicyLink = {
    href: "#",
  },

  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    "Text Blue": "w-variant-ad79be41-daec-caf8-cce8-64fdd2cfe6ca",
    Teal: "w-variant-dea4dcc7-6221-e363-10ab-ab30b4003fc8",
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
        className={`component_size ${_activeStyleVariant}`}
        data-copilot={"true"}
        tag={"section"}
      >
        <Block
          className={`strategy-session_form-container ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`headline-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            {eyebrowVisibility ? (
              <Block
                className={` eyebrow margin-bottom_none ${_activeStyleVariant}`}
                tag={"div"}
              >
                {eyebrowText}
              </Block>
            ) : null}
            <Heading
              className={`headline-sm text-color-primary is-headline-lg_mobile is-text-align-center_mobile is-padding-inline-md_mobile ${_activeStyleVariant}`}
              tag={headlineTag}
            >
              {headlineText}
            </Heading>
          </Block>
          <FormWrapper
            className={`strategy-session_form-block ${_activeStyleVariant}`}
            id={formId}
          >
            <FormForm
              className={`strategy-session-form-wrapper ${_activeStyleVariant}`}
              data-name={"Strategy Session"}
              data-wf-element-id={"53a1c6d3-ee1a-af75-950d-2225a334537f"}
              data-wf-page-id={""}
              id={"wf-form-Strategy-Session"}
              method={"get"}
              name={"wf-form-Strategy-Session"}
            >
              <Block
                className={`strategy-session_form ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`strategy-session_form-input-wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Paragraph
                    className={`strategy-session_form-text is-no-min-width is-left-align-mobile ${_activeStyleVariant}`}
                  >
                    {"Hi, I’m"}
                  </Paragraph>
                  <Block
                    className={`form-input_wrapper strategy-session_form ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <FormBlockLabel
                      className={`screen-reader ${_activeStyleVariant}`}
                      htmlFor={"easyBook_FullName"}
                    >
                      {"Full name"}
                    </FormBlockLabel>
                    <FormTextInput
                      autoFocus={false}
                      className={`strategy-session_form_input ${_activeStyleVariant}`}
                      data-name={"Full Name"}
                      disabled={false}
                      id={"easyBook_FullName"}
                      maxLength={256}
                      name={"Full-Name"}
                      placeholder={"Your Name"}
                      required={true}
                      type={"text"}
                    />
                  </Block>
                  <Paragraph
                    className={`strategy-session_form-text is-no-min-width hide-mobile-portrait ${_activeStyleVariant}`}
                  >
                    {"and"}
                  </Paragraph>
                </Block>
                <Block
                  className={`strategy-session_form-input-wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`div-block-780 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Paragraph
                      className={`strategy-session_form-text is-no-min-width is-hidden_tablet ${_activeStyleVariant}`}
                    >
                      {"and"}
                    </Paragraph>
                    <Paragraph
                      className={`strategy-session_form-text ${_activeStyleVariant}`}
                    >
                      {"I needhelp with "}
                    </Paragraph>
                  </Block>
                  <Block
                    className={`div-block-779 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`strategy-session_item-wrapper includes-select ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <FormSelect
                        className={`strategy-session_form_input is-select ${_activeStyleVariant}`}
                        data-name={"Solution Selection"}
                        id={"Solution-Selection"}
                        multiple={false}
                        name={"Solution-Selection"}
                        options={[
                          {
                            t: "Select an option",
                            v: "",
                          },
                          {
                            t: "Revenue Strategy",
                            v: "Revenue Strategy",
                          },
                          {
                            t: "Distribution",
                            v: "Distribution",
                          },
                          {
                            t: "Marketing",
                            v: "Another option",
                          },
                          {
                            t: "Online Marketing",
                            v: "Online Marketing",
                          },
                          {
                            t: "Hotel Opening / Transition",
                            v: "Hotel Opening/Transition",
                          },
                          {
                            t: "Technology Solutions",
                            v: "Another option",
                          },
                          {
                            t: "Special Project",
                            v: "Special Project",
                          },
                          {
                            t: "Other",
                            v: "Other",
                          },
                        ]}
                        required={true}
                      />
                      <Image
                        alt={""}
                        className={`form-icon is-icon-color-blue ${_activeStyleVariant}`}
                        height={"auto"}
                        id={
                          "w-node-_7bd0cee6-7ba3-1b8a-d643-be7afaaa8a34-faaa8a20"
                        }
                        loading={"lazy"}
                        src={
                          "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce718_down-carret.svg"
                        }
                        width={"auto"}
                      />
                    </Block>
                    <Paragraph
                      className={`strategy-session_form-text is-comma ${_activeStyleVariant}`}
                    >
                      {","}
                    </Paragraph>
                    <Paragraph
                      className={`strategy-session_form-text is-no-min-width ${_activeStyleVariant}`}
                    >
                      {"please"}
                    </Paragraph>
                  </Block>
                </Block>
                <Block
                  className={`strategy-session_form-input-wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Paragraph
                    className={`strategy-session_form-text is-no-min-width ${_activeStyleVariant}`}
                  >
                    {"reach me at"}
                  </Paragraph>
                  <Block
                    className={`div-block-781 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`form_input-wrapper strategy-session_form ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <FormBlockLabel
                        className={`screen-reader ${_activeStyleVariant}`}
                        htmlFor={"Email-Address"}
                      >
                        {"Email"}
                      </FormBlockLabel>
                      <FormTextInput
                        autoFocus={false}
                        className={`strategy-session_form_input ${_activeStyleVariant}`}
                        data-name={"Email Address"}
                        disabled={false}
                        id={"Email-Address"}
                        maxLength={256}
                        name={"Email-Address"}
                        placeholder={"your email"}
                        required={true}
                        type={"email"}
                      />
                    </Block>
                    <Paragraph
                      className={`strategy-session_form-text is-no-min-width ${_activeStyleVariant}`}
                    >
                      {"."}
                    </Paragraph>
                  </Block>
                </Block>
              </Block>
              <Block
                className={`strategy-session_button-group ${_activeStyleVariant}`}
                tag={"div"}
              >
                <FormCheckboxWrapper
                  className={`form_checkbox-wrapper ${_activeStyleVariant}`}
                >
                  <FormCheckboxInput
                    checked={true}
                    className={`form_checkbox ${_activeStyleVariant}`}
                    customClassName={"w-checkbox-input--inputType-custom"}
                    data-name={"Agreement Checkbox"}
                    form={{
                      type: "checkbox-input",
                      name: "Agreement Checkbox",
                    }}
                    id={"Agreement-Checkbox"}
                    inputType={"custom"}
                    name={"Agreement-Checkbox"}
                    required={true}
                    type={"checkbox"}
                  />
                  <FormInlineLabel
                    className={`checkbox_label ${_activeStyleVariant}`}
                    // @ts-ignore - User-defined custom attribute(s)
                    htmlFor={"agreement-checkbox-4"}
                  >
                    {"I agree to the"}
                    <br />
                    {"‍"}
                    <Link
                      button={false}
                      className={`form_privacy-link ${_activeStyleVariant}`}
                      options={privacyPolicyPrivacyPolicyLink}
                    >
                      {privacyPolicyCheckboxLabelText}
                    </Link>
                  </FormInlineLabel>
                </FormCheckboxWrapper>
                <FormButton
                  className={`button full-width_mobile ${_activeStyleVariant}`}
                  data-wait={buttonButtonLoadingText}
                  type={"submit"}
                  value={buttonButtonText}
                />
              </Block>
            </FormForm>
            <FormSuccessMessage
              className={`form_success-message book-your-strategy-session ${_activeStyleVariant}`}
            >
              <Block
                className={`div-block-626 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading tag={"h1"}>{"Level Up Unlocked."}</Heading>
                <Block
                  className={`paragraph-lg ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {
                    "Expect a sharp reply soon — no fluff, no nonsense, just strategy."
                  }
                </Block>
                <Block
                  className={`space_1rem ${_activeStyleVariant}`}
                  tag={"div"}
                />
                <Image
                  alt={"REVREBEL Logo"}
                  className={`logo_sm ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec6a_revrebel_vertical_logo.svg"
                  }
                  width={"auto"}
                />
              </Block>
            </FormSuccessMessage>
            <FormErrorMessage
              className={`form_error-message text-color-7 ${_activeStyleVariant}`}
            >
              <Block
                className={`form_error-message_content ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block tag={"div"}>
                  <Block
                    className={`headline-xxs ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"System Glitch. Signal Lost."}
                  </Block>
                  <Block
                    className={`text-block-202 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {
                      "Try refreshing or reloading your intel. Then hit submit again."
                    }
                  </Block>
                </Block>
              </Block>
            </FormErrorMessage>
          </FormWrapper>
        </Block>
      </Section>
    </div>
  );
}
