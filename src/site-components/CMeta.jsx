"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { CCategoryLablel } from "./cardMeta/CCategoryLablel";
import { CDateLabel } from "./cardMeta/CDateLabel";
import { VLayout } from "./variant/VLayout";

export function CMeta({
  category1CategoryLink = {
    href: "#",
  },

  category1CategorySlug = "",
  category1CategoryText = "Category Name",
  category1CategoryVisibility = true,

  category2CategoryLink = {
    href: "#",
  },

  category2CategorySlug = "",
  category2CategoryText = "Category Name",
  category2CategoryVisibility = true,
  clickable = true,
  color = "primary",
  colorMode = "normal",
  colorStyle = true,
  dateDateLabelFontColorVariants = "Color 2",
  dateDateLabelTextSizeVariants = "Regular Label",
  dateDateText = "Month YYYY",
  dateDateVisibility = true,
  fontSize = "tiny",
  fontWeight = "regular",
  layout = "row",
  optionsPaddingLeftAlignment = true,
  textAlign = "left",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"component_card-meta"}
        id={"w-node-a5d198fd-55ec-1562-0829-5615f58852e6-f58852e6"}
        tag={"div"}
      >
        <VLayout layout={layout} layoutSlotVisibility={false} />
        <Block
          className={"v-layout"}
          data-layout={
            layout === "Playlist"
              ? "row"
              : layout === "row-compact"
              ? "row-compact"
              : layout === "column"
              ? "column"
              : layout === "column-compact"
              ? "column-compact"
              : "row"
          }
          tag={"div"}
        >
          <Block
            className={"v-layout is-child"}
            data-layout-child={
              layout === "Playlist"
                ? "row"
                : layout === "row-compact"
                ? "row-compact"
                : layout === "column"
                ? "column"
                : layout === "column-compact"
                ? "column-compact"
                : "row"
            }
            tag={"div"}
          >
            <CCategoryLablel
              labelCategoryText={category1CategoryText}
              labelCategoryVisibility={category1CategoryVisibility}
              labelColor={color}
              labelColorMode={colorMode}
              labelColorStyle={colorStyle}
              labelFontSize={fontSize}
              labelFontWeight={fontWeight}
              labelLink={category1CategoryLink}
              labelPaddingLeft={optionsPaddingLeftAlignment}
              labelTextAlign={textAlign}
            />
            <CCategoryLablel
              labelCategoryText={category2CategoryText}
              labelCategoryVisibility={category2CategoryVisibility}
              labelColor={color}
              labelColorMode={colorMode}
              labelColorStyle={colorStyle}
              labelFontSize={fontSize}
              labelFontWeight={fontWeight}
              labelLink={category2CategoryLink}
              labelPaddingLeft={optionsPaddingLeftAlignment}
              labelTextAlign={textAlign}
            />
          </Block>
          <Block className={"v-layout ignore-child"} tag={"div"}>
            <CDateLabel
              labelCategoryVisibility={dateDateVisibility}
              labelColor={color}
              labelColorMode={
                colorMode === "normal"
                  ? "inverse"
                  : colorMode === "inverse"
                  ? "normal"
                  : "normal"
              }
              labelColorStyle={colorStyle ? true : !colorStyle ? true : false}
              labelDateText={dateDateText}
              labelFontSize={
                fontSize === "jumbo"
                  ? "jumbo"
                  : fontSize === "xxl"
                  ? "xxl"
                  : fontSize === "xl"
                  ? "xl"
                  : fontSize === "lg"
                  ? "lg"
                  : fontSize === "md"
                  ? "md"
                  : fontSize === "base"
                  ? "base"
                  : fontSize === "sm"
                  ? "xs"
                  : fontSize === "xs"
                  ? "xs"
                  : fontSize === "xxs"
                  ? "xxs"
                  : fontSize === "tiny"
                  ? "tiny"
                  : "base"
              }
              labelFontWeight={"semibold"}
              labelPaddingLeft={optionsPaddingLeftAlignment}
            />
          </Block>
        </Block>
      </Block>
    </div>
  );
}
