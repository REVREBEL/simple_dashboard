"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Section from "../webflow_modules/Layout/components/Section";

export function GlobalPageBaseUnlink({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        className={"global_page-wrapper"}
        grid={{
          type: "container",
        }}
        tag={"div"}
      >
        <BlockContainer
          className={"global_fixed-root"}
          grid={{
            type: "container",
          }}
          id={"fixed-root"}
          tag={"div"}
        >
          <Block className={"page-nav_wrapper fixed-root_child"} tag={"div"} />
        </BlockContainer>
        <BlockContainer
          className={"global_container"}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          <Block tag={"div"} />
          <BlockContainer
            className={"global_page-padding"}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Section
              className={"global_colors"}
              grid={{
                type: "section",
              }}
              tag={"section"}
            >
              <Section
                className={"page_padding padding_md"}
                grid={{
                  type: "section",
                }}
                tag={"section"}
              />
            </Section>
          </BlockContainer>
          <Block tag={"div"} />
        </BlockContainer>
      </BlockContainer>
    </div>
  );
}
