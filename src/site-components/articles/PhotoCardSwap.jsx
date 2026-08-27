"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import * as _interactions from "../webflow_modules/interactions";
import { applyPredicate } from "../webflow_modules/Conditions/helpers/applyPredicate";
import { conditional } from "../webflow_modules/Conditionals/helpers/conditional";
import { equals } from "../webflow_modules/Boolean/helpers/equals";
import { every } from "../webflow_modules/Boolean/helpers/every";

const _interactionsData = JSON.parse(
  '{"events":{"e-1226":{"id":"e-1226","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1227":{"id":"e-1227","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1228":{"id":"e-1228","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1229":{"id":"e-1229","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1285":{"id":"e-1285","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1786717714449},"e-1286":{"id":"e-1286","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1285"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1786717714449},"e-1295":{"id":"e-1295","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1291":{"id":"e-1291","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1296":{"id":"e-1296","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1779343487801},"e-1293":{"id":"e-1293","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1779343487801},"e-1297":{"id":"e-1297","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1292":{"id":"e-1292","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1301":{"id":"e-1301","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".photo-card_content-wrapper","originalId":"6a52177cb17ed02c609eba8b|55a2a917-803d-189c-a6ed-eda81ea11043","appliesTo":"CLASS"},"targets":[{"selector":".photo-card_content-wrapper","originalId":"6a52177cb17ed02c609eba8b|55a2a917-803d-189c-a6ed-eda81ea11043","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1786799400870},"e-1307":{"id":"e-1307","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1308"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"55a2a917-803d-189c-a6ed-eda81ea11041","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55a2a917-803d-189c-a6ed-eda81ea11041","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1786982501129}},"actionLists":{"a-282":{"id":"a-282","title":"Scroll Into View [SCALE UP]","actionItemGroups":[{"actionItems":[{"id":"a-282-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":2000,"target":{"selector":".c-card_image-animated","selectorGuids":["13a76298-4617-f05b-d712-f8f71f092691"]},"xValue":1.05,"yValue":1.05,"zValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1778254913480},"a-283":{"id":"a-283","title":"Scroll Into View [SCALE DOWN]","actionItemGroups":[{"actionItems":[{"id":"a-283-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":2000,"target":{"selector":".c-card_image-animated","selectorGuids":["13a76298-4617-f05b-d712-f8f71f092691"]},"xValue":1,"yValue":1,"zValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1778255003968},"a-292":{"id":"a-292","title":"photo-card image-zoom [ON-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-292-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":5000,"target":{"selector":".c-card_image-animated.radius-bottom_none","selectorGuids":["13a76298-4617-f05b-d712-f8f71f092691","c97b85a2-b2d9-f8ca-a491-fffe9cd4987e"]},"xValue":1.15,"yValue":1.15,"zValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1786799707690}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PhotoCardSwap({
  layout = false,
  optionsCardPaddingVariants = "None",
  webflowComponentSlotsSlotHeadline,
  webflowComponentSlotsSlotMeta,
  webflowComponentSlotsSlotReadMore,
  webflowComponentSlotsSlotRelativeDate,
  webflowComponentSlotsWebflowComponentSlots = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    None: "",
    "0x1 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048e8",
    "0x2 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048e9",
    "0x3 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048ea",
    "1x1 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048eb",
    "1x2 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048ec",
    "2x1 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048ed",
    "2x2 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048ee",
    "3x2 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048ef",
    "3x3 Gap": "w-variant-7fd5e1e9-33d9-e564-7e0d-8b892b0048f0",
  };

  const _activeStyleVariant = _styleVariantMap[optionsCardPaddingVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`g-component-base ${_activeStyleVariant}`}
        id={"w-node-b9f016f1-4c21-4ebd-3f88-9849d3ec1173-d3ec1173"}
        tag={"div"}
      >
        <Block
          className={`card is-photo-card ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`c-card-body is-photo-card ${_activeStyleVariant}`}
            id={"w-node-b9f016f1-4c21-4ebd-3f88-9849d3ec1179-d3ec1173"}
            tag={"div"}
          >
            {conditional({
              rules: [
                {
                  condition: every([applyPredicate(layout)(equals(true))]),
                  output: true,
                },
                {
                  condition: every([applyPredicate(layout)(equals(false))]),
                  output: false,
                },
              ],

              fallback: false,
            }) ? (
              <Block
                className={`c-image-cover is-photo-card ${_activeStyleVariant}`}
                id={"w-node-b9f016f1-4c21-4ebd-3f88-9849d3ec1175-d3ec1173"}
                tag={"div"}
              >
                <Image
                  alt={
                    "Outdoor patio with lounge chairs, umbrellas, and seating area with mountain and palm tree backdrop under clear sky."
                  }
                  className={`c-card_image-animated radius-bottom_none ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebfd_revrebel_nostalgic-stylish-social-mood-camera-35mm-f4-iso-2__83432.avif"
                  }
                  width={"auto"}
                />
              </Block>
            ) : null}
            <Block
              className={`card_image-overlay is-top ${_activeStyleVariant}`}
              tag={"div"}
            />
            <Block
              className={`card_image-overlay is-bottom ${_activeStyleVariant}`}
              tag={"div"}
            />
            <Block className={`c-gap-size ${_activeStyleVariant}`} tag={"div"}>
              <Block
                className={`card_meta-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                {webflowComponentSlotsSlotMeta}
              </Block>
              <Block
                className={`card_headline-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                {webflowComponentSlotsSlotHeadline}
              </Block>
              <Block
                className={`card_item-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`slot-size-width_50pct is-align-left-bottom ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {webflowComponentSlotsSlotRelativeDate}
                </Block>
                <Block
                  className={`slot-size-width_50pct is-align-right-bottom ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block tag={"div"}>{webflowComponentSlotsSlotReadMore}</Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
