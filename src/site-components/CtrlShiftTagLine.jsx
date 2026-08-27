"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import BlockContainer from "./webflow_modules/Layout/components/BlockContainer";
import HFlex from "./webflow_modules/Layout/components/HFlex";
import Image from "./webflow_modules/Basic/components/Image";

export function CtrlShiftTagLine({
  image = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf161_CTRL_Logo-Blue.png",
  text = (
    <>
      {"Take "}
      {" and "}
      {"Your Revenue Story"}
    </>
  ),
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        grid={{
          type: "container",
        }}
        tag={"div"}
      >
        <HFlex className={"flex-block"} tag={"div"}>
          <Block className={"blog_logo-header"} tag={"div"}>
            <Image
              alt={""}
              className={"blog_logo"}
              height={"auto"}
              loading={"lazy"}
              src={image}
              width={"125"}
            />
            <Block className={"blog_headline-wrapper"} tag={"div"}>
              <Block className={"ctrl-shift-text-block"} tag={"div"}>
                {text}
              </Block>
            </Block>
          </Block>
        </HFlex>
      </BlockContainer>
    </div>
  );
}
