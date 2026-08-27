"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { VColor } from "./variant/VColor";
import { VIcon } from "./variant/VIcon";
import { VSize } from "./variant/VSize";

export function CIcon({
  clickable = false,
  iconIconSize = "xxs",
  iconImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec66_arrow-left.svg",
  optionsColorMode = "normal",
  optionsColorStyle = true,
  optionsIconColor = "yellow",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block className={"c-icon"} tag={"div"}>
          <VSize
            size={iconIconSize}
            sizeAttributes={{
              "data-size":
                iconIconSize === "lg"
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
              <VColor
                optionsClickable={clickable}
                optionsColor={optionsIconColor}
                optionsColorMode={optionsColorMode}
                optionsColorStyle={optionsColorStyle}
                optionsDropShadowOnHover={true}
                slotColorAttributes={{
                  null:
                    optionsIconColor === "Playlist"
                      ? "primary"
                      : optionsIconColor === "teal"
                      ? "teal"
                      : optionsIconColor === "cyan"
                      ? "cyan"
                      : optionsIconColor === "aqua"
                      ? "aqua"
                      : optionsIconColor === "powder"
                      ? "powder"
                      : optionsIconColor === "yellow"
                      ? "yellow"
                      : optionsIconColor === "orange"
                      ? ""
                      : optionsIconColor === "red"
                      ? ""
                      : optionsIconColor === "purple"
                      ? ""
                      : optionsIconColor === "frost"
                      ? "frost"
                      : optionsIconColor === "grey-1"
                      ? "grey-1"
                      : optionsIconColor === "grey-2"
                      ? "grey-2"
                      : optionsIconColor === "grey-3"
                      ? "grey-3"
                      : "primary",
                  "data-clickable-null": clickable
                    ? "enable"
                    : !clickable
                    ? "disable"
                    : "disable",
                  "data-color-style-null": optionsColorStyle
                    ? "filled"
                    : optionsColorStyle
                    ? "outline"
                    : "filled",
                  "data-color-mode-null":
                    optionsColorMode === "Playlist"
                      ? "normal"
                      : optionsColorMode === "inverse"
                      ? "inverse"
                      : optionsColorMode === "inherit"
                      ? "inherit"
                      : "normal",
                }}
                slotSlotColor={
                  <VIcon
                    dataColorMode={
                      optionsColorMode === "Playlist" && optionsColorStyle
                        ? "inverse"
                        : optionsColorMode === "inverse" && optionsColorStyle
                        ? "normal"
                        : optionsColorMode === "Playlist" && !optionsColorStyle
                        ? "normal"
                        : optionsColorMode === "inverse" && !optionsColorStyle
                        ? "inverse"
                        : "normal"
                    }
                    dataIconColor={
                      optionsIconColor === "Playlist"
                        ? "primary"
                        : optionsIconColor === "teal"
                        ? "teal"
                        : optionsIconColor === "cyan"
                        ? "cyan"
                        : optionsIconColor === "aqua"
                        ? "aqua"
                        : optionsIconColor === "powder"
                        ? "powder"
                        : optionsIconColor === "yellow"
                        ? "yellow"
                        : optionsIconColor === "orange"
                        ? "orange"
                        : optionsIconColor === "red"
                        ? "red"
                        : optionsIconColor === "purple"
                        ? "purple"
                        : optionsIconColor === "frost"
                        ? "frost"
                        : "primary"
                    }
                    dataIconSize={
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
                        : "base"
                    }
                    iconImage={iconImage}
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
