"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Link from "./webflow_modules/Basic/components/Link";
import Span from "./webflow_modules/Basic/components/Span";

export function CRebelDiscover({
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
              <Span className={"text-color-teal is-faded"}>{"D"}</Span>
              <Span className={"text-color-cyan"}>{"I"}</Span>
              <Span className={"text-color-aqua"}>{"S"}</Span>
              <Span className={"text-color-powder"}>{"C"}</Span>
              <Span className={"text-color-yellow"}>{"O"}</Span>
              <Span className={"text-color-orange"}>{"V"}</Span>
              <Span className={"text-color-red"}>{"E"}</Span>
              <Span className={"text-color-purple is-faded"}>{"R"}</Span>
            </Link>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
