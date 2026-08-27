"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import * as _interactions from "../webflow_modules/interactions";
import { applyPredicate } from "../webflow_modules/Conditions/helpers/applyPredicate";
import { conditional } from "../webflow_modules/Conditionals/helpers/conditional";
import { equals } from "../webflow_modules/Boolean/helpers/equals";
import { every } from "../webflow_modules/Boolean/helpers/every";

const _interactionsData = JSON.parse(
  '{"events":{"e-1252":{"id":"e-1252","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1282"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b327f684-1647-25fd-4b6b-4495dfebc33e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b327f684-1647-25fd-4b6b-4495dfebc33e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":5,"direction":null,"effectIn":true},"createdOn":1784501097294},"e-1287":{"id":"e-1287","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"84a5e784-f3c0-7802-82fb-498d8def6c06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"84a5e784-f3c0-7802-82fb-498d8def6c06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":5,"direction":null,"effectIn":true},"createdOn":1786760775148}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VResponsiveHeadline({
  dataFontWeight = "",
  dataTextWrap = "",
  eyebrowText = "Eyebrow Text",
  eyebrowVisibility = true,
  headlineTag = "h1",
  headlineText = "Headline",
  headlineVisibility = true,
  headlineWrapping = true,
  responsiveTextSizeVariants = "base",
  subheadlineText = "Subheadline Text",
  subheadlineVisibility = true,
  valueWrapHeadline = "",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    jumbo: "w-variant-afa848e0-b886-bcd4-8e13-ff1159bf943c",
    xxxl: "w-variant-d7e83806-a567-3c3b-3043-04220d872582",
    xxl: "w-variant-4da91c82-baf5-870f-689b-e7685f7c5173",
    xl: "w-variant-4da91c82-baf5-870f-689b-e7685f7c5174",
    lg: "w-variant-4da91c82-baf5-870f-689b-e7685f7c5175",
    md: "w-variant-4da91c82-baf5-870f-689b-e7685f7c5176",
    base: "",
    sm: "w-variant-4da91c82-baf5-870f-689b-e7685f7c5177",
    xs: "w-variant-4da91c82-baf5-870f-689b-e7685f7c5178",
    xxs: "w-variant-4da91c82-baf5-870f-689b-e7685f7c5179",
    tiny: "w-variant-b425fb2a-95b3-5075-5385-5ab3e41e422c",
  };

  const _activeStyleVariant = _styleVariantMap[responsiveTextSizeVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {headlineVisibility ? (
        <Block
          className={`headline-container ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`v-headline-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`fit-heading-boundary ${_activeStyleVariant}`}
              tag={"div"}
            >
              {conditional({
                rules: [
                  {
                    condition: every([
                      applyPredicate(headlineWrapping)(equals(false)),
                    ]),
                    output: true,
                  },
                  {
                    condition: every([
                      applyPredicate(headlineWrapping)(equals(true)),
                    ]),
                    output: false,
                  },
                ],

                fallback: false,
              }) ? (
                <Block
                  className={`c-headline fit-heading ${_activeStyleVariant}`}
                  data-w-id={"b327f684-1647-25fd-4b6b-4495dfebc33e"}
                  data-wrap-headline={valueWrapHeadline}
                  tag={"div"}
                >
                  {eyebrowVisibility ? (
                    <Block
                      className={`v-eyebrow ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {eyebrowText}
                    </Block>
                  ) : null}
                  {headlineVisibility ? (
                    <Heading
                      className={`v-headline-responsive fit-heading ${_activeStyleVariant}`}
                      data-fit-max={
                        responsiveTextSizeVariants === "jumbo"
                          ? "148"
                          : responsiveTextSizeVariants === "xxxl"
                          ? "138"
                          : responsiveTextSizeVariants === "xxl"
                          ? "128"
                          : responsiveTextSizeVariants === "xl"
                          ? "118"
                          : responsiveTextSizeVariants === "lg"
                          ? "95"
                          : responsiveTextSizeVariants === "md"
                          ? "76"
                          : responsiveTextSizeVariants === "Playlist"
                          ? "60"
                          : responsiveTextSizeVariants === "sm"
                          ? "48"
                          : responsiveTextSizeVariants === "xs"
                          ? "38"
                          : responsiveTextSizeVariants === "xxs"
                          ? "31"
                          : responsiveTextSizeVariants === "tiny"
                          ? "24"
                          : "60"
                      }
                      data-fit-min={
                        responsiveTextSizeVariants === "jumbo"
                          ? "52"
                          : responsiveTextSizeVariants === "xxxl"
                          ? "48"
                          : responsiveTextSizeVariants === "xxl"
                          ? "44"
                          : responsiveTextSizeVariants === "xl"
                          ? "40"
                          : responsiveTextSizeVariants === "lg"
                          ? "40"
                          : responsiveTextSizeVariants === "lg"
                          ? "36"
                          : responsiveTextSizeVariants === "md"
                          ? "32"
                          : responsiveTextSizeVariants === "Playlist"
                          ? "28"
                          : responsiveTextSizeVariants === "sm"
                          ? "24"
                          : responsiveTextSizeVariants === "xs"
                          ? "20"
                          : responsiveTextSizeVariants === "xxs"
                          ? "18"
                          : responsiveTextSizeVariants === "tiny"
                          ? "16"
                          : "28"
                      }
                      data-font-weight={dataFontWeight}
                      data-text-wrap={dataTextWrap}
                      tag={headlineTag}
                    >
                      {headlineText}
                    </Heading>
                  ) : null}
                  {subheadlineVisibility ? (
                    <Block
                      className={`v-subheadline ${_activeStyleVariant}`}
                      data-text-wrap={dataTextWrap}
                      tag={"div"}
                    >
                      {subheadlineText}
                    </Block>
                  ) : null}
                </Block>
              ) : null}
              {conditional({
                rules: [
                  {
                    condition: every([
                      applyPredicate(headlineWrapping)(equals(true)),
                    ]),
                    output: true,
                  },
                  {
                    condition: every([
                      applyPredicate(headlineWrapping)(equals(false)),
                    ]),
                    output: false,
                  },
                ],

                fallback: false,
              }) ? (
                <Block
                  className={`c-headline ${_activeStyleVariant}`}
                  data-w-id={"84a5e784-f3c0-7802-82fb-498d8def6c06"}
                  data-wrap-headline={valueWrapHeadline}
                  tag={"div"}
                >
                  {eyebrowVisibility ? (
                    <Block
                      className={`v-eyebrow ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {eyebrowText}
                    </Block>
                  ) : null}
                  {headlineVisibility ? (
                    <Heading
                      className={`v-headline-responsive ${_activeStyleVariant}`}
                      data-fit-max={
                        responsiveTextSizeVariants === "jumbo"
                          ? "148"
                          : responsiveTextSizeVariants === "xxxl"
                          ? "138"
                          : responsiveTextSizeVariants === "xxl"
                          ? "128"
                          : responsiveTextSizeVariants === "xl"
                          ? "118"
                          : responsiveTextSizeVariants === "lg"
                          ? "95"
                          : responsiveTextSizeVariants === "md"
                          ? "76"
                          : responsiveTextSizeVariants === "Playlist"
                          ? "60"
                          : responsiveTextSizeVariants === "sm"
                          ? "48"
                          : responsiveTextSizeVariants === "xs"
                          ? "38"
                          : responsiveTextSizeVariants === "xxs"
                          ? "31"
                          : responsiveTextSizeVariants === "tiny"
                          ? "24"
                          : "60"
                      }
                      data-fit-min={
                        responsiveTextSizeVariants === "jumbo"
                          ? "52"
                          : responsiveTextSizeVariants === "xxxl"
                          ? "48"
                          : responsiveTextSizeVariants === "xxl"
                          ? "44"
                          : responsiveTextSizeVariants === "xl"
                          ? "40"
                          : responsiveTextSizeVariants === "lg"
                          ? "40"
                          : responsiveTextSizeVariants === "lg"
                          ? "36"
                          : responsiveTextSizeVariants === "md"
                          ? "32"
                          : responsiveTextSizeVariants === "Playlist"
                          ? "28"
                          : responsiveTextSizeVariants === "sm"
                          ? "24"
                          : responsiveTextSizeVariants === "xs"
                          ? "20"
                          : responsiveTextSizeVariants === "xxs"
                          ? "18"
                          : responsiveTextSizeVariants === "tiny"
                          ? "16"
                          : "28"
                      }
                      data-font-weight={dataFontWeight}
                      data-text-wrap={dataTextWrap}
                      tag={headlineTag}
                    >
                      {headlineText}
                    </Heading>
                  ) : null}
                  {subheadlineVisibility ? (
                    <Block
                      className={`v-subheadline ${_activeStyleVariant}`}
                      data-text-wrap={dataTextWrap}
                      tag={"div"}
                    >
                      {subheadlineText}
                    </Block>
                  ) : null}
                </Block>
              ) : null}
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
