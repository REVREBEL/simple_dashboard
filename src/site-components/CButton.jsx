"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { VButton } from "./variant/VButton";
import { VButtonSize } from "./variant/VButtonSize";
import { VColor } from "./variant/VColor";
import { VIcon } from "./variant/VIcon";
import { VSize } from "./variant/VSize";

export function CButton({
  buttonButtonLink = {
    href: "#",
  },

  buttonButtonText = "[ Icon Button ] ",
  buttonDropShadowOnHover = true,
  buttonSize = "base",
  color = "primary",
  colorMode = "normal",
  colorStyle = true,
  iconClickable = false,
  iconIconImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf2d5_generic.svg",
  iconIconPlacement = false,
  iconIconVisibility = false,
  iconSize = "sm",
  size = "base",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"c-button-wrapper"} tag={"div"}>
        <Block
          className={"c-button v-button-size"}
          data-button-size={
            buttonSize === "lg"
              ? "lg"
              : buttonSize === "md"
              ? "md"
              : buttonSize === "Playlist"
              ? "base"
              : buttonSize === "sm"
              ? "sm"
              : buttonSize === "xs"
              ? "xs"
              : "base"
          }
          data-color={
            color === "Playlist"
              ? "primary"
              : color === "teal"
              ? "teal"
              : color === "cyan"
              ? "cyan"
              : color === "aqua"
              ? "aqua"
              : color === "powder"
              ? "powder"
              : color === "yellow"
              ? "yellow"
              : color === "orange"
              ? "orange"
              : color === "red"
              ? "red"
              : color === "purple"
              ? "purple"
              : color === "frost"
              ? "frost"
              : color === "grey-1"
              ? "grey-1"
              : color === "grey-2"
              ? "grey-2"
              : color === "grey-3"
              ? "grey-3"
              : "primary"
          }
          data-color-mode={
            colorMode === "Playlist"
              ? "normal"
              : colorMode === "inverse"
              ? "inverse"
              : colorMode === "inherit"
              ? "inherit"
              : "normal"
          }
          data-color-style={
            colorStyle ? "filled" : !colorStyle ? "outline" : "filled"
          }
          data-shadow-on-hover={
            buttonDropShadowOnHover
              ? "enable"
              : buttonDropShadowOnHover
              ? "disable"
              : "enable"
          }
          tag={"div"}
        >
          <VButtonSize
            buttonAttributes={{
              "data-button-size":
                buttonSize === "xl"
                  ? "xl"
                  : buttonSize === "lg"
                  ? "lg"
                  : buttonSize === "Playlist"
                  ? "base"
                  : buttonSize === "sm"
                  ? "sm"
                  : buttonSize === "xs"
                  ? "xs"
                  : "base",
            }}
            buttonSize={buttonSize}
            slotButtonSize={
              <VColor
                optionsClickable={iconClickable}
                optionsColor={color}
                optionsColorMode={colorMode}
                optionsColorStyle={colorStyle}
                optionsDropShadowOnHover={buttonDropShadowOnHover}
                slotColorAttributes={{
                  "data-color-is-primary": "",
                  "data-color-on-primary":
                    color === "Playlist"
                      ? "primary"
                      : color !== "Playlist"
                      ? "other"
                      : color === "teal"
                      ? "teal"
                      : "na",
                  "data-icon-color": "",
                  "data-clickable": iconClickable
                    ? "enable"
                    : iconClickable
                    ? "disable"
                    : "disable",
                  "data-color": "",
                  "data-color-style": colorStyle
                    ? "filled"
                    : colorStyle
                    ? "outline"
                    : "filled",
                  "data-color-mode":
                    colorMode === "Playlist"
                      ? "normal"
                      : colorMode === "inverse"
                      ? "inverse"
                      : colorMode === "inherit"
                      ? "inherit"
                      : "normal",
                  "data-drop-shadow": buttonDropShadowOnHover
                    ? "enable"
                    : buttonDropShadowOnHover
                    ? "disable"
                    : "enable",
                }}
                slotSlotColor={
                  <VButton
                    buttonLink={buttonButtonLink}
                    buttonText={buttonButtonText}
                    dataIconPlacement={
                      iconIconPlacement
                        ? "before-text"
                        : !iconIconPlacement
                        ? "after-text"
                        : "after-text"
                    }
                    iconVisibility={iconIconVisibility}
                    slotSlotIcon={
                      <VSize
                        size={size}
                        sizeAttributes={{
                          "data-size":
                            size === "lg"
                              ? "lg"
                              : size === "md"
                              ? "md"
                              : size === "Playlist"
                              ? "base"
                              : size === "sm"
                              ? "sm"
                              : size === "xs"
                              ? "xs"
                              : size === "xxs"
                              ? "xxs"
                              : "base",
                        }}
                        slotSize={
                          <VIcon
                            dataColorMode={
                              colorMode === "Playlist" && colorStyle
                                ? "inverse"
                                : colorMode === "inverse" && colorStyle && false
                                ? "normal"
                                : colorMode === "Playlist" && !colorStyle
                                ? "normal"
                                : colorMode === "inverse" && !colorStyle
                                ? "inverse"
                                : ""
                            }
                            dataIconColor={
                              color === "Playlist"
                                ? "primary"
                                : color === "teal"
                                ? "teal"
                                : color === "cyan"
                                ? "cyan"
                                : color === "aqua"
                                ? "aqua"
                                : color === "powder"
                                ? "powder"
                                : color === "yellow"
                                ? "yellow"
                                : color === "orange"
                                ? "orange"
                                : color === "red"
                                ? "red"
                                : color === "purple"
                                ? "purple"
                                : color === "frost"
                                ? "frost"
                                : "primary"
                            }
                            dataIconSize={
                              size === "lg"
                                ? "lg"
                                : size === "md"
                                ? "md"
                                : size === "Playlist"
                                ? "base"
                                : size === "sm"
                                ? "sm"
                                : size === "xs"
                                ? "xs"
                                : size === "xxs"
                                ? "xxs"
                                : "base"
                            }
                            iconImage={iconIconImage}
                          />
                        }
                      />
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
