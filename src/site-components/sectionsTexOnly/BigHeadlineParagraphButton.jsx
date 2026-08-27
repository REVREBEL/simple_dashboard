"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Section from "../webflow_modules/Layout/components/Section";

export function BigHeadlineParagraphButton({
  buttonButtonColor = "Color 2",
  buttonButtonSize = "Base",
  headlineHeadlineSizeVariant = null,
  optionsBackgroundTextColorVariant = null,
  settingsBlockId = "",
  settingsBlockVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsBlockVisibility ? (
        <Block
          className={"component_headlne-4-subsections"}
          id={settingsBlockId}
          tag={"div"}
        >
          <Section
            className={"component_wrapper"}
            grid={{
              type: "section",
            }}
            tag={"section"}
          >
            <BlockContainer
              className={"component_container padding-responsive-md"}
              grid={{
                type: "container",
              }}
              id={"fixed-root"}
              tag={"div"}
            />
          </Section>
        </Block>
      ) : null}
    </div>
  );
}
