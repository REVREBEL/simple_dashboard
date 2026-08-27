"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import List from "../webflow_modules/Basic/components/List";
import ListItem from "../webflow_modules/Basic/components/ListItem";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Span from "../webflow_modules/Basic/components/Span";
import TabsContent from "../webflow_modules/Tabs/components/TabsContent";
import TabsLink from "../webflow_modules/Tabs/components/TabsLink";
import TabsMenu from "../webflow_modules/Tabs/components/TabsMenu";
import TabsPane from "../webflow_modules/Tabs/components/TabsPane";
import TabsWrapper from "../webflow_modules/Tabs/components/TabsWrapper";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StrategyStackVerticalTabs({
  mainSectionHeadlineSlot,
  mainSectionMainParagraph = (
    <>
      {
        "You can’t out-discount the competition — you have to out think them. Revenue success comes from understanding demand, mastering distribution, and aligning every lever that moves profit."
      }
      <br />
      <br />
      {
        "That’s where we can help, a mix of system fluency,strategy precision & that little bit of rebellion that keeps your property ahead of the pack."
      }
    </>
  ),
  mainTabsTab1Text = "Smart Pricing",
  mainTabsTab2Text = "DemandSignals",
  mainTabsTab3Text = "Conversion Fuel",
  mainTabsTab4Text = (
    <>
      {"Offers Engine"}
      <br />
    </>
  ),
  settingsSectionId = "",
  settingsSectionVisibility = true,
  tab1Button1Slot,
  tab1Button2Slot,
  tab1HeadlineTag = "h3",
  tab1HeadlineText = "Dynamic Pricing & Rate Optimization",
  tab1Item1 = "Adaptive rate strategy across seasons, segments, and channels",
  tab1Item2 = "Real-time comp set and demand analysis",
  tab1Item3 = "OTA parity monitoring and margin optimization",
  tab1Item4 = "Custom rate plans for packages, corporate, and loyalty audiences",
  tab1Item5 = "Pricing moves tied to revenue lift, not “industry norms”",
  tab1SubHeadlineText = "We monitor rate parity, analyze market trends and develop dynamic pricing models that adapt faster than your comp set can copy them. Better rates. Sharper positioning. More profit. No spreadsheets left unturned.",
  tab1TagSlot,
  tab2Button1Slot,
  tab2Button2Slot,
  tab2HeadlineTag = "h3",
  tab2HeadlineText = (
    <>
      {"Demand Forecasting "}
      <br />
      {"& Inventory Control"}
    </>
  ),
  tab2Item1 = "30| 60 | 90-day rolling forecasts using live booking trends",
  tab2Item2 = "Inventory alignment across CRS, PMS, RMS",
  tab2Item3 = "Dynamic controls based on pace, pickup, and demand compression",
  tab2Item4 = "Group displacement analysis and ROI-based decisions",
  tab2Item5 = "Room-type strategy to drive upsell and ADR lift",
  tab2SubHeadlineText = "We use predictive analytics and booking curve data to optimize availability and shift inventory where it matters most. It’s half math, half magic. We call it “inventory feng shui.”",
  tab2TagSlot,
  tab3Button1Slot,
  tab3Button2Slot,
  tab3TagSlot,
  tab4Button1Slot,
  tab4Button2Slot,
  tab4HeadlineTag = "h3",
  tab4HeadlineText = (
    <>
      {"Promo Planning "}
      <br />
      {"& Offer Design"}
    </>
  ),
  tab4Item1 = "Package and offer design built around seasonality + behavior",
  tab4Item2 = "Promotional calendar planning with test-and-learn models",
  tab4Item3 = "Direct booking incentives backed by conversion data",
  tab4Item4 = "Segment-specific offers (e.g., bleisure, locals, families)",
  tab4Item5 = "Real-time performance tracking by promo, rate code, and channel",
  tab4SubHeadlineText = "We monitor rate parity, analyze market trends and develop dynamic pricing models that adapt faster than your comp set can copy them. Better rates. Sharper positioning. More profit. No spreadsheets left unturned.",
  tab4TagSlot,
  tag3HeadlineTag = "h3",
  tag3HeadlineText = "Revenue-focused Marketing Integration",
  tag3Item1 = "Landing page content that converts — not just attracts",
  tag3Item2 = "Email strategy aligned with pricing, urgency, and revenue goals",
  tag3Item3 = "SEO built around booking intent and rate visibility",
  tag3Item4 = "Paid media strategies mapped to ROI, not impressions",
  tag3Item5 = "Brand storytelling + performance metrics in sync",
  tag3SubHeadlineText = "We make sure your marketing isn't just pretty — it performs. From landing pages to email to SEO, every message is calibrated for conversion and backed by revenue goals. Messaging and math, working in harmony.",
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
        <Block
          className={"component_headlne-4-subsections text-primary"}
          id={settingsSectionId}
          tag={"div"}
        >
          <HtmlEmbed
            content={
              "<style>\n  \n@media screen and (max-width: 1140px) {\n  .component_base {\n    white-space: nowrap;\n  }\n  .component_headlne-4-subsections {\n    white-space: nowrap;\n  }\t\n  .rig-grid {\n    align-self: center;\n    order: 9999;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr auto;\n  }\n  .strategy-stack_headline {\n    position: static;\n    width: auto;\n    margin-top: 0rem;\n    margin-left: 0px;\n    align-self: stretch;\n  \tpadding-right: 1rem;\n    padding-left: 1rem;\n  }\n\n  .tabs {\n    display: grid;\n    width: 100%;\n    max-width: 700px;\n    grid-auto-columns: 1fr;\n    gap: 0px;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto;\n  }\n  .tabs.margin-top-md {\n  \tmax-width: none;\n  \tplace-items: stretch;\n  \tgrid-auto-columns: auto;\n  \tgrid-template-columns: auto;\n  }\n  .tabs-content {\n    padding-left: 80px;\n    border-left: 1px solid rgba(255, 255, 255, 0.3);\n  }\n  .component_headlne-4-subsections {\n  \twhite-space: nowrap;\n  }\n}\n\n\n@media screen and (max-width: 991px) {\n  \n  .rig-grid {\n    align-self: stretch;\n    order: 9999;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr auto;\n  }\n  .tabs.margin-top-md {\n    max-width: none;\n    place-items: stretch;\n    grid-auto-columns: auto;\n    grid-template-columns: auto;\n  }\n  .tabs-content {\n    padding-left: 0px;\n    border-left-style: none;\n  }\n  .tabs {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto;\n  }\n  .tabs_container {\n    justify-content: center;\n    align-items: center;\n  }\n  .component_headlne-4-subsections {\n    white-space: nowrap;\n  }\n}\t\n  \n</style>"
            }
          />
          <Block className={"tabs_container"} tag={"div"}>
            <Block
              className={"strategy-stack_headline"}
              id={"w-node-dbef8395-6145-bc46-ea0c-b0eb87c08c04-4d37f629"}
              tag={"div"}
            >
              {mainSectionHeadlineSlot}
              <Paragraph
                className={"paragraph is-line-height_1-25 padding-top_xs"}
              >
                {mainSectionMainParagraph}
              </Paragraph>
            </Block>
            <Block className={"rig-grid"} tag={"div"}>
              <TabsWrapper
                className={"tabs margin-top-md"}
                current={"Smart Pricing"}
                data-duration-in={"300"}
                data-duration-out={"100"}
                easing={"ease"}
                fadeIn={300}
                fadeOut={100}
                id={"w-node-_0ed91595-5da8-bc70-5729-0e384d37f63a-4d37f629"}
              >
                <TabsContent
                  className={"tabs-content"}
                  id={"w-node-_0ed91595-5da8-bc70-5729-0e384d37f64b-4d37f629"}
                  tag={"div"}
                >
                  <TabsPane
                    className={"tabs_pane"}
                    data-w-tab={"Smart Pricing"}
                    tag={"div"}
                  >
                    <Block className={"tab_content"} tag={"div"}>
                      <Block className={"tabs_top-section"} tag={"div"}>
                        <Heading
                          className={"headline-sm"}
                          tag={tab1HeadlineTag}
                        >
                          {tab1HeadlineText}
                        </Heading>
                        <Paragraph className={"paragraph"}>
                          {tab1SubHeadlineText}
                        </Paragraph>
                      </Block>
                      <Block className={"tabs_middle-section"} tag={"div"}>
                        <Block className={"label-wrapper"} tag={"div"}>
                          {tab1TagSlot}
                        </Block>
                        <List
                          className={"list_check-mark"}
                          tag={"ul"}
                          unstyled={true}
                        >
                          <ListItem className={"checkmark-list-item"}>
                            {tab1Item1}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab1Item2}
                          </ListItem>
                          <ListItem className={" checkmark-list-item"}>
                            {tab1Item3}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab1Item4}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab1Item5}
                          </ListItem>
                        </List>
                      </Block>
                      <Block className={"tabs_bottom-section"} tag={"div"}>
                        <Block
                          id={
                            "w-node-_836dce05-254f-ef45-2644-ceddd241d901-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-_9eafc520-4744-8525-34fe-ee699bf10ba6-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"Read More"}
                          </Block>
                          {tab1Button1Slot}
                        </Block>
                        <Block
                          id={
                            "w-node-eaa61d2f-eb99-ce41-4808-dbe612bca0ce-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-_514e7830-be61-71b8-3ffd-912c9b9290e4-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"GEt InTOUCH"}
                          </Block>
                          {tab1Button2Slot}
                        </Block>
                      </Block>
                    </Block>
                  </TabsPane>
                  <TabsPane
                    className={"tabs_pane"}
                    data-w-tab={"Demand Signals"}
                    tag={"div"}
                  >
                    <Block className={"tab_content"} tag={"div"}>
                      <Block className={"tabs_top-section"} tag={"div"}>
                        <Heading
                          className={"headline-sm"}
                          tag={tab2HeadlineTag}
                        >
                          {tab2HeadlineText}
                        </Heading>
                        <Paragraph className={"paragraph"}>
                          {tab2SubHeadlineText}
                        </Paragraph>
                      </Block>
                      <Block className={"tabs_middle-section"} tag={"div"}>
                        <Block className={"label-wrapper"} tag={"div"}>
                          {tab2TagSlot}
                        </Block>
                        <List
                          className={"list_check-mark"}
                          tag={"ul"}
                          unstyled={true}
                        >
                          <ListItem className={"checkmark-list-item"}>
                            {tab2Item1}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab2Item2}
                          </ListItem>
                          <ListItem className={" checkmark-list-item"}>
                            {tab2Item3}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab2Item4}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab2Item5}
                          </ListItem>
                        </List>
                      </Block>
                      <Block className={"tabs_bottom-section"} tag={"div"}>
                        <Block
                          id={
                            "w-node-_53451869-8c49-927e-ac10-0bb89de8fe8f-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-_53451869-8c49-927e-ac10-0bb89de8fe90-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"Read More"}
                          </Block>
                          {tab2Button1Slot}
                        </Block>
                        <Block
                          id={
                            "w-node-_53451869-8c49-927e-ac10-0bb89de8fe93-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-_53451869-8c49-927e-ac10-0bb89de8fe94-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"GEt InTOUCH"}
                          </Block>
                          {tab2Button2Slot}
                        </Block>
                      </Block>
                    </Block>
                  </TabsPane>
                  <TabsPane
                    className={"tabs_pane"}
                    data-w-tab={"Conversion Fuel"}
                    tag={"div"}
                  >
                    <Block className={"tab_content"} tag={"div"}>
                      <Block className={"tabs_top-section"} tag={"div"}>
                        <Heading
                          className={"headline-sm"}
                          tag={tag3HeadlineTag}
                        >
                          {tag3HeadlineText}
                        </Heading>
                        <Paragraph className={"paragraph"}>
                          {tag3SubHeadlineText}
                        </Paragraph>
                      </Block>
                      <Block className={"tabs_middle-section"} tag={"div"}>
                        <Block className={"label-wrapper"} tag={"div"}>
                          {tab3TagSlot}
                        </Block>
                        <List
                          className={"list_check-mark"}
                          tag={"ul"}
                          unstyled={true}
                        >
                          <ListItem className={"checkmark-list-item"}>
                            {tag3Item1}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tag3Item2}
                          </ListItem>
                          <ListItem className={" checkmark-list-item"}>
                            {tag3Item3}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tag3Item4}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tag3Item5}
                          </ListItem>
                        </List>
                      </Block>
                      <Block className={"tabs_bottom-section"} tag={"div"}>
                        <Block
                          id={
                            "w-node-db8a709b-8a4c-2f3c-5922-a863478e10ca-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-db8a709b-8a4c-2f3c-5922-a863478e10cb-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"Read More"}
                          </Block>
                          {tab3Button1Slot}
                        </Block>
                        <Block
                          id={
                            "w-node-db8a709b-8a4c-2f3c-5922-a863478e10ce-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-db8a709b-8a4c-2f3c-5922-a863478e10cf-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"GEt InTOUCH"}
                          </Block>
                          {tab3Button2Slot}
                        </Block>
                      </Block>
                    </Block>
                  </TabsPane>
                  <TabsPane
                    className={"tabs_pane"}
                    data-w-tab={"Offers Engine"}
                    tag={"div"}
                  >
                    <Block className={"tab_content"} tag={"div"}>
                      <Block className={"tabs_top-section"} tag={"div"}>
                        <Heading
                          className={"headline-sm"}
                          tag={tab4HeadlineTag}
                        >
                          {tab4HeadlineText}
                        </Heading>
                        <Paragraph className={"paragraph"}>
                          {tab4SubHeadlineText}
                        </Paragraph>
                      </Block>
                      <Block className={"tabs_middle-section"} tag={"div"}>
                        <Block className={"label-wrapper"} tag={"div"}>
                          {tab4TagSlot}
                        </Block>
                        <List
                          className={"list_check-mark"}
                          tag={"ul"}
                          unstyled={true}
                        >
                          <ListItem className={"checkmark-list-item"}>
                            {tab4Item1}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab4Item2}
                          </ListItem>
                          <ListItem className={" checkmark-list-item"}>
                            {tab4Item3}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab4Item4}
                          </ListItem>
                          <ListItem className={"checkmark-list-item"}>
                            {tab4Item5}
                          </ListItem>
                        </List>
                      </Block>
                      <Block className={"tabs_bottom-section"} tag={"div"}>
                        <Block
                          id={
                            "w-node-_6cc15157-50d3-7ba4-a3a4-45397fb56e7e-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-_6cc15157-50d3-7ba4-a3a4-45397fb56e7f-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"Read More"}
                          </Block>
                          {tab4Button1Slot}
                        </Block>
                        <Block
                          id={
                            "w-node-_6cc15157-50d3-7ba4-a3a4-45397fb56e82-4d37f629"
                          }
                          tag={"div"}
                        >
                          <Block
                            className={"label-rg"}
                            id={
                              "w-node-_6cc15157-50d3-7ba4-a3a4-45397fb56e83-4d37f629"
                            }
                            tag={"div"}
                          >
                            {"GEt InTOUCH"}
                          </Block>
                          {tab4Button2Slot}
                        </Block>
                      </Block>
                    </Block>
                  </TabsPane>
                </TabsContent>
                <TabsMenu
                  className={"tabs_menu is-hidden_tablet"}
                  id={"w-node-_0ed91595-5da8-bc70-5729-0e384d37f63b-4d37f629"}
                  tag={"div"}
                >
                  <TabsLink
                    block={"inline"}
                    className={"tabs_link-block"}
                    data-w-tab={"Smart Pricing"}
                    id={"w-node-_0ed91595-5da8-bc70-5729-0e384d37f63f-4d37f629"}
                  >
                    <Block className={"tab_button-text"} tag={"div"}>
                      {mainTabsTab1Text}
                    </Block>
                  </TabsLink>
                  <TabsLink
                    block={"inline"}
                    className={"tabs_link-block"}
                    data-w-tab={"Demand Signals"}
                    id={"w-node-_0ed91595-5da8-bc70-5729-0e384d37f642-4d37f629"}
                  >
                    <Block className={"tab_button-text"} tag={"div"}>
                      {mainTabsTab2Text}
                    </Block>
                  </TabsLink>
                  <TabsLink
                    block={"inline"}
                    className={"tabs_link-block"}
                    data-w-tab={"Conversion Fuel"}
                    id={"w-node-_0ed91595-5da8-bc70-5729-0e384d37f648-4d37f629"}
                  >
                    <Block className={"tab_button-text"} tag={"div"}>
                      {mainTabsTab3Text}
                    </Block>
                  </TabsLink>
                  <TabsLink
                    block={"inline"}
                    className={"tabs_link-block"}
                    data-w-tab={"Offers Engine"}
                    id={"w-node-cd02251e-808d-54d4-e613-d4dfb4a31316-4d37f629"}
                  >
                    <Block className={"tab_button-text"} tag={"div"}>
                      {mainTabsTab4Text}
                    </Block>
                  </TabsLink>
                </TabsMenu>
              </TabsWrapper>
              <Block
                className={"bottom-info"}
                id={"w-node-_0ed91595-5da8-bc70-5729-0e384d37f6f2-4d37f629"}
                tag={"div"}
              >
                <Paragraph className={"user-message is-hidden_tablet"}>
                  <Span className={"text-highlighter-color-2"}>
                    {"Click on an option and explore how we "}
                  </Span>
                  <Span
                    className={"text-highlighter-color-2 highlighter-inset"}
                  >
                    {"optimize hotel revenue."}
                  </Span>
                </Paragraph>
              </Block>
            </Block>
          </Block>
          <BlockContainer
            className={"component_container bg-color-9"}
            grid={{
              type: "container",
            }}
            id={"fixed-root"}
            tag={"div"}
          />
        </Block>
      ) : null}
    </div>
  );
}
