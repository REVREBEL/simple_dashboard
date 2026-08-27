"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SmallParagraphHeadline({
  contentHeadlineTag = "h1",
  contentHeadlineText = (
    <>
      {"Case Study: Self-Swiping"}
      <br />
      {"Tinder App"}
    </>
  ),

  contentLink = {
    href: "#",
  },

  contentLinkText = "Learn more about this Self-Swiper.",
  contentText = "My best project so far has been Self-Swiping Tinder App. People are bored of constantly checking new people around them and they really want to only focus on... work. That's why Icome up with and idea for Self Swiper. People went crazy for it and in first 30days Self Swiper created 8M new matches.",
  optionsColor = "Light",
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181e9",
    "Brand Color 1": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181ea",
    "Brand Color 2": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181eb",
    "Brand Color 3": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181ec",
    "Brand Color 4": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181ed",
    "Brand Color 5": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181ee",
    "Brand Color 6": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181ef",
    "Brand Color 7": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f0",
    "Brand Color 8": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f1",
    "Brand Color 1 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f2",
    "Brand Color 2 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f3",
    "Brand Color 3 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f4",
    "Brand Color 4 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f5",
    "Brand Color 5 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f6",
    "Brand Color 6 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f7",
    "Brand Color 7 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f8",
    "Brand Color 8 Inverse": "w-variant-2da533b9-4c0a-6c0e-627b-54f8239181f9",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={`g-component-base ${_activeStyleVariant}`}
          id={settingsSectionId}
          tag={"section"}
        >
          <BlockContainer
            className={`global-component_wrapper ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <BlockContainer
              className={`g-container ${_activeStyleVariant}`}
              grid={{
                type: "container",
              }}
              tag={"div"}
            >
              <Block
                className={`grid_2-col margin-horizontal_auto ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`headline-wrapper flex-horizontal ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Heading
                    className={`headline-base ${_activeStyleVariant}`}
                    tag={contentHeadlineTag}
                  >
                    {contentHeadlineText}
                  </Heading>
                </Block>
                <Block
                  className={`item-wrapper ${_activeStyleVariant}`}
                  id={"w-node-_91dd17c3-4396-def2-1fdd-230ff05f3ae8-239181cd"}
                  tag={"div"}
                >
                  <Paragraph
                    className={`paragraph-md margin-bottom_sm ${_activeStyleVariant}`}
                  >
                    {contentText}
                  </Paragraph>
                  <Link
                    button={false}
                    className={`label_large ${_activeStyleVariant}`}
                    options={contentLink}
                  >
                    {contentLinkText}
                  </Link>
                </Block>
              </Block>
            </BlockContainer>
          </BlockContainer>
        </Section>
      ) : null}
    </div>
  );
}
