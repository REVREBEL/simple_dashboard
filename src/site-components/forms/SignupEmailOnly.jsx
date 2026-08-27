"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";

export function SignupEmailOnly({
  formSettingsFormId = "signup-form-light",
  formSettingsLoadingMessage = "Please Wait ....",
  formSettingsSubmitText = "",
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    "Dark / Light Background": "w-variant-6b24ab1a-8285-c690-12d8-f07febeaad81",
    "Dark / Dark Background": "w-variant-08cf4d47-f942-c4d3-1df9-c62be48295df",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <FormWrapper className={`form_block-wrapper ${_activeStyleVariant}`}>
          <FormForm
            className={`subscribe_form ${_activeStyleVariant}`}
            data-name={"Email Form"}
            method={"get"}
            name={"email-form"}
          >
            <Block
              className={`subscribe_wrapper ${_activeStyleVariant}`}
              tag={"div"}
            >
              <FormTextInput
                // @ts-ignore - User-defined custom attribute(s)
                autoComplete={"email"}
                autoFocus={false}
                className={`is-sign-up ${_activeStyleVariant}`}
                data-name={"Email Address"}
                disabled={false}
                id={formSettingsFormId}
                maxLength={256}
                name={"Email-Address"}
                placeholder={"Your Email Address"}
                required={true}
                type={"email"}
                // @ts-ignore - User-defined custom attribute(s)
                wized={"input_email"}
              />
              <FormButton
                className={`arrow-subscribe-button ${_activeStyleVariant}`}
                data-wait={formSettingsLoadingMessage}
                type={"submit"}
                value={formSettingsSubmitText}
              />
            </Block>
          </FormForm>
          <FormSuccessMessage
            className={`success-message ${_activeStyleVariant}`}
          >
            <Block
              className={`flex_horizontal ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`success-message_text margin-right_sm text-size-lg ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"You're on the list"}
              </Block>
              <Image
                alt={"REVREBEL Logo"}
                className={`logo_sm is-icon-color-white ${_activeStyleVariant}`}
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
            className={`error-message is-inline ${_activeStyleVariant}`}
          >
            <Block
              className={`error-message_text text-size-xxs ${_activeStyleVariant}`}
              tag={"div"}
            >
              {"Oops! Something went wrong while submitting the form."}
            </Block>
          </FormErrorMessage>
          <HtmlEmbed
            content={
              "<style>\n:where(html:not(.wf-design-mode)) \n.w-variant-6b24ab1a-8285-c690-12d8-f07febeaad81 .form_input::placeholder,\n:where(html:not(.wf-design-mode)) \n.w-variant-08cf4d47-f942-c4d3-1df9-c62be48295df .form_input::placeholder {\n  color: var(--core-colors--color-white)!important;\n  opacity: 1;\n}\n\n/* Dark variants – use the actual variant classes inside :where(...) */\n:where(html:not(.wf-design-mode)) \n.form_input.is-email-address:where(.w-variant-6b24ab1a-8285-c690-12d8-f07febeaad81)::placeholder,\n:where(html:not(.wf-design-mode)) \n.form_input.is-email-address:where(.w-variant-08cf4d47-f942-c4d3-1df9-c62be48295df)::placeholder,\n:where(html:not(.wf-design-mode)) \n.form_input.is-email-address.is-label:where(.w-variant-6b24ab1a-8285-c690-12d8-f07febeaad81)::placeholder,\n:where(html:not(.wf-design-mode)) \n.form_input.is-email-address.is-label:where(.w-variant-08cf4d47-f942-c4d3-1df9-c62be48295df)::placeholder {\n  color: var(--core-colors--color-white)!important;\n  opacity: 1;\n}\n\n</style>"
            }
          />
        </FormWrapper>
      </Block>
    </div>
  );
}
