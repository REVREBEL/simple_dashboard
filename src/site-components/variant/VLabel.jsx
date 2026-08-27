"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { VIcon } from "./VIcon";
import { VSize } from "./VSize";
import { listOfElementsToText } from "../webflow_modules/Basic/helpers/listOfElementsToText";

export function VLabel({
  dataAttributesDataCategorySlug = "",
  dataAttributesDataColorMode = "True",
  dataAttributesDataFontSize = "",
  dataAttributesDataFontWeight = "",
  dataAttributesDataPaddingLeft = "",
  dataAttributesDataTextAlign = "",
  iconDataAttributesDataIconColor = "",
  iconDataAttributesDataIconSize = "",
  iconIconClickable = false,
  iconIconImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9ef_close-x.svg",
  iconIconPosition = false,
  iconIconSize = "xs",
  iconIconVisibility = false,
  labelText = "Label Text",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block
          className={"v-label"}
          data-category-slug={dataAttributesDataCategorySlug}
          data-font-size={dataAttributesDataFontSize}
          data-font-weight={listOfElementsToText(dataAttributesDataFontWeight)}
          data-icon-position={
            iconIconPosition
              ? "before-text"
              : !iconIconPosition
              ? "after-text"
              : "after-text"
          }
          data-padding-left={dataAttributesDataPaddingLeft}
          data-text-align={listOfElementsToText(dataAttributesDataTextAlign)}
          tag={"div"}
        >
          <Block className={"v-label-text"} tag={"div"}>
            {labelText}
          </Block>
          {iconIconVisibility ? (
            <Block className={"v-hide-icon"} tag={"div"}>
              <VSize
                size={"xxs"}
                sizeAttributes={{
                  "data-size":
                    iconIconSize === "xl"
                      ? "xl"
                      : iconIconSize === "lg"
                      ? "lg"
                      : iconIconSize === "md"
                      ? "md"
                      : iconIconSize === "Playlist"
                      ? "base"
                      : iconIconSize === "sm"
                      ? "sm"
                      : iconIconSize === "xs"
                      ? "xs"
                      : iconIconSize === "xxs"
                      ? "xxs"
                      : "base",
                }}
                slotSize={
                  <VIcon
                    dataClickable={null}
                    dataColorMode={dataAttributesDataColorMode}
                    dataIconColor={iconDataAttributesDataIconColor}
                    dataIconSize={iconDataAttributesDataIconSize}
                    iconImage={iconIconImage}
                  />
                }
              />
            </Block>
          ) : null}
        </Block>
      </Block>
    </div>
  );
}
