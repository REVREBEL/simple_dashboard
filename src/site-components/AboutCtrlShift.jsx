"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { InnerCtrlShftAbout } from "./articles/InnerCtrlShftAbout";
import { VariantsBgFontColor } from "./variants/VariantsBgFontColor";

export function AboutCtrlShift({
  sectionBackgroundTextColor = "Base",
  sectionHeadlineTag = "h2",
  sectionHeadlineText = "About CtrlShift",
  sectionId = "",
  sectionParagraph = (
    <>
      {
        "Think of it as your operating system for smarter revenue — built to cut through the noise and focus on what actually works. Just clear, practical insights across pricing, distribution, marketing, and tech. We break down the mechanics behind high-performing hotels — from segmentation and positioning to channel strategy and demand generation — and turn them into strategies you can actually use. "
      }
      <br />
      <br />
      {
        "This is where strategy meets execution. Where systems get sharper. And where hotel performance starts to feel a lot more intentional."
      }
    </>
  ),
  sectionVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {sectionVisibility ? (
        <Block
          className={"ctrl-shft-about_component"}
          id={sectionId}
          tag={"div"}
        >
          <VariantsBgFontColor
            optionsBackgroundTextColor={sectionBackgroundTextColor}
            slotBgColor={
              <InnerCtrlShftAbout
                headlineTag={sectionHeadlineTag}
                headlineText={sectionHeadlineText}
                paragraph={sectionParagraph}
              />
            }
          />
        </Block>
      ) : null}
    </div>
  );
}
