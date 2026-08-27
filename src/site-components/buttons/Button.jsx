"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Section from "../webflow_modules/Layout/components/Section";
import { ButtonVariant } from "../variant/ButtonVariant";
import { VButtonColor } from "../variants/VButtonColor";

export function Button({
  buttonColor = "Color Primary",
  buttonId = "",

  buttonLink = {
    href: "#",
  },

  buttonSize = "Base",
  buttonText = "[ Icon Button ] ",
  buttonVisibility = true,
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColorVariants = "Primary",
  iconIconImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf2d5_generic.svg",
  iconIconSizeVariants = "Extra Small",
  iconIconVisibility = false,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {buttonVisibility ? (
        <Block
          className={"component_headlne-4-subsections"}
          id={buttonId}
          tag={"div"}
        >
          <Section
            className={"component_wrapper component_button"}
            grid={{
              type: "section",
            }}
            tag={"section"}
          >
            <BlockContainer
              className={"component_container component_button-margin"}
              grid={{
                type: "container",
              }}
              tag={"div"}
            >
              <VButtonColor
                optionsButtonColorVariants={buttonColor}
                slotButtonColor={
                  <ButtonVariant
                    buttonButtonSizeVariants={buttonSize}
                    buttonButtonText={buttonText}
                    buttonId={buttonId}
                    buttonLink={buttonLink}
                    buttonVisibility={buttonVisibility}
                    iconIconAltText={iconIconAltText}
                    iconIconColorVariants={iconIconColorVariants}
                    iconIconImage={iconIconImage}
                    iconIconSizeVariants={iconIconSizeVariants}
                    iconIconVisibility={iconIconVisibility}
                  />
                }
              />
            </BlockContainer>
          </Section>
        </Block>
      ) : null}
    </div>
  );
}
