"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Span from "../webflow_modules/Basic/components/Span";

export function DiverseExpOverviewVertical({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"diverse-exp_overview-wrapper text-color_primary"}
        tag={"div"}
      >
        <Block className={"diverse-exp_headline-wrapper"} tag={"div"}>
          <Heading className={"diverse-exp_headline"} tag={"h2"}>
            {"Diverse Experience Across All Types of Hotels"}
          </Heading>
        </Block>
        <Block className={"grid-col2 is-diverse-exp"} tag={"div"}>
          <Block
            className={"diverse-exp_stats-headline-wrapper"}
            id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c31-5c941c2c"}
            tag={"div"}
          >
            <Heading className={"headline-xxs"} tag={"h1"}>
              {"MARKETS with unqiue business outliners"}
            </Heading>
          </Block>
          <Block
            className={"diverse-exp-stat_1-wrapper"}
            id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c34-5c941c2c"}
            tag={"div"}
          >
            <Block
              className={"diverse-exp_metric-wrapper"}
              id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c35-5c941c2c"}
              tag={"div"}
            >
              <Block className={"stat-metric"} tag={"div"}>
                {"50"}
                <Span className={"is-percent-sign"}>{"%"}</Span>
              </Block>
              <Block className={"stat-metric_primary text-size-sm"} tag={"div"}>
                {"market driven"}
                <br />
              </Block>
              <Block
                className={"stat-metric_secondary text-size-xl"}
                tag={"div"}
              >
                {"wholesale mix"}
                <br />
              </Block>
            </Block>
            <Block
              className={"diverse-exp-stat_1"}
              id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c40-5c941c2c"}
              tag={"div"}
            >
              <Block
                className={"diverse-exp_stat-wrapper s-stacked"}
                id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c41-5c941c2c"}
                tag={"div"}
              >
                <Heading className={"feature-types_stat is-stacked"} tag={"h1"}>
                  {"03"}
                </Heading>
                <Block
                  className={"feature-types_label is-horizontal"}
                  tag={"div"}
                >
                  {"HOTELS"}
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            className={"diverse-exp-stat-2-wrapper"}
            id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c46-5c941c2c"}
            tag={"div"}
          >
            <Block
              className={"diverse-exp-stat_2"}
              id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c47-5c941c2c"}
              tag={"div"}
            >
              <Block
                className={"diverse-exp_stat-wrapper s-stacked"}
                id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c48-5c941c2c"}
                tag={"div"}
              >
                <Heading className={"feature-types_stat is-stacked"} tag={"h1"}>
                  {"10"}
                </Heading>
                <Block
                  className={"feature-types_label is-horizontal"}
                  tag={"div"}
                >
                  {"HOTELS"}
                </Block>
              </Block>
              <Block
                className={"diverse-exp_metric-wrapper"}
                id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c4d-5c941c2c"}
                tag={"div"}
              >
                <Block className={"stat-metric"} tag={"div"}>
                  {"90"}
                  <Span className={"is-percent-sign"}>{"%"}</Span>
                </Block>
                <Block
                  className={"stat-metric_primary is-line-height_1"}
                  tag={"div"}
                >
                  {"Annual"}
                  <br />
                </Block>
                <Block className={"stat-metric_secondary"} tag={"div"}>
                  {"OCCUPANY"}
                  <br />
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            className={"diverse-exp-stat_3-wrapper"}
            id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c58-5c941c2c"}
            tag={"div"}
          >
            <Block className={"diverse-exp-stat_3"} tag={"div"}>
              <Block
                className={"diverse-exp_metric-wrapper"}
                id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c5a-5c941c2c"}
                tag={"div"}
              >
                <Block className={"stat-metric"} tag={"div"}>
                  {"60"}
                  <Span className={"is-percent-sign"}>{"%"}</Span>
                </Block>
                <Block
                  className={"stat-metric_primary text-size-sm"}
                  tag={"div"}
                >
                  {"BUSINESS MIX"}
                  <br />
                </Block>
                <Block
                  className={"stat-metric_secondary text-size-sm"}
                  tag={"div"}
                >
                  {"NEGOTIATED "}
                  <br />
                  {"& CONSORTIA"}
                  <br />
                </Block>
              </Block>
              <Block
                className={"diverse-exp_stat-wrapper s-stacked"}
                id={"w-node-_0d67b43a-10af-1836-4f39-061f5c941c67-5c941c2c"}
                tag={"div"}
              >
                <Heading className={"feature-types_stat is-stacked"} tag={"h1"}>
                  {"06"}
                </Heading>
                <Block
                  className={"feature-types_label is-horizontal"}
                  tag={"div"}
                >
                  {"HOTELS"}
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
