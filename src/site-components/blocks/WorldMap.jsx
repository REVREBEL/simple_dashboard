"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Section from "../webflow_modules/Layout/components/Section";

export function WorldMap({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={"map-section"}
        grid={{
          type: "section",
        }}
        tag={"section"}
      >
        <Block className={"map-wrapper"} tag={"div"}>
          <Image
            alt={""}
            className={"map-image"}
            height={"auto"}
            loading={"lazy"}
            src={
              "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf078_6258c28184a95d27b918608a_Group%20587.png"
            }
            width={"auto"}
          />
          <Block className={"card"} tag={"div"} />
          <Link
            block={"inline"}
            button={false}
            className={
              "card is-color-9 flex_vertical is-map-card is-los-angeles"
            }
            options={{
              href: "#",
            }}
          >
            <Block className={"place-image-contain"} tag={"div"}>
              <Block
                className={"place-text label text-color-bright-white"}
                tag={"div"}
              >
                {"WA"}
              </Block>
              <Image
                alt={""}
                className={"place-image"}
                height={"Auto"}
                loading={"lazy"}
                src={
                  "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf004_2.avif"
                }
                width={"135"}
              />
            </Block>
            <Block className={"map-location label"} tag={"div"}>
              {"Seattle, WA"}
            </Block>
          </Link>
          <Link
            block={"inline"}
            button={false}
            className={"card is-color-9 flex_vertical is-map-card is-seattle"}
            options={{
              href: "#",
            }}
          >
            <Block className={"place-image-contain"} tag={"div"}>
              <Image
                alt={""}
                className={"place-image"}
                height={"Auto"}
                loading={"lazy"}
                src={
                  "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf00e_LA25.avif"
                }
                width={"135"}
              />
              <Block
                className={
                  "place-text label text-color-bright-white add-text-shawdow"
                }
                tag={"div"}
              >
                {"LA"}
              </Block>
            </Block>
            <Block className={"map-location label"} tag={"div"}>
              {"Los Angeles, CA"}
            </Block>
          </Link>
        </Block>
      </Section>
    </div>
  );
}
