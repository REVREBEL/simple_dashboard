"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Grid from "./webflow_modules/Layout/components/Grid";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-598":{"id":"e-598","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-139","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-599"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".stats_image","originalId":"6a09244ce43d4439301cede0|2e94f9ae-7610-6889-cdca-7f50756a6915","appliesTo":"CLASS"},"targets":[{"selector":".stats_image","originalId":"6a09244ce43d4439301cede0|2e94f9ae-7610-6889-cdca-7f50756a6915","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1745350713324},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-139":{"id":"a-139","title":"Image fade in [ scroll in view ]","actionItemGroups":[{"actionItems":[{"id":"a-139-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuad","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301cede0|2e94f9ae-7610-6889-cdca-7f50756a6915"},"xValue":1.1,"yValue":1.1,"locked":true}}]},{"actionItems":[{"id":"a-139-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuint","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301cede0|2e94f9ae-7610-6889-cdca-7f50756a6915"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1745350735318},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Stats1X2X2({
  image1 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf0c2_Poolside%20with%20Palm%20Trees.avif",
  image2 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf0c8_Modern%20Living%20Room%20with%20Sofa%20%26%20Pillows.avif",
  text1 = "With every donation, we've been able to reach farther and do more. In just the past 12 months, we’ve provided resources to over 50 grassroots initiatives, supported 100+ volunteers working on the ground, and directly impacted communities facing real challenges—with real solutions. From mental health support to educational access, you turned ideas into measurable change.",
  text2 = "256",
  text3 = (
    <>
      {
        "Over 25,000 people directly supported through community programs, crisis response, and ongoing care initiatives."
      }
      <br />
    </>
  ),
  text4 = "85%",
  text5 = (
    <>
      {
        "of every dollar goes directly to on-the-ground efforts, tools, and services making a difference where it’s needed most."
      }
      <br />
    </>
  ),
  text6 = "40+",
  text7 = (
    <>
      {
        "Number of engements, projects and hotel's we've helped meet thier revenue goals."
      }
      <br />
    </>
  ),
  title1 = "From quiet efforts to real results: The ripple effect of every donation",
  title2 = "Projects supported through local programs",
  title3 = (
    <>
      {"Resource "}
      <br />
      {"Distribution"}
    </>
  ),
  title4 = (
    <>
      {"Volunteer & "}
      <br />
      {"Project Support"}
    </>
  ),
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"stats_component text-color-primary"} tag={"div"}>
        <Block className={"margin-bottom margin-xxl"} tag={"div"}>
          <Grid className={"stats_content"} tag={"div"}>
            <Block className={"stats_content-left"} tag={"div"}>
              <Heading tag={"h2"}>{title1}</Heading>
            </Block>
            <Block className={"stats_content-right"} tag={"div"}>
              <Paragraph className={"text-size-md"}>{text1}</Paragraph>
            </Block>
          </Grid>
        </Block>
        <Grid className={"stats_list"} tag={"div"}>
          <Block
            className={"card is-color-5 stats_item"}
            id={"w-node-_12e5df2b-250a-dd20-e772-a092467c65ac-467c65a2"}
            tag={"div"}
          >
            <Block
              className={"margin-bottom margin-large z-index-1"}
              tag={"div"}
            >
              <Heading className={"heading-style-h5"} tag={"h3"}>
                {title2}
              </Heading>
            </Block>
            <Block className={"stats_item-content z-index-1"} tag={"div"}>
              <Block className={"stats_number"} tag={"div"}>
                {text2}
              </Block>
              <Block className={"margin-block margin-xs"} tag={"div"}>
                <Block
                  className={"divider-horizontal bg-color-8"}
                  tag={"div"}
                />
              </Block>
              <Paragraph className={"paragraph font-weight-regular"}>
                {text3}
              </Paragraph>
            </Block>
          </Block>
          <Block className={"stats_image-wrapper"} tag={"div"}>
            <Image
              alt={""}
              className={"stats_image"}
              height={"auto"}
              loading={"lazy"}
              src={image1}
              width={"auto"}
            />
          </Block>
          <Block
            className={"card is-color-6 stats_item"}
            id={"w-node-_12e5df2b-250a-dd20-e772-a092467c65ba-467c65a2"}
            tag={"div"}
          >
            <Block className={"margin-bottom margin-large"} tag={"div"}>
              <Heading
                className={"heading-style-h5 text-align_right"}
                tag={"h3"}
              >
                {title3}
              </Heading>
            </Block>
            <Block className={"stats_item-content"} tag={"div"}>
              <Block className={"stats_number"} tag={"div"}>
                {text4}
              </Block>
              <Block className={"margin-block margin-xs"} tag={"div"}>
                <Block
                  className={"divider-horizontal bg-color-primary"}
                  tag={"div"}
                />
              </Block>
              <Paragraph className={"paragraph font-weight-regular"}>
                {text5}
              </Paragraph>
            </Block>
          </Block>
          <Block
            className={"card x stats_item"}
            id={"w-node-_12e5df2b-250a-dd20-e772-a092467c65c8-467c65a2"}
            tag={"div"}
          >
            <Block className={"margin-bottom margin-large"} tag={"div"}>
              <Heading
                className={"heading-style-h5 text-align_right"}
                tag={"h3"}
              >
                {title4}
              </Heading>
            </Block>
            <Block className={"stats_item-content"} tag={"div"}>
              <Block className={"stats_number"} tag={"div"}>
                {text6}
              </Block>
              <Block className={"margin-block margin-xs"} tag={"div"}>
                <Block
                  className={"divider-horizontal bg-color-4"}
                  tag={"div"}
                />
              </Block>
              <Paragraph className={"paragraph font-weight-regular"}>
                {text7}
              </Paragraph>
            </Block>
          </Block>
          <Block className={"stats_image-wrapper"} tag={"div"}>
            <Image
              alt={""}
              className={"stats_image"}
              height={"auto"}
              loading={"lazy"}
              src={image2}
              width={"auto"}
            />
          </Block>
        </Grid>
      </Block>
    </div>
  );
}
