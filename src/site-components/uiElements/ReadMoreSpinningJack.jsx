"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ReadMoreSpinningJack({
  readMoreButtonButtonCtaText = "Read More",
  readMoreButtonIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebaf_asterisk.svg",
  readMoreButtonIconAltText = "__wf_reserved_inherit",

  readMoreButtonLink = {
    href: "#",
  },

  settingsButtonId = "",
  settingsButtonVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsButtonVisibility ? (
        <Block
          className={"readmore_button"}
          data-w-id={"86a5d933-1bc2-1ffd-ea30-c766f02e1b58"}
          href={"#"}
          id={"w-node-_86a5d933-1bc2-1ffd-ea30-c766f02e1b58-f02e1b58"}
          spinning-icon={"trigger"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={"read-more_link"}
            options={readMoreButtonLink}
          >
            <Block className={"read-more_text"} tag={"div"}>
              {readMoreButtonButtonCtaText}
            </Block>
            <Block
              className={"read-more_line is-rebel"}
              // @ts-ignore - User-defined custom attribute(s)
              MovingColors={"target"}
              tag={"div"}
            />
            <Image
              className={"read-more_icon icon_3x3 is-icon-color-primary"}
              height={"auto"}
              loading={"lazy"}
              src={readMoreButtonIcon}
              width={"auto"}
            />
          </Link>
        </Block>
      ) : null}
    </div>
  );
}
