"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";

export function CLightNavcard({
  variant = "Light",
  whiteCardHeadlineTag = "h3",
  whiteCardHeadlineText = "Revenue Strategy",
  whiteCardIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  whiteCardIconAltText = "__wf_reserved_inherit",
  whiteCardIconVisibility = false,

  whiteCardLink = {
    href: "#",
  },

  whiteCardParagraph = "Maximize topline and margin with data-backed strategy",
  whiteCardSlotLabel,
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-7cc789b3-ada4-651a-5471-77fcabe8e1a2",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Link
        block={"inline"}
        button={false}
        className={`c-light-navcard ${_activeStyleVariant}`}
        options={whiteCardLink}
      >
        <Block
          className={`c-light-navcard_top ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            {whiteCardIconVisibility ? (
              <Block
                className={`c-navcard-icon ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Image
                  className={`icon_3x3 ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={whiteCardIcon}
                  width={"auto"}
                />
              </Block>
            ) : null}
            <Heading
              className={`c-navcard_headline dropdown-1_max-width ${_activeStyleVariant}`}
              tag={whiteCardHeadlineTag}
            >
              {whiteCardHeadlineText}
            </Heading>
          </Block>
        </Block>
        <Block
          className={`c-light-navcard_bottom ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`paragraph_sm padding-bottom_xs ${_activeStyleVariant}`}
            tag={"div"}
          >
            {whiteCardParagraph}
          </Block>
          {whiteCardSlotLabel}
        </Block>
      </Link>
    </div>
  );
}
