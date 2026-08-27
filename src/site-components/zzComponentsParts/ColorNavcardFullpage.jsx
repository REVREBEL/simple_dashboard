"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";

export function ColorNavcardFullpage({
  colorCard1HeadlineTag = "h3",
  colorCard1HeadlineText = "CTRLShift Blog",
  colorCard1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  colorCard1IconAltText = "__wf_reserved_inherit",
  colorCard1Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec02_revrebel_the-private-courtyard-transforms-into-a-minimalist__83428.avif",
  colorCard1ImageAltText = "__wf_reserved_inherit",

  colorCard1Link = {
    href: "#",
  },

  colorCard1LinkText = "read more",
  colorCard1Paragraph = "Where we shareour tips and ideas ongeneratingrevenue atyour property",
  colorCard2HeadlineTag = "h3",
  colorCard2HeadlineText = "Travel Trends",
  colorCard2Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceeb8_plane.svg",
  colorCard2IconAltText = "__wf_reserved_inherit",
  colorCard2Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceebd_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
  colorCard2ImageAltText = "__wf_reserved_inherit",

  colorCard2Link = {
    href: "#",
  },

  colorCard2LinkText = "Explore Trends",
  colorCard2Paragraph = "A collection of trends from the largest travel sites, researchers, and companies",
  colorCard3HeadlineTag = "h3",
  colorCard3HeadlineText = "Revenue Toolkits",
  colorCard3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf07f_gear.svg",
  colorCard3IconAltText = "__wf_reserved_inherit",
  colorCard3Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebde_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.avif",
  colorCard3ImageAltText = "__wf_reserved_inherit",

  colorCard3Link = {
    href: "#",
  },

  colorCard3LinkText = "Tap + Discover",
  colorCard3Paragraph = "Packed with strategies and resources to help increase revenue.",
  colorCard4HeadlineTag = "h3",
  colorCard4HeadlineText = "Client Hub",
  colorCard4Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea1_labtop-with-cursor.svg",
  colorCard4IconAltText = "__wf_reserved_inherit",
  colorCard4Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cec1f_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
  colorCard4ImageAltText = "__wf_reserved_inherit",

  colorCard4Link = {
    href: "#",
  },

  colorCard4LinkText = "Get Briefed",
  colorCard4Paragraph = "Real-time metrics + a full view of our current engagement or project.",
  optionsColorCardColor = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-df89afeb-dc59-ed18-e314-75ca5a7dfe58",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColorCardColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`pagenav_dropdown-container ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`pagenav_navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe28-5a7dfe27"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_color-navcard ${_activeStyleVariant}`}
            options={colorCard1Link}
          >
            <Block
              className={`pagenav_color-navcard_right-content ${_activeStyleVariant}`}
              id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe2a-5a7dfe27"}
              tag={"div"}
            >
              <Block
                className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`c-navcard-icon ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3 is-icon-color-4 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard1Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`pagenav_navcard_headline ${_activeStyleVariant}`}
                  tag={colorCard1HeadlineTag}
                >
                  {colorCard1HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`pagenav_navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard1Paragraph}
              </Block>
              <Block
                className={`v-navcard_link ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard1LinkText}
              </Block>
            </Block>
            <Block
              className={`pagenav_color-navcard_left-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`v-navcard_image ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard1Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
        <Block
          className={`pagenav_navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe33-5a7dfe27"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_color-navcard is-color-2 ${_activeStyleVariant}`}
            options={colorCard2Link}
          >
            <Block
              className={`pagenav_color-navcard_right-content is-inverse-color-2 ${_activeStyleVariant}`}
              id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe35-5a7dfe27"}
              tag={"div"}
            >
              <Block
                className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`c-navcard-icon ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3 is-icon-color-5 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard2Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`pagenav_navcard_headline ${_activeStyleVariant}`}
                  tag={colorCard2HeadlineTag}
                >
                  {colorCard2HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`pagenav_navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard2Paragraph}
              </Block>
              <Block
                className={`v-navcard_link ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard2LinkText}
              </Block>
            </Block>
            <Block
              className={`pagenav_color-navcard_left-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`v-navcard_image ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard2Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
        <Block
          className={`pagenav_navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe3e-5a7dfe27"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_color-navcard is-color-5 ${_activeStyleVariant}`}
            options={colorCard3Link}
          >
            <Block
              className={`pagenav_color-navcard_right-content is-inverse-color-5 ${_activeStyleVariant}`}
              id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe40-5a7dfe27"}
              tag={"div"}
            >
              <Block
                className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`c-navcard-icon ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3 is-icon-color-7 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard3Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`pagenav_navcard_headline ${_activeStyleVariant}`}
                  tag={colorCard3HeadlineTag}
                >
                  {colorCard3HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`pagenav_navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard3Paragraph}
              </Block>
              <Block
                className={`v-navcard_link ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard3LinkText}
              </Block>
            </Block>
            <Block
              className={`pagenav_color-navcard_left-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`v-navcard_image ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard3Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
        <Block
          className={`pagenav_navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe49-5a7dfe27"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_color-navcard is-color-8 ${_activeStyleVariant}`}
            options={colorCard4Link}
          >
            <Block
              className={`pagenav_color-navcard_right-content is-inverse-color-8 ${_activeStyleVariant}`}
              id={"w-node-df89afeb-dc59-ed18-e314-75ca5a7dfe4b-5a7dfe27"}
              tag={"div"}
            >
              <Block
                className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`c-navcard-icon ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Image
                    className={`icon_3x3 is-icon-color-6 ${_activeStyleVariant}`}
                    height={"auto"}
                    loading={"lazy"}
                    src={colorCard4Icon}
                    width={"auto"}
                  />
                </Block>
                <Heading
                  className={`pagenav_navcard_headline ${_activeStyleVariant}`}
                  tag={colorCard4HeadlineTag}
                >
                  {colorCard4HeadlineText}
                </Heading>
              </Block>
              <Block
                className={`pagenav_navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard4Paragraph}
              </Block>
              <Block
                className={`v-navcard_link ${_activeStyleVariant}`}
                tag={"div"}
              >
                {colorCard4LinkText}
              </Block>
            </Block>
            <Block
              className={`pagenav_color-navcard_left-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Image
                className={`v-navcard_image ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={colorCard4Image}
                width={"auto"}
              />
            </Block>
          </Link>
        </Block>
      </Block>
    </div>
  );
}
