"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import { CResponsiveHeadline } from "../CResponsiveHeadline";

export function VariantsResponsiveHeadlineParagraph({
  eyebrowEyebrowText = "Eyebrow",
  eyebrowEyebrowVisibility = true,
  paragraphParagraphFontSizeVariant = "paragraph-base",
  paragraphParagraphText = "Strategy starts with thinking deeper than the obvious answer. We analyze the data, decode the systems, and find the opportunities hiding in plain sight. Then we create the plan, the content, the campaigns, and the tools to bring that strategy to life. The result is a solution built for real hotel performance — sharper revenue, stronger visibility, cleaner operations, and fewer “why is this broken?” moments in the daily dashboard.",
  responsiveHeadlineAlignment = null,
  responsiveHeadlineColorInherit = true,
  responsiveHeadlineFontWeight = true,
  responsiveHeadlineHeadlineTag = "h2",
  responsiveHeadlineHeadlineText = "Think. Create. Solution.",
  responsiveHeadlineHeadlineVisibility = true,
  responsiveHeadlineResponsiveFontSizeVariant = "xxl",
}) {
  const _styleVariantMap = {
    "paragraph-xs": "w-variant-9cce5750-910f-0f49-4f7a-311ec437da23",
    paragraph_sm: "w-variant-87643cb9-0dd1-5b86-2090-1e31a7a655d5",
    "paragraph-base": "",
    "paragraph-md": "w-variant-508cc79e-ce3d-8534-4a1f-1d9c431b1709",
    "paragraph-lg": "w-variant-b45be44c-3944-d47b-770a-f7993ca33827",
    "paragraph-xl": "w-variant-d010fb2f-5e5e-2b9d-9fa4-d9b5ad0972b7",
  };

  const _activeStyleVariant =
    _styleVariantMap[paragraphParagraphFontSizeVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block
          className={`flex_vertical gap-xxs ${_activeStyleVariant}`}
          tag={"div"}
        >
          {eyebrowEyebrowVisibility ? (
            <Block tag={"div"}>
              <Block className={`eyebrow ${_activeStyleVariant}`} tag={"div"}>
                {eyebrowEyebrowText}
              </Block>
            </Block>
          ) : null}
          <CResponsiveHeadline
            headlineColorInherit={responsiveHeadlineColorInherit}
            headlineFontWeight={responsiveHeadlineFontWeight}
            headlineHeadlineSize={responsiveHeadlineResponsiveFontSizeVariant}
            headlineHeadlineTag={responsiveHeadlineHeadlineTag}
            headlineHeadlineText={responsiveHeadlineHeadlineText}
            headlineHeadlineVisibility={responsiveHeadlineHeadlineVisibility}
          />
          <Block className={_activeStyleVariant} tag={"div"}>
            <Paragraph className={`variants_paragraph ${_activeStyleVariant}`}>
              {paragraphParagraphText}
            </Paragraph>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
