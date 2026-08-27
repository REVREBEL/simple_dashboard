"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import { Button } from "../buttons/Button";
import { applyPredicate } from "../webflow_modules/Conditions/helpers/applyPredicate";
import { conditional } from "../webflow_modules/Conditionals/helpers/conditional";
import { every } from "../webflow_modules/Boolean/helpers/every";
import { styleVariantIsAny } from "../webflow_modules/Basic/helpers/styleVariantIsAny";

export function CtaCenterBlockSection({
  buttonButtonText = "[Learn More]",
  buttonButtonVisibility = true,
  buttonColor = null,
  buttonTypeSize = null,
  headlineEyebrowText = "Elevate your revenue strategy",
  headlineHeadlineTag = "h2",
  headlineHeadlineText = (
    <>
      {"Unlock hotel growth. "}
      <br />
      {"Outpace the market."}
    </>
  ),
  sectionStyleColorTheme = "Light",
  settingsSectionId = "",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-dc4cf2b7-5da2-b735-5c2b-ba51600c0957",
    Accent: "w-variant-531be97c-b11a-b3cf-719a-8ecf51549c05",
    Rebel: "w-variant-71c04bb1-78e5-84e2-0f18-542eccd3bdd0",
  };

  const _activeStyleVariant = _styleVariantMap[sectionStyleColorTheme];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        className={`compoent-wrapper bg-color-white ${_activeStyleVariant}`}
        grid={{
          type: "container",
        }}
        id={settingsSectionId}
        tag={"div"}
      >
        <BlockContainer
          className={`component_container margin-block_lg ${_activeStyleVariant}`}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          <Block
            className={`component_padding padding-md ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`flex-vertical is-x-center ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`text-align_center w-node-cb0ca54e-aede-deda-9b9c-2ee6e67f53bf-e67f53bc ${_activeStyleVariant}`}
                id={"w-node-c97331e5-b40b-d28b-31f8-3745165011d6-165011d3"}
                tag={"div"}
              >
                <Block className={`eyebrow ${_activeStyleVariant}`} tag={"div"}>
                  {headlineEyebrowText}
                </Block>
                {conditional({
                  rules: [
                    {
                      condition: every([
                        applyPredicate(sectionStyleColorTheme)(
                          styleVariantIsAny(["Rebel"])
                        ),
                      ]),
                      output: false,
                    },
                    {
                      condition: every([
                        applyPredicate(sectionStyleColorTheme)(
                          styleVariantIsAny(["Playlist", "Dark", "Accent"])
                        ),
                      ]),

                      output: true,
                    },
                  ],

                  fallback: false,
                }) ? (
                  <Heading
                    className={`headline-md component-headline-color scroll-in-view_sticky-fade-in font-weight-bold is-text-align-center ${_activeStyleVariant}`}
                    fb-text-highlight={"true"}
                    fb-text-highlight-color-end={"#163666"}
                    fb-text-highlight-colors={"white"}
                    fb-text-highlight-duplicates={"4"}
                    fb-text-highlight-speed={"3"}
                    fb-text-highlight-type={"11"}
                    tag={headlineHeadlineTag}
                  >
                    {headlineHeadlineText}
                  </Heading>
                ) : null}
                {conditional({
                  rules: [
                    {
                      condition: every([
                        applyPredicate(sectionStyleColorTheme)(
                          styleVariantIsAny(["Playlist", "Dark", "Accent"])
                        ),
                      ]),

                      output: false,
                    },
                    {
                      condition: every([
                        applyPredicate(sectionStyleColorTheme)(
                          styleVariantIsAny(["Rebel"])
                        ),
                      ]),
                      output: true,
                    },
                  ],

                  fallback: true,
                }) ? (
                  <Heading
                    className={`rebel_headline-medium is-rebel-gradient scroll-in-view_sticky-fade-in is-hidden ${_activeStyleVariant}`}
                    fb-text-highlight={"true"}
                    fb-text-highlight-speed={"1.5"}
                    fb-text-highlight-type={"2"}
                    tag={headlineHeadlineTag}
                  >
                    {headlineHeadlineText}
                  </Heading>
                ) : null}
                <Block
                  className={`button-group is-align-center margin-top_xs ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Button
                    buttonColor={"Color Primary"}
                    buttonSize={"Large"}
                    buttonText={buttonButtonText}
                    buttonVisibility={buttonButtonVisibility}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </BlockContainer>
      </BlockContainer>
    </div>
  );
}
