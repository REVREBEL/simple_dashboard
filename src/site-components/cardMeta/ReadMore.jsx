"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";
import * as _interactions from "../webflow_modules/interactions";
import { InnerComponentReadMore } from "../innerComponents/InnerComponentReadMore";
import { VariantsLabelFontSize } from "../variants/VariantsLabelFontSize";
import { VariantsTextColor } from "../variants/VariantsTextColor";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ReadMore({
  readMoreFontColorVariants = "Color 8 Inverse",
  readMoreReadMoreId = "",

  readMoreReadMoreLink = {
    href: "#",
  },

  readMoreReadMoreText = "Read More",
  readMoreReadMoreVisibility = true,
  readMoreResponsiveTextVariants = "Regular Label",
  readMoreUnderlineVariants = "Underline",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {readMoreReadMoreVisibility ? (
        <Block
          className={"g-component-base"}
          id={readMoreReadMoreId}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={"component_link-block"}
            options={readMoreReadMoreLink}
          >
            <VariantsTextColor
              settingsFontColorVariants={readMoreFontColorVariants}
              slotTextColorSlotFontColor={
                <VariantsLabelFontSize
                  settingsResponsiveTextVariants={
                    readMoreResponsiveTextVariants
                  }
                  slotResponsiveTextSlotResponsiveText={
                    <InnerComponentReadMore
                      text={readMoreReadMoreText}
                      variant={readMoreUnderlineVariants}
                    />
                  }
                />
              }
            />
          </Link>
        </Block>
      ) : null}
    </div>
  );
}
