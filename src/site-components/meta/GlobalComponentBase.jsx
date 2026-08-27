"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GlobalComponentBase({ slotGlobalComponent }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"g-component-base"} tag={"div"}>
        <Block className={"global-component_wrapper"} tag={"div"}>
          <Block className={"g-container is-inline-container"} tag={"div"}>
            {slotGlobalComponent}
          </Block>
        </Block>
      </Block>
    </div>
  );
}
