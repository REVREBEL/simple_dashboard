"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Link from "./webflow_modules/Basic/components/Link";
import Span from "./webflow_modules/Basic/components/Span";

export function CRebelReadMore({
  discoverButtonDiscoverButton = true,

  link = {
    href: "#",
    target: "_blank",
  },
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {discoverButtonDiscoverButton ? (
        <Block className={"c-button-rebel is-discover"} tag={"div"}>
          <Block className={"is-primary"} tag={"div"}>
            <Link
              button={true}
              className={"button text-size-xl is-btn-rebel"}
              options={link}
            >
              <Span className={"text-color-teal is-faded"}>{"R"}</Span>
              <Span className={"text-color-cyan is-faded"}>{"E"}</Span>
              <Span className={"text-color-aqua"}>{"A"}</Span>
              <Span className={"text-color-powder"}>{"D"}</Span>{" "}
              <Span className={"text-color-yellow is-faded"}>{"M"}</Span>
              <Span className={"text-color-orange"}>{"o"}</Span>
              <Span className={"text-color-red"}>{"re"}</Span>{" "}
              <Span className={"text-color-purple is-faded"}>{"A"}</Span>
              <Span className={"text-color-purple is-faded"}>{"r"}</Span>
              <Span className={"text-color-frost is-frost-400"}>{"ti"}</Span>
              <Span className={"text-color-powder"}>{"c"}</Span>
              <Span className={"text-color-aqua"}>{"l"}</Span>
              <Span className={"text-color-cyan is-faded"}>{"e"}</Span>
              <Span className={"text-color-teal is-faded"}>{"s"}</Span>
            </Link>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
