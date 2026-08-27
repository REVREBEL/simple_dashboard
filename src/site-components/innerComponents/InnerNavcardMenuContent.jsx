"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-950":{"id":"e-950","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-256","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-951"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769300654747},"e-951":{"id":"e-951","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-257","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-950"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769300654747}},"actionLists":{"a-256":{"id":"a-256","title":"NavBar Show Line 4","actionItemGroups":[{"actionItems":[{"id":"a-256-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-256-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-257":{"id":"a-257","title":"NavBar OffHover Hide Line 4","actionItemGroups":[{"actionItems":[{"id":"a-257-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function InnerNavcardMenuContent({ slot, slot12, slot2, slot3 }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"navbar_menu-content-wrapper"} tag={"div"}>
        <Block className={"navbar_menu-container"} tag={"div"}>
          <Block
            className={"navbar_menu-alignment"}
            data-w-id={"e08b8b5e-991f-933b-94a9-aaa6a2411ad2"}
            tag={"div"}
          >
            <Block className={"navcard_dropdown-container"} tag={"div"}>
              <Block
                className={"navcard-wrapper"}
                id={"w-node-e08b8b5e-991f-933b-94a9-aaa6a2411ad4-a2411ad0"}
                tag={"div"}
              >
                {slot}
              </Block>
              <Block
                className={"navcard-wrapper"}
                id={"w-node-e08b8b5e-991f-933b-94a9-aaa6a2411ad5-a2411ad0"}
                tag={"div"}
              >
                {slot2}
              </Block>
              <Block
                className={"navcard-wrapper"}
                id={"w-node-e08b8b5e-991f-933b-94a9-aaa6a2411ad6-a2411ad0"}
                tag={"div"}
              >
                {slot3}
              </Block>
              <Block
                className={"navcard-wrapper"}
                id={"w-node-e08b8b5e-991f-933b-94a9-aaa6a2411ad7-a2411ad0"}
                tag={"div"}
              >
                {slot12}
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
