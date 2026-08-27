"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PoliciesHeader({
  headlineText = (
    <>
      {"THE"}
      <br />
      {"LEGAL"}
      <br />
      {"STUFF"}
    </>
  ),
  headlineTextTag = "h1",
  paragraphText = (
    <>
      {
        "Our Privacy Policies and Terms ensure transparency, outlining how we use data and govern our relationship with users. These terms apply to both partners who use our services and those we provide services to. By using our services, you agree to these terms in addition to any other applicable General Terms."
      }
      <br />
      <br />
      {
        "If you're using our services on behalf of your company, your company also agrees to these terms. Access our latest policies at the links below or on our website.Our most updated policies can always be found at the links below or at https://revrebel.io/policies."
      }
    </>
  ),

  policiesLink1Link = {
    href: "#",
  },

  policiesLink1LinkText = "Privacy Policy",
  policiesLink1LinkVisibility = true,

  policiesLink2Link = {
    href: "#",
  },

  policiesLink2LinkText = "Terms of Service",
  policiesLink2LinkVisibility = true,

  policiesLink3Link = {
    href: "#",
  },

  policiesLink3LinkText = "Disclaimer",
  policiesLink3LinkVisibility = true,

  policiesLink4Link = {
    href: "#",
  },

  policiesLink4LinkText = "End User License Agreement",
  policiesLink4LinkVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"component_wrapper"} tag={"div"}>
        <BlockContainer
          className={"component_container"}
          grid={{
            type: "container",
          }}
          id={"fixed-root"}
          tag={"div"}
        >
          <Block
            className={"component_padding padding-md text-color-primary"}
            tag={"div"}
          >
            <Block
              className={
                "grid_3-col is-1-2-1 padding_medium is-mobile_padding_none"
              }
              tag={"div"}
            >
              <Block
                id={"w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce03-da80cdff"}
                tag={"div"}
              >
                <Heading
                  className={
                    "headline-md font-weight-bold headline-animated-block"
                  }
                  tag={headlineTextTag}
                >
                  {headlineText}
                </Heading>
              </Block>
              <Block
                id={"w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce0a-da80cdff"}
                tag={"div"}
              >
                <Paragraph className={"paragraph is-color-inherit"}>
                  {paragraphText}
                </Paragraph>
              </Block>
              <Block
                className={
                  "margin-left-md padding-top_xxs is-mobile_padding_none"
                }
                id={"w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce10-da80cdff"}
                tag={"div"}
              >
                <Block className={"label margin-bottom_xs"} tag={"div"}>
                  {"Explore Our Polices"}
                </Block>
                {policiesLink1LinkVisibility ? (
                  <Block className={"flex-vertical"} tag={"div"}>
                    <Block
                      className={"flex_horizontal"}
                      id={
                        "w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce14-da80cdff"
                      }
                      tag={"div"}
                    >
                      <Link
                        block={"inline"}
                        button={false}
                        className={
                          "link-block flex-align_left flex-horizontal is-color-2"
                        }
                        options={policiesLink1Link}
                      >
                        <Block
                          className={
                            "tag is-color-2 flex-align_left text-size-regular"
                          }
                          id={
                            "w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce16-da80cdff"
                          }
                          tag={"div"}
                        >
                          {policiesLink1LinkText}
                        </Block>
                      </Link>
                    </Block>
                    {policiesLink2LinkVisibility ? (
                      <Block
                        className={"flex_horizontal"}
                        id={
                          "w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce18-da80cdff"
                        }
                        tag={"div"}
                      >
                        <Link
                          block={"inline"}
                          button={false}
                          className={
                            "link-block flex-align_left flex-horizontal is-color-3"
                          }
                          options={policiesLink2Link}
                        >
                          <Block
                            className={
                              "tag is-color-3 flex-align_left text-size-regular"
                            }
                            tag={"div"}
                          >
                            {policiesLink2LinkText}
                          </Block>
                        </Link>
                      </Block>
                    ) : null}
                    {policiesLink3LinkVisibility ? (
                      <Block
                        className={"flex_horizontal"}
                        id={
                          "w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce1c-da80cdff"
                        }
                        tag={"div"}
                      >
                        <Link
                          block={"inline"}
                          button={false}
                          className={
                            "link-block flex-align_left flex-horizontal is-color-6"
                          }
                          options={policiesLink3Link}
                        >
                          <Block
                            className={
                              "tag is-color-6 flex-align_left text-size-regular"
                            }
                            tag={"div"}
                          >
                            {policiesLink3LinkText}
                          </Block>
                        </Link>
                      </Block>
                    ) : null}
                    {policiesLink4LinkVisibility ? (
                      <Block
                        className={"flex_horizontal"}
                        id={
                          "w-node-_6bd58515-c467-44ab-5b3d-32fbda80ce20-da80cdff"
                        }
                        tag={"div"}
                      >
                        <Link
                          block={"inline"}
                          button={false}
                          className={
                            "link-block flex-align_left flex-horizontal is-color-8"
                          }
                          options={policiesLink4Link}
                        >
                          <Block
                            className={
                              "tag is-color-8 flex-align-left text-size-regular"
                            }
                            tag={"div"}
                          >
                            {policiesLink4LinkText}
                          </Block>
                        </Link>
                      </Block>
                    ) : null}
                  </Block>
                ) : null}
              </Block>
            </Block>
          </Block>
        </BlockContainer>
      </Block>
    </div>
  );
}
