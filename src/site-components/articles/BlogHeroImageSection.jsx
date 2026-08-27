"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Image from "../webflow_modules/Basic/components/Image";
import RichText from "../webflow_modules/Basic/components/RichText";
import Section from "../webflow_modules/Layout/components/Section";

export function BlogHeroImageSection({
  image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebab_revrebel_wide-32-interior-photograph-of-a-boutique-hotel-ki__83446.avif",
  layoutVariant = "Base",
  photoCredit = "",
  photoCreditVisibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "Full Width": "w-variant-69f474d1-0c6b-ff2e-3b4b-f7166d89aa91",
  };

  const _activeStyleVariant = _styleVariantMap[layoutVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={`g-container ${_activeStyleVariant}`}
        grid={{
          type: "section",
        }}
        tag={"section"}
      >
        <Section
          className={`global-component_wrapper blog-hero_wrapper ${_activeStyleVariant}`}
          grid={{
            type: "section",
          }}
          tag={"section"}
        >
          {photoCreditVisibility ? (
            <Block
              className={`article_photo-credit-wrapper ${_activeStyleVariant}`}
              tag={"div"}
            >
              <RichText
                className={`article_photo-credit padding-inline_responsive-xl ${_activeStyleVariant}`}
                tag={"div"}
              >
                {photoCredit}
              </RichText>
            </Block>
          ) : null}
          <BlockContainer
            className={`component_container blog-hero_container ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            id={"fixed-root"}
            tag={"div"}
          >
            <Block
              className={`component_padding blog-hero_padding ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`hero_content-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
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
                      src={image}
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
          </BlockContainer>
        </Section>
      </Section>
    </div>
  );
}
