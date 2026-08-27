"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import { Button } from "../buttons/Button";

export function UnknownComponent6FeatureCardsWithButton({
  buttonButtonId = "",
  buttonButtonVisibility = true,
  buttonColor = null,
  buttonLabelText = "[ Get Started ] ",
  buttonTypeSize = null,
  card1HeadlineTag = "h3",
  card1HeadlineText = (
    <>
      {"Project roadmap "}
      {"&"}
      {" timeline"}
    </>
  ),
  card1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf095_notepad-with-notes.svg",
  card1IconAltText = "__wf_reserved_inherit",
  card1ParagraphText = "From kickoff to completion, we guide your team through every step of the CRS migration process, ensuring clarity, structure, and zero surprises.",
  card2HeadlineTag = "h3",
  card2HeadlineText = (
    <>
      {"Configuration "}
      {"&"}
      {" code updates"}
    </>
  ),
  card2Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf07f_gear.svg",
  card2IconAltText = "__wf_reserved_inherit",
  card2ParagraphText = (
    <>
      {
        "We modify existing setups, align with new standards, and prepare your system for a smooth transition"
      }
      {"—"}
      {"so you"}
      {"’"}
      {"re ready to sell from day one."}
    </>
  ),
  card3HeadlineTag = "h3",
  card3HeadlineText = (
    <>
      {"Property audit "}
      {"&"}
      {" updates"}
    </>
  ),
  card3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cef38_approval.svg",
  card3IconAltText = "__wf_reserved_inherit",
  card3ParagraphText = "Our team reviews all property details, updating information and integrating new services to keep your hotel competitive and compliant.",
  card4HeadlineTag = "h3",
  card4HeadlineText = "CRS fine-tuning",
  card4Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf075_flow-chart.svg",
  card4IconAltText = "__wf_reserved_inherit",
  card4ParagraphText = "We optimize descriptions, rates, and packages for every channel, ensuring your system is primed for performance and easy rate management.",
  card5HeadlineTag = "h3",
  card5HeadlineText = "System integration support",
  card5Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf088_graph.svg",
  card5IconAltText = "__wf_reserved_inherit",
  card5ParagraphText = "Seamlessly connect your CRS with PMS, BI, and other platforms, enabling smooth data flow and operational efficiency across your tech stack.",
  card6HeadlineTag = "h3",
  card6HeadlineText = "Sales collaboration",
  card6Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf101_upside.svg",
  card6IconAltText = "__wf_reserved_inherit",
  card6ParagraphText = "We work closely with your sales lead to confirm negotiated rates, manage GDS mapping, and ensure all pricing is accurate and up to date.",
  headlineEyebrowText = "Effortless CRS migration",
  headlineHeadlineTag = "h2",
  headlineHeadlineText = (
    <>
      {"Seamless transitions. "}
      <br />
      {"Optimized hotel systems."}
    </>
  ),
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={"component_size"}
          grid={{
            type: "section",
          }}
          id={settingsSectionId}
          tag={"section"}
        >
          <Block className={"color-variants is-lg"} tag={"div"}>
            <Block
              className={" headline-wrapper text-align_center"}
              tag={"div"}
            >
              <Block className={"eyebrow"} tag={"div"}>
                {headlineEyebrowText}
              </Block>
              <Heading
                className={
                  " headline-sm text-color-primary font-weight-bold text-align_center"
                }
                tag={headlineHeadlineTag}
              >
                {headlineHeadlineText}
              </Heading>
            </Block>
            <Grid className={"grid_3-col gap-sm padding_md padding-inline_xl"}>
              <Block className={"card is-color-light"} tag={"div"}>
                <Block
                  className={
                    "color-card_body card-body padding-sm flex_vertical is-x-center"
                  }
                  tag={"div"}
                >
                  <Block
                    className={
                      "icon is-lg margin-bottom_xs is-icon-color-primary"
                    }
                    tag={"div"}
                  >
                    <Image
                      height={"Auto"}
                      loading={"lazy"}
                      src={card1Icon}
                      width={"Auto"}
                    />
                  </Block>
                  <Heading
                    className={"headline-xxs"}
                    id={"w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed48a-110ed47d"}
                    tag={card1HeadlineTag}
                  >
                    {card1HeadlineText}
                  </Heading>
                  <Paragraph className={"paragraph-sm"}>
                    {card1ParagraphText}
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={"card is-color-light"}
                id={"w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed490-110ed47d"}
                tag={"div"}
              >
                <Block
                  className={
                    "color-card_body card-body padding-sm flex_vertical is-x-center"
                  }
                  tag={"div"}
                >
                  <Block
                    className={
                      "icon is-lg margin-bottom_xs is-icon-color-primary"
                    }
                    tag={"div"}
                  >
                    <Image
                      height={"Auto"}
                      loading={"lazy"}
                      src={card2Icon}
                      width={"Auto"}
                    />
                  </Block>
                  <Heading
                    className={
                      "headline-xxs w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed495-110ed47d"
                    }
                    id={"w-node-dd8b495c-cba3-0d39-1bec-72577eb2a5d3-31e3a69e"}
                    tag={card2HeadlineTag}
                  >
                    {card2HeadlineText}
                  </Heading>
                  <Paragraph className={"paragraph-sm"}>
                    {card2ParagraphText}
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={"card is-color-light"}
                id={"w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed49f-110ed47d"}
                tag={"div"}
              >
                <Block
                  className={
                    "color-card_body card-body padding-sm flex_vertical is-x-center"
                  }
                  tag={"div"}
                >
                  <Block className={"icon"} tag={"div"}>
                    <Image
                      height={"Auto"}
                      loading={"lazy"}
                      src={card3Icon}
                      width={"Auto"}
                    />
                  </Block>
                  <Heading
                    className={
                      "headline-xxs w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4a4-110ed47d"
                    }
                    id={"w-node-_7c7c286c-95bd-c381-2eaf-005a0cefcb38-31e3a69e"}
                    tag={card3HeadlineTag}
                  >
                    {card3HeadlineText}
                  </Heading>
                  <Paragraph className={"paragraph-sm"}>
                    {card3ParagraphText}
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={"card is-color-light"}
                id={"w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4aa-110ed47d"}
                tag={"div"}
              >
                <Block
                  className={
                    "color-card_body card-body padding-sm flex_vertical is-x-center"
                  }
                  tag={"div"}
                >
                  <Block
                    className={
                      "icon is-lg margin-bottom_xs is-icon-color-primary"
                    }
                    tag={"div"}
                  >
                    <Image
                      height={"Auto"}
                      loading={"lazy"}
                      src={card4Icon}
                      width={"Auto"}
                    />
                  </Block>
                  <Heading
                    className={
                      "headline-xxs w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4b3-110ed47d"
                    }
                    id={"w-node-d2fb584f-3db3-7104-4fbf-d1efd73877aa-31e3a69e"}
                    tag={card4HeadlineTag}
                  >
                    {card4HeadlineText}
                  </Heading>
                  <Paragraph className={"paragraph-sm"}>
                    {card4ParagraphText}
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={"card is-color-light"}
                id={"w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4b7-110ed47d"}
                tag={"div"}
              >
                <Block
                  className={
                    "color-card_body card-body padding-sm flex_vertical is-x-center"
                  }
                  tag={"div"}
                >
                  <Block
                    className={
                      "icon is-lg margin-bottom_xs is-icon-color-primary"
                    }
                    tag={"div"}
                  >
                    <Image
                      height={"Auto"}
                      loading={"lazy"}
                      src={card5Icon}
                      width={"Auto"}
                    />
                  </Block>
                  <Heading
                    className={
                      "headline-xxs w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4bc-110ed47d"
                    }
                    id={"w-node-b88adc3a-39eb-7abd-ff28-6fe1e0a03510-31e3a69e"}
                    tag={card5HeadlineTag}
                  >
                    {card5HeadlineText}
                  </Heading>
                  <Paragraph className={"paragraph-sm"}>
                    {card5ParagraphText}
                  </Paragraph>
                </Block>
              </Block>
              <Block
                className={"card is-color-light"}
                id={"w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4c0-110ed47d"}
                tag={"div"}
              >
                <Block
                  className={
                    "color-card_body card-body padding-sm flex_vertical is-x-center"
                  }
                  tag={"div"}
                >
                  <Block
                    className={
                      "icon is-lg margin-bottom_xs is-icon-color-primary"
                    }
                    tag={"div"}
                  >
                    <Image
                      height={"Auto"}
                      loading={"lazy"}
                      src={card6Icon}
                      width={"Auto"}
                    />
                  </Block>
                  <Heading
                    className={
                      "headline-xxs w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4c6-110ed47d"
                    }
                    id={"w-node-dd14fc15-3465-b1b9-691c-af30067aa0c1-31e3a69e"}
                    tag={card6HeadlineTag}
                  >
                    {card6HeadlineText}
                  </Heading>
                  <Paragraph className={"paragraph-sm"}>
                    {card6ParagraphText}
                  </Paragraph>
                </Block>
              </Block>
            </Grid>
            <Block
              className={"space-md"}
              id={"w-node-_8690bc06-24cf-f434-08be-297285c98ba3-110ed47d"}
              tag={"div"}
            />
            <Block
              className={
                "button-group is-align-center w-node-_5cf7ccc3-7a1e-999b-2141-da46110ed4ca-110ed47d"
              }
              id={"w-node-_1a189397-4910-1d5d-fe43-0e5231e3a70a-31e3a69e"}
              tag={"div"}
            >
              <Button
                buttonId={buttonButtonId}
                buttonText={buttonLabelText}
                buttonVisibility={buttonButtonVisibility}
              />
            </Block>
          </Block>
        </Section>
      ) : null}
    </div>
  );
}
