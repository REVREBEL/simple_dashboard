"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import RichText from "../webflow_modules/Basic/components/RichText";
import { applyPredicate } from "../webflow_modules/Conditions/helpers/applyPredicate";
import { conditional } from "../webflow_modules/Conditionals/helpers/conditional";
import { equals } from "../webflow_modules/Boolean/helpers/equals";
import { every } from "../webflow_modules/Boolean/helpers/every";

export function ContentSlide2Bottom({
  content1 = "",
  content2 = "",
  headlineCol1 = "Heading",
  headlineCol1Tag = "h4",
  headlineCol1Visibility = true,
  headlineCol2 = "Headline",
  headlineCol2Tag = "h1",
  headlineCol2Visibility = true,
  paragraphVIsibilityMobile = false,
  text = "More than meetings—momentum. We deliver the cadence and clarity your team needs to execute with confidence.",
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "1x": "w-variant-da58e390-1305-c68a-99e1-54f3586fb4a4",
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
        className={`strategy-card is-block-layout is-bottom ${_activeStyleVariant}`}
        id={"w-node-_8db0eb1a-324d-5557-c8c2-216ce94cd5fa-e94cd5fa"}
        tag={"div"}
      >
        <Block
          className={`padding_sm padding-block_xs padding_mobile-xs padding-top_none ${_activeStyleVariant}`}
          id={"w-node-_8db0eb1a-324d-5557-c8c2-216ce94cd5fb-e94cd5fa"}
          tag={"div"}
        >
          <Block
            className={`strategy-card_body is-layout-2 ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`strategy-card_section is-right is-layout-2 ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`strategy-card_section is-middle is-layout-2 ${conditional(
                  {
                    rules: [
                      {
                        condition: every([
                          applyPredicate(paragraphVIsibilityMobile)(
                            equals(false)
                          ),
                        ]),
                        output: "is-hidden_mobile",
                      },
                    ],

                    fallback: "",
                  }
                )} ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Paragraph
                  className={`paragraph-md text-wrap_balance-mobile ${_activeStyleVariant}`}
                >
                  {text}
                </Paragraph>
              </Block>
              <Block
                className={`strategy-card_section is-bottom is-layout-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`grid_2-col is-full-width ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    id={"w-node-_08f1a440-7a02-e171-f132-81f892950a8e-e94cd5fa"}
                    tag={"div"}
                  >
                    {headlineCol1Visibility ? (
                      <Heading
                        className={`headline-xxs padding-bottom_xxs ${_activeStyleVariant}`}
                        id={
                          "w-node-cb7bd453-c0f2-f796-5b64-2bc3157ee69c-e94cd5fa"
                        }
                        tag={headlineCol1Tag}
                      >
                        {headlineCol1}
                      </Heading>
                    ) : null}
                    <RichText
                      className={`rich-text_strategy-list ${_activeStyleVariant}`}
                      id={
                        "w-node-_8db0eb1a-324d-5557-c8c2-216ce94cd60f-e94cd5fa"
                      }
                      tag={"div"}
                    >
                      {content1}
                    </RichText>
                  </Block>
                  <Block tag={"div"}>
                    {headlineCol2Visibility ? (
                      <Heading
                        className={`headline-xxs padding-bottom_xxs ${_activeStyleVariant}`}
                        id={
                          "w-node-d0640cd7-152d-0668-e971-bd81d4a3c2f4-e94cd5fa"
                        }
                        tag={headlineCol2Tag}
                      >
                        {headlineCol2}
                      </Heading>
                    ) : null}
                    <RichText
                      className={`rich-text_strategy-list ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {content2}
                    </RichText>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
