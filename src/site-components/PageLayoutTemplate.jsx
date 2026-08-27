"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import BlockContainer from "./webflow_modules/Layout/components/BlockContainer";
import Section from "./webflow_modules/Layout/components/Section";

export function PageLayoutTemplate({ footerSlot, navBarSlot, pageNavSlot }) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"global_page-wrapper"} tag={"div"}>
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
          className={"global_fixed-root"}
          grid={{
            type: "container",
          }}
          id={"fixed-root"}
          tag={"div"}
        >
          <Block className={"page-nav_wrapper fixed-root_child"} tag={"div"}>
            {pageNavSlot}
          </Block>
        </BlockContainer>
        <BlockContainer
          className={"global_container fixed-root_child"}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          {navBarSlot}
          <BlockContainer
            className={"page_container"}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Section
              className={"page_padding"}
              grid={{
                type: "section",
              }}
              tag={"section"}
            >
              <Section
                grid={{
                  type: "section",
                }}
                tag={"section"}
              />
            </Section>
          </BlockContainer>
          {footerSlot}
        </BlockContainer>
      </Block>
    </div>
  );
}
