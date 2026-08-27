"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Image from "../webflow_modules/Basic/components/Image";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-846":{"id":"e-846","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-847"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"e0ddf636-bf22-0eee-3530-ae2dda257d41","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763321911152},"e-848":{"id":"e-848","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-227","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"6a09244ce43d4439301ce560|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830},"e-1294":{"id":"e-1294","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-94","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"},"targets":[{"selector":".image-animated","originalId":"68cf6673ed956e971b18d0ab|eef44220-7392-16e9-45a2-fd0071078515","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":25,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1763325802830}},"actionLists":{"a-94":{"id":"a-94","title":"Scroll Into View - Fade-In","actionItemGroups":[{"actionItems":[{"id":"a-94-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-94-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478},"a-227":{"id":"a-227","title":"Scroll Into View - Fade-In 2","actionItemGroups":[{"actionItems":[{"id":"a-227-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-227-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce560|d329f15a-3c12-96c0-9ffb-1d58e33a962b"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1755952745478}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BlogCardDemo({
  dateDateTextColor = null,
  globalOptionsMetaFontSize = null,
  globalOptionsPadding = null,
  headlineHeadlineFontSize = null,
  imageImageAltText = "__wf_reserved_inherit",
  imageImageVisibility = true,
  imagePreviewImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebfd_revrebel_nostalgic-stylish-social-mood-camera-35mm-f4-iso-2__83432.avif",
  settingsCardId = "",
  settingsCardVisibility = true,
  underlinedLinkLinkTextColor = null,
  variant = "Base",
  viewsLikesPositionVariant = null,
  viewsLikesViewsLikesColorVariants = null,
  viewsLikesViewsLikesSizeVariant = null,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    Inverse: "w-variant-8346e9a7-6bc0-4514-9b82-f54544a877e3",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsCardVisibility ? (
        <BlockContainer
          className={`component_headlne-4-subsections ${_activeStyleVariant}`}
          grid={{
            type: "container",
          }}
          id={settingsCardId}
          tag={"div"}
        >
          <Block
            className={`c-card-body-wrapper card-radius_sm is-regular ${_activeStyleVariant}`}
            tag={"div"}
          >
            {imageImageVisibility ? (
              <Block
                className={`c-image-cover c-card_border-radius ${_activeStyleVariant}`}
                id={"w-node-_8346e9a7-6bc0-4514-9b82-f54544a877d9-44a877d7"}
                tag={"div"}
              >
                <Image
                  className={`image-animated radius-bottom_none ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={imagePreviewImage}
                  width={"auto"}
                />
              </Block>
            ) : null}
            <Block
              className={`c-card-body text-color_primary ${_activeStyleVariant}`}
              id={"w-node-_8346e9a7-6bc0-4514-9b82-f54544a877db-44a877d7"}
              tag={"div"}
            >
              <Block
                className={`slot-spacer is-devlink-slot ${_activeStyleVariant}`}
                tag={"div"}
              />
            </Block>
          </Block>
        </BlockContainer>
      ) : null}
    </div>
  );
}
