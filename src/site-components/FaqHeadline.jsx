"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function FaqHeadline({
  text1 = "Informed answers. Real hotel expertise.",
  text2 = "Explore detailed, expert-driven answers to the most pressing questions about maximizing revenue, optimizing operations, and elevating performance for independent hotels. Our insights are tailored for owners and managers seeking clarity and results.",
  title = "Independent hotel FAQs, decoded fast",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"headline_container"}
        id={"w-node-_09d23222-b886-3772-e50c-e302faad86f2-faad86f2"}
        tag={"div"}
      >
        <Block className={"eyebrow"} tag={"div"}>
          {text1}
        </Block>
        <Heading className={"headline-base"} tag={"h2"}>
          {title}
        </Heading>
        <Paragraph className={"paragraph-md"}>{text2}</Paragraph>
      </Block>
    </div>
  );
}
