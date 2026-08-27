"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { VColor } from "./variant/VColor";
import { VFontSize } from "./VFontSize";
import { VLabel } from "./variant/VLabel";

export function CLabel({
  dataAttributesDataFontWeight = "",
  dataAttributesDataPaddingLeft = "",
  labelColor = "primary",
  labelColorMode = "normal",
  labelColorStyle = true,
  labelDateLabel = "Label Text",
  labelDateVisibility = true,
  labelFontSize = "tiny",
  labelFontWeight = "bold",
  labelTextAlign = "left",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {labelDateVisibility ? (
        <Block tag={"div"}>
          <Block className={"c-label"} tag={"div"}>
            <VFontSize
              dataFontSize={
                labelFontSize === "jumbo"
                  ? "jumbo"
                  : labelFontSize === "xxl"
                  ? "xxl"
                  : labelFontSize === "xl"
                  ? "xl"
                  : labelFontSize === "lg"
                  ? "lg"
                  : labelFontSize === "md"
                  ? "md"
                  : labelFontSize === "Playlist"
                  ? "base"
                  : labelFontSize === "sm"
                  ? "sm"
                  : labelFontSize === "xs"
                  ? "xs"
                  : labelFontSize === "xxs"
                  ? "xxs"
                  : labelFontSize === "tiny"
                  ? "tiny"
                  : "base"
              }
              dataFontWeight={
                labelFontWeight === "bold"
                  ? "bold"
                  : labelFontWeight === "semibold"
                  ? "semibold"
                  : "bold"
              }
              dataTextAlign={
                labelTextAlign === "Playlist"
                  ? ["left"]
                  : labelTextAlign === "right"
                  ? ["right"]
                  : labelTextAlign === "center"
                  ? ["center"]
                  : labelTextAlign === "justify"
                  ? ["justify"]
                  : ["left"]
              }
              fontSize={labelFontSize}
              fontWeight={labelFontWeight}
              slotSlotFontSize={
                <VColor
                  optionsClickable={false}
                  optionsColor={labelColor}
                  optionsColorMode={labelColorMode}
                  optionsColorStyle={labelColorStyle}
                  optionsDropShadowOnHover={false}
                  slotColorAttributes={{
                    "data-icon-color-": "",
                    "data-clickable": "disable",
                    "data-color":
                      labelColor === "Playlist"
                        ? "primary"
                        : labelColor === "teal"
                        ? "teal"
                        : labelColor === "cyan"
                        ? "cyan"
                        : labelColor === "aqua"
                        ? "aqua"
                        : labelColor === "powder"
                        ? "power"
                        : labelColor === "yellow"
                        ? "yellow"
                        : labelColor === "orange"
                        ? "orange"
                        : labelColor === "red"
                        ? "red"
                        : labelColor === "purple"
                        ? "purple"
                        : labelColor === "frost"
                        ? "frost"
                        : "",
                    "data-color-style": labelColorStyle
                      ? "filled"
                      : !labelColorStyle
                      ? "outline"
                      : "filled",
                    "data-color-mode":
                      labelColorMode === "Playlist"
                        ? "normal"
                        : labelColorMode === "inverse"
                        ? "inverse"
                        : labelColorMode === "inherit"
                        ? "inherit"
                        : "normal",
                  }}
                  slotSlotColor={
                    <VLabel
                      dataAttributesDataCategorySlug={""}
                      dataAttributesDataColorMode={
                        labelColorMode === "Playlist" && labelColorStyle
                          ? "inverse"
                          : labelColorMode === "inverse" && labelColorStyle
                          ? "normal"
                          : labelColorMode === "Playlist" && !labelColorStyle
                          ? "normal"
                          : labelColorMode === "inverse" && !labelColorStyle
                          ? "inverse"
                          : "normal"
                      }
                      dataAttributesDataFontSize={
                        labelFontSize === "jumbo"
                          ? "jumbo"
                          : labelFontSize === "xxl"
                          ? "xxl"
                          : labelFontSize === "xl"
                          ? "xl"
                          : labelFontSize === "lg"
                          ? "lg"
                          : labelFontSize === "md"
                          ? "md"
                          : labelFontSize === "Playlist"
                          ? "base"
                          : labelFontSize === "sm"
                          ? "sm"
                          : labelFontSize === "xs"
                          ? "xs"
                          : labelFontSize === "xxs"
                          ? "xxs"
                          : labelFontSize === "tiny"
                          ? "tiny"
                          : "base"
                      }
                      dataAttributesDataFontWeight={
                        dataAttributesDataFontWeight
                      }
                      dataAttributesDataPaddingLeft={
                        dataAttributesDataPaddingLeft
                      }
                      dataAttributesDataTextAlign={
                        labelTextAlign === "Playlist"
                          ? ["left"]
                          : labelTextAlign === "right"
                          ? ["right"]
                          : labelTextAlign === "center"
                          ? ["center"]
                          : labelTextAlign === "justify"
                          ? ["justify"]
                          : ["left"]
                      }
                      iconDataAttributesDataIconColor={
                        labelColor === "Playlist"
                          ? "primary"
                          : labelColor === "teal"
                          ? "teal"
                          : labelColor === "cyan"
                          ? "cyan"
                          : labelColor === "aqua"
                          ? "aqua"
                          : labelColor === "powder"
                          ? ""
                          : labelColor === "yellow"
                          ? "yellow"
                          : labelColor === "orange"
                          ? "orange"
                          : labelColor === "red"
                          ? "red"
                          : labelColor === "purple"
                          ? "purple"
                          : labelColor === "frost"
                          ? "frost"
                          : "primary"
                      }
                      iconIconClickable={false}
                      iconIconImage={
                        "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf2d5_generic.svg"
                      }
                      iconIconPosition={false}
                      iconIconSize={"base"}
                      iconIconVisibility={false}
                      labelText={labelDateLabel}
                    />
                  }
                />
              }
              textAlign={labelTextAlign}
            />
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
