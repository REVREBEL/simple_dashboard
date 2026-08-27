"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Section from "../webflow_modules/Layout/components/Section";

export function HomepageHero({
  settingsSectionId = "",
  settingsSectionVisibility = true,
  variant = "Base",
  word1HeadlineTag = "h1",
  word1HeadlineText = "Synchronize.",
  word2HeadlineText = "Optimize.",
  word2HeadlineTextTag = "h1",
  word3HeadlineText = "Outperform.",
  word3HeadlineTextTag = "h1",
  word4HeadlineText = "Repeat.",
  word4HeadlineTextTag = "h1",
}) {
  const _styleVariantMap = {
    Base: "",
    "Full Width": "w-variant-0931c0a5-29f5-96c7-001e-fae7449149e2",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Block
          className={_activeStyleVariant}
          id={settingsSectionId}
          tag={"div"}
        >
          <HtmlEmbed
            className={`homepage-hero_embed ${_activeStyleVariant}`}
            content={
              '<!-- START Flowbase Booster [Text Highlight] --> \n<script src="https://cdn.jsdelivr.net/npm/@flowbase-co/boosters-gsap-text-highlight@1/dist/gsap-text-highlight.min.js" type="text/javascript">\n</script> \n<script src="https://cdn.jsdelivr.net/npm/@flowbase-co/boosters-gsap@3/dist/gsap.min.js" type="text/javascript">\n</script>\n<!-- END Flowbase Booster [Text Highlight] -->'
            }
          />
          <Block className={`g-container ${_activeStyleVariant}`} tag={"div"}>
            <Section
              className={`global-component_wrapper homepage-hero_wrapper ${_activeStyleVariant}`}
              grid={{
                type: "section",
              }}
              tag={"section"}
            >
              <BlockContainer
                className={`component_container homepage-hero_container ${_activeStyleVariant}`}
                grid={{
                  type: "container",
                }}
                tag={"div"}
              >
                <Block
                  className={`component_size ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`component_padding homepage-hero_padding ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`hero_content-wrapper ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`hero-heading-wrapper ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`hero-headlline_align-left ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Heading
                            className={`hero-headline_word-1 ${_activeStyleVariant}`}
                            fb-text-highlight={"true"}
                            fb-text-highlight-direction={"forward"}
                            fb-text-highlight-speed={"3"}
                            fb-text-highlight-type={"2"}
                            tag={word1HeadlineTag}
                          >
                            {word1HeadlineText}
                          </Heading>
                        </Block>
                        <Block
                          className={`hero-headlline_align-left ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Heading
                            className={`hero-headline_word-2 ${_activeStyleVariant}`}
                            fb-text-highlight={"true"}
                            fb-text-highlight-direction={"forward"}
                            fb-text-highlight-speed={"3"}
                            fb-text-highlight-type={"2"}
                            tag={word2HeadlineTextTag}
                          >
                            {word2HeadlineText}
                          </Heading>
                        </Block>
                        <Block
                          className={`hero-headlline_align-left ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Heading
                            className={`hero-headline_word-3 ${_activeStyleVariant}`}
                            fb-text-highlight={"true"}
                            fb-text-highlight-direction={"forward"}
                            fb-text-highlight-speed={"3"}
                            fb-text-highlight-type={"2"}
                            tag={word3HeadlineTextTag}
                          >
                            {word3HeadlineText}
                          </Heading>
                        </Block>
                        <Block
                          className={`hero-headlline_align-left ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Heading
                            className={`hero-headline_word-4 ${_activeStyleVariant}`}
                            fb-text-highlight={"true"}
                            fb-text-highlight-direction={"forward"}
                            fb-text-highlight-speed={"3"}
                            fb-text-highlight-type={"2"}
                            tag={word4HeadlineTextTag}
                          >
                            {word4HeadlineText}
                          </Heading>
                        </Block>
                      </Block>
                      <Block
                        className={`hero-banner_main-image ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`hero-banner ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Image
                            alt={""}
                            className={`hero-banner_image ${_activeStyleVariant}`}
                            height={"auto"}
                            loading={"lazy"}
                            src={
                              "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebab_revrebel_wide-32-interior-photograph-of-a-boutique-hotel-ki__83446.avif"
                            }
                            width={"auto"}
                          />
                          <Block
                            className={` hero-banner_wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Image
                              alt={"Image Corner Curve"}
                              className={`hero-banner_image-effect ${_activeStyleVariant}`}
                              height={"auto"}
                              loading={"lazy"}
                              src={
                                "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceb27_Corner-Hero-Image.svg"
                              }
                              width={"Auto"}
                            />
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </BlockContainer>
            </Section>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
