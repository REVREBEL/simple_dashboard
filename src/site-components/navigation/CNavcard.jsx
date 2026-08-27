"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { VColor } from "../variant/VColor";
import { VNavcard } from "./VNavcard";

export function CNavcard({
  cardCardVisibility = true,
  cardColor = "yellow",
  cardColorMode = "normal",
  cardHeadline = (
    <>
      {"CTRLShift Blog"}
      <br />
    </>
  ),
  cardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf24a_freepik__desert-props-tabletop-angled-3550mm-shot-of-a-smal__28396.avif",

  cardLink = {
    href: "#",
  },

  cardParagraph = (
    <>
      {
        "Where we share our tips and ideas on generating revenueat your property"
      }
      <br />
    </>
  ),
  slotSlotIcon,
  slotSlotLabel,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"g-container"} tag={"div"}>
        <VColor
          optionsClickable={false}
          optionsColor={cardColor}
          optionsColorMode={cardColorMode}
          optionsColorStyle={true}
          optionsDropShadowOnHover={false}
          slotColorAttributes={{
            "data-icon-color": "",
            "data-clickable": "disabled",
            "data-color":
              cardColor === "Playlist"
                ? "primary"
                : cardColor === "cyan"
                ? "cyan"
                : cardColor === "yellow"
                ? "yellow"
                : cardColor === "purple"
                ? "purple"
                : "primary",
            "data-color-style": "filled",
            "data-color-mode":
              cardColorMode === "Playlist"
                ? "normal"
                : cardColorMode === "inverse"
                ? "inverse"
                : "",
          }}
          slotSlotColor={
            <VNavcard
              cardCardImage={cardImage}
              cardCardVisibility={cardCardVisibility}
              cardHeadline={cardHeadline}
              cardLink={cardLink}
              cardParagraph={cardParagraph}
              cardSlotIcon={slotSlotIcon}
              cardSlotLabel={slotSlotLabel}
            />
          }
        />
      </Block>
    </div>
  );
}
