"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";

export function VFontWeight({ fontWeight = "regular", slotFontWeight }) {
  const _styleVariantMap = {
    black: "w-variant-a2d529f6-2535-81ce-cd2b-162c7789ecaf",
    bold: "w-variant-e4ae83da-7b93-10e1-efd5-346489523470",
    semibold: "w-variant-8159c5d0-0cd8-2f5e-dfd9-af953b53fd73",
    regular: "",
    medium: "w-variant-25edd40e-b08c-cfcc-0b9d-d263293ae041",
    light: "w-variant-f348d853-c3ba-479c-4aae-050dee44f9ab",
    "extra-light": "w-variant-568ba995-616d-b3a8-9057-5e1a846f20ce",
    thin: "w-variant-4267d96a-afa6-b85a-90f2-e673545af569",
  };

  const _activeStyleVariant = _styleVariantMap[fontWeight];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block
          className={`v-font-weight ${_activeStyleVariant}`}
          data-font-weight={
            fontWeight === "black"
              ? "black"
              : fontWeight === "bold"
              ? "bold"
              : fontWeight === "semibold"
              ? "semi-bold"
              : fontWeight === "medium"
              ? "medium"
              : fontWeight === "Playlist"
              ? "regular"
              : fontWeight === "light"
              ? "light"
              : fontWeight === "extra-light"
              ? "extra-light"
              : fontWeight === "thin"
              ? "thin"
              : "regular"
          }
          tag={"div"}
        >
          {slotFontWeight}
        </Block>
      </Block>
    </div>
  );
}
