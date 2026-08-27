"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function FaqAccordion({
  anwserText = "No, it’s designed to be user-friendly for all, with an easy interface and support team to help with any issues.",
  borderVariants = "Base",
  questionText = "Need technical skills to use RiseVerse?",
}) {
  const _styleVariantMap = {
    Base: "",
    "No Borders": "w-variant-ad717698-c3c9-98ba-a06d-8fcf4c4200e5",
    Borders: "w-variant-afdb6480-479c-15cd-81de-b72dffc2efd7",
    Underline: "w-variant-60219bcb-a5c0-4a26-1439-2a88de1e80c9",
  };

  const _activeStyleVariant = _styleVariantMap[borderVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`faq_main-wrapper ${_activeStyleVariant}`}
        id={"w-node-e3671285-255d-d78b-950e-9204b4918ebf-b4918ebf"}
        tag={"div"}
      >
        <Block
          className={`faq14_accordion-wrapper ${_activeStyleVariant}`}
          fs-accordion-element={"group"}
          fs-accordion-initial={"none"}
          fs-accordion-single={"true"}
          tag={"div"}
        >
          <Block
            className={`faq14_accordion-item ${_activeStyleVariant}`}
            fs-accordion-element={"accordion"}
            fs-accordion-initial={"none"}
            tag={"div"}
          >
            <Block
              aria-controls={"accordion-1-content-1"}
              aria-expanded={"false"}
              className={`faq14_accordion-header ${_activeStyleVariant}`}
              fs-accordion-element={"trigger"}
              // @ts-ignore - User-defined custom attribute(s)
              role={"button"}
              tabIndex={0}
              tag={"div"}
            >
              <Heading
                className={`headline-xxs is-faq-headline ${_activeStyleVariant}`}
                tag={"h3"}
              >
                {questionText}
              </Heading>
              <HtmlEmbed
                className={`icon-1x1-small ${_activeStyleVariant}`}
                content={
                  '<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.984 50.868l26.055 36.418c.47.66 1.23 1.04 2.04 1.05 0 0 0 0 0 0 .81-.01 1.57-.4 2.04-1.06l25.88-36.42c.54-.77.61-1.78.18-2.62 -.43-.84-1.3-1.37-2.24-1.37H63.74l0-32.709c0-1.39-1.125-2.52-2.52-2.52l-22.55 0c-1.39-.01-2.52 1.12-2.52 2.516v32.705H23.973c-.94 0-1.81.53-2.24 1.36 -.44.83-.36 1.84.19 2.61Z"/></svg>'
                }
                fs-accordion-element={"arrow"}
              />
            </Block>
            <Block
              aria-labelledby={"accordion-1-header-1"}
              className={`faq14_accordion-content ${_activeStyleVariant}`}
              fs-accordion-element={"content"}
              tag={"div"}
            >
              <Block
                className={`faq14_accordion-body ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Paragraph
                  className={`text-size-small text-color-secondary ${_activeStyleVariant}`}
                >
                  {anwserText}
                </Paragraph>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
