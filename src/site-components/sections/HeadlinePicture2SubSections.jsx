"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { InnerComponentHeadline2SubSections } from "../innerComponents/InnerComponentHeadline2SubSections";
import { VariantsBgFontColor } from "../variants/VariantsBgFontColor";

export function HeadlinePicture2SubSections({
  fontColorVariants = "Primary",
  headline2SubSectionsHeadlineSubHeadlineText = (
    <>
      {"Integrated strategies "}
      {": we synchronize revenue management, marketing, and distribution to "}
      {", efficiency, and market share."}
    </>
  ),
  headline2SubSectionsImageImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf1ec_Firefly_A%20modern%20bedroom%20seamlessly%20tran%2035515213%20FHV.avif",
  headline2SubSectionsImageImageAltText = "__wf_reserved_inherit",
  headline2SubSectionsSubSection1ParagraphText = "Expertly balance pricing, demand + distribution with data-driven insights tailored for independent hotels, ensuring optimal performance & profitability.",
  headline2SubSectionsSubSection2ParagraphText = (
    <>
      {
        "Leverage targeted campaigns and brand storytelling to attract the right guests, boost direct bookings, and elevate your hotel"
      }
      {"'"}
      {"s unique identity."}
    </>
  ),
  slotHeadline,
  slotHeadline2,
  variantsBgFontColorOptionsBackgroundTextColor = "Color 2",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"component_headline-2-sub-sections"} tag={"div"}>
        <VariantsBgFontColor
          optionsBackgroundTextColor={
            variantsBgFontColorOptionsBackgroundTextColor
          }
          slotBgColor={
            <InnerComponentHeadline2SubSections
              flexVertical={slotHeadline2}
              flexVertical2={slotHeadline}
              fontColorVariants={fontColorVariants}
              headlineSubHeadlineText={
                headline2SubSectionsHeadlineSubHeadlineText
              }
              imageImage={headline2SubSectionsImageImage}
              imageImageAltText={headline2SubSectionsImageImageAltText}
              subSection1ParagraphText={
                headline2SubSectionsSubSection1ParagraphText
              }
              subSection2ParagraphText={
                headline2SubSectionsSubSection2ParagraphText
              }
            />
          }
        />
      </Block>
    </div>
  );
}
