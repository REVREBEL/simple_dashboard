"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";

export function FullCardSider({
  contentCardHeadline = "Heading",
  contentCardHeadlineTag = "h2",
  contentImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb7_Placeholder%20Image.png",
  contentImageAltText = "__wf_reserved_inherit",
  linkColor = null,
  metaBlogMetaId = "",
  optionsLabelFontSize = null,
  originalPublishDateDateTextColor = null,
  viewsLikesColorVariants = null,
  viewsLikesSizeVariant = null,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        // @ts-ignore - User-defined custom attribute(s)
        BlogNo={metaBlogMetaId}
        className={"full-card-slider"}
        grid={{
          type: "container",
        }}
        tag={"div"}
      >
        <Block className={"full-card-slider_wrapper"} tag={"div"}>
          <Block className={"full-card-slider_card"} tag={"div"}>
            <Block className={"full-card-slider_card-body"} tag={"div"}>
              <Block className={"full-card-slider_info-wrapper"} tag={"div"}>
                <Block className={"full-card-slider_detals"} tag={"div"}>
                  <Block
                    className={"full-card-slider_headline-wrapper"}
                    tag={"div"}
                  >
                    <Heading
                      className={"full-card-slider_headline"}
                      tag={contentCardHeadlineTag}
                    >
                      {contentCardHeadline}
                    </Heading>
                  </Block>
                </Block>
              </Block>
              <Block className={"full-card-slider_image-wrapper"} tag={"div"}>
                <Image
                  className={"full-card-slider_image-cover"}
                  height={"auto"}
                  loading={"lazy"}
                  src={contentImage}
                  width={"auto"}
                />
              </Block>
            </Block>
          </Block>
        </Block>
      </BlockContainer>
    </div>
  );
}
