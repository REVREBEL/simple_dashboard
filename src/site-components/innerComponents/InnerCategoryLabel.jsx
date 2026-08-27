"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import DOM from "../webflow_modules/Builtin/components/DOM";
import Link from "../webflow_modules/Basic/components/Link";

export function InnerCategoryLabel({
  categoryInverseColor = "",

  categoryLink = {
    href: "#",
  },

  categoryPrimaryColor = "",
  categorySlug = "",
  categoryText = "Category Name",
  valuePadding = "",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"g-container component_category-label"}
        data-padding={valuePadding}
        tag={"div"}
      >
        <Link
          block={"inline"}
          button={false}
          className={"component_link-block"}
          options={categoryLink}
        >
          <DOM
            category-background-color={categoryPrimaryColor}
            category-inverse-color={categoryInverseColor}
            category-primary-color={categoryPrimaryColor}
            category-slug={categorySlug}
            category-text-color={categoryInverseColor}
            className={"card-meta_category output"}
            tag={"wfCategoryTag"}
          >
            <Block className={"card-meta_category-text"} tag={"div"}>
              {categoryText}
            </Block>
          </DOM>
        </Link>
      </Block>
    </div>
  );
}
