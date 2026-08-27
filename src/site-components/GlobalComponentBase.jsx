"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Link from "./webflow_modules/Basic/components/Link";

export function GlobalComponentBase({
  link = {
    href: "#",
  },

  name = "This is some text inside of a div block.",
  variant = "Playlist",
}) {
  const _styleVariantMap = {
    Playlist: "",
    "Current Playlist": "w-variant-1ddbabb9-b530-9664-56f1-6c97502205a1",
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
        className={` global-component_base ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Link
          block={"inline"}
          button={false}
          className={`flex_horizontal-4 width_100pct on-hover ${_activeStyleVariant}`}
          options={link}
        >
          <Block
            className={`padding-block_xs padding-inline_sm categories-background_color ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`label_large-4 ${_activeStyleVariant}`}
              tag={"div"}
            >
              {name}
            </Block>
          </Block>
        </Link>
      </Block>
    </div>
  );
}
