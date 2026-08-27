"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { VariantsBgFontColor } from "./variants/VariantsBgFontColor";
import { VariantsResponsiveHeadlineParagraph } from "./variants/VariantsResponsiveHeadlineParagraph";

export function ResponsiveHeadlineParagraph({
  eyebrowEyebrowText = "Eyebrow",
  eyebrowEyebrowVisibility = true,
  headlineAlignment = "Left",
  headlineBackgroundTextColor = "Base",
  headlineColorInherit = true,
  headlineFontWeight = true,
  headlineHeadlineTag = "h2",
  headlineHeadlineText = "Think. Create. Solution.",
  headlineHeadlineVisibility = true,
  headlineResponsiveTextSizeVariants = "xxl",
  paragraphParagraphFontSizeVariant = "paragraph-base",
  paragraphParagraphText = "Strategy starts with thinking deeper than the obvious answer. We analyze the data, decode the systems, and find the opportunities hiding in plain sight. Then we create the plan, the content, the campaigns, and the tools to bring that strategy to life. The result is a solution built for real hotel performance — sharper revenue, stronger visibility, cleaner operations, and fewer “why is this broken?” moments in the daily dashboard.",
}) {
  const _styleVariantMap = {
    Left: "",
    Right: "w-variant-ff615f42-98fe-4272-71c1-1edbe9ed17fb",
    Center: "w-variant-0b87aa85-9a4f-5edf-d3d1-1c88746653f3",
  };

  const _activeStyleVariant = _styleVariantMap[headlineAlignment];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`c-responsive-headline ${_activeStyleVariant}`}
        tag={"div"}
      >
        <VariantsBgFontColor
          optionsBackgroundTextColor={headlineBackgroundTextColor}
          slotBgColor={
            <VariantsResponsiveHeadlineParagraph
              eyebrowEyebrowText={eyebrowEyebrowText}
              eyebrowEyebrowVisibility={eyebrowEyebrowVisibility}
              paragraphParagraphFontSizeVariant={
                paragraphParagraphFontSizeVariant
              }
              paragraphParagraphText={paragraphParagraphText}
              responsiveHeadlineAlignment={
                headlineAlignment === "Playlist"
                  ? "Playlist"
                  : headlineAlignment === "Right"
                  ? "5b85bb49-9e92-974a-3d30-2259c377cfac"
                  : headlineAlignment === "Center"
                  ? "5b85bb49-9e92-974a-3d30-2259c377cfab"
                  : "Playlist"
              }
              responsiveHeadlineColorInherit={headlineColorInherit}
              responsiveHeadlineFontWeight={headlineFontWeight}
              responsiveHeadlineHeadlineTag={headlineHeadlineTag}
              responsiveHeadlineHeadlineText={headlineHeadlineText}
              responsiveHeadlineHeadlineVisibility={headlineHeadlineVisibility}
              responsiveHeadlineResponsiveFontSizeVariant={
                headlineResponsiveTextSizeVariants
              }
            />
          }
        />
      </Block>
    </div>
  );
}
