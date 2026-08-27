"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";

export function SingleImageGallery({
  image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf1e3_Eclectic%20Gallery%20Wall%20Featuring%20a%20Curated%20Mix%20of%20Vibrant%20Modern%20Art%2C%20Desert%20inspired%20Abstracts.avif",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Full Width": "w-variant-9f608267-5ed5-8754-04b5-8910a5a78ea2",
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
        className={`container-xlarge gallery04_component-size ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`gallery_component ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`gallery_content-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`gallery01_image-wrapper ${_activeStyleVariant}`}
              id={"w-node-_0d04d409-e171-e9e6-e13a-3dbd7f9de0a7-7f9de0a4"}
              tag={"div"}
            >
              <Image
                alt={""}
                className={`gallery04_image ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={image}
                width={"auto"}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
