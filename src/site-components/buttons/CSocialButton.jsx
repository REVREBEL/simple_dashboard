"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import * as _interactions from "../webflow_modules/interactions";
import { CButton } from "../CButton";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CSocialButton({
  buttonButtonLink = {
    href: "#",
  },

  buttonCButtonSize = "base",
  buttonSocialSite = "google filled",
  buttonText = "[ Icon Button ] ",
  cButtonIconIconPlacement = false,
  cButtonIconIconSize = "base",
  size = "base",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block data-w-id={"553ca35c-f93a-61db-f52f-2688db730671"} tag={"div"}>
        <CButton
          buttonButtonLink={buttonButtonLink}
          buttonButtonText={buttonText}
          color={
            buttonSocialSite === "primary"
              ? "primary"
              : buttonSocialSite === "google outline"
              ? "primary"
              : buttonSocialSite === "linkedin filled"
              ? "teal"
              : buttonSocialSite === "linkedin outline"
              ? "teal"
              : buttonSocialSite === "github filled"
              ? "grey-2"
              : buttonSocialSite === "github outline"
              ? "grey-3"
              : "primary"
          }
          colorMode={
            ["normal", "linkedin filled", "github filled"].includes(
              buttonSocialSite
            )
              ? "normal"
              : [
                  "google outline",
                  "linkedin outline",
                  "github outline",
                ].includes(buttonSocialSite)
              ? "normal"
              : "normal"
          }
          colorStyle={
            ["Playlist", "linkedin filled", "github filled"].includes(
              buttonSocialSite
            )
              ? true
              : [
                  "google outline",
                  "linkedin outline",
                  "github outline",
                ].includes(buttonSocialSite)
              ? false
              : true
          }
          iconIconImage={
            ["Playlist", "google outline"].includes(buttonSocialSite)
              ? {
                  id: "6a09244ce43d4439301cf2d9",
                }
              : ["linkedin filled", "linkedin outline"].includes(
                  buttonSocialSite
                )
              ? {
                  id: "6a09244ce43d4439301cf2df",
                }
              : ["github filled", "github outline"].includes(buttonSocialSite)
              ? {
                  id: "6a09244ce43d4439301cf2bc",
                }
              : {
                  id: "plugins/Basic/assets/placeholder.svg",
                }
          }
          iconIconPlacement={cButtonIconIconPlacement}
          iconSize={cButtonIconIconSize}
          size={size}
        />
      </Block>
    </div>
  );
}
