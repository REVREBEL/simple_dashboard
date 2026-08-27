"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Section from "./webflow_modules/Layout/components/Section";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-793":{"id":"e-793","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-218","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"33773781-3c3a-482a-d678-25e6e16d90e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"33773781-3c3a-482a-d678-25e6e16d90e8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-218-p","smoothing":50,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":100}],"createdOn":1586018930137}},"actionLists":{"a-218":{"id":"a-218","title":"Projects Horizontal Scroll","continuousParameterGroups":[{"id":"a-218-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-218-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"keyframe":100,"actionItems":[{"id":"a-218-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-55,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}]}],"createdOn":1586018996245}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function RetroPattern({
  id = "",
  settingsVisibility = true,
  variant = "Retro Pattern Primary",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    "Retro Pattern Primary": "",
    "Retro Pattern Color 5 Faded":
      "w-variant-fc2a1921-8ed7-4e9d-4b2b-ed54b57d5998",
    "Retro Pattern Color 2": "w-variant-d7117764-6417-e8cc-637d-3ab761630174",
    "Retro Pattern Color 5": "w-variant-a60c158d-d118-2e0e-6162-367e68919fbb",
    "Retro Pattern Color 8": "w-variant-b6a335fb-7d8f-eb2b-d040-84c0be67046d",
    "Retro Pattern Color 9": "w-variant-34cfde44-2597-1eae-1940-6a0fb3d503f8",
    "Retro Pattern Pac Man": "w-variant-2d4802c3-9c1f-3d70-5f76-402a5232c889",
    "Retro Pattern Pac Man Dark":
      "w-variant-b6199975-fb06-f636-daf3-660047ec78e6",
    "Retro Pattern Donkee Kong Red":
      "w-variant-0304c608-b013-f422-a379-ce90232514f5",
    "Retro Pattern Donkee Kong Blue":
      "w-variant-a4a740f0-70d8-40ea-6702-b76389669a94",
    "Retro Pattern Space Invadors":
      "w-variant-de2256aa-0d86-2e99-a7cd-8dd4bf31f009",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsVisibility ? (
        <Section
          className={`component_bg-pattern ${_activeStyleVariant}`}
          data-w-id={"33773781-3c3a-482a-d678-25e6e16d90e8"}
          grid={{
            type: "section",
          }}
          id={id}
          tag={"div"}
        />
      ) : null}
    </div>
  );
}
