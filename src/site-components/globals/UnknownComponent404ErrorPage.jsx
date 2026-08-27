"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import BackgroundVideoWrapper from "../webflow_modules/BackgroundVideo/components/BackgroundVideoWrapper";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Section from "../webflow_modules/Layout/components/Section";

export function UnknownComponent404ErrorPage({
  buttonSlot,
  errorMessageErrorMessageTextLine1 = "Monkey.....",
  errorMessageErrorMessageTextLine2 = "I've got some bad news pal.",
  errorMessageErrorMessageTextLine3 = "I think we're lost.",
  headlineSlot,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={"_404_component-base"}
        grid={{
          type: "section",
        }}
        tag={"section"}
      >
        <HtmlEmbed
          className={"embed_grained-css"}
          content={
            "<!-- START Grained Effect -->\n<script>\n  // Run after Webflow has finished initializing\n  var Webflow = window.Webflow || [];\n  Webflow.push(function () {\n    var options = {\n      animate: true,\n      patternWidth: 200,\n      patternHeight: 200,\n      grainOpacity: 0.2,\n      grainDensity: 1,\n      grainWidth: 2,\n      grainHeight: 2\n    };\n    grained('#grain-overlay', options);\n  });\n</script>\n<!-- END Grained Effect -->"
          }
        />
        <Section
          className={"component_wrapper"}
          grid={{
            type: "section",
          }}
          tag={"section"}
        >
          <HtmlEmbed
            className={"embed_grained-script"}
            content={
              '<!-- START Grained Effect -->\n\n<script defer src="https://cdn.jsdelivr.net/gh/REVREBEL/rebel-style@main/scripts/grained.js" type="text/javascript" referrerpolicy="no-referrer" crossorigin="anonymous">\n</script>\n\n<style> \n#grain-overlay{ \n    pointer-events: none; \n} \n</style>\n\n<!-- END Grained Effect -->'
            }
          />
          <BlockContainer
            className={"component_container container-_vh-vw-full"}
            grid={{
              type: "container",
            }}
            id={"fixed-root"}
            tag={"div"}
          >
            <Block
              className={
                "error-content-padding-vertical error-content-padding-m"
              }
              tag={"div"}
            >
              <Block
                className={"error_container"}
                id={"w-node-fa337e7f-3a49-2fd2-65f6-c8c0687aba18-687aba12"}
                tag={"div"}
              >
                <Block
                  id={"w-node-b57bd7e3-ba52-1699-fadd-7387928131f6-687aba12"}
                  tag={"div"}
                >
                  <Block
                    className={"error_headline-wrapper"}
                    id={"w-node-fa337e7f-3a49-2fd2-65f6-c8c0687aba19-687aba12"}
                    tag={"div"}
                  >
                    {headlineSlot}
                  </Block>
                  <Block
                    className={"error_text-wrapper"}
                    id={"w-node-fa337e7f-3a49-2fd2-65f6-c8c0687aba1e-687aba12"}
                    tag={"div"}
                  >
                    <Block
                      className={"error_text-highligher"}
                      id={
                        "w-node-fa337e7f-3a49-2fd2-65f6-c8c0687aba1f-687aba12"
                      }
                      tag={"div"}
                    >
                      {errorMessageErrorMessageTextLine1}
                    </Block>
                    <Block
                      className={"error_text-highligher negative-offset"}
                      tag={"div"}
                    >
                      {errorMessageErrorMessageTextLine2}
                    </Block>
                    <Block
                      className={"error_text-highligher positive-offset"}
                      tag={"div"}
                    >
                      {errorMessageErrorMessageTextLine3}
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={"_404_return-home-link"}
                  id={"w-node-fa337e7f-3a49-2fd2-65f6-c8c0687aba25-687aba12"}
                  tag={"div"}
                />
                <Block
                  className={"div-block-752"}
                  id={"w-node-fa337e7f-3a49-2fd2-65f6-c8c0687aba26-687aba12"}
                  tag={"div"}
                >
                  {buttonSlot}
                </Block>
              </Block>
            </Block>
            <Block
              className={"error_grained-overlay"}
              id={"grain-overlay"}
              tag={"div"}
            />
            <Block className={"error_gradient-overlay"} tag={"div"} />
            <BackgroundVideoWrapper
              autoPlay={true}
              className={"video-spaceman"}
              data-beta-bgvideo-upgrade={false}
              id={"video-spaceman"}
              loop={true}
              posterImage={
                "https://cdn.prod.website-files.com/68729bbbf00ae2d98c02980d%2F68b6b9087289c6f4abbef4bd_space-monkey-poster-00001.jpg"
              }
              sources={[
                "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee0b_space-monkey-transcode.webm",
                "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee0b_space-monkey-transcode.mp4",
              ]}
              tag={"div"}
            />
          </BlockContainer>
        </Section>
      </Section>
    </div>
  );
}
