"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { VFontWeight } from "./VFontWeight";
import { VTextAlign } from "./variant/VTextAlign";
import { listOfElementsToText } from "./webflow_modules/Basic/helpers/listOfElementsToText";

export function VFontSize({
  dataFontSize = "",
  dataFontWeight = "",
  dataTextAlign = "",
  fontSize = "base",
  fontWeight = "regular",
  slotSlotFontSize,
  textAlign = "left",
}) {
  const _styleVariantMap = {
    jumbo: "w-variant-cec73f6f-d2e7-c682-3e9f-0c3b880a9b81",
    xxl: "w-variant-f637fa4d-c7c8-649f-01eb-a5959014915a",
    xl: "w-variant-4ab30aef-2612-32f8-87a1-8d158d2bcf05",
    lg: "w-variant-566a1a93-e85c-9103-40a6-45a3a22be121",
    md: "w-variant-8ae0e042-5bfb-2b19-83b4-f0b4983400d0",
    base: "",
    sm: "w-variant-03c40c3b-9d1e-ddc3-a829-d8353b2110c1",
    xs: "w-variant-dd71a3fc-b674-3571-8964-175f6631d1c7",
    xxs: "w-variant-73c1907e-4ba3-3fb7-1f6c-ec8ca90c619b",
    tiny: "w-variant-75909def-a09d-7ff1-27d7-78f779e277f3",
  };

  const _activeStyleVariant = _styleVariantMap[fontSize];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block
          className={`v-font-size ${_activeStyleVariant}`}
          data-font-size={dataFontSize}
          data-font-weight={dataFontWeight}
          data-text-align={listOfElementsToText(dataTextAlign)}
          tag={"div"}
        >
          <VFontWeight
            fontWeight={fontWeight}
            slotFontWeight={
              <VTextAlign
                slotTextAlign={slotSlotFontSize}
                textAlign={textAlign}
              />
            }
          />
        </Block>
      </Block>
    </div>
  );
}
