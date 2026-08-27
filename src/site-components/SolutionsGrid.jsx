"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Grid from "./webflow_modules/Layout/components/Grid";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-69":{"id":"e-69","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046},"e-1236":{"id":"e-1236","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-6766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a58aa588-71a9-e48f-4d27-dc6064d561e7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a58aa588-71a9-e48f-4d27-dc6064d561e7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":300,"direction":null,"effectIn":true},"createdOn":1611570656511}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SolutionsGrid({
  slotButton,
  slotLabel,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  title = "Heading",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Grid className={"solutions_grid text-primary"} tag={"div"}>
        <Block
          className={"solutions_feature-block"}
          data-w-id={"a58aa588-71a9-e48f-4d27-dc6064d561e7"}
          id={"w-node-a58aa588-71a9-e48f-4d27-dc6064d561e7-64d561e6"}
          tag={"div"}
        >
          {slotLabel}
          <Heading className={"headline-xs"} tag={"h3"}>
            {title}
          </Heading>
          <Paragraph className={"paragraph_sm"}>{text}</Paragraph>
          <Block
            className={"solutions_buton-wrapper margin-bottom_xs"}
            tag={"div"}
          >
            {slotButton}
          </Block>
        </Block>
      </Grid>
    </div>
  );
}
