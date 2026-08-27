"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function InnerComponentReadMore({
  text = "Read post",
  variant = "Underline",
}) {
  const _styleVariantMap = {
    Underline: "",
    "Underline [ON-HOVER]": "w-variant-202646fc-6ca8-0e88-050d-c144913ba3f6",
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
        className={`component_read-more_underline ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`read-more_link is-underline ${_activeStyleVariant}`}
          tag={"div"}
        >
          {text}
        </Block>
      </Block>
    </div>
  );
}
