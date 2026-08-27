"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import RichText from "../webflow_modules/Basic/components/RichText";

export function TermsOfService({
  contentRichTextContent = "",
  settingsSectionId = "",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        className={"color-variants is-lg padding_large"}
        grid={{
          type: "container",
        }}
        id={settingsSectionId}
        tag={"div"}
      >
        <RichText className={"rich-text_policies"} tag={"div"}>
          {contentRichTextContent}
        </RichText>
      </BlockContainer>
    </div>
  );
}
