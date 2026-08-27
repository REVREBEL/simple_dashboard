"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function ContentSlide2Top({
  slotHeadline,
  slotLabel,
  slotLabel2,
  tagIcon2IconIconSizeVariants = "Extra Small",
  tagIcon2TagColor = "Color 8",
  tagIcon2TagTagBackgroundClickable = "Solid",
  tagIcon2TagTagSize = "Regular",
  tagIconIconIconSizeVariants = "Extra Small",
  tagIconTagColor = "Color 2",
  tagIconTagTagBackgroundClickable = "Solid",
  tagIconTagTagSize = "Regular",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "1x": "w-variant-dc4d8593-1843-1521-ad0e-139b5e548647",
    "0x": "w-variant-53802475-9ae5-5ceb-63d2-a3560ae3166b",
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
        className={`strategy-card is-block-layout is-top ${_activeStyleVariant}`}
        id={"w-node-_825df1a2-633a-7595-4c6e-ab1846485232-46485232"}
        tag={"div"}
      >
        <Block
          className={`padding_sm padding_mobile-xs full-width full-height padding-bottom_none ${_activeStyleVariant}`}
          id={"w-node-_825df1a2-633a-7595-4c6e-ab1846485233-46485232"}
          tag={"div"}
        >
          <Block
            className={`strategy-card_body is-layout-2 ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`strategy-card_section is-top is-layout-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`top-content-wraper is-layout-1 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`headline-wrapper flex-align_left margin-block_none is-layout-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {slotHeadline}
                </Block>
              </Block>
              <Block
                className={`top-content-wraper is-layout-1 flex-horizontal ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`tags-group is-layout-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`label-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {slotLabel}
                  </Block>
                  <Block
                    className={`label-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {slotLabel2}
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
