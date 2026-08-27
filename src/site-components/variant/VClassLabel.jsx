"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VClassLabel({
  dataColor = "",
  dataColorMode = "",
  dataColorStyle = "",
  dataLayout = "",
  label1Text = "class name",
  label2Text = "class name",
  label2Visibility = true,
  label3Text = "class name",
  label3Visibility = true,
  label4Text = "class name",
  label4Visibility = true,
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
          className={"v-class-label-layout data-layout"}
          data-layout={dataLayout}
          tag={"div"}
        >
          <Block
            className={"v-class-label v-color"}
            data-color={dataColor}
            data-color-mode={dataColorMode}
            data-color-style={dataColorStyle}
            tag={"div"}
          >
            <Block
              className={"v-label-text"}
              data-color={""}
              data-color-mode={""}
              data-color-style={""}
              tag={"div"}
            >
              {label1Text}
            </Block>
          </Block>
          {label2Visibility ? (
            <Block
              className={"v-class-label v-color"}
              data-color={dataColor}
              data-color-mode={dataColorMode}
              data-color-style={dataColorStyle}
              tag={"div"}
            >
              <Block
                className={"v-label-text"}
                data-color={""}
                data-color-mode={""}
                data-color-style={""}
                tag={"div"}
              >
                {label2Text}
              </Block>
            </Block>
          ) : null}
          {label3Visibility ? (
            <Block
              className={"v-class-label v-color"}
              data-color={dataColor}
              data-color-mode={dataColorMode}
              data-color-style={dataColorStyle}
              tag={"div"}
            >
              <Block
                className={"v-label-text"}
                data-color={""}
                data-color-mode={""}
                data-color-style={""}
                tag={"div"}
              >
                {label3Text}
              </Block>
            </Block>
          ) : null}
          {label4Visibility ? (
            <Block
              className={"v-class-label v-color"}
              data-color={dataColor}
              data-color-mode={dataColorMode}
              data-color-style={dataColorStyle}
              tag={"div"}
            >
              <Block
                className={"v-label-text"}
                data-color={""}
                data-color-mode={""}
                data-color-style={""}
                tag={"div"}
              >
                {label4Text}
              </Block>
            </Block>
          ) : null}
        </Block>
      </Block>
    </div>
  );
}
