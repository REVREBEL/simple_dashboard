"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-69":{"id":"e-69","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046},"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AuthorCard({
  authorAuthorLocation = "City, State",
  authorAuthorName = "FirstName, LastName",

  authorAuthorPageLink = {
    href: "#",
  },

  authorAuthorParagraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,.",
  authorAuthorPicture = "",
  authorSlotButton,
  settingsAuthorCardVisibility = true,

  socialButtonsLinkedInLink = {
    href: "#",
  },

  socialButtonsSlotSocialButton,
  socialButtonsSlotSocialButton2,
  socialButtonsSlotSocialButton3,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsAuthorCardVisibility ? (
        <Block className={"article-author_container"} tag={"div"}>
          <Block
            className={"article_author padding-responsive-sm text-primary"}
            id={"w-node-_225ef900-87ee-a1a4-a7bb-88b0dbe643f8-f26ed70e"}
            tag={"div"}
          >
            <Block
              className={"article-author_grid_2-col"}
              id={"w-node-e839d4c4-f7ae-8abf-3b35-1f88f26ed70f-f26ed70e"}
              tag={"div"}
            >
              <Block
                className={"article-author_image-wrapper"}
                id={"w-node-e839d4c4-f7ae-8abf-3b35-1f88f26ed710-f26ed70e"}
                tag={"div"}
              >
                <Link
                  block={"inline"}
                  button={false}
                  className={"link-block"}
                  options={authorAuthorPageLink}
                >
                  <Image
                    className={"article-author_image"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={authorAuthorPicture}
                    width={"175"}
                  />
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={"link-block-40"}
                  options={socialButtonsLinkedInLink}
                >
                  <HtmlEmbed
                    className={"code-embed-12"}
                    content={
                      '<svg viewBox="0 0 210 210" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M57.7 170.6h72.4c11.4 0 22.1-4.4 30.1-12.4s12.4-18.7 12.4-30.1V55.7c0-11.4-4.4-22.1-12.4-30.1s-18.7-12.4-30.1-12.4H57.7c-11.4 0-22.1 4.4-30.1 12.4s-12.4 18.7-12.4 30.1v72.5c0 11.4 4.4 22.1 12.4 30.1s18.7 12.4 30.1 12.4Zm21.4-90.7c0-2.4 1.5-3.9 3.9-3.9h20.9c.3 0 .7 0 1 .1 .6.3 1 1.4.6 2.7l-.9 2.9 2.7-1.3c4.4-2.2 8.9-3 13.2-2.5 10.8 1.4 20.2 11.6 23.3 25.4V142c0 2.4.6 3 .6 3s-12.5.3-16.5 0c-.5 0-4.9-.1-7-3.5 -.6-.9-.8-1.8-.9-2.6l.4-30.6c0-4.8-4.2-9.1-9.1-9.1 -4.9 0-9.1 4.2-9.1 9.1 .1 10.2.2 20.4.3 30.6 0 .6 0 2.1-.9 3.5 -1.2 2.1-3.6 3.1-5.2 3.5 -4.5 0-17.4 0-17.4 0s-.1-1.5-.1-3.9V79.9Zm-10.3 59c0 .4.4 2.4-.9 4.3 -1.5 2.3-4 2.6-4.3 2.6H40.1l.2-66c0-2.4 1.5-3.9 3.9-3.9h20.7c2.4 0 3.9 1.5 3.9 3.9 0 19.7 0 39.4 0 59ZM53.6 38c8.1 0 14.2 6.1 14.2 14.2s-6.1 14.2-14.2 14.2 -14.2-6.1-14.2-14.2 6.1-14.2 14.2-14.2Z"/><g><path d="M64.9 76H44.2c-2.4 0-3.9 1.5-3.9 3.9l-.2 66h23.5c.3 0 2.8-.3 4.3-2.6 1.3-1.9.9-3.9.9-4.3 0-19.7 0-39.4 0-59 0-2.4-1.5-3.9-3.9-3.9Z"/><path d="M53.6 66.5c8.1 0 14.2-6.1 14.2-14.2s-6.1-14.2-14.2-14.2 -14.2 6.1-14.2 14.2 6.1 14.2 14.2 14.2Z"/><path d="M96.6 145.9c1.6-.4 4-1.3 5.2-3.5 .8-1.4.9-2.8.9-3.5 -.1-10.2-.2-20.4-.3-30.6 0-4.8 4.2-9.1 9.1-9.1 4.9 0 9.1 4.2 9.1 9.1l-.4 30.6c0 .8.3 1.7.9 2.6 2 3.4 6.5 3.5 7 3.5 4 .3 16.5 0 16.5 0s-.6-.6-.6-3v-38.7c-3.1-13.8-12.5-24-23.3-25.4 -4.3-.5-8.7.3-13.2 2.5l-2.7 1.3 .9-2.9c.4-1.3 0-2.4-.6-2.7 -.3-.2-.7-.2-1-.1h-.2s-20.7 0-20.7 0c-2.4 0-3.9 1.5-3.9 3.9V142c0 2.4.1 3.9.1 3.9s12.8 0 17.4 0Z"/><path d="M205 92.4c0-5.6 0-8.5 0-13.5 -.3-12.9-5.9-25.1-14.7-33.8h-.1c-6.1-6.2-12.2-12.3-18.3-18.5 -1.7-2.4-3.6-4.8-5.8-6.9 -9.5-9.5-22.3-14.8-35.9-14.8H53.9c-.4 0-.9 0-1.3 0 -.2 0-.5 0-.7 0 -.7 0-1.3 0-2 .1 -.1 0-.3 0-.4 0C24.4 7.4 5 28.2 5 53.9V130c0 15 6.6 28.4 17.2 37.3 7.3 7.3 14.6 14.6 21.9 21.9 9.3 10 22.8 15.9 36.6 15.8 17.3 0 49.3 0 66 0 4.2 0 6.3 0 10.2 0 25.3-.3 46.5-20.8 48-45.5 .4-9.2 0-43.2.2-67ZM15.3 128.2V55.7C15.3 44.3 19.7 33.6 27.7 25.6c8-8 18.7-12.4 30.1-12.4h72.4c11.4 0 22.1 4.4 30.1 12.4s12.4 18.7 12.4 30.1v72.5c0 11.4-4.4 22.1-12.4 30.1s-18.7 12.4-30.1 12.4H57.7c-11.4 0-22.1-4.4-30.1-12.4s-12.4-18.7-12.4-30.1Z"/></g></svg>'
                    }
                  />
                </Link>
              </Block>
              <Block
                className={"flex_vertical full-width color-card_body"}
                id={"w-node-b67cd71a-fd8f-8c50-9922-fcdf58ea0299-f26ed70e"}
                tag={"div"}
              >
                <Block className={"article-author_content-wrapper"} tag={"div"}>
                  <Block className={"article-author_top-wrapper"} tag={"div"}>
                    <Block className={"author_name"} tag={"div"}>
                      <Block
                        className={
                          "headline-xs margin-bottom_none font-weight-bold"
                        }
                        tag={"div"}
                      >
                        {authorAuthorName}
                      </Block>
                      <Block
                        className={"author_location margin-bottom_xs"}
                        tag={"div"}
                      >
                        {authorAuthorLocation}
                      </Block>
                    </Block>
                    <Block
                      className={"article-author_social-wrapper"}
                      id={
                        "w-node-e839d4c4-f7ae-8abf-3b35-1f88f26ed718-f26ed70e"
                      }
                      tag={"div"}
                    />
                  </Block>
                  <Block className={"article-author_about-wrapper"} tag={"div"}>
                    <Block className={"headline-xxs text-size-md"} tag={"div"}>
                      {"About the author"}
                    </Block>
                    <Paragraph className={"paragraph margin-bottom_none"}>
                      {authorAuthorParagraphText}
                    </Paragraph>
                  </Block>
                </Block>
              </Block>
              <Block
                className={"article-author_button-wrapper"}
                id={"w-node-_36998d0d-a917-d596-19ba-dd4b4839dcf4-f26ed70e"}
                tag={"div"}
              >
                {authorSlotButton}
              </Block>
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
