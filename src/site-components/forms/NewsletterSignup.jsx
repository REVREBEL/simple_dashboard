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
import Section from "../webflow_modules/Layout/components/Section";

export function NewsletterSignup({
  colorStyleChooseAMode = "Light",
  newsletterSignupEyebrowText = "in-the-know",
  newsletterSignupParagraphText = "Discover innovative revenue generation ideas for your property by joining a community of like-minded revenue rebels.",
  slotHeadline,
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-1fd7159b-087e-3714-d70d-8344c785e934",
  };

  const _activeStyleVariant = _styleVariantMap[colorStyleChooseAMode];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={`newsletter_wrapper ${_activeStyleVariant}`}
        grid={{
          type: "section",
        }}
        tag={"div"}
      >
        <Block
          className={`newsletter_subheadline ${_activeStyleVariant}`}
          tag={"div"}
        >
          {newsletterSignupEyebrowText}
        </Block>
        <Block
          className={`newsletter_subheadline is-dark ${_activeStyleVariant}`}
          tag={"div"}
        >
          {newsletterSignupEyebrowText}
        </Block>
        {slotHeadline}
        <Block className={`newsletter_text ${_activeStyleVariant}`} tag={"div"}>
          {newsletterSignupParagraphText}
        </Block>
        <FormWrapper
          className={`get-inspired-sign-up_form ${_activeStyleVariant}`}
        >
          <FormForm
            className={`form_input-wrapper flex_horizontal flex-align_center position_relative ${_activeStyleVariant}`}
            data-name={"Email Form"}
            id={"email-form"}
            method={"get"}
            name={"email-form"}
          >
            <FormTextInput
              autoFocus={false}
              className={`form_input get-inspired-sign-up_input ${_activeStyleVariant}`}
              data-name={"Email Address"}
              disabled={false}
              id={"Email-Address"}
              maxLength={256}
              name={"Email-Address"}
              placeholder={"email address"}
              required={true}
              type={"email"}
            />
            <HtmlEmbed
              className={`mailbox_icon ${_activeStyleVariant}`}
              content={
                '<?xml version="1.0" encoding="UTF-8"?>\n<svg id="Mailbox" data-name="Mailbox" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1000.865 899.482">\n  <path d="M998.343,226.295l-.017-.084c-14.12-65.185-72.751-114.697-125.054-169.035-9.721-9.646-17.443-17.044-20.979-19.95-24.387-18.954-50.726-29.405-85.155-34.982-14.496-2.395-30.055-1.437-52.598-1.938C640.52.139,581.4-.045,491.33.01c-68.959-.006-267.458.07-261.791.294-.09.005-.471.038-1.425.13C120.43,10.507,31.659,87.221,6.779,191.916.309,202.669.625,261.288.465,294.982c-.044,38.39-.217,71.202-.202,114.636.176,58.977-.437,141.459-.213,175.703-.066,71.727.844,86.76,5.397,91.74,2.51,5.32,5.569,8.728,14.151,17.295,54.27,49.695,160.874,141.781,192.741,171.329,19.704,17.665,31.755,25.035,49.975,30.513,9.908,2.715,5.309,2.088,60.781,2.755,125.454.573,289.786.398,413.709.53,106.617-.174,178.936-.182,177.434-.851.084-.009.319-.041.946-.138,41.234-6.176,74.226-37.572,82.646-78.728.137-.665.26-1.283.354-1.773.193-1.007.26-1.404.276-1.531,5.207,8.169.415-495.199-.118-590.165ZM249.931,599.613h-.009c-4.292-.721-147.624,1.406-149.996-.794.25-88.892-.221-185.049.066-251.621.396-73.802-.017-103.91,1.419-116.549,11.219-93.031,107.72-153.316,195.975-123.034,43.729,14.306,78.524,48.733,93.661,92.347,7.219,15.09,8.143,28.515,8.323,96.398.308,79.369.325,191.986.652,301.398,1.176,5.286-146.03.082-150.092,1.855ZM674.932,599.61h-.008c-48.213-.327-124.43.333-175.012-.081.024-45.555-.023-104.805-.003-149.972.547-2.624-.823-139.044.358-149.947,20.829.002,73.482-.004,99.246.002,1.238,8.919-.138,31.418.572,42.341-6.154,61.601,77.234,79.022,97.106,23.839,4.372-15.93,3.519-95.689,1.108-128.44-4.077-16.887-19.138-31.854-35.641-36.132-45.894-3.464-117.814-.764-167.096-1.611-8.205-33.878-24.217-71.042-44.532-99.365,11.077-1.202,74.972-.111,104.501-.421,42.086.154,102.47.15,134.705.334,50.944.228,54.58.644,60.252,2.044,49.424,12.028,83.381,45.069,96.398,94.963,3.76,25.758,2.384,143.225,2.757,205.319.01,7.349.274,176.4.3,197.056-3.173.19-170.243.016-175.013.073Z"/>\n  <path d="M237.019,201.359l-.198.052c-25.644,6.86-41.717,33.985-35.375,59.615,6.024,26.496,34.464,44.059,60.699,37.143,63.675-19.02,39.848-111.402-25.125-96.81Z"/>\n</svg>'
              }
            />
            <FormButton
              className={`submit-button ${_activeStyleVariant}`}
              data-wait={"Please wait..."}
              type={"submit"}
              value={"[ Sign Up]"}
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
      </Section>
    </div>
  );
}
