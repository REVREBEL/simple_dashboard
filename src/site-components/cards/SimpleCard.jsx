"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-1226":{"id":"e-1226","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1227":{"id":"e-1227","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc6a5cf7-e515-9859-cf14-efb858def74f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1228":{"id":"e-1228","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1229":{"id":"e-1229","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4df5c620-c37c-1a3c-b29e-ccc542ff8370","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1285":{"id":"e-1285","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1786717714449},"e-1286":{"id":"e-1286","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1285"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"61a95a90-2c38-866a-a1c4-6e834067aea9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1786717714449},"e-1295":{"id":"e-1295","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1291":{"id":"e-1291","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1296":{"id":"e-1296","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1779343487801},"e-1293":{"id":"e-1293","name":"","animationType":"preset","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8902f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1779343487801},"e-1297":{"id":"e-1297","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-282","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717221},"e-1292":{"id":"e-1292","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-283","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a80326648a7ec3ac983648a|ab29bcda-bf1f-8e18-0549-098cab8903ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1778254717229},"e-1301":{"id":"e-1301","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".photo-card_content-wrapper","originalId":"6a52177cb17ed02c609eba8b|55a2a917-803d-189c-a6ed-eda81ea11043","appliesTo":"CLASS"},"targets":[{"selector":".photo-card_content-wrapper","originalId":"6a52177cb17ed02c609eba8b|55a2a917-803d-189c-a6ed-eda81ea11043","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1786799400870},"e-1307":{"id":"e-1307","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-292","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1308"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"55a2a917-803d-189c-a6ed-eda81ea11041","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"55a2a917-803d-189c-a6ed-eda81ea11041","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1786982501129}},"actionLists":{"a-282":{"id":"a-282","title":"Scroll Into View [SCALE UP]","actionItemGroups":[{"actionItems":[{"id":"a-282-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":2000,"target":{"selector":".c-card_image-animated","selectorGuids":["13a76298-4617-f05b-d712-f8f71f092691"]},"xValue":1.05,"yValue":1.05,"zValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1778254913480},"a-283":{"id":"a-283","title":"Scroll Into View [SCALE DOWN]","actionItemGroups":[{"actionItems":[{"id":"a-283-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":2000,"target":{"selector":".c-card_image-animated","selectorGuids":["13a76298-4617-f05b-d712-f8f71f092691"]},"xValue":1,"yValue":1,"zValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1778255003968},"a-292":{"id":"a-292","title":"photo-card image-zoom [ON-HOVER]","actionItemGroups":[{"actionItems":[{"id":"a-292-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":5000,"target":{"selector":".c-card_image-animated.radius-bottom_none","selectorGuids":["13a76298-4617-f05b-d712-f8f71f092691","c97b85a2-b2d9-f8ca-a491-fffe9cd4987e"]},"xValue":1.15,"yValue":1.15,"zValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1786799707690}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SimpleCard({
  cardCardLayout = false,
  cardCardStyles = "Regular Card",
  cardSlotHeadline,
  cardSlotReadMore,
  previewImageImageAltText = "__wf_reserved_inherit",
  previewImagePreviewImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb7_Placeholder%20Image.png",
  slotMeta,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    "Regular Card": "",
    "Flat Card": "w-variant-34a2b97f-f136-c949-bc74-9eb749a429f1",
    "Flat Card No Borders": "w-variant-afae18f0-012b-ca0c-7d79-05216f8363d5",
  };

  const _activeStyleVariant = _styleVariantMap[cardCardStyles];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`g-container ${_activeStyleVariant}`}
        id={"w-node-aacc06b2-2e56-a21c-cfca-a0cd84e7acb4-84e7acb4"}
        tag={"div"}
      >
        <Block
          className={`card is-card-simple ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`c-card-body-wrapper is-simple-card ${_activeStyleVariant}`}
            tag={"div"}
          >
            {!cardCardLayout ? (
              <Block
                className={`c-image-cover radius-card_lg radius_top-0 is-simple-card ${_activeStyleVariant}`}
                id={"w-node-_4df5c620-c37c-1a3c-b29e-ccc542ff836f-84e7acb4"}
                tag={"div"}
              >
                <Image
                  className={`c-card_image-animated ${_activeStyleVariant}`}
                  data-w-id={"4df5c620-c37c-1a3c-b29e-ccc542ff8370"}
                  height={"auto"}
                  loading={"lazy"}
                  src={previewImagePreviewImage}
                  width={"auto"}
                />
              </Block>
            ) : null}
            <Block
              className={`c-card-body is-simple-card ${_activeStyleVariant}`}
              id={"w-node-_4df5c620-c37c-1a3c-b29e-ccc542ff8362-84e7acb4"}
              tag={"div"}
            >
              <Block tag={"div"}>{slotMeta}</Block>
              <Block
                className={`card_headline-wrapper is-simple-card ${_activeStyleVariant}`}
                id={"w-node-_4df5c620-c37c-1a3c-b29e-ccc542ff8366-84e7acb4"}
                tag={"div"}
              >
                {cardSlotHeadline}
              </Block>
              <Block
                className={`slot-size-full-width padding-top_sm ${_activeStyleVariant}`}
                tag={"div"}
              >
                {cardSlotReadMore}
              </Block>
            </Block>
            {cardCardLayout ? (
              <Block
                className={`c-image-cover radius-card_lg radius_bottom-0 is-simple-card ${_activeStyleVariant}`}
                id={"w-node-_997aac97-6388-7b4c-60d0-4e477b498256-84e7acb4"}
                tag={"div"}
              >
                <Image
                  className={`c-card_image-animated ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={previewImagePreviewImage}
                  width={"auto"}
                />
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
    </div>
  );
}
