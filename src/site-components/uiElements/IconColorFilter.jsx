"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";

export function IconColorFilter({
  icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf063_computer-graph.svg",
  iconAltText = "__wf_reserved_inherit",
  iconColor = "Primary",
  iconVisibility = true,
}) {
  const _styleVariantMap = {
    Primary: "",
    "Color 1": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3027",
    "Color 2": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3028",
    "Color 3": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3029",
    "Color 4": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302a",
    "Color 5": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302b",
    "Color 6": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302c",
    "Color 7": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302d",
    "Color 8": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302e",
    "Color 9": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad302f",
    Light: "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3030",
    Dark: "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3031",
    "Grey 1": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3032",
    "Grey 2": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3033",
    "Grey 3": "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3034",
    None: "w-variant-17c9352e-8718-4a08-5ddf-f4f3dbad3035",
  };

  const _activeStyleVariant = _styleVariantMap[iconColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_icon-filter-color ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block className={`c-icon_size ${_activeStyleVariant}`} tag={"div"}>
          {iconVisibility ? (
            <Image
              className={`icon-variant ${_activeStyleVariant}`}
              height={"auto"}
              loading={"lazy"}
              src={icon}
              width={"auto"}
            />
          ) : null}
        </Block>
      </Block>
    </div>
  );
}
