"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import DOM from "../webflow_modules/Builtin/components/DOM";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import * as _interactions from "../webflow_modules/interactions";
import { listOfElementsToText } from "../webflow_modules/Basic/helpers/listOfElementsToText";

const _interactionsData = JSON.parse(
  '{"events":{"e-69":{"id":"e-69","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046},"e-846":{"id":"e-846","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763321911152},"e-848":{"id":"e-848","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830},"e-1294":{"id":"e-1294","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830}},"actionLists":{"a-94":{"id":"a-94","title":"Scroll Into View - Fade-In","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"a-227":{"id":"a-227","title":"Scroll Into View - Fade-In 2","actionItemGroups":[{"actionItems":[{"id":"a-227-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-227-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainPreviewCard({
  customCodeArticleSlugValue = "",
  likeColorVariants = null,
  likedSlot,
  likeSizeVariant = null,
  linkColor = null,
  linkPositionVariant = null,
  linkSlot,
  mainCardCardId = "",
  mainCardCardVisibility = true,
  mainCardHeadinlineTag = "h3",
  mainCardHeadlineText = "Headline",
  mainCardId = "",
  mainCardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb7_Placeholder%20Image.png",
  mainCardImageAltText = "__wf_reserved_inherit",
  mainCardImageVisibility = true,
  mainCardVisibility = true,
  metaLabelFontSize = null,
  metaSlot,
  viewsLikesColorVariants = null,
  viewsLikesMetricsSlot,
  viewsLikesSizeVariant = null,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {mainCardVisibility ? (
        <Block
          className={"main-preview-card_component"}
          id={mainCardId}
          tag={"div"}
        >
          {mainCardCardVisibility ? (
            <Block
              className={"main-preview-card shadow-blue width_400px"}
              id={mainCardCardId}
              tag={"div"}
            >
              <Block className={"main-preview-card_body"} tag={"div"}>
                <Block
                  className={
                    "main-preview-card_content-wrapper text-color-primary"
                  }
                  tag={"div"}
                >
                  {metaSlot}
                  <Heading
                    className={"headline-xs padding-top_xs"}
                    tag={mainCardHeadinlineTag}
                  >
                    {mainCardHeadlineText}
                  </Heading>
                  <Block
                    className={"card_item-wrapper margin-top-auto"}
                    tag={"div"}
                  >
                    {linkSlot}
                    <DOM
                      className={"preview-card_trigger"}
                      preview-trigger={listOfElementsToText(
                        customCodeArticleSlugValue
                      )}
                      tag={"div"}
                    />
                    {viewsLikesMetricsSlot}
                  </Block>
                </Block>
                <Block
                  className={"image-cover radius-top_none ratio_3x2"}
                  tag={"div"}
                >
                  {mainCardImageVisibility ? (
                    <Image
                      className={"image-animated radius-top_none"}
                      height={"auto"}
                      loading={"lazy"}
                      src={mainCardImage}
                      width={"auto"}
                    />
                  ) : null}
                </Block>
              </Block>
              <Block className={"data-actiion-like_wrapper"} tag={"div"}>
                {likedSlot}
              </Block>
            </Block>
          ) : null}
        </Block>
      ) : null}
    </div>
  );
}
