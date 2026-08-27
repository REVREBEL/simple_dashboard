"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Link from "./webflow_modules/Basic/components/Link";
import Span from "./webflow_modules/Basic/components/Span";

export function CRebelExplore({
  exploreButtonLink = {
    href: "#",
  },
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <Block className={"c-button-rebel is-explore"} tag={"div"}>
          <Block className={"is-primary"} tag={"div"}>
            <Link
              button={true}
              className={"button text-size-xl is-btn-rebel"}
              options={exploreButtonLink}
            >
              <Span className={"text-color-teal is-faded"}>{"e"}</Span>
              <Span className={"text-color-cyan is-faded"}>{"x"}</Span>
              <Span className={"text-color-aqua is-faded"}>{"p"}</Span>
              <Span className={"text-color-powder is-faded"}>{"o"}</Span>
              <Span className={"text-color-yellow"}>{"r"}</Span>
              <Span className={"text-color-orange"}>{"e"}</Span>
              <Span className={"text-color-red"}> </Span>
              <Span className={"text-color-red"}>{"n"}</Span>
              <Span className={"text-color-purple"}>{"o"}</Span>
              <Span className={"text-color-frost is-faded"}>{"w"}</Span>
            </Link>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
