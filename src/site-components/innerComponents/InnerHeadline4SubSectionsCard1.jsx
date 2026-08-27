"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import List from "../webflow_modules/Basic/components/List";
import ListItem from "../webflow_modules/Basic/components/ListItem";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";
import { ComponentHeadlineSizeVariants } from "../componentTemplates/ComponentHeadlineSizeVariants";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1136":{"id":"e-1136","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1137"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb302","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb302","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774046619254},"e-1138":{"id":"e-1138","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1139"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb307","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb307","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1774046631764},"e-1140":{"id":"e-1140","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb30e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb30e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1774046647199},"e-1142":{"id":"e-1142","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1143"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb312","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"765b9869-aa08-8b1e-ab09-0fb5f35bb312","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774046663577},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InnerHeadline4SubSectionsCard1({
  featureSection2FeatureSubheadline = "Strategic Expertise at Your Fingertips",
  featureSection2FeatureSubheadlineTag = "h3",
  featureSection2ListItem1 = "Revenue Strategies & Execution ",
  featureSection2ListItem2 = "Performance Marketing Digital Optimization",
  featureSection2ListItem3 = "Distribution Planning",
  featureSection2ListItem4 = " Creative Concepts ",
  featureSection2ListItem5 = "System Rebuilds, New Rollouts, or General Optimization",
  featureSection2ParagraphText = "Imagine making one phone call to help with revitalizing your hotel's performance. Whether it's boosting occupancy rates, refining your marketing approach, or streamlining operations, we can provide the expertise and resources you need.",
  mainContentHeadlineText = "Mavericks for Hire. ",
  mainContentListHeadline = "Our Services Include",
  mainContentListItem1 = "Revenue generation strategies customized for your property.",
  mainContentListItem2 = "Short- and long-term engagement options.",
  mainContentListItem22 = "Tools and platforms designed for efficiency and profitability.",
  mainContentListItem3 = "Comprehensive support for marketing, distribution, and revenue strategy.",
  mainContentParagraphText = "From project management to a comprehensive analysis of your strategy, we offer services that deliver impactful results. No matter the size of your hotel or the complexity of your challenge,if you’re looking for smarter ways to optimize, grow, or simply breathe easier, we’ve got your back.",
  mainContentSubSectionParagraph = "Empowering independent hotels to achieve their revenue goals with tailored solutions. We combine years of industry expertise with cutting-edge technology to drive measurable impact.",
  mainContentSubSectionSubheadline = "Built for Hoteliers",
  text1 = "Unify revenue. Amplify results.",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Grid className={"sub-secton-grid"}>
        <Block
          className={
            "card w-node-_765b9869-aa08-8b1e-ab09-0fb5f35bb2fe-f35bb2fd"
          }
          id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5c4-035ee5ba"}
          tag={"div"}
        >
          <Block className={"card-body"} tag={"div"}>
            <Block tag={"div"}>
              <ComponentHeadlineSizeVariants
                headlineSizeVariants={"Level 1 Bigger"}
                headlineText={mainContentHeadlineText}
              />
            </Block>
            <Block
              className={"headline-sm text-color-3"}
              data-w-id={"765b9869-aa08-8b1e-ab09-0fb5f35bb302"}
              tag={"div"}
            >
              {text1}
            </Block>
            <Paragraph className={"paragraph-md"}>
              {mainContentParagraphText}
            </Paragraph>
            <Block className={"space_xs"} tag={"div"} />
            <Block
              className={"grid_2-col gap-md margin-block_sm"}
              id={"w-node-_765b9869-aa08-8b1e-ab09-0fb5f35bb305-f35bb2fd"}
              tag={"div"}
            >
              <Block
                className={"card_body"}
                id={"w-node-_765b9869-aa08-8b1e-ab09-0fb5f35bb306-f35bb2fd"}
                tag={"div"}
              >
                <Block
                  className={"headline-xxs"}
                  data-w-id={"765b9869-aa08-8b1e-ab09-0fb5f35bb307"}
                  tag={"div"}
                >
                  {mainContentListHeadline}
                </Block>
                <List
                  className={"list-bullet-points"}
                  tag={"ul"}
                  unstyled={false}
                >
                  <ListItem className={"bullet-list-item"}>
                    {mainContentListItem1}
                  </ListItem>
                  <ListItem className={"bullet-list-item"}>
                    {mainContentListItem2}
                  </ListItem>
                  <ListItem className={"bullet-list-item"}>
                    {mainContentListItem22}
                  </ListItem>
                  <ListItem className={"bullet-list-item"}>
                    {mainContentListItem3}
                  </ListItem>
                </List>
              </Block>
              <Block
                className={"card_body padding-block_xs"}
                id={"w-node-_765b9869-aa08-8b1e-ab09-0fb5f35bb30d-f35bb2fd"}
                tag={"div"}
              >
                <Block
                  className={
                    "headline-xxs w-node-_765b9869-aa08-8b1e-ab09-0fb5f35bb30e-f35bb2fd"
                  }
                  data-w-id={"765b9869-aa08-8b1e-ab09-0fb5f35bb30e"}
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                  tag={"div"}
                >
                  {mainContentSubSectionSubheadline}
                </Block>
                <Paragraph className={"paragraph"}>
                  {mainContentSubSectionParagraph}
                </Paragraph>
              </Block>
            </Block>
            <Block className={"line-seperator is-3rem"} tag={"div"} />
            <Block
              className={"card_body margin-block_md"}
              id={"w-node-_765b9869-aa08-8b1e-ab09-0fb5f35bb311-f35bb2fd"}
              tag={"div"}
            >
              <Heading
                className={
                  "headline-sm w-node-_765b9869-aa08-8b1e-ab09-0fb5f35bb312-f35bb2fd"
                }
                data-w-id={"765b9869-aa08-8b1e-ab09-0fb5f35bb312"}
                id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                tag={featureSection2FeatureSubheadlineTag}
              >
                {featureSection2FeatureSubheadline}
              </Heading>
              <Paragraph className={"paragraph"}>
                {featureSection2ParagraphText}
              </Paragraph>
              <List className={"list-3"} tag={"ul"} unstyled={false}>
                <ListItem className={"bullet-list-item"}>
                  {featureSection2ListItem1}
                </ListItem>
                <ListItem className={"bullet-list-item"}>
                  {featureSection2ListItem2}
                </ListItem>
                <ListItem className={"bullet-list-item"}>
                  {featureSection2ListItem3}
                </ListItem>
                <ListItem className={"bullet-list-item"}>
                  {featureSection2ListItem4}
                </ListItem>
                <ListItem className={"bullet-list-item"}>
                  {featureSection2ListItem5}
                </ListItem>
              </List>
            </Block>
            <Block className={"line-seperator is-3rem"} tag={"div"} />
          </Block>
        </Block>
      </Grid>
    </div>
  );
}
