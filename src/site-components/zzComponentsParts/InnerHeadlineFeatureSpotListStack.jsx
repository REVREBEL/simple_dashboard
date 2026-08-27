"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import List from "../webflow_modules/Basic/components/List";
import ListItem from "../webflow_modules/Basic/components/ListItem";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InnerHeadlineFeatureSpotListStack({
  componentId = "",
  componentVisibility = true,
  headlineSlot,
  listListDescriptionText = "It’s not just our tools. It’s how we use them.",
  listListHeadline = "Our Competitive Edge",
  listListItemText1 = "A flexible, hotel-first tech stack that integrates across departments",
  listListItemText2 = "An intuitive collaboration tool that keeps everyone in sync",
  listListItemText3 = "One central data brain — with insights your whole team can act on",
  listListItemText4 = "Strategy sessions that feel like you’ve finally found your people",
  optionsBackgroundTextColor = "Light",
  paragraphsMainParagraph = (
    <>
      {
        "We’re a collective of strategists, data nerds, tech pros, and hospitality lifers who know how to stretch budgets, capture attention, and fill rooms. We don’t just push campaigns — we orchestrate precision plans. "
      }
      <br />
      <br />
      {
        "We pair human expertise with smart technology to personalize your outreach, increase conversions, and drive long-term profitability. Our collaboration platform turns chaos into cohesion — connecting revenue, marketing, and ops into one shared vision. "
      }
    </>
  ),
  slotLabel,
  tagTagDescriptionText = "Strategies that are agile, personalized, and performance-obsessed — the kind of marketing that makes your budget go further and your results go higher.",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-b49c2de3-7466-d357-9d72-d0337d48c214",
    "Color 1": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c215",
    "Color 2": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c216",
    "Color 3": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c217",
    "Color 4": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c218",
    "Color 5": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c219",
    "Color 6": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c21a",
    "Color 7": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c21b",
    "Color 8": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c21c",
    "Color 9": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c21d",
    "Color 1 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c21e",
    "Color 2 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c21f",
    "Color 3 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c220",
    "Color 4 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c221",
    "Color 5 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c222",
    "Color 6 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c223",
    "Color 7 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c224",
    "Color 8 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c225",
    "Color 9 Inverse": "w-variant-b49c2de3-7466-d357-9d72-d0337d48c226",
  };

  const _activeStyleVariant = _styleVariantMap[optionsBackgroundTextColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {componentVisibility ? (
        <Block
          className={`g-component-base ${_activeStyleVariant}`}
          id={componentId}
          tag={"div"}
        >
          <Section
            className={`component_wrapper ${_activeStyleVariant}`}
            grid={{
              type: "section",
            }}
            tag={"section"}
          >
            <BlockContainer
              className={`component_container ${_activeStyleVariant}`}
              grid={{
                type: "container",
              }}
              tag={"div"}
            >
              <Block
                className={`component_background-variants ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`component_padding padding-md ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`component_text-size-variants ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`grid_2-col gap-xl is-mobile-gap-md ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`column-left ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {headlineSlot}
                        <Paragraph
                          className={`paragraph_variant padding-top_none ${_activeStyleVariant}`}
                        >
                          {paragraphsMainParagraph}
                        </Paragraph>
                      </Block>
                      <Block
                        className={`column-right ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`div-block-723 ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`flex-horizontal margin-bottom_xxs ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            {slotLabel}
                          </Block>
                          <Paragraph
                            className={`paragraph_variant ${_activeStyleVariant}`}
                          >
                            {tagTagDescriptionText}
                          </Paragraph>
                        </Block>
                        <Block
                          className={`space_2rem ${_activeStyleVariant}`}
                          tag={"div"}
                        />
                        <Block tag={"div"}>
                          <Block
                            className={`list-headline ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            {listListHeadline}
                          </Block>
                          <Paragraph
                            className={`list_paragraph ${_activeStyleVariant}`}
                          >
                            {listListDescriptionText}
                          </Paragraph>
                          <List
                            className={`list_check-mark ${_activeStyleVariant}`}
                            tag={"ul"}
                            unstyled={true}
                          >
                            <ListItem
                              className={`checkmark-list-item ${_activeStyleVariant}`}
                            >
                              {listListItemText1}
                            </ListItem>
                            <ListItem
                              className={`checkmark-list-item ${_activeStyleVariant}`}
                            >
                              {listListItemText2}
                            </ListItem>
                            <ListItem
                              className={` checkmark-list-item ${_activeStyleVariant}`}
                            >
                              {listListItemText3}
                            </ListItem>
                            <ListItem
                              className={`checkmark-list-item ${_activeStyleVariant}`}
                            >
                              {listListItemText4}
                            </ListItem>
                          </List>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </BlockContainer>
          </Section>
        </Block>
      ) : null}
    </div>
  );
}
