"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import { Button } from "../buttons/Button";

export function Banner({
  bannerBannerText = "An estimated 1 in 4 hotels lose business from incorrect CRSSetup. Get a distribution health check to ensure your rate loading and connectivity are on point. ",
  iconIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf107_Lightening.svg",
  iconVisibility = true,
  variant = "Light",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-68e939d3-e060-073d-38e8-7c0737894a70",
    White: "w-variant-1c2d47e4-9a52-0759-609b-5276fa969597",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`component_wrapper bg-color-4 ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`component_container ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`component_padding padding-sm max-width_medium margin-horizontal_auto color-card_body ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`banner_component ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`banner_content-wrapper text-align_center_mobile-l ${_activeStyleVariant}`}
                tag={"div"}
              >
                {iconVisibility ? (
                  <Block
                    className={`banner-icon-wrapper is-icon-yellow ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={`icon-lightning is-icon-color-yellow ${_activeStyleVariant}`}
                      height={"auto"}
                      loading={"lazy"}
                      src={iconIcon}
                      width={"auto"}
                    />
                  </Block>
                ) : null}
                <Block
                  className={`banner-text-wrapper ${_activeStyleVariant}`}
                  id={"w-node-_630af99a-be94-b06f-fec3-d6dce3239d91-e3239d8b"}
                  tag={"div"}
                >
                  <Block
                    className={`banner_text ${_activeStyleVariant}`}
                    id={"w-node-_630af99a-be94-b06f-fec3-d6dce3239d92-e3239d8b"}
                    tag={"div"}
                  >
                    {bannerBannerText}
                  </Block>
                </Block>
              </Block>
              <Block
                className={`banner_button ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Button buttonText={"[Learn More]"} />
              </Block>
            </Block>
            <Block
              className={`container-lg ${_activeStyleVariant}`}
              tag={"div"}
            />
          </Block>
        </Block>
      </Block>
    </div>
  );
}
