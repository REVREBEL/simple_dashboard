"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import List from "../webflow_modules/Basic/components/List";
import ListItem from "../webflow_modules/Basic/components/ListItem";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-69":{"id":"e-69","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-70"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":".headline-xs.margin-bottom_xs.margin-top_xs","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046},"e-1034":{"id":"e-1034","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1035"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c037fca7-a141-0c80-2fce-436ef8c5cd3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c037fca7-a141-0c80-2fce-436ef8c5cd3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774043803821},"e-1036":{"id":"e-1036","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-1037"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"54a0f7bf-992f-fa36-c7bc-c3bb1745e987","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"54a0f7bf-992f-fa36-c7bc-c3bb1745e987","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"LEFT","effectIn":true},"createdOn":1774043824610},"e-1038":{"id":"e-1038","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1039"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c037fca7-a141-0c80-2fce-436ef8c5cd42","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c037fca7-a141-0c80-2fce-436ef8c5cd42","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"BOTTOM","effectIn":true},"createdOn":1774043843023},"e-1040":{"id":"e-1040","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-1041"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c02a2a0b-4308-048e-d1a4-ba4e1b6b23e3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c02a2a0b-4308-048e-d1a4-ba4e1b6b23e3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1774043865696},"e-1042":{"id":"e-1042","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1043"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee595291fb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee595291fb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774043932060},"e-1044":{"id":"e-1044","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1045"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee595291fd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee595291fd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774043948608},"e-1046":{"id":"e-1046","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1047"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee595291ff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee595291ff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774043961128},"e-1048":{"id":"e-1048","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1049"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529201","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529201","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774043974610},"e-1050":{"id":"e-1050","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1051"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529203","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529203","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774043983946},"e-1052":{"id":"e-1052","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1053"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529205","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529205","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774043994172},"e-1054":{"id":"e-1054","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1055"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529207","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529207","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044003835},"e-1056":{"id":"e-1056","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1057"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529209","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee59529209","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044014465},"e-1058":{"id":"e-1058","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1059"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee5952920b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c93a1fdb-1c9c-2b2d-01ad-5fee5952920b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044023546}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainContentBlock6IconsStacked({
  featureBlockParagraph = "Most hotels tap into a fraction of their tech’s potential. We turn the other 60% into performance gains.— and start using it like your secret weapon.",
  featureBlockSlotLabel,
  imageBlockImage1 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cecb5_amadeus_circle.png",
  imageBlockImage2 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee55_SHR%20Group.svg",
  imageBlockImage3 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf292_Duetto%20RMS.svg",
  imageBlockImage4 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf27e_Olive%20AI.svg",
  imageBlockImage5 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf28c_IDeas%20RMS.svg",
  imageBlockImage6 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf28d_Trip%20Tease.svg",
  imageBlockImage7 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf28f_Lighthouse.svg",
  imageBlockImage8 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf291_Oracle%20Hospitality.svg",
  imageBlockImage9 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf293_Sabre%20Hospitality.svg",
  listItemListHeadlineLine1 = "MORE THAN SUPPORT.",
  listItemListHeadlineLine2 = " A STRATEGIC TECH ALLY.",
  listItemListItem1 = "Know how to make PMS/CRS/CRM tools actually talk to each other.",
  listItemListItem2 = "Translate complex setup into human-friendly language.",
  listItemListItem3 = "Help find for the best tools, for your environment, not just the ones everyone else uses.",
  listItemListParagraph = "We’re not just another consultant clicking through checklists. We’re yournerdy-but-socially-adept tech crew — the ones who:",
  mainSectionEyebrow = "Tech Fluency",
  mainSectionMainHeadlineLine1 = "MASTERS IN HOSPITALITY TECH.",
  mainSectionMainHeadlineLine2 = "We Speak it Fluently.",
  mainSectionSubheadlineText = (
    <>
      {
        "In a world of clunky systems and cookie-cutter rollouts, we brings clarity, fluency, and just the right amount of obsession to your hotel’s tech stack. We don’t just plug into platforms like Opera Cloud, SynXis, and iDeas — we master them, configure them, and train your team to make the most of them. "
      }
      <br />
      <br />
      {
        "Whether it’s a single-property deployment or a full chain rollout, we ensure everything runs smoother than your check-in queue at 3pm on a Friday."
      }
      <br />
      <br />
    </>
  ),
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={"component_wrapper"}
          grid={{
            type: "section",
          }}
          id={settingsSectionId}
          tag={"section"}
        >
          <Block
            className={"component_container text-color_primary"}
            tag={"div"}
          >
            <Section
              className={"component_wrapper"}
              grid={{
                type: "section",
              }}
              tag={"section"}
            >
              <Block className={"component_padding"} tag={"div"}>
                <BlockContainer
                  className={"component_container"}
                  grid={{
                    type: "container",
                  }}
                  id={"fixed-root"}
                  tag={"div"}
                >
                  <Block
                    className={"headline_slot flex-horizontal text-align_left"}
                    tag={"div"}
                  >
                    <Block className={"eyebrow text-color-2"} tag={"div"}>
                      {mainSectionEyebrow}
                    </Block>
                    <Heading
                      className={"headline-base"}
                      data-w-id={"c037fca7-a141-0c80-2fce-436ef8c5cd3a"}
                      tag={"h3"}
                    >
                      {mainSectionMainHeadlineLine1}
                    </Heading>
                    <Heading
                      className={"headline-lg"}
                      data-w-id={"54a0f7bf-992f-fa36-c7bc-c3bb1745e987"}
                      tag={"h1"}
                    >
                      {mainSectionMainHeadlineLine2}
                    </Heading>
                    <Paragraph
                      className={"paragraph-md padding-block_responsive-xs"}
                    >
                      {mainSectionSubheadlineText}
                    </Paragraph>
                  </Block>
                  <Block
                    className={"grid_2-col gap-md is-column-1-2"}
                    tag={"div"}
                  >
                    <Block
                      className={"headline-wrapper text-color-blue"}
                      id={
                        "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee595291ec-5b774142"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"grid_2-col gap-sm is-col-1-2 is-inverse"}
                        tag={"div"}
                      >
                        <Block
                          className={"column-left"}
                          id={
                            "w-node-c037fca7-a141-0c80-2fce-436ef8c5cd44-5b774142"
                          }
                          tag={"div"}
                        >
                          <Block tag={"div"}>
                            <Heading
                              className={"headline-xs"}
                              data-w-id={"c037fca7-a141-0c80-2fce-436ef8c5cd42"}
                              id={
                                "w-node-c037fca7-a141-0c80-2fce-436ef8c5cd42-5b774142"
                              }
                              tag={"h3"}
                            >
                              {listItemListHeadlineLine1}
                            </Heading>
                            <Heading
                              className={"headline-xs"}
                              data-w-id={"c02a2a0b-4308-048e-d1a4-ba4e1b6b23e3"}
                              id={
                                "w-node-c02a2a0b-4308-048e-d1a4-ba4e1b6b23e3-5b774142"
                              }
                              tag={"h3"}
                            >
                              {listItemListHeadlineLine2}
                            </Heading>
                            <Paragraph
                              className={"paragraph_variant text-size-rg"}
                            >
                              {listItemListParagraph}
                            </Paragraph>
                            <List
                              className={"list-bullet-points"}
                              tag={"ul"}
                              unstyled={false}
                            >
                              <ListItem className={"bullet-pont_text-size"}>
                                {listItemListItem1}
                              </ListItem>
                              <ListItem className={"bullet-pont_text-size"}>
                                {listItemListItem2}
                              </ListItem>
                              <ListItem className={"bullet-pont_text-size"}>
                                {listItemListItem3}
                              </ListItem>
                            </List>
                          </Block>
                        </Block>
                        <Block className={"column-right"} tag={"div"}>
                          <Block tag={"div"}>
                            <Block
                              className={
                                "flex-vertical flex-align-left slot_label tag-wrapper"
                              }
                              tag={"div"}
                            >
                              {featureBlockSlotLabel}
                              <Paragraph
                                className={
                                  "paragraph_variant text-size-regular"
                                }
                              >
                                {featureBlockParagraph}
                              </Paragraph>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Block
                      className={"partners_logo-wrapper is-gap-1-5"}
                      id={
                        "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee595291f9-5b774142"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee595291fa-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee595291fb"}
                          height={"auto"}
                          id={
                            "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee595291fb-5b774142"
                          }
                          loading={"lazy"}
                          src={imageBlockImage1}
                          width={"Auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee595291fc-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee595291fd"}
                          height={"auto"}
                          loading={"lazy"}
                          src={imageBlockImage2}
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee595291fe-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee595291ff"}
                          height={"auto"}
                          id={
                            "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee595291ff-5b774142"
                          }
                          loading={"lazy"}
                          src={imageBlockImage3}
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529200-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee59529201"}
                          height={"auto"}
                          loading={"lazy"}
                          src={imageBlockImage4}
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529202-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee59529203"}
                          height={"auto"}
                          id={
                            "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529203-5b774142"
                          }
                          loading={"lazy"}
                          src={imageBlockImage5}
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529204-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee59529205"}
                          height={"auto"}
                          id={
                            "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529205-5b774142"
                          }
                          loading={"lazy"}
                          src={imageBlockImage6}
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529206-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee59529207"}
                          height={"auto"}
                          id={
                            "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529207-5b774142"
                          }
                          loading={"lazy"}
                          src={imageBlockImage7}
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee59529208-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee59529209"}
                          height={"auto"}
                          loading={"lazy"}
                          src={imageBlockImage8}
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee5952920a-5b774142"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          data-w-id={"c93a1fdb-1c9c-2b2d-01ad-5fee5952920b"}
                          height={"auto"}
                          id={
                            "w-node-c93a1fdb-1c9c-2b2d-01ad-5fee5952920b-5b774142"
                          }
                          loading={"lazy"}
                          src={imageBlockImage9}
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </BlockContainer>
              </Block>
            </Section>
          </Block>
        </Section>
      ) : null}
    </div>
  );
}
