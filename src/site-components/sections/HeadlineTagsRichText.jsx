"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import RichText from "../webflow_modules/Basic/components/RichText";
import Section from "../webflow_modules/Layout/components/Section";

export function HeadlineTagsRichText({
  contentEyebrowText = "Key Focus Areas",
  contentHeadlineText = "Synchronize. Optimize. Outperform.",
  contentRichText = "",
  contentTag1 = "Revenue Management",
  contentTag2 = "Distribution & Marketing",
  contentTag3 = "Branding & Social",
  optionsColor = "Light",
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-cc07536a-d4e1-fc43-3880-a535d65f42d3",
    "Brand Color 1": "w-variant-cc07536a-d4e1-fc43-3880-a535d65f42d5",
    "Brand Color 2": "w-variant-2df0d243-031f-5659-3fb6-c2ae5f1f71b6",
    "Brand Color 3": "w-variant-da0bb3b5-d09f-fc9d-9e9b-738f1b5a9920",
    "Brand Color 4": "w-variant-e998a94f-cedb-10a7-335e-77add9d0bdfa",
    "Brand Color 5": "w-variant-a6978cfe-6919-d8fc-0a99-3299272f4592",
    "Brand Color 6": "w-variant-0d5b588e-7c12-2739-f9c6-473e53da1748",
    "Brand Color 7": "w-variant-1ef11999-5bbc-13bd-31e3-de036a6a5d12",
    "Brand Color 8": "w-variant-dab9224d-5485-481b-5915-db3537a67037",
    "Brand Color 1 Inverse": "w-variant-b7e12ccb-83b8-2368-3035-8a48a4312cdc",
    "Brand Color 2 Inverse": "w-variant-5281c810-9687-5a4c-3a25-120ee9b5dc24",
    "Brand Color 3 Inverse": "w-variant-b7596e44-34e1-7345-a2f6-dc84402d809d",
    "Brand Color 4 Inverse": "w-variant-9cd261dc-1129-2c49-1a75-86b411f34de4",
    "Brand Color 5 Inverse": "w-variant-b8a08129-3494-bd74-1616-913269c5e066",
    "Brand Color 6 Inverse": "w-variant-17850d3e-3ece-b07c-28f3-ac4151e8a945",
    "Brand Color 7 Inverse": "w-variant-81152c9d-e13c-3f9e-1bc8-200183595179",
    "Brand Color 8 Inverse": "w-variant-0d8ecb15-4b8c-c65c-9dd9-257150b31230",
  };

  const _activeStyleVariant = _styleVariantMap[optionsColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={`component_size text-color-primary ${_activeStyleVariant}`}
          id={settingsSectionId}
          tag={"section"}
        >
          <BlockContainer
            className={`component_wrapper padding-block_md ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <BlockContainer
              className={`component_container margin-block_md ${_activeStyleVariant}`}
              grid={{
                type: "container",
              }}
              tag={"div"}
            >
              <Block
                className={`component_padding padding-md ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Grid
                  className={`grid_2-col gap-medium ${_activeStyleVariant}`}
                >
                  <Block
                    className={`w-node-cc07536a-d4e1-fc43-3880-a535d65f42ba-d65f429f ${_activeStyleVariant}`}
                    id={"w-node-_69eef483-595b-b8a4-c55f-fae117023768-fac197f7"}
                    tag={"div"}
                  >
                    <Block
                      className={`eyebrow margin-bottom_sm ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {contentEyebrowText}
                    </Block>
                    <Block
                      className={`flex_vertical is-x-left gap-xxs ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`tag_group ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`tag-clear ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          {contentTag1}
                        </Block>
                      </Block>
                      <Block
                        className={`tag_group ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`tag-clear ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          {contentTag2}
                        </Block>
                      </Block>
                      <Block
                        className={`tag_group ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        <Block
                          className={`tag-clear ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          {contentTag3}
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                  <Block
                    className={`w-node-cc07536a-d4e1-fc43-3880-a535d65f42c7-d65f429f ${_activeStyleVariant}`}
                    id={"w-node-_026bb609-41ff-e8dc-7098-9278fac19805-fac197f7"}
                    tag={"div"}
                  >
                    <Heading
                      className={`headline-base font-weight-bold margin-bottom_sm margin-top-md ${_activeStyleVariant}`}
                      tag={"h2"}
                    >
                      {contentHeadlineText}
                    </Heading>
                    <RichText
                      className={`paragraph_large ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {contentRichText}
                    </RichText>
                  </Block>
                </Grid>
              </Block>
            </BlockContainer>
          </BlockContainer>
        </Section>
      ) : null}
    </div>
  );
}
