"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-1216":{"id":"e-1216","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1217"}},"mediaQueries":["main","medium"],"target":{"id":"c8bdf2b5-3114-3baa-9130-eea783b679ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c8bdf2b5-3114-3baa-9130-eea783b679ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1778241961166}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ComponentHeadlineSizeVariants({
  headlineSizeVariants = "Regular",
  headlineTag = "h2",
  headlineText = "The Strategy Stack",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    "Level 4 Biggest": "w-variant-65b3bc46-ff86-5913-e7cf-247b2c7c6fab",
    "Level 3 Bigger": "w-variant-a675bb90-b169-380e-a5d9-a441cc1cb9ac",
    "Level 2 Bigger": "w-variant-9157e6ea-c13b-a40a-8ddb-46c89d377a31",
    "Level 1 Bigger": "w-variant-87883eea-4733-19da-f531-32ffb7268298",
    Regular: "",
    "Level 1 Smaller": "w-variant-41e5bff6-03f1-25ea-71ca-aa1631dc13e1",
    "Level 2 Smaller": "w-variant-c32d4c35-88b7-6e3c-5d2d-d0a05ccec173",
    "Level 3 Smaller": "w-variant-ecacf355-9c16-8625-64b4-922bcfb9da04",
    "Level 4 Smaller": "w-variant-3744907a-2fd7-e807-ce8e-fd56f9fb922e",
    "Level 5 Smallest": "w-variant-87be17b8-b58a-9c6c-d6ec-ecd9ef2e57e8",
  };

  const _activeStyleVariant = _styleVariantMap[headlineSizeVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`component_headline-size-variants ${_activeStyleVariant}`}
        data-w-id={"c8bdf2b5-3114-3baa-9130-eea783b679ee"}
        tag={"div"}
      >
        <Block className={`c-headline ${_activeStyleVariant}`} tag={"div"}>
          <Heading
            className={`v-headline-responsive ${_activeStyleVariant}`}
            tag={headlineTag}
          >
            {headlineText}
          </Heading>
        </Block>
      </Block>
    </div>
  );
}
