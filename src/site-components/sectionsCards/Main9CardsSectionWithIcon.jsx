"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Container from "../webflow_modules/Layout/components/Container";
import Heading from "../webflow_modules/Basic/components/Heading";
import Icon from "../webflow_modules/Icon/components/Icon";
import List from "../webflow_modules/Basic/components/List";
import ListItem from "../webflow_modules/Basic/components/ListItem";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import SliderArrow from "../webflow_modules/Slider/components/SliderArrow";
import SliderMask from "../webflow_modules/Slider/components/SliderMask";
import SliderNav from "../webflow_modules/Slider/components/SliderNav";
import SliderSlide from "../webflow_modules/Slider/components/SliderSlide";
import SliderWrapper from "../webflow_modules/Slider/components/SliderWrapper";
import Span from "../webflow_modules/Basic/components/Span";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Main9CardsSectionWithIcon({
  card1Card1Icon,
  card1Card1Link,
  card1CardParagraphText = "Anticipate the market and capture demand before your competitors do. We identify high- and low-demand periods, then deploy proactive strategies to ensure you’re positioned to win. From targeted promotions to creative packageswe help you generate demand that drives measurable results.",
  card1CardVisibility = true,
  card2Card2Icon,
  card2Card2Link,
  card2CardHeadlineText = "Analytics & Benchmarking",
  card2CardParagraphText = (
    <>
      {
        "Our approach combines performance benchmarking with expert analysis. From STR market share results to Demand360 insights, channel performance, segmentation, booking pace, and cancellation trends, we track every key metric. "
      }
      <br />
      <br />
      {
        "Custom KPI dashboards allow us to measure the impact of our strategies and share clear, actionable results with you."
      }
    </>
  ),
  card3Card3Icon,
  card3Card3Link,
  card3CardHeadlineText = (
    <>
      {"Proactive Strategy "}
      <br />
      {"in Action"}
    </>
  ),
  card3CardParagraphText = (
    <>
      {
        "Revenue strategy only matters if it’s executed well. We provide hands-on guidance for pricing, group displacement analysis, and booking pace monitoring — ensuring your hotel reacts swiftly to market changes. "
      }
      <br />
      <br />
      {
        "By translating real-time data into clear actions, we help your team maximize revenue across every booking window."
      }
    </>
  ),
  card4Card4Icon,
  card4Card4Link,
  card4CardHeadlineText = "Group Pricing + Analysis",
  card4CardParagraphText = (
    <>
      {
        "Working alongside the sales team, we evaluate each group opportunity and provide tailored pricing recommendations that maximize profitability. "
      }
      <br />
      <br />
      {
        "By considering factors such as total room revenue potential, ancillary spend, length of stay, day of the week, and seasonal demand patterns, we ensure every decision strikes the right balance between winning the business and protecting high-value transient revenue."
      }
    </>
  ),
  card5Card5Icon,
  card5Card5Link,
  card5CardHeadlineText = (
    <>
      {"Weekly Strategy "}
      <br />
      {"Meetings"}
    </>
  ),
  card5CardParagraphText = (
    <>
      {
        "Keep your team aligned and ready to act with structured touchpoints and transparent reporting. We prepare all revenue meeting materials in advance, conduct weekly strategy calls, and provide clear summary reports that document results and action items. "
      }
      <br />
      <br />
      {
        "With daily performance monitoring and consistent alignment, your team can make informed decisions quickly and stay ahead of shifting market conditions."
      }
    </>
  ),
  card6Card6Icon,
  card6Card6Link,
  card6CardHeadlineText = (
    <>
      {"Channel Partner "}
      <br />
      {"Engagement"}
    </>
  ),
  card6CardParagraphText = (
    <>
      {
        "We maximize the value of your distribution partnerships by going beyond simple rate loading. Our team conducts ongoing audits of your OTA content to ensure your hotel’s best assets are always showcased — from imagery and descriptions to amenities and policies. "
      }
      <br />
      <br />
      {
        "Through on-going optimization, we help your hotel gain greater visibility, improve ranking, and shift bookings toward the most profitable channels."
      }
    </>
  ),
  card7Card7Icon,
  card7Card7Link,
  card7CardHeadlineText = (
    <>
      {"Call Center "}
      <br />
      {"Optimization"}
    </>
  ),
  card7CardParagraphText = (
    <>
      {
        "Your call center should be more than just a reservations line — it’s a revenue channel. "
      }
      <br />
      <br />
      {
        "We evaluate performance, coach teams, and implement strategies to improve conversion, lower distribution costs, and elevate the guest booking experience."
      }
    </>
  ),
  card8Card8Icon,
  card8Card8Link,
  card8CardHeadlineText = (
    <>
      {"Connectivity "}
      <br />
      {"& Rate loading"}
    </>
  ),
  card8CardParagraphText = (
    <>
      {
        "We handle the behind-the-scenes system work that powers your revenue strategy. "
      }
      <br />
      <br />
      {
        "From loading rate changes and promotions to setting up corporate accounts and managing connectivity requests, we ensure your pricing and offers are executed seamlessly across all channels."
      }
    </>
  ),
  card9Card9Icon,
  card9Card9Link,
  card9CardHeadlineText = (
    <>
      {"Planning "}
      <br />
      {"& Forecasting"}
    </>
  ),
  card9CardParagraphText = (
    <>
      {
        "Gain confidence in planning with a detailed 90-day outlook that goes beyond surface-level projections. "
      }
      <br />
      <br />
      {
        "Our segment-level forecasts highlight future demand while analyzing rate opportunities, competitive benchmarks, and market-specific demand drivers. "
      }
    </>
  ),
  mainOverviewButton1,
  mainOverviewButton2,
  mainOverviewHeadline,
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
          className={
            "component_size padding_medium mobile-padding-bottom_medium mobile-margin-top_medium"
          }
          grid={{
            type: "section",
          }}
          id={settingsSectionId}
          tag={"div"}
        >
          <Container className={"color-variants component_color"} tag={"div"}>
            <Block
              className={"item-wrapper mobile-gap_xs"}
              id={"w-node-_9624d8a4-5f4a-0fda-a8a2-35199706a459-9706a457"}
              tag={"div"}
            >
              <Block
                className={
                  "item-wrapper mobile-margin-top_sm mobile-text-align-center margin-bottom_sm"
                }
                tag={"div"}
              >
                {mainOverviewHeadline}
                <Paragraph className={"paragraph"}>
                  {
                    "Whether you need to enhance your team with experienced revenue management professionals or are navigating a period of change, our team can step-in to maximize your revenue, ensuring no opportunity is missed. Our approach to managing property revenue starts with a thorough analysis of key areas to establish a baseline. From there, we identify opportunities to improve revenue-focused strategies and work closely with the hotel team to implement these initiatives and evaluate the outcomes."
                  }
                </Paragraph>
                <Block className={"button-group"} tag={"div"}>
                  {mainOverviewButton1}
                  {mainOverviewButton2}
                </Block>
              </Block>
            </Block>
            {card1CardVisibility ? (
              <Block className={"card-grid"} tag={"div"} />
            ) : null}
          </Container>
          <SliderWrapper
            animation={"slide"}
            autoMax={0}
            autoplay={false}
            className={"card-silder margin-block_md"}
            delay={4000}
            disableSwipe={false}
            duration={500}
            easing={"ease"}
            hideArrows={false}
            iconArrows={true}
            infinite={true}
            navInvert={false}
            navNumbers={true}
            navRound={false}
            navShadow={false}
            navSpacing={5}
          >
            <SliderMask className={"card-slider_mask"}>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-_9624d8a4-5f4a-0fda-a8a2-35199706a466-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-sm gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block
                      className={"strategy-card_section is-left"}
                      tag={"div"}
                    >
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-_0d6f744a-1a7f-bdf6-0a26-8bdea9689374-9706a457"
                        }
                        tag={"h3"}
                      >
                        <Span className={"text-span"}>{"Strategic"}</Span>
                        {" Revenue Support"}
                      </Heading>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card1Card1Link}
                      </Block>
                    </Block>
                    <Block
                      className={"strategy-card_section is-right"}
                      tag={"div"}
                    >
                      <Paragraph
                        className={
                          "paragraph margin-bottom_xs font-weight-regular"
                        }
                      >
                        {card1CardParagraphText}
                      </Paragraph>
                      <List className={"list-4"} tag={"ul"} unstyled={false}>
                        <ListItem>
                          {
                            "Optimal transient pricing recommendations — not guesswork, but grounded in market demand and forecast intelligence."
                          }
                        </ListItem>
                        <ListItem>
                          {
                            "Group rate guidance based on compression, displacement + segmentation goals."
                          }
                        </ListItem>
                        <ListItem>
                          {
                            "Real-time identification of high- and low-occupancy periods & tailored rate strategies to match"
                          }
                        </ListItem>
                        <ListItem>
                          {
                            "Demand alerts, market commentary and tailored rate action plans"
                          }
                        </ListItem>
                        <ListItem>
                          {
                            "Rate Fence & Inventory Strategy Support — advising on length of stay, day-of-week pricing, & minimum stays."
                          }
                        </ListItem>
                        <ListItem>
                          {
                            "Strategic adjustments informed by booking pace, market changes, and performance insights."
                          }
                        </ListItem>
                      </List>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-_734d42e9-ecea-2adc-0f49-6f5ba8921eaa-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-_734d42e9-ecea-2adc-0f49-6f5ba8921eae-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card2CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card2CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card2Card2Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-_8052a34b-adc5-2987-4fa1-2deb94a59988-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-_8052a34b-adc5-2987-4fa1-2deb94a5998c-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card3CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card3CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card3Card3Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-_8c50aca0-e277-3dcd-dab0-4ea7124eda9a-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-_8c50aca0-e277-3dcd-dab0-4ea7124eda9e-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card4CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card4CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card4Card4Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-b94e830c-cb1c-1988-7d14-3f3b673b7414-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-b94e830c-cb1c-1988-7d14-3f3b673b7418-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card5CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card5CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card5Card5Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-d34fb45b-e57a-e12e-44b3-9c252dbbdae7-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-d34fb45b-e57a-e12e-44b3-9c252dbbdaeb-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card6CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card6CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card6Card6Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-_56ab0ae0-3b8d-1729-34da-f871e2a41956-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-_56ab0ae0-3b8d-1729-34da-f871e2a4195a-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card7CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card7CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card7Card7Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-_990f2f27-a380-68d8-6927-eed4aaf5ab03-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-_990f2f27-a380-68d8-6927-eed4aaf5ab07-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card8CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card8CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card8Card8Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
              <SliderSlide className={"card-slider_padding"} tag={"div"}>
                <Block
                  className={
                    "card is-color-9 padding-responsive-sm flex-horizontal"
                  }
                  id={"w-node-_41a136ea-b66b-9fed-1bf0-b786d784e65b-9706a457"}
                  tag={"div"}
                >
                  <Block
                    className={
                      "card_body flex-horizontal padding-responsive-md gap-column_2rem color-card_body"
                    }
                    tag={"div"}
                  >
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Heading
                        className={"card-headline"}
                        id={
                          "w-node-_41a136ea-b66b-9fed-1bf0-b786d784e65f-9706a457"
                        }
                        tag={"h3"}
                      >
                        {card9CardHeadlineText}
                      </Heading>
                    </Block>
                    <Block className={"strategy-card_section"} tag={"div"}>
                      <Paragraph className={"paragraph margin_bottom-none"}>
                        {card9CardParagraphText}
                      </Paragraph>
                      <Block className={"link-wrapper"} tag={"div"}>
                        {card9Card9Link}
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </SliderSlide>
            </SliderMask>
            <SliderArrow dir={"left"}>
              <Icon
                widget={{
                  type: "icon",
                  icon: "slider-left",
                }}
              />
            </SliderArrow>
            <SliderArrow dir={"right"}>
              <Icon
                widget={{
                  type: "icon",
                  icon: "slider-right",
                }}
              />
            </SliderArrow>
            <SliderNav className={"card-sider_slide_nav"} />
          </SliderWrapper>
        </Section>
      ) : null}
    </div>
  );
}
