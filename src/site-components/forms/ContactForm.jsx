"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormButton from "../webflow_modules/Form/components/FormButton";
import FormErrorMessage from "../webflow_modules/Form/components/FormErrorMessage";
import FormForm from "../webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "../webflow_modules/Form/components/FormSuccessMessage";
import FormTextarea from "../webflow_modules/Form/components/FormTextarea";
import FormTextInput from "../webflow_modules/Form/components/FormTextInput";
import FormWrapper from "../webflow_modules/Form/components/FormWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContactForm({
  buttonButtonLoadingMessage = "Please wait...",
  buttonButtonText = "[ GET INTOUCH ]",
  contactUsContactUsHeadline = "ACTIONABLE INSIGHTS. ZERO GUESSWORK.",
  contactUsContactUsHeadlineTag = "h2",
  formStyleFormColor = "Dark",
  settingsFormId = "",
  settingsFormVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Dark: "",
    Light: "w-variant-13065a42-cb3c-b9ec-2f0e-b21f7d978575",
  };

  const _activeStyleVariant = _styleVariantMap[formStyleFormColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsFormVisibility ? (
        <Section
          className={`large-contact-form_padding ${_activeStyleVariant}`}
          grid={{
            type: "section",
          }}
          id={settingsFormId}
          tag={"section"}
        >
          <Section
            className={`component_size ${_activeStyleVariant}`}
            grid={{
              type: "section",
            }}
            tag={"section"}
          >
            <Block
              className={`big-headline_component-padding ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`component_mobile-padding ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`form-card_wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`contact-form_wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`left-wrapper width_100pct_mobile-l ${_activeStyleVariant}`}
                      id={
                        "w-node-_13065a42-cb3c-b9ec-2f0e-b21f7d978539-7d978533"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={`space-sm ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                      <Heading
                        // @ts-ignore - User-defined custom attribute(s)
                        clas={"text-align_center_mobile-l"}
                        className={`eyebrow scroll-in-view_slide-left ${_activeStyleVariant}`}
                        tag={contactUsContactUsHeadlineTag}
                      >
                        {"Let's Talk"}
                      </Heading>
                      <Heading
                        // @ts-ignore - User-defined custom attribute(s)
                        clas={"text-align_center_mobile-l"}
                        className={`headline-base scroll-in-view_slide-left ${_activeStyleVariant}`}
                        tag={contactUsContactUsHeadlineTag}
                      >
                        {contactUsContactUsHeadline}
                      </Heading>
                      <Block
                        className={`div-block-688 ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Paragraph
                          // @ts-ignore - User-defined custom attribute(s)
                          clas={"text-align_center_mobile-l"}
                          className={`paragraph scroll-in-view_slide-left ${_activeStyleVariant}`}
                        >
                          {
                            "We’re not just here to push buttons on a revenue system. We’re here to build your hotel’s performance engine. Send us your information so we can we can help to unlock your hotel's potential."
                          }
                        </Paragraph>
                      </Block>
                      <Block
                        className={`divider margin-bottom_sm margin-top_sm bg-color-3 ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                      <Block
                        className={`contact_wrapper ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`form_contact-wrapper ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`form_contact-item-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={` div-block-686 ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`form_link-wrapper ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={`phone-icon_embed ${_activeStyleVariant}`}
                                  content={
                                    '<?xml version="1.0" encoding="UTF-8"?>\n<svg id="phone-icon" data-name="phone-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 400">\n  <rect x="127.486" y="251.353" width="82.686" height="20.626"/>\n  <rect x="127.486" y="282.382" width="82.686" height="20.626"/>\n  <path d="M221.779,33.152c-3.108-2.635-6.593-5.788-10.334-7.648-10.831-5.707-25.525-2.762-33.127,6.684-2.934,3.405-4.853,7.798-5.731,12.169-.804,4.04-5.389,38.84-7.05,51.403-.486,3.113-3.459,5.05-6.288,4.808-7.47.019-19.153.001-26.711.016-31.027-2.525-58.833,21.017-58.666,51.783.102,2.783,4.375,90.29,6.272,129.137,1.395,22.928-.356,28.761,10.167,45.103,8.043,14.475,21.368,20.406,35.985,27.142,11.009,5.27,24.114,11.647,34.364,16.211,11.406,4.125,47.485,2.549,74.43,3.039,6.625-.032,11.645-.078,17.503-.207,8.799-.311,33.525-17.16,43.324-32.505,2.289-3.675,3.734-6.913,4.013-10.38,1.338-23.95,2.828-49.798,4.208-73.738,1.68-31.838,3.162-52.947,3.335-76.364.478-15.107-83.137-142.067-85.618-146.581l-.076-.072ZM252.214,153.355c-1.202,19.777-5.451,120.601-7.499,148.608-2.713,17.425-17.762,30.79-36.077,31.573-17.49.214-69.938-.057-74.218.047-20.261.15-37.45-15.634-38.322-35.49-1.363-29.735-7.176-145.376-7.126-146.268-.001-.077,0-.359.017-.933.007-.224.016-.485.029-.758.882-19.347,17.034-34.904,36.956-35.54,3.894-.099,36.609.11,48.423-.115,2.4-.241,4.511-2.527,4.768-4.869.105-.829.766-6.03,1.666-13.111,2.402-18.623,5.945-47.332,6.442-50.369,1.245-7.16,9.649-11.564,16.407-8.658,3.749,1.484,6.576,4.913,7.26,8.903.383,2.503,5.165,40.263,7.369,57.276.514,4.003.857,6.679.923,7.194.168.964.652,2.32,1.547,3.191,1.315,1.424,3.194,1.671,4.963,2.256,1.965.623,3.88,1.401,5.712,2.319,12.916,6.249,21.501,20.353,20.767,34.623l-.004.123Z"/>\n  <path d="M199.813,143.95h-62.059c-5.454-.013-10.69,2.133-14.565,5.971-3.859,3.905-6.035,9.166-6.062,14.656v41.433c.021,5.464,2.199,10.699,6.062,14.565,3.754,3.808,8.856,5.985,14.203,6.061h61.969c.061,0,.121,0,.182,0,11.391-.05,20.585-9.325,20.535-20.717l.452-41.252c0-.061,0-.121,0-.181-.05-11.391-9.325-20.585-20.717-20.535Z"/>\n</svg>'
                                  }
                                />
                                <Block
                                  className={`form_link-item ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"(310) 800-1124"}
                                </Block>
                              </Block>
                              <Block
                                className={`space_xs ${_activeStyleVariant}`}
                                tag={"div"}
                              />
                              <Block
                                className={` form_link-wrapper ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <HtmlEmbed
                                  className={`email-icon_embed ${_activeStyleVariant}`}
                                  content={
                                    '<?xml version="1.0" encoding="UTF-8"?>\n<svg id="email-icon" data-name="email-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 115">\n  <path d="M65.178,101.513c-8.5,0-17.002-.074-25.5.036-3.54.046-6.431-1.079-9.023-3.455-4.793-4.393-9.604-8.776-14.588-12.947-2.244-1.878-2.722-3.986-2.284-6.638.918-5.568,1.9-11.13,2.607-16.726.269-2.128,1.003-3.765,2.487-5.247,13.574-13.558,27.1-27.165,40.688-40.709,3.138-3.128,4.501-3.154,7.562-.158,10.729,10.502,21.199,21.259,31.244,32.424,1.966,2.186,3,4.706,2.99,7.705-.04,11.856-.067,23.712.003,35.568.04,6.602-3.872,10.24-10.185,10.171-8.666-.095-17.334-.024-26.001-.024ZM61.48,49.107c-3.376-3.388-6.266-6.358-9.234-9.247-2.304-2.243-2.555-2.257-4.815-.01-7.093,7.049-14.143,14.141-21.193,21.233-.576.58-1.402,1.25-1.47,1.942-.413,4.185-2.089,8.293-1.209,12.561,3.169.464,5.873-.749,8.646-.774,3.124-.029,5.246-1.419,7.29-3.592,3.881-4.126,7.972-8.054,11.974-12.066,3.163-3.171,6.323-6.344,10.013-10.047ZM67.363,42.203c2.194-2.191,4.607-4.601,7.155-7.145-3.511-3.609-7.046-7.52-11.225-11.001-2.57,2.608-5.328,4.688-6.98,7.298,3.944,3.872,7.601,7.462,11.05,10.849Z" fill="currentColor"/>\n</svg>'
                                  }
                                />
                                <Block
                                  className={`form_link-item ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  {"hello@revrebel.io"}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                          <Block
                            className={`space_xs ${_activeStyleVariant}`}
                            tag={"div"}
                          />
                          <Block
                            className={` form_contact-item-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={` form_link-wrapper ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <HtmlEmbed
                                className={`address-icon_embed ${_activeStyleVariant}`}
                                content={
                                  '<?xml version="1.0" encoding="UTF-8"?>\n<svg id="address-icon" data-name="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">\n  <path d="M116.103,101.571l118.094-.636c7.521-.04,11.291-9.107,6.017-14.468l-57.755-58.716c-3.294-3.349-8.678-3.393-12.027-.099l-60.339,59.352c-5.442,5.353-1.623,14.609,6.01,14.568Z" fill="currentColor"/>\n  <g>\n    <path d="M291.325,134.577c-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-.16-.082-.323-.161-.485-.242-8.406-4.307-17.936-6.738-28.035-6.738h-108.055c-33.908,0-61.396,27.488-61.396,61.396v107.736c0,24,13.808,44.779,33.925,54.863.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242.16.082.323.161.485.242,8.406,4.307,17.936,6.738,28.036,6.738h108.055c33.908,0,61.395-27.488,61.395-61.395v-107.736c0-24-13.808-44.779-33.925-54.863ZM230.84,316.571h-108.181c-21.213,0-38.41-17.197-38.41-38.41v-108.181c0-21.213,17.196-38.409,38.409-38.409h108.182c21.213,0,38.409,17.196,38.409,38.409v108.181c0,21.213-17.197,38.41-38.41,38.41Z" fill="currentColor"/>\n    <path d="M191.532,191.695c-.28,24.541,1.271,43.198,4.66,55.965-2.958-10.139-8.778-25.035-17.459-44.692l-20.44-45.908-34.09-.389-1.557,136.416,34.09.389.413-36.22c.289-25.326-1.12-43.193-4.226-53.598,3.414,10.277,16.202,40.347,38.364,90.212l33.169.379,1.557-136.416-34.09-.389-.391,34.252Z" fill="currentColor"/>\n  </g>\n</svg>'
                                }
                              />
                              <Block
                                className={`form_contact-address-wrapper ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={` form_link-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  <Block
                                    className={`form_link-item text-size-sm ${_activeStyleVariant}`}
                                    tag={"div"}
                                  >
                                    {"5101 Santa Monica Blvd."}
                                  </Block>
                                </Block>
                                <Block
                                  className={` form_link-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  <Block
                                    className={`form_link-item text-size-sm ${_activeStyleVariant}`}
                                    tag={"div"}
                                  >
                                    {"STE 8 PMB 69"}
                                  </Block>
                                </Block>
                                <Block
                                  className={` form_link-wrapper ${_activeStyleVariant}`}
                                  tag={"div"}
                                >
                                  <Block
                                    className={`form_link-item text-size-sm ${_activeStyleVariant}`}
                                    tag={"div"}
                                  >
                                    {"Los Angeles, CA 90029"}
                                  </Block>
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Block
                      className={`right-wrapper ${_activeStyleVariant}`}
                      id={
                        "w-node-_13065a42-cb3c-b9ec-2f0e-b21f7d97855d-7d978533"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={`div-block-687 ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <FormWrapper
                          className={`form_contact-card ${_activeStyleVariant}`}
                          id={"homepage-contact-form-block"}
                          // @ts-ignore - User-defined custom attribute(s)
                          target={"_blank"}
                        >
                          <FormForm
                            // @ts-ignore - User-defined custom attribute(s)
                            acceptCharset={"UTF-8"}
                            className={`card-body margin-top_sm width_100pct ${_activeStyleVariant}`}
                            data-name={"homepage-contact-form"}
                            encType={"multipart/form-data"}
                            id={"homepage-contact-form"}
                            method={"post"}
                            name={"wf-form-homepage-contact-form"}
                            // @ts-ignore - User-defined custom attribute(s)
                            zf_referrer_name={"website/homepage-contact-form"}
                          >
                            <FormTextInput
                              // @ts-ignore - User-defined custom attribute(s)
                              autoComplete={"given-name"}
                              autoFocus={false}
                              className={`form_input is-first-name w-node-_13065a42-cb3c-b9ec-2f0e-b21f7d978560-7d978533 ${_activeStyleVariant}`}
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
                              className={`form_input is-last-name ${_activeStyleVariant}`}
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
                            <FormTextInput
                              // @ts-ignore - User-defined custom attribute(s)
                              autoComplete={"email"}
                              autoFocus={false}
                              className={`form_input w-node-_13065a42-cb3c-b9ec-2f0e-b21f7d978562-7d978533 ${_activeStyleVariant}`}
                              data-name={"Email"}
                              disabled={false}
                              id={"Email-Address"}
                              maxLength={256}
                              name={"Email"}
                              placeholder={"Email Address"}
                              required={true}
                              type={"email"}
                              user-input={"email"}
                              // @ts-ignore - User-defined custom attribute(s)
                              wized={"input_email"}
                            />
                            <FormTextInput
                              // @ts-ignore - User-defined custom attribute(s)
                              autoComplete={"tel-area-code"}
                              autoFocus={false}
                              className={`form_input is-phone-number ${_activeStyleVariant}`}
                              data-name={"tel"}
                              disabled={false}
                              id={"Phone-Number"}
                              maxLength={256}
                              name={"tel"}
                              placeholder={"Phone Number"}
                              required={true}
                              type={"tel"}
                              user-input-phone-number={"ca,gb,us"}
                              // @ts-ignore - User-defined custom attribute(s)
                              wized={"input_phone"}
                            />
                            <FormTextInput
                              // @ts-ignore - User-defined custom attribute(s)
                              autoComplete={"organization"}
                              autoFocus={true}
                              className={`form_input is-company-name w-node-_13065a42-cb3c-b9ec-2f0e-b21f7d978564-7d978533 ${_activeStyleVariant}`}
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
                              className={`form_input w-node-_13065a42-cb3c-b9ec-2f0e-b21f7d978565-7d978533 ${_activeStyleVariant}`}
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
                            <FormTextarea
                              autoFocus={false}
                              className={`form_input is-text-area ${_activeStyleVariant}`}
                              data-name={"Message"}
                              id={"Message"}
                              maxLength={5000}
                              name={"Message"}
                              placeholder={"Any Additional Information?"}
                              required={false}
                            />
                            <FormButton
                              className={`button is-form-button ${_activeStyleVariant}`}
                              data-wait={buttonButtonLoadingMessage}
                              id={
                                "w-node-_13065a42-cb3c-b9ec-2f0e-b21f7d978567-7d978533"
                              }
                              type={"submit"}
                              value={buttonButtonText}
                            />
                          </FormForm>
                          <FormSuccessMessage
                            className={`success-message_contact-form ${_activeStyleVariant}`}
                          >
                            <Block
                              className={`padding_sm ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Heading tag={"h2"}>{"Success"}</Heading>
                              <Block
                                className={`text-block-200 ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                {"Boom. You're on our radar."}
                              </Block>
                              <Paragraph
                                className={`paragraph-lg ${_activeStyleVariant}`}
                              >
                                {
                                  "Stand by — one of our strategists will be in touch faster than a last-minute OTA booking."
                                }
                              </Paragraph>
                            </Block>
                          </FormSuccessMessage>
                          <FormErrorMessage
                            className={`error-message_contact-form ${_activeStyleVariant}`}
                          >
                            <Block
                              className={`text-block-141 ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              {
                                "Oops! There was an error while submitting the form. Please email us at hello@revbel.io, and someone will get back to you shortly."
                              }
                            </Block>
                          </FormErrorMessage>
                        </FormWrapper>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Section>
        </Section>
      ) : null}
    </div>
  );
}
