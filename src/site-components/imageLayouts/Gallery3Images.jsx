"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import { applyPredicate } from "../webflow_modules/Conditions/helpers/applyPredicate";
import { conditional } from "../webflow_modules/Conditionals/helpers/conditional";
import { every } from "../webflow_modules/Boolean/helpers/every";
import { some } from "../webflow_modules/Boolean/helpers/some";
import { styleVariantIsAny } from "../webflow_modules/Basic/helpers/styleVariantIsAny";

export function Gallery3Images({
  image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf1e3_Eclectic%20Gallery%20Wall%20Featuring%20a%20Curated%20Mix%20of%20Vibrant%20Modern%20Art%2C%20Desert%20inspired%20Abstracts.avif",
  image2 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf272_Lobby%20Front%20Desk.avif",
  image3 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf1c9_Assorted%20Donuts%20with%20Drinks%20%26%20Welcome%20Note.avif",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Full Width": "w-variant-198897e9-0b86-8fcc-9b47-85480196b816",
    "Single Image": "w-variant-e59d4e07-3a95-5b8d-f4e8-120636996b13",
    "Two Images": "w-variant-7c919628-9c78-7364-12f7-7c98a1af8892",
    "Full Height": "w-variant-1df534ab-a015-9a0a-e938-9368c63cf9ab",
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
              className={`gallery04_image-wrapper is-image-1 ${_activeStyleVariant}`}
              id={"w-node-_2549412e-241f-8c54-4878-da70de59b818-de59b815"}
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
            <Block
              className={`gallery04_image-wrapper is-image-2 ${_activeStyleVariant}`}
              id={"w-node-_2549412e-241f-8c54-4878-da70de59b81a-de59b815"}
              tag={"div"}
            >
              <Image
                alt={""}
                className={`gallery04_image aspect-ratio-widescreen ${_activeStyleVariant}`}
                height={"auto"}
                loading={"lazy"}
                src={image2}
                width={"auto"}
              />
            </Block>
            {conditional({
              rules: [
                {
                  condition: every([
                    applyPredicate(variant)(styleVariantIsAny(["Two Images"])),
                  ]),
                  output: false,
                },
                {
                  condition: some([
                    applyPredicate(variant)(styleVariantIsAny(["Playlist"])),
                  ]),
                  output: true,
                },
                {
                  condition: every([
                    applyPredicate(variant)(styleVariantIsAny(["Full Width"])),
                  ]),
                  output: true,
                },
              ],

              fallback: false,
            }) ? (
              <Block
                className={`gallery04_image-wrapper is-image-3 ${_activeStyleVariant}`}
                id={"w-node-_2549412e-241f-8c54-4878-da70de59b81c-de59b815"}
                tag={"div"}
              >
                <Image
                  alt={""}
                  className={`gallery04_image aspect-ratio-widescreen ${_activeStyleVariant}`}
                  height={"auto"}
                  loading={"lazy"}
                  src={image3}
                  width={"auto"}
                />
              </Block>
            ) : null}
          </Block>
        </Block>
      </Block>
    </div>
  );
}
