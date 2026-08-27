"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { VColorInherit } from "./variant/VColorInherit";
import { VResponsiveHeadline } from "./variants/VResponsiveHeadline";
import { VTextAlign } from "./variant/VTextAlign";

export function CResponsiveHeadline({
  eyebrowEyebrowText = "Eyebrow Text",
  eyebrowEyebrowVisibility = false,
  headlineColorInherit = false,
  headlineFontWeight = true,
  headlineHeadlineSize = "base",
  headlineHeadlineTag = "h2",
  headlineHeadlineText = (
    <>
      {"Synchronize. Optimize."}
      <br />
      {"Outperform. Repeat."}
    </>
  ),
  headlineHeadlineVisibility = true,
  headlineHeadlineWrapping = true,
  headlineTextWrap = true,
  optionsTextAlign = "left",
  subheadlineSubheadlineText = "Subheadline Text",
  subheadlineSubheadlineVisibility = false,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"flex-grow"} tag={"div"}>
        <Block className={"c-responsive-headline"} tag={"div"}>
          <VTextAlign
            slotTextAlign={
              <VColorInherit
                colorInherit={
                  headlineColorInherit
                    ? true
                    : !headlineColorInherit
                    ? false
                    : false
                }
                slotColorInherit={
                  <VResponsiveHeadline
                    dataFontWeight={
                      headlineFontWeight
                        ? "bold"
                        : !headlineFontWeight
                        ? "semibold"
                        : "bold"
                    }
                    dataTextWrap={
                      headlineTextWrap
                        ? "balance"
                        : !headlineTextWrap
                        ? "pretty"
                        : "balance"
                    }
                    eyebrowText={eyebrowEyebrowText}
                    eyebrowVisibility={eyebrowEyebrowVisibility}
                    headlineTag={headlineHeadlineTag}
                    headlineText={headlineHeadlineText}
                    headlineVisibility={headlineHeadlineVisibility}
                    headlineWrapping={headlineHeadlineWrapping ? true : false}
                    responsiveTextSizeVariants={headlineHeadlineSize}
                    subheadlineText={subheadlineSubheadlineText}
                    subheadlineVisibility={subheadlineSubheadlineVisibility}
                    valueWrapHeadline={
                      headlineHeadlineWrapping
                        ? "wrap-headline"
                        : !headlineHeadlineWrapping
                        ? "no-wrapping"
                        : "wrap-headline"
                    }
                  />
                }
              />
            }
            textAlign={optionsTextAlign}
          />
        </Block>
      </Block>
    </div>
  );
}
