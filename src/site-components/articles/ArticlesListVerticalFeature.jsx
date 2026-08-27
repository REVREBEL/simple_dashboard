"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-846":{"id":"e-846","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763321911152},"e-848":{"id":"e-848","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830},"e-1294":{"id":"e-1294","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830}},"actionLists":{"a-94":{"id":"a-94","title":"Scroll Into View - Fade-In","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"a-227":{"id":"a-227","title":"Scroll Into View - Fade-In 2","actionItemGroups":[{"actionItems":[{"id":"a-227-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-227-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ArticlesListVerticalFeature({ slotCardMeta, slotReadMore }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={"component_wrapper"}
        data-copilot={"true"}
        data-record-id={"aa78945c-ebcf-8e11-a011-8f4645b1fb8a"}
        tag={"section"}
      >
        <BlockContainer
          className={"component_container"}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          <BlockContainer
            className={
              "component_padding max-width_md padding-inline_sm padding-block_md"
            }
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block className={"article-list_wrapper"} tag={"div"}>
              <Block
                className={"image-animated is-top-radius image-cover"}
                id={"w-node-_95fab931-31ae-dbd7-3017-95feaf06359d-2e8eae4d"}
                tag={"div"}
              >
                <Image
                  className={"blog_image-sm"}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  }
                  width={"auto"}
                />
              </Block>
              <Block className={"color-card_body"} tag={"div"}>
                {slotCardMeta}
                <Heading className={"headline-xxs margin-block_xs"} tag={"h3"}>
                  {"Heading"}
                </Heading>
                <Paragraph className={" paragraph_sm"}>
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </Paragraph>
                <Block className={"button-wrapper"} tag={"div"}>
                  <Block className={"component_text-color"} tag={"div"} />
                </Block>
                {slotReadMore}
              </Block>
            </Block>
            <Block className={"divider margin-top_xxs bg-grey-1"} tag={"div"} />
          </BlockContainer>
        </BlockContainer>
      </Section>
    </div>
  );
}
