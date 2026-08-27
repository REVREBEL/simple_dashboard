"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";
import { CLabel } from "../CLabel";

export function CDateLabel({
  labelCategoryVisibility = true,
  labelColor = "primary",
  labelColorMode = "normal",
  labelColorStyle = true,
  labelDateText = "MM/DD/YYYY",
  labelFontSize = "tiny",
  labelFontWeight = "regular",

  labelLink = {
    href: "#",
  },

  labelPaddingLeft = true,
  labelTextAlign = "left",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {labelCategoryVisibility ? (
        <Block tag={"div"}>
          <Block className={"component_category-label"} tag={"div"}>
            <Link block={"inline"} button={false} options={labelLink}>
              <CLabel
                dataAttributesDataFontWeight={
                  labelFontWeight === "bold"
                    ? ["bold"]
                    : labelFontWeight === "semibold"
                    ? ["semnibold"]
                    : ["bold"]
                }
                dataAttributesDataPaddingLeft={
                  labelPaddingLeft
                    ? "enable"
                    : !labelPaddingLeft
                    ? "remove"
                    : "enable"
                }
                labelColor={labelColor}
                labelColorMode={labelColorMode}
                labelColorStyle={labelColorStyle}
                labelDateLabel={labelDateText}
                labelDateVisibility={labelCategoryVisibility}
                labelFontSize={
                  labelFontSize === "jumbo"
                    ? "jumbo"
                    : labelFontSize === "xxl"
                    ? "xxl"
                    : labelFontSize === "xl"
                    ? "xl"
                    : labelFontSize === "lg"
                    ? "lg"
                    : labelFontSize === "md"
                    ? "md"
                    : labelFontSize === "base"
                    ? "base"
                    : labelFontSize === "sm"
                    ? "sm"
                    : labelFontSize === "xs"
                    ? "xs"
                    : labelFontSize === "xxs"
                    ? "xxs"
                    : labelFontSize === "tiny"
                    ? "tiny"
                    : "base"
                }
                labelFontWeight={labelFontWeight}
                labelTextAlign={labelTextAlign}
              />
            </Link>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
