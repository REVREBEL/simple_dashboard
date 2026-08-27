"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import FormSelect from "../webflow_modules/Form/components/FormSelect";
import Image from "../webflow_modules/Basic/components/Image";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-1172":{"id":"e-1172","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777611932897},"e-1173":{"id":"e-1173","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1172"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e38ecd42-0d55-eea8-4e05-c167d3c99668","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777611932902},"e-1174":{"id":"e-1174","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1175"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777613686193},"e-1175":{"id":"e-1175","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1174"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abab5d07-fc01-3be8-8335-1ba336729819","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777613686196},"e-1176":{"id":"e-1176","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-263","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1177"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777614402573},"e-1177":{"id":"e-1177","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-264","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1176"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"db5e8369-f83c-08fb-0b83-453cef69aa2f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1777614402578}},"actionLists":{"a-263":{"id":"a-263","title":"is-select_form-trigger [ON-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-263-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":1,"unit":""}},{"id":"a-263-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-263-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":0,"unit":""}},{"id":"a-263-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1777611937512},"a-264":{"id":"a-264","title":"is-select_form-trigger [OFF-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-264-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.hide_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","29789451-9fb6-9fa5-d6c4-950c2ffccc73"]},"value":1,"unit":""}},{"id":"a-264-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".form-icon.display_on-hover","selectorGuids":["3ff6bd99-da0e-f7e7-c2f2-099add064343","7d53f39d-4d98-a55d-c948-4ce651963fbb"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1777611937512}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FormFieldStateAbbreviated({ variant = "Light" }) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-fbcf3f4e-b187-c3b4-8c99-889bd34a231b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`form_item-wrapper includes-select div-block-784 is-abv-state ${_activeStyleVariant}`}
        data-w-id={"e38ecd42-0d55-eea8-4e05-c167d3c99668"}
        tag={"div"}
      >
        <FormSelect
          // @ts-ignore - User-defined custom attribute(s)
          autoComplete={"address-level1"}
          className={`form_input is-select is-abv-state ${_activeStyleVariant}`}
          data-name={"State"}
          id={"State"}
          multiple={false}
          name={"State"}
          options={[
            {
              t: "state",
              v: "",
            },
            {
              t: "AL",
              v: "AL",
            },
            {
              t: "\nAK",
              v: "\nAK",
            },
            {
              t: "\nAZ",
              v: "\nAZ",
            },
            {
              t: "\nAR",
              v: "\nAR",
            },
            {
              t: "\nCA",
              v: "\nCA",
            },
            {
              t: "\nCO",
              v: "\nCO",
            },
            {
              t: "\nCT",
              v: "\nCT",
            },
            {
              t: "\nDE",
              v: "\nDE",
            },
            {
              t: "\nFL",
              v: "\nFL",
            },
            {
              t: "\nGA",
              v: "\nGA",
            },
            {
              t: "\nHI",
              v: "\nHI",
            },
            {
              t: "\nID",
              v: "\nID",
            },
            {
              t: "\nIL",
              v: "\nIL",
            },
            {
              t: "\nIN",
              v: "\nIN",
            },
            {
              t: "\nIA",
              v: "\nIA",
            },
            {
              t: "\nKS",
              v: "\nKS",
            },
            {
              t: "\nKY",
              v: "\nKY",
            },
            {
              t: "\nLA",
              v: "\nLA",
            },
            {
              t: "\nME",
              v: "\nME",
            },
            {
              t: "\nMD",
              v: "\nMD",
            },
            {
              t: "\nMA",
              v: "\nMA",
            },
            {
              t: "\nMI",
              v: "\nMI",
            },
            {
              t: "\nMN",
              v: "\nMN",
            },
            {
              t: "\nMS",
              v: "\nMS",
            },
            {
              t: "\nMO",
              v: "\nMO",
            },
            {
              t: "\nMT",
              v: "\nMT",
            },
            {
              t: "\nNE",
              v: "\nNE",
            },
            {
              t: "\nNV",
              v: "\nNV",
            },
            {
              t: "\nNH",
              v: "\nNH",
            },
            {
              t: "\nNJ",
              v: "\nNJ",
            },
            {
              t: "\nNM",
              v: "\nNM",
            },
            {
              t: "\nNY",
              v: "\nNY",
            },
            {
              t: "\nNC",
              v: "\nNC",
            },
            {
              t: "\nND",
              v: "\nND",
            },
            {
              t: "\nOH",
              v: "\nOH",
            },
            {
              t: "\nOK",
              v: "\nOK",
            },
            {
              t: "\nOR",
              v: "\nOR",
            },
            {
              t: "\nPA",
              v: "\nPA",
            },
            {
              t: "\nRI",
              v: "\nRI",
            },
            {
              t: "\nSC",
              v: "\nSC",
            },
            {
              t: "\nSD",
              v: "\nSD",
            },
            {
              t: "\nTN",
              v: "\nTN",
            },
            {
              t: "\nTX",
              v: "\nTX",
            },
            {
              t: "\nUT",
              v: "\nUT",
            },
            {
              t: "\nVT",
              v: "\nVT",
            },
            {
              t: "\nVA",
              v: "\nVA",
            },
            {
              t: "\nWA",
              v: "\nWA",
            },
            {
              t: "\nWV",
              v: "\nWV",
            },
            {
              t: "\nWI",
              v: "\nWI",
            },
            {
              t: "\nWY",
              v: "\nWY",
            },
          ]}
          required={false}
        />
        <Image
          alt={"Triangle Arrow Pointing Downward"}
          className={`form-icon hide_on-hover ${_activeStyleVariant}`}
          height={"auto"}
          id={"w-node-e38ecd42-0d55-eea8-4e05-c167d3c9966a-d3c99668"}
          loading={"lazy"}
          src={
            "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9f3_triangle-down.svg"
          }
          width={"auto"}
        />
        <Image
          alt={"Triangle Arrow Pointing Downward"}
          className={`form-icon display_on-hover ${_activeStyleVariant}`}
          height={"auto"}
          id={"w-node-_74bec36f-7838-917f-735e-f7282f3e62da-d3c99668"}
          loading={"lazy"}
          src={
            "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9f3_triangle-down.svg"
          }
          width={"auto"}
        />
      </Block>
    </div>
  );
}
