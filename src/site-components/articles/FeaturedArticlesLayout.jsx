"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";

export function FeaturedArticlesLayout({
  feature1HeadlineText = "Harnessing data for informed decision-making",
  feature1HeadlineTextTag = "h3",
  feature1Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb7_Placeholder%20Image.png",
  feature1ImageAltText = "__wf_reserved_inherit",
  feature1ViewsLikesColor = null,
  feature2Headline = "Harnessing data for informed decision-making",
  feature2HeadlineTag = "h3",
  feature2Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb7_Placeholder%20Image.png",
  feature2ImageAltText = "__wf_reserved_inherit",
  feature2ViewsLikesColor = null,
  headlineBrandColor2Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf10c_REVREBEL%20Stacked%20Green%20Circle%20Logo.svg",
  headlineBrandColor6Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf10b_REVREBEL%20Yellow%20Circle%20Logo.svg",
  headlineBrandColor7Image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf109_REVREBEL%20Blue%20Circle%20Logo.svg",
  headlineHeadlineText = (
    <>
      {"Featured "}
      <br />
      {"Articles"}
    </>
  ),
  headlineHeadlineTextTag = "h2",
  headlineImageAltText = "__wf_reserved_inherit",
  headlineLinkColor = null,
  likesViewsColorVariants = null,
  likesViewsSizeVariant = null,
  optionsColor = "Brand Color 6",
  optionsLinkColor = null,
  settingsSectionId = "",
  settingsSectionVisibility = true,
  slotCardMeta,
  slotCardMeta2,
  slotLink,
  slotLink2,
  slotViewsLikes,
  slotViewsLikes2,
}) {
  const _styleVariantMap = {
    "Brand Color 6": "",
    "Brand Color 5": "w-variant-d076da93-5eb8-8a5a-dfb1-0625fa772f0e",
    "Brand Color 2": "w-variant-fb2d6f2d-f498-10f0-20a7-cc7614c8bee4",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <BlockContainer
          className={`component_wrapper ${_activeStyleVariant}`}
          grid={{
            type: "container",
          }}
          id={settingsSectionId}
          tag={"div"}
        >
          <BlockContainer
            className={`component_container ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={`component_padding padding-md margin-block_ld max-width_large text-color-primary container w-container ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`headline-wrapper flex_horizontal x-is-space-between margin-bottom_xlarge flex ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`headline-md flex-align-center text-color-7 ${_activeStyleVariant}`}
                  // @ts-ignore - User-defined custom attribute(s)
                  id={"w-node-_7d591feb-353b-4800-50cc-f172e6186374-51abcf03"}
                  tag={headlineHeadlineTextTag}
                >
                  {headlineHeadlineText}
                </Heading>
                <Block
                  className={`flex-horizontal flex-align_center ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block tag={"div"} />
                  <Image
                    className={`logo-circle _2 ${_activeStyleVariant}`}
                    height={"Auto"}
                    loading={"lazy"}
                    src={headlineBrandColor2Image}
                    width={"200"}
                  />
                  <Image
                    className={`logo-circle _4 ${_activeStyleVariant}`}
                    height={"Auto"}
                    loading={"lazy"}
                    src={headlineBrandColor7Image}
                    width={"180"}
                  />
                  <Image
                    className={`logo-circle _5 ${_activeStyleVariant}`}
                    height={"Auto"}
                    loading={"lazy"}
                    src={headlineBrandColor6Image}
                    width={"200"}
                  />
                </Block>
              </Block>
              <Block
                className={`grid_2-col gap-xxl grid-blogs ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`featured-article_layout-variants ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`item-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`item-wrapper margin-bottom_sm ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`component_card-meta-wrapper ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {slotCardMeta}
                      </Block>
                      <Heading
                        className={`headline-sm padding-top_xs padding-bottom_sm ${_activeStyleVariant}`}
                        tag={feature1HeadlineTextTag}
                      >
                        {feature1HeadlineText}
                      </Heading>
                      <Block
                        className={`card_item-wrapper flex-strech ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {slotLink}
                        {slotViewsLikes}
                      </Block>
                    </Block>
                    <Link
                      block={"inline"}
                      button={false}
                      className={`blog-list_content-wrapper ${_activeStyleVariant}`}
                      options={{
                        href: "#",
                      }}
                    >
                      <Block
                        className={`image-wrapper ${_activeStyleVariant}`}
                        id={
                          "w-node-abe1ce89-2275-b648-3a76-2caac972114b-c9721135"
                        }
                        tag={"div"}
                      >
                        <Image
                          className={`blog-image_large image-animated ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={feature1Image}
                          width={"auto"}
                        />
                      </Block>
                    </Link>
                  </Block>
                </Block>
                <Block
                  className={`featured-article_layout-variants ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`item-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Link
                      block={"inline"}
                      button={false}
                      className={`blog-list_content-wrapper ${_activeStyleVariant}`}
                      options={{
                        href: "#",
                      }}
                    >
                      <Block
                        className={`image-wrapper ${_activeStyleVariant}`}
                        id={
                          "w-node-abe1ce89-2275-b648-3a76-2caac9721150-c9721135"
                        }
                        tag={"div"}
                      >
                        <Image
                          className={`blog-image_large image-animated ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={feature2Image}
                          width={"auto"}
                        />
                      </Block>
                    </Link>
                    <Block
                      className={`item-wrapper margin-top_sm ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`component_card-meta-wrapper ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {slotCardMeta2}
                      </Block>
                      <Heading
                        className={`headline-sm padding-top_xs padding-bottom_sm ${_activeStyleVariant}`}
                        tag={feature2HeadlineTag}
                      >
                        {feature2Headline}
                      </Heading>
                      <Block
                        className={`card_item-wrapper flex-strech ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {slotLink2}
                        {slotViewsLikes2}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </BlockContainer>
        </BlockContainer>
      ) : null}
    </div>
  );
}
