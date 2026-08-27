"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1162":{"id":"e-1162","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1145"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db7f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db7f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774046675557},"e-1164":{"id":"e-1164","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1147"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":200,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1774046687912},"e-1166":{"id":"e-1166","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1149"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db87","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db87","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1774147643366},"e-1168":{"id":"e-1168","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1151"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db8b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db8b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1774046726187},"e-1170":{"id":"e-1170","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1153"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db8f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c1684bb8-136f-1e88-fad6-72c47ed9db8f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1774046714793},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InnerHeadline4SubSectionsCard2({
  mainContentBottomSectionMainHeadline = "Customized Solutions For Independent Hotels",
  section1ParagraphSubheadline = "Short-term, High-impact Support.",
  section1ParagraphText = "Need quick reinforcement for a open position that’s in transition? We drop in, execute cleanly, and get out without breaking your flow. Think of us as your plug-and-play problem solvers, until your long-term solution arrives.",
  section1SectionSubheadline = "DROP-IN SPECIALISTS",
  section1SubheadlineTag = "h3",
  section2ParagraphText = "We dissect your data, audit your current approach, and rebuild where necessary to uncover the revenue you didn’t know you were missing. Whether you need a 1-week assist or a long-term alliance, we bring brains, tech, and slightly excessive enthusiasm to every engagement.",
  section2SectionSubheadline = "Deep Dive. Untapped Profit. Unlocked.",
  section2SectionTag = "h3",
  section2SubheadlineTag = "Revenue Rewriters",
  section3ParagraphSubheadline = "Full Firepower on Demand.",
  section3ParagraphText = "Full support in Revenue Strategy, Distribution & Performance Marketing, best for long term engagements. One integrated platform, zero fluff. This is the whole experience: strategy, execution, optimization — all working in harmony like a tightly-run call sheet.",
  section3SectionSubheadline = "FULL CAST & CREW",
  section3SubheadlineTag = "h3",
  section4ParagraphSubheadline = "Project Plans. Executed. Thoroughly.",
  section4ParagraphText = "We step in as the strategy lead, taskmaster, or final mile finisher. No dropped balls. No delays. No passive-aggressive email threads. Perfect for system migrations, market expansions, new openings, or“I swear we’ve talked about this project for 6 months.”",
  section4SectionSubheadline = "Project Closers ",
  section4SubheadlineTag = "h3",
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
          className={"card margin-block_md"}
          id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db7d-7ed9db5f"}
          tag={"div"}
        >
          <Block
            className={"card-body"}
            id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db7e-7ed9db5f"}
            tag={"div"}
          >
            <Heading
              className={"headline-md margin-bottom_sm"}
              data-w-id={"c1684bb8-136f-1e88-fad6-72c47ed9db7f"}
              id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db7f-7ed9db5f"}
              tag={"h2"}
            >
              {mainContentBottomSectionMainHeadline}
            </Heading>
            <Block className={"space-xs"} tag={"div"} />
            <Block
              className={
                "grid_2-col gap-md w-node-c1684bb8-136f-1e88-fad6-72c47ed9db81-7ed9db5f"
              }
              id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188de-035ee5ba"}
              tag={"div"}
            >
              <Block
                className={"card_body flex-align_top"}
                id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db82-7ed9db5f"}
                tag={"div"}
              >
                <Heading
                  className={
                    "headline-sm w-node-c1684bb8-136f-1e88-fad6-72c47ed9db83-7ed9db5f"
                  }
                  data-w-id={"c1684bb8-136f-1e88-fad6-72c47ed9db83"}
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                  tag={section1SubheadlineTag}
                >
                  {section1SectionSubheadline}
                </Heading>
                <Block
                  className={"subheadline-base"}
                  id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db84-7ed9db5f"}
                  tag={"div"}
                >
                  {section1ParagraphSubheadline}
                </Block>
                <Paragraph className={"paragraph"}>
                  {section1ParagraphText}
                </Paragraph>
              </Block>
              <Block
                className={"card_body"}
                id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db86-7ed9db5f"}
                tag={"div"}
              >
                <Heading
                  className={
                    "headline-sm w-node-c1684bb8-136f-1e88-fad6-72c47ed9db87-7ed9db5f"
                  }
                  data-w-id={"c1684bb8-136f-1e88-fad6-72c47ed9db87"}
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                  tag={section2SectionTag}
                >
                  {section2SubheadlineTag}
                </Heading>
                <Block
                  className={
                    "subheadline-base w-node-c1684bb8-136f-1e88-fad6-72c47ed9db88-7ed9db5f"
                  }
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                  tag={"div"}
                >
                  {section2SectionSubheadline}
                </Block>
                <Paragraph className={"paragraph"}>
                  {section2ParagraphText}
                </Paragraph>
              </Block>
              <Block
                className={"card_body"}
                id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db8a-7ed9db5f"}
                tag={"div"}
              >
                <Heading
                  className={
                    "headline-sm w-node-c1684bb8-136f-1e88-fad6-72c47ed9db8b-7ed9db5f"
                  }
                  data-w-id={"c1684bb8-136f-1e88-fad6-72c47ed9db8b"}
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                  tag={section3SubheadlineTag}
                >
                  {section3SectionSubheadline}
                </Heading>
                <Block
                  className={"subheadline-base"}
                  id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db8c-7ed9db5f"}
                  tag={"div"}
                >
                  {section3ParagraphSubheadline}
                </Block>
                <Paragraph className={"paragraph"}>
                  {section3ParagraphText}
                </Paragraph>
              </Block>
              <Block
                className={"card_body flex-align_top"}
                id={"w-node-c1684bb8-136f-1e88-fad6-72c47ed9db8e-7ed9db5f"}
                tag={"div"}
              >
                <Heading
                  className={
                    "headline-sm w-node-c1684bb8-136f-1e88-fad6-72c47ed9db8f-7ed9db5f"
                  }
                  data-w-id={"c1684bb8-136f-1e88-fad6-72c47ed9db8f"}
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                  tag={section4SubheadlineTag}
                >
                  {section4SectionSubheadline}
                </Heading>
                <Block
                  className={
                    "subheadline-base w-node-c1684bb8-136f-1e88-fad6-72c47ed9db90-7ed9db5f"
                  }
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"}
                  tag={"div"}
                >
                  {section4ParagraphSubheadline}
                </Block>
                <Paragraph className={"paragraph"}>
                  {section4ParagraphText}
                </Paragraph>
              </Block>
            </Block>
          </Block>
        </Block>
      </Grid>
    </div>
  );
}
