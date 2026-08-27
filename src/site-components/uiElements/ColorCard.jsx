"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-846":{"id":"e-846","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763321911152},"e-848":{"id":"e-848","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830},"e-1294":{"id":"e-1294","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830}},"actionLists":{"a-94":{"id":"a-94","title":"Scroll Into View - Fade-In","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"a-227":{"id":"a-227","title":"Scroll Into View - Fade-In 2","actionItemGroups":[{"actionItems":[{"id":"a-227-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-227-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ColorCard({
  cardSettingsCardId = "",
  cardSettingsCardVisible = true,
  cardStyleCardColors = "BG: White Text: Blue",
  headlineFontSize = null,

  linksLink = {
    href: "#",
  },

  linksLinkText = "Read post",
  previewImageCardPreviewImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb7_Placeholder%20Image.png",
  previewImageCardPreviewImageAltText = "__wf_reserved_inherit",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    "BG: White Text: Blue": "",
    "BG: Blue Text: White": "w-variant-fda13732-e3e4-01c0-e661-a5ab484f21bd",
    "BG: Purple Text: Yellow": "w-variant-56583260-ab31-6b38-a021-82cf681bcb87",
    "BG: Purple Text: Bright Blue":
      "w-variant-11092295-877f-6098-d0e1-8dcaba25591d",
    "BG: Red Text: Blue": "w-variant-d53ecdbf-cf3a-26d9-cf43-4ec1c3422605",
    "BG: Blue Offset Text: Blue":
      "w-variant-b1f0fce8-ae65-f770-660e-0c2bbe9d8e67",
    "BG: Green Text: Yellow": "w-variant-05bbc036-1777-cfc4-7c6e-975608923e7d",
    "BG: Yellow Text: Blue": "w-variant-1fca3b4f-c259-14fb-b403-f7df5224d450",
    "BG: Dark Green Text: Bright Green":
      "w-variant-b48a56c8-0416-5387-2dd2-a099717316a3",
  };

  const _activeStyleVariant = _styleVariantMap[cardStyleCardColors];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={`component-card ${_activeStyleVariant}`} tag={"div"}>
        {cardSettingsCardVisible ? (
          <Block
            className={`card card_component ${_activeStyleVariant}`}
            id={cardSettingsCardId}
            tag={"div"}
          >
            <Block
              className={`card_body_sm padding_none ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`ratio_3x2 is-top-radius overflow_hidden ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Image
                  className={`image-animated is-top-radius image-cover ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={previewImageCardPreviewImage}
                  width={"auto"}
                />
              </Block>
              <Block
                className={`simple-card_content-wrapper headline-responsive_sm ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`button-group ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`read-more_buton-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Link
                      block={"inline"}
                      button={false}
                      className={_activeStyleVariant}
                      options={linksLink}
                    >
                      <Block
                        className={`display_inline-block is-underline ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {linksLinkText}
                      </Block>
                    </Link>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        ) : null}
      </Block>
    </div>
  );
}
