"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { VClassIcon } from "./VClassIcon";
import { VClassLabel } from "./variant/VClassLabel";
import { VColor } from "./variant/VColor";
import { VFontSize } from "./VFontSize";
import { VLayout } from "./variant/VLayout";

export function CClassLabel({
  iconColor = "primary",
  labelsFontSize = "tiny",
  labelsLabel1Text = "class name",
  labelsLabel2Text = "class name",
  labelsLabel3Text = "class name",
  labelsLabel4Text = "class name",
  labelsLayout = "row",
  labelsNumberOfLabels = "1 Label",
  optionsColor = "primary",
  optionsColorMode = "normal",
  optionsColorStyle = true,
}) {
  const _styleVariantMap = {
    "1 Label": "",
    "2 Labels": "w-variant-f61f4201-8509-18cf-53de-2b2def21289c",
    "3 Labels": "w-variant-41d65492-a765-1df1-b795-edf86679d09e",
    "4 Labels": "w-variant-771d1705-588f-6f88-296a-0969a7baf997",
  };

  const _activeStyleVariant = _styleVariantMap[labelsNumberOfLabels];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={`div-block-825 ${_activeStyleVariant}`} tag={"div"}>
        <Block
          className={`c-class-label v-layout ${_activeStyleVariant}`}
          data-layout={
            labelsLayout === "Playlist"
              ? "row"
              : labelsLayout === "row-compact"
              ? "row-compact"
              : labelsLayout === "column"
              ? "column"
              : labelsLayout === "column-compact"
              ? "column-compact"
              : "row"
          }
          tag={"div"}
        >
          <VLayout
            dataLayout={
              labelsLayout === "Playlist"
                ? "row"
                : labelsLayout === "row-compact"
                ? "row-compact"
                : labelsLayout === "column"
                ? "column"
                : labelsLayout === "column-compact"
                ? "column-compact"
                : "row"
            }
            layout={labelsLayout}
            slotLayout={
              <VFontSize
                dataFontSize={
                  labelsFontSize === "jumbo"
                    ? "jumbo"
                    : labelsFontSize === "xxl"
                    ? "xxl"
                    : labelsFontSize === "xl"
                    ? "xl"
                    : labelsFontSize === "lg"
                    ? "lg"
                    : labelsFontSize === "md"
                    ? "md"
                    : labelsFontSize === "Playlist"
                    ? "base"
                    : labelsFontSize === "sm"
                    ? "sm"
                    : labelsFontSize === "xs"
                    ? "xs"
                    : labelsFontSize === "xxs"
                    ? "xxs"
                    : labelsFontSize === "tiny"
                    ? "tiny"
                    : "base"
                }
                fontSize={labelsFontSize}
                slotSlotFontSize={
                  <VColor
                    optionsColor={optionsColor}
                    optionsColorMode={optionsColorMode}
                    slotColorAttributes={{
                      "data-icon-color": "",
                      "data-clickable": "",
                    }}
                    slotSlotColor={
                      <>
                        <VClassIcon
                          dataColorIcon={
                            optionsColor === "Playlist"
                              ? "primary"
                              : optionsColor === "teal"
                              ? "teal"
                              : optionsColor === "cyan"
                              ? "cyan"
                              : "primary"
                          }
                        />
                        <VClassLabel
                          dataColor={
                            optionsColor === "Playlist"
                              ? "primary"
                              : optionsColor === "cyan"
                              ? "cyan"
                              : "primary"
                          }
                          dataColorMode={
                            optionsColorMode === "Playlist"
                              ? "normal"
                              : optionsColorMode === "inverse"
                              ? "inverse"
                              : optionsColorMode === "inherit"
                              ? "inherit"
                              : "normal"
                          }
                          dataColorStyle={
                            optionsColorStyle
                              ? "filled"
                              : optionsColorStyle
                              ? "outline"
                              : "filled"
                          }
                          dataLayout={
                            labelsLayout === "Playlist"
                              ? "row"
                              : labelsLayout === "row-compact"
                              ? "row-compact"
                              : labelsLayout === "column"
                              ? "column"
                              : labelsLayout === "column-compact"
                              ? "column-compact"
                              : "row"
                          }
                          label1Text={labelsLabel1Text}
                          label2Text={labelsLabel2Text}
                          label2Visibility={
                            labelsNumberOfLabels === "Playlist"
                              ? false
                              : ["2 Labels", "3 Labels", "4 Labels"].includes(
                                  labelsNumberOfLabels
                                )
                              ? true
                              : false
                          }
                          label3Text={labelsLabel3Text}
                          label3Visibility={
                            ["Playlist", "2 Labels"].includes(
                              labelsNumberOfLabels
                            )
                              ? false
                              : ["3 Labels", "4 Labels"].includes(
                                  labelsNumberOfLabels
                                )
                              ? true
                              : false
                          }
                          label4Text={labelsLabel4Text}
                          label4Visibility={
                            ["Playlist", "2 Labels", "3 Labels"].includes(
                              labelsNumberOfLabels
                            )
                              ? false
                              : labelsNumberOfLabels === "4 Labels"
                              ? true
                              : false
                          }
                        />
                      </>
                    }
                  />
                }
              />
            }
          />
        </Block>
      </Block>
    </div>
  );
}
