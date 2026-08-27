"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";

export function VNavcard({
  cardCardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec02_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.avif",
  cardCardVisibility = true,
  cardHeadline = "CTRLShift Blog",

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
  cardSlotIcon,
  cardSlotLabel,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {cardCardVisibility ? (
        <Block className={"c-navcard"} tag={"div"}>
          <Link
            block={"inline"}
            button={false}
            className={"navcard_wrapper is-color"}
            options={cardLink}
          >
            <Block
              className={"navcard_right-content is-color"}
              id={"w-node-_18c6181e-717c-4143-cea9-7164ec52065f-9b3730eb"}
              tag={"div"}
            >
              <Block className={"navcard_top-content"} tag={"div"}>
                {cardSlotIcon}
                <Block className={"headline-xxs"} tag={"div"}>
                  {cardHeadline}
                </Block>
              </Block>
              <Block className={"navcard_middle-content"} tag={"div"}>
                <Block
                  className={"paragraph_sm is-line-height-sm padding-top_xs"}
                  tag={"div"}
                >
                  {cardParagraph}
                </Block>
              </Block>
              <Block className={"navcard_bottom-content"} tag={"div"}>
                {cardSlotLabel}
              </Block>
            </Block>
            <Block className={"navcard_left-content is-color"} tag={"div"}>
              <Image
                alt={""}
                className={"navcard_image"}
                height={"auto"}
                loading={"lazy"}
                src={cardCardImage}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
      ) : null}
    </div>
  );
}
