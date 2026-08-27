"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Span from "../webflow_modules/Basic/components/Span";

export function DiverseExpOverviewHorizontal({ variant = "Base" }) {
  const _styleVariantMap = {
    Base: "",
    "Layout 2": "w-variant-0fecbc4a-3a3b-3465-d0c6-6d0447c8e67e",
    "Layout 3": "w-variant-133baa5e-a3ca-6f04-5fc1-d65cadad0c05",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`diverse-exp_overview-wrapper ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`diverse-exp_headline-wrapper ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Heading
            className={`diverse-exp_headline ${_activeStyleVariant}`}
            tag={"h2"}
          >
            {"Diverse Experience Across All Types of Hotels"}
          </Heading>
        </Block>
        <Block
          className={`grid-col2 is-diverse-exp ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`diverse-exp_stats-headline-wrapper ${_activeStyleVariant}`}
            id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fad-65ce0fa8"}
            tag={"div"}
          >
            <Heading
              className={`stat-metric_headline ${_activeStyleVariant}`}
              tag={"h1"}
            >
              {"Markets with unique business outliners"}
            </Heading>
          </Block>
          <Block
            className={`diverse-exp-stat_1-wrapper ${_activeStyleVariant}`}
            id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fb0-65ce0fa8"}
            tag={"div"}
          >
            <Block
              className={`diverse-exp_metric-wrapper ${_activeStyleVariant}`}
              id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fb1-65ce0fa8"}
              tag={"div"}
            >
              <Block
                className={`stat-metric ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"50"}
                <Span className={`is-percent-sign ${_activeStyleVariant}`}>
                  {"%"}
                </Span>
              </Block>
              <Block
                className={`stat-metric_primary ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"market driven"}
                <br />
              </Block>
              <Block
                className={`stat-metric_secondary ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"wholesale mix"}
                <br />
              </Block>
            </Block>
            <Block
              className={`diverse-exp-stat_1 ${_activeStyleVariant}`}
              id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fbc-65ce0fa8"}
              tag={"div"}
            >
              <Block
                className={`diverse-exp_stat-wrapper s-stacked ${_activeStyleVariant}`}
                id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fbd-65ce0fa8"}
                tag={"div"}
              >
                <Heading
                  className={`feature-types_stat is-stacked ${_activeStyleVariant}`}
                  tag={"h1"}
                >
                  {"03"}
                </Heading>
                <Block
                  className={`feature-types_label is-horizontal ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"HOTELS"}
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            className={`diverse-exp-stat-2-wrapper ${_activeStyleVariant}`}
            id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fc2-65ce0fa8"}
            tag={"div"}
          >
            <Block
              className={`diverse-exp_stat-wrapper s-stacked ${_activeStyleVariant}`}
              id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fc4-65ce0fa8"}
              tag={"div"}
            >
              <Heading
                className={`feature-types_stat is-stacked ${_activeStyleVariant}`}
                tag={"h1"}
              >
                {"10"}
              </Heading>
              <Block
                className={`feature-types_label is-horizontal ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"HOTELS"}
              </Block>
            </Block>
            <Block
              className={`diverse-exp_metric-wrapper ${_activeStyleVariant}`}
              id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fc9-65ce0fa8"}
              tag={"div"}
            >
              <Block
                className={`stat-metric ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"90"}
                <Span className={`is-percent-sign ${_activeStyleVariant}`}>
                  {"%"}
                </Span>
              </Block>
              <Block
                className={`stat-metric_primary is-line-height_1 ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"Annual"}
                <br />
              </Block>
              <Block
                className={`stat-metric_secondary ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"OCCUPANY"}
                <br />
              </Block>
            </Block>
          </Block>
          <Block
            className={`diverse-exp-stat_3-wrapper ${_activeStyleVariant}`}
            id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fd4-65ce0fa8"}
            tag={"div"}
          >
            <Block
              className={`diverse-exp_metric-wrapper ${_activeStyleVariant}`}
              id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fd6-65ce0fa8"}
              tag={"div"}
            >
              <Block
                className={`stat-metric ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"60"}
                <Span className={`is-percent-sign ${_activeStyleVariant}`}>
                  {"%"}
                </Span>
              </Block>
              <Block
                className={`stat-metric_primary ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"BUSINESS MIX"}
                <br />
              </Block>
              <Block
                className={`stat-metric_secondary ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"corporate"}
                <br />
              </Block>
            </Block>
            <Block
              className={`diverse-exp_stat-wrapper s-stacked ${_activeStyleVariant}`}
              id={"w-node-_65d4a179-904b-403f-96bb-77a065ce0fe3-65ce0fa8"}
              tag={"div"}
            >
              <Heading
                className={`feature-types_stat is-stacked ${_activeStyleVariant}`}
                tag={"h1"}
              >
                {"06"}
              </Heading>
              <Block
                className={`feature-types_label is-horizontal ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"HOTELS"}
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
