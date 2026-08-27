"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";

export function WhiteNavcardFullpage({
  optionsWhiteNavCardColor = "Light",
  whiteCard1HeadlineTag = "h3",
  whiteCard1HeadlineText = "Revenue Strategy",
  whiteCard1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  whiteCard1IconAltText = "__wf_reserved_inherit",

  whiteCard1Link = {
    href: "#",
  },

  whiteCard1LinkText = "Maximize Your Topline",
  whiteCard1Paragraph = "Maximize topline and margin with data-backed strategy",
  whiteCard2HeadlineTag = "h3",
  whiteCard2HeadlineText = "Brand Activation",
  whiteCard2Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  whiteCard2IconAltText = "__wf_reserved_inherit",

  whiteCard2Link = {
    href: "#",
  },

  whiteCard2LinkText = "Generate Demand",
  whiteCard2Paragraph = "Create demand and drive bookings with targeted marketing.",
  whiteCard3HeadlineTag = "h3",
  whiteCard3HeadlineText = "Optimized Distribution",
  whiteCard3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  whiteCard3IconAltText = "__wf_reserved_inherit",

  whiteCard3Link = {
    href: "#",
  },

  whiteCard3LinkText = "Connect Strategically",
  whiteCard3Paragraph = "Amplify your presence, control your channels, increase conversions.",
  whiteCard4HeadlineTag = "h3",
  whiteCard4HeadlineText = "Tech Integration",
  whiteCard4Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  whiteCard4IconAltText = "__wf_reserved_inherit",

  whiteCard4Link = {
    href: "#",
  },

  whiteCard4LinkText = "Build Your Engine",
  whiteCard4Paragraph = "Deploy and align the systems that power your hotel.",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-549347fa-da3c-0af3-b5bb-0bd1124aae0c",
  };

  const _activeStyleVariant = _styleVariantMap[optionsWhiteNavCardColor];

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
          id={"w-node-_549347fa-da3c-0af3-b5bb-0bd1124aadd8-124aadd7"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_white-navcard ${_activeStyleVariant}`}
            options={whiteCard1Link}
          >
            <Block
              className={`pagenav_white-card_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`pagenav_white-card_headline ${_activeStyleVariant}`}
                  tag={whiteCard1HeadlineTag}
                >
                  {whiteCard1HeadlineText}
                </Heading>
                <Block
                  className={`pagenav_white-card_paragraph ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard1Paragraph}
                </Block>
              </Block>
            </Block>
            <Block
              className={`pagenav_white-card_bottom-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`navcard_label-link ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard1LinkText}
                </Block>
                <HtmlEmbed
                  className={`code-embed_arrow ${_activeStyleVariant}`}
                  content={
                    '<?xml version="1.0" encoding="UTF-8"?><svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="currentColor" width="15px" height="15px"><path d="M177,116.1v-48.6c0-7.7,15.7-16,22.7-10.1,45,26.2,95,47.2,139.6,73.6,11.5,6.8,18.1,12.9,19.4,27.3,4.3,50.3-3.3,106.7,0,157.7-1.7,15.2-13.3,25.8-28.3,27.2-45.7,4.2-97.6-3.3-143.9,0-6.8-.4-12.8-3-18.1-7.1-37-34.7-82.2-64.8-118.7-99.5-5.5-5.3-8.1-6.9-8.9-15.1-2.7-28.8,2.1-61.7,0-90.9-.8-5.1,7.6-14.5,12-14.5h124.3ZM207.3,248.6l81.9-72.4-81.9-71.4v29.6c0,3.5-8.5,12-12,12h-124.3v60.6h124.3c3.4,0,12,8.5,12,12v29.6Z"/></svg>'
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
        <Block
          className={`pagenav_navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-_549347fa-da3c-0af3-b5bb-0bd1124aade4-124aadd7"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_white-navcard ${_activeStyleVariant}`}
            options={whiteCard2Link}
          >
            <Block
              className={`pagenav_white-card_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`pagenav_white-card_headline ${_activeStyleVariant}`}
                  tag={whiteCard2HeadlineTag}
                >
                  {whiteCard2HeadlineText}
                </Heading>
                <Block
                  className={`pagenav_white-card_paragraph ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard2Paragraph}
                </Block>
              </Block>
            </Block>
            <Block
              className={`pagenav_white-card_bottom-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`navcard_label-link is-color-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard2LinkText}
                </Block>
                <HtmlEmbed
                  className={`code-embed_arrow ${_activeStyleVariant}`}
                  content={
                    '<?xml version="1.0" encoding="UTF-8"?><svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="currentColor" width="15px" height="15px"><path d="M177,116.1v-48.6c0-7.7,15.7-16,22.7-10.1,45,26.2,95,47.2,139.6,73.6,11.5,6.8,18.1,12.9,19.4,27.3,4.3,50.3-3.3,106.7,0,157.7-1.7,15.2-13.3,25.8-28.3,27.2-45.7,4.2-97.6-3.3-143.9,0-6.8-.4-12.8-3-18.1-7.1-37-34.7-82.2-64.8-118.7-99.5-5.5-5.3-8.1-6.9-8.9-15.1-2.7-28.8,2.1-61.7,0-90.9-.8-5.1,7.6-14.5,12-14.5h124.3ZM207.3,248.6l81.9-72.4-81.9-71.4v29.6c0,3.5-8.5,12-12,12h-124.3v60.6h124.3c3.4,0,12,8.5,12,12v29.6Z"/></svg>'
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
        <Block
          className={`pagenav_navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-_549347fa-da3c-0af3-b5bb-0bd1124aadf0-124aadd7"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_white-navcard ${_activeStyleVariant}`}
            options={whiteCard3Link}
          >
            <Block
              className={`pagenav_white-card_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`c-light-navcard_top-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`pagenav_white-card_headline ${_activeStyleVariant}`}
                  tag={whiteCard3HeadlineTag}
                >
                  {whiteCard3HeadlineText}
                </Heading>
                <Block
                  className={`pagenav_white-card_paragraph ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard3Paragraph}
                </Block>
              </Block>
            </Block>
            <Block
              className={`pagenav_white-card_bottom-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`navcard_label-link is-color-5 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard3LinkText}
                </Block>
                <HtmlEmbed
                  className={`code-embed_arrow ${_activeStyleVariant}`}
                  content={
                    '<?xml version="1.0" encoding="UTF-8"?><svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="currentColor" width="15px" height="15px"><path d="M177,116.1v-48.6c0-7.7,15.7-16,22.7-10.1,45,26.2,95,47.2,139.6,73.6,11.5,6.8,18.1,12.9,19.4,27.3,4.3,50.3-3.3,106.7,0,157.7-1.7,15.2-13.3,25.8-28.3,27.2-45.7,4.2-97.6-3.3-143.9,0-6.8-.4-12.8-3-18.1-7.1-37-34.7-82.2-64.8-118.7-99.5-5.5-5.3-8.1-6.9-8.9-15.1-2.7-28.8,2.1-61.7,0-90.9-.8-5.1,7.6-14.5,12-14.5h124.3ZM207.3,248.6l81.9-72.4-81.9-71.4v29.6c0,3.5-8.5,12-12,12h-124.3v60.6h124.3c3.4,0,12,8.5,12,12v29.6Z"/></svg>'
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
        <Block
          className={`pagenav_navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-_549347fa-da3c-0af3-b5bb-0bd1124aadfc-124aadd7"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`pagenav_white-navcard ${_activeStyleVariant}`}
            options={whiteCard4Link}
          >
            <Block
              className={`pagenav_white-card_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`pagenav_white-card_headline ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`pagenav_white-card_headline ${_activeStyleVariant}`}
                  tag={whiteCard4HeadlineTag}
                >
                  {whiteCard4HeadlineText}
                </Heading>
                <Block
                  className={`pagenav_white-card_paragraph ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard4Paragraph}
                </Block>
              </Block>
            </Block>
            <Block
              className={`pagenav_white-card_bottom-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`navcard_label-link is-color-8 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard4LinkText}
                </Block>
                <HtmlEmbed
                  className={`code-embed_arrow ${_activeStyleVariant}`}
                  content={
                    '<?xml version="1.0" encoding="UTF-8"?><svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="currentColor" width="15px" height="15px"><path d="M177,116.1v-48.6c0-7.7,15.7-16,22.7-10.1,45,26.2,95,47.2,139.6,73.6,11.5,6.8,18.1,12.9,19.4,27.3,4.3,50.3-3.3,106.7,0,157.7-1.7,15.2-13.3,25.8-28.3,27.2-45.7,4.2-97.6-3.3-143.9,0-6.8-.4-12.8-3-18.1-7.1-37-34.7-82.2-64.8-118.7-99.5-5.5-5.3-8.1-6.9-8.9-15.1-2.7-28.8,2.1-61.7,0-90.9-.8-5.1,7.6-14.5,12-14.5h124.3ZM207.3,248.6l81.9-72.4-81.9-71.4v29.6c0,3.5-8.5,12-12,12h-124.3v60.6h124.3c3.4,0,12,8.5,12,12v29.6Z"/></svg>'
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
      </Block>
    </div>
  );
}
