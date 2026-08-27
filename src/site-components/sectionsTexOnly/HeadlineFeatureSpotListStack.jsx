"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import * as _interactions from "../webflow_modules/interactions";
import { InnerHeadlineFeatureSpotListStack } from "../zzComponentsParts/InnerHeadlineFeatureSpotListStack";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeadlineFeatureSpotListStack({
  contentMainParagraph = (
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
  contentResponsiveTextVariants = "lg",
  labelLabelColor = "powder",
  labelTheResultText = "Strategies that are agile, personalized, and performance-obsessed — the kind of marketing that makes your budget go further and your results go higher.",
  listListDescriptionText = "It’s not just our tools. It’s how we use them.",
  listListHeadline = "Our Competitive Edge",
  listListItemText1 = "A flexible, hotel-first tech stack that integrates across departments",
  listListItemText2 = "An intuitive collaboration tool that keeps everyone in sync",
  listListItemText3 = "One central data brain — with insights your whole team can act on",
  listListItemText4 = "Strategy sessions that feel like you’ve finally found your people",
  optionsColor = "Light",
  optionsId = "",
  optionsVisibility = true,
  slotHeadline,
  slotLabel,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"g-component-base"} tag={"div"}>
        <InnerHeadlineFeatureSpotListStack
          componentId={optionsId}
          componentVisibility={optionsVisibility}
          headlineSlot={slotHeadline}
          listListDescriptionText={listListDescriptionText}
          listListHeadline={listListHeadline}
          listListItemText1={listListItemText1}
          listListItemText2={listListItemText4}
          listListItemText3={listListItemText2}
          listListItemText4={listListItemText3}
          optionsBackgroundTextColor={optionsColor}
          paragraphsMainParagraph={contentMainParagraph}
          slotLabel={slotLabel}
          tagTagDescriptionText={labelTheResultText}
        />
      </Block>
    </div>
  );
}
