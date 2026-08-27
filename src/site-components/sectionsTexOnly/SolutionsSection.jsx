"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f94edf1a-0665-fc7d-f3b0-fe91e702f295","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f94edf1a-0665-fc7d-f3b0-fe91e702f295","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":1124,"direction":"BOTTOM","effectIn":true},"createdOn":1754681830024},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fab5a994-b199-6188-7e6f-0236d2059012","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fab5a994-b199-6188-7e6f-0236d2059012","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":"LEFT","effectIn":true},"createdOn":1754681870478},"e-53":{"id":"e-53","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b867bccd-6841-3396-c9cb-d773f9d66086","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b867bccd-6841-3396-c9cb-d773f9d66086","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682431062},"e-54":{"id":"e-54","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-53"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b867bccd-6841-3396-c9cb-d773f9d66086","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b867bccd-6841-3396-c9cb-d773f9d66086","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682431062},"e-55":{"id":"e-55","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-794"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650456eb-aa1a-54c5-67f1-d1e95d1638b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650456eb-aa1a-54c5-67f1-d1e95d1638b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682473324},"e-56":{"id":"e-56","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-55"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650456eb-aa1a-54c5-67f1-d1e95d1638b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650456eb-aa1a-54c5-67f1-d1e95d1638b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682473325},"e-57":{"id":"e-57","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b113","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b113","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682507992},"e-58":{"id":"e-58","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-795"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b113","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b113","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682507992},"e-59":{"id":"e-59","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682668966},"e-60":{"id":"e-60","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-59"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1754682668966},"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-604":{"id":"e-604","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-605"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"650456eb-aa1a-54c5-67f1-d1e95d1638ac","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"650456eb-aa1a-54c5-67f1-d1e95d1638ac","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":1124,"direction":null,"effectIn":true},"createdOn":1758650058141},"e-606":{"id":"e-606","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-607"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b10c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b10c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":1124,"direction":null,"effectIn":true},"createdOn":1758650071696},"e-608":{"id":"e-608","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-609"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b867bccd-6841-3396-c9cb-d773f9d6607f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b867bccd-6841-3396-c9cb-d773f9d6607f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":50,"scrollOffsetUnit":"%","delay":1124,"direction":null,"effectIn":true},"createdOn":1758650090763},"e-610":{"id":"e-610","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-140","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-611"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b92e77a0-de39-bd03-b138-f1d5b6e770bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b92e77a0-de39-bd03-b138-f1d5b6e770bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1758650159016},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-49":{"id":"a-49","title":"SolutionsArrowIn","actionItemGroups":[{"actionItems":[{"id":"a-49-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-49-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"650456eb-aa1a-54c5-67f1-d1e95d1638b3"},"globalSwatchId":"--_color---primary--normal","rValue":22,"bValue":102,"gValue":54,"aValue":1}},{"id":"a-49-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".solutions_arrow","selectorGuids":["f3ec7af5-fdae-9ff1-cb62-ed06937666a6"]},"xValue":0.0625,"yValue":0.0625,"zValue":0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]},{"actionItems":[{"id":"a-49-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a"},"xValue":0.3125,"yValue":-0.625,"zValue":0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}},{"id":"a-49-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".solutions_arrow_icon","selectorGuids":["f3ec7af5-fdae-9ff1-cb62-ed06937666ae"]},"globalSwatchId":"--_color---aqua--normal","rValue":113,"bValue":197,"gValue":201,"aValue":1}},{"id":"a-49-n-7","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b113"},"filters":[{"type":"invert","filterId":"40b1","value":81,"unit":"%"},{"type":"sepia","filterId":"23ba","value":41,"unit":"%"},{"type":"saturate","filterId":"89a9","value":374,"unit":"%"},{"type":"hue-rotate","filterId":"ecbb","value":123,"unit":"deg"},{"type":"brightness","filterId":"fc7f","value":84,"unit":"%"},{"type":"contrast","filterId":"5279","value":92,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":true,"createdOn":1656101469775},"a-50":{"id":"a-50","title":"SolutionsArrowOut","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-50-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".solutions_arrow","selectorGuids":["f3ec7af5-fdae-9ff1-cb62-ed06937666a6"]},"xValue":-0.0625,"yValue":-0.0625,"zValue":-0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]},{"actionItems":[{"id":"a-50-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ffd3af14-4ae7-8008-929d-00277c4a0c7a"},"xValue":-0.3125,"yValue":0.625,"zValue":-0.0625,"xUnit":"rem","yUnit":"rem","zUnit":"rem"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1656101469775},"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-140":{"id":"a-140","title":"Headline Fade In","actionItemGroups":[{"actionItems":[{"id":"a-140-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".scroll-in-view_fade-in","selectorGuids":["1e037921-7d51-33e0-88c2-a924fd303ffe"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-140-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":2000,"target":{"selector":".scroll-in-view_fade-in","selectorGuids":["1e037921-7d51-33e0-88c2-a924fd303ffe"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1758650203008},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SolutionsSection({
  colorVariant = "Light",
  item1DescriptionText = "Easy, Flexible Short Term Support in a Specific Area.",
  item1Headline = "Drop-in Specialists",
  item1HeadlineTag = "h3",
  item1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9f8_arrow-right.svg",
  item1IconAltText = "__wf_reserved_inherit",

  item1Link = {
    href: "#",
  },

  item1NumberText = "01|",
  item2DescriptionText = "Full Agency Firepower, a Dedicated Team Backed With our Integrated Platforms",
  item2Headline = "Full Cast & Crew",
  item2HeadlineTag = "h3",
  item2Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9f8_arrow-right.svg",
  item2IconAltText = "__wf_reserved_inherit",

  item2Link = {
    href: "#",
  },

  item2NumberText = "02 |",
  item3DescriptionText = "We can Lead, Plan and Bring Dedicated Projects to the Finish Line.",
  item3Headline = "PROJECT CLOSERS",
  item3HeadlineTag = "h3",
  item3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9f8_arrow-right.svg",
  item3IconAltText = "__wf_reserved_inherit",

  item3Link = {
    href: "#",
  },

  item3NumberText = "03|",
  item4DescriptionText = "Uncover Untapped Revenue With a Focused Deep Dive.",
  item4Headline = "REVENUE REWRITERS",
  item4HeadlineTag = "h3",
  item4Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9f8_arrow-right.svg",
  item4IconAltText = "__wf_reserved_inherit",

  item4Link = {
    href: "#",
  },

  item4NumberText = "04 |",
  mainSectionEyebrowText = "You have a mission. We have the talent. ",
  mainSectionParagraphText = (
    <>
      {
        "From project management to a comprehensive analysis of your strategy, we offer services that deliver impactful results. "
      }
      <br />
      <br />
      {
        "No matter the size of your hotel or the complexity of your challenge, if you’re looking for smarter ways to optimize, grow, or simply breathe easier, we’ve got your back."
      }
    </>
  ),
  mainSectionResponsiveTextSizeVariants = "lg",
  mainSectionSubheadlineText = "4-ways we can help",
  slotHeadline,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-236fbc05-81c5-3eec-9197-f9bd467acc95",
  };

  const _activeStyleVariant = _styleVariantMap[colorVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        className={`solutions_wrapper is-component_text-color ${_activeStyleVariant}`}
        grid={{
          type: "container",
        }}
        id={"mavericks-for-hire"}
        tag={"div"}
      >
        <Block
          className={`solutions_main_headline ${_activeStyleVariant}`}
          id={"w-node-f94edf1a-0665-fc7d-f3b0-fe91e702f28d-e702f28b"}
          tag={"div"}
        >
          <Block
            className={`headline-wrapper margin-bottom_none ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`eyebrow text-size-sm text-color-2 font-weight-regular text-align_left ${_activeStyleVariant}`}
              tag={"div"}
            >
              {mainSectionEyebrowText}
            </Block>
            {slotHeadline}
          </Block>
          <Block
            className={`headline-sm text-color-bright-blue font-weight-semibold ${_activeStyleVariant}`}
            data-w-id={"fab5a994-b199-6188-7e6f-0236d2059012"}
            id={"w-node-fab5a994-b199-6188-7e6f-0236d2059012-e702f28b"}
            tag={"div"}
          >
            {mainSectionSubheadlineText}
          </Block>
          <Paragraph
            className={`paragraph padding-top_none ${_activeStyleVariant}`}
            data-w-id={"f94edf1a-0665-fc7d-f3b0-fe91e702f295"}
          >
            {mainSectionParagraphText}
          </Paragraph>
        </Block>
        <Block
          className={`solutions_right-wrapper ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`solutions_grid ${_activeStyleVariant}`}
            id={"w-node-e50d5240-d6f9-6a34-56e3-ee0dece924b1-e702f28b"}
            tag={"div"}
          >
            <Block
              className={`solutions_number ${_activeStyleVariant}`}
              id={"w-node-ce263869-6622-aa68-80a2-d36219bdd957-e702f28b"}
              tag={"div"}
            >
              <Block
                className={`solutions_number ${_activeStyleVariant}`}
                tag={"div"}
              >
                {item1NumberText}
              </Block>
            </Block>
            <Block
              className={`solutions_flex-wrapper ${_activeStyleVariant}`}
              id={"w-node-_467a7f28-0f35-641b-688f-10c312f1f12e-e702f28b"}
              tag={"div"}
            >
              <Block
                className={`solutions-headline ${_activeStyleVariant}`}
                id={"w-node-b92e77a0-de39-bd03-b138-f1d5b6e770bb-e702f28b"}
                tag={"div"}
              >
                <Heading
                  className={`headline-sm margin-bottom_none scroll-in-view_fade-in ${_activeStyleVariant}`}
                  data-w-id={"b92e77a0-de39-bd03-b138-f1d5b6e770bc"}
                  tag={item1HeadlineTag}
                >
                  {item1Headline}
                </Heading>
                <Block
                  className={`solutions_subheadline ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {item1DescriptionText}
                </Block>
              </Block>
              <Link
                block={"inline"}
                button={false}
                className={`solutions_arrow-link ${_activeStyleVariant}`}
                id={"w-node-_76bd9831-4fec-ab92-9852-5b0ffc1855ef-e702f28b"}
                options={item1Link}
              >
                <Block
                  className={`solutions_arrow ${_activeStyleVariant}`}
                  data-w-id={"ffd3af14-4ae7-8008-929d-00277c4a0c7a"}
                  id={"w-node-ffd3af14-4ae7-8008-929d-00277c4a0c7a-e702f28b"}
                  tag={"div"}
                >
                  <Image
                    className={`solutions_arrow_icon ${_activeStyleVariant}`}
                    height={"Auto"}
                    loading={"lazy"}
                    src={item1Icon}
                    width={"Auto"}
                  />
                </Block>
              </Link>
            </Block>
          </Block>
          <Block
            className={`solutions_grid ${_activeStyleVariant}`}
            id={"w-node-_888e835d-c492-215a-a7b3-1e7b698891f1-e702f28b"}
            tag={"div"}
          >
            <Block
              className={`solutions_number ${_activeStyleVariant}`}
              id={"w-node-_650456eb-aa1a-54c5-67f1-d1e95d1638a6-e702f28b"}
              tag={"div"}
            >
              <Block
                className={`solutions_number ${_activeStyleVariant}`}
                tag={"div"}
              >
                {item2NumberText}
              </Block>
            </Block>
            <Block
              className={`solutions_flex-wrapper ${_activeStyleVariant}`}
              id={"w-node-_0e3ddef6-968e-38ff-d0e5-9987262a0a4e-e702f28b"}
              tag={"div"}
            >
              <Block
                className={`solutions-headline ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`headline-sm margin-bottom_none scroll-in-view_fade-in ${_activeStyleVariant}`}
                  data-w-id={"650456eb-aa1a-54c5-67f1-d1e95d1638ac"}
                  tag={item3HeadlineTag}
                >
                  {item3Headline}
                </Heading>
                <Block
                  className={`solutions_subheadline ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {item3DescriptionText}
                </Block>
              </Block>
              <Link
                block={"inline"}
                button={false}
                className={`solutions_arrow-link ${_activeStyleVariant}`}
                id={"w-node-_7c643e33-fd27-1ba2-d8b6-1e2a5bf0c7f8-e702f28b"}
                options={item2Link}
              >
                <Block
                  className={`solutions_arrow ${_activeStyleVariant}`}
                  data-w-id={"650456eb-aa1a-54c5-67f1-d1e95d1638b3"}
                  id={"w-node-_650456eb-aa1a-54c5-67f1-d1e95d1638b3-e702f28b"}
                  tag={"div"}
                >
                  <Image
                    className={`solutions_arrow_icon ${_activeStyleVariant}`}
                    height={"Auto"}
                    loading={"lazy"}
                    src={item3Icon}
                    width={"Auto"}
                  />
                </Block>
              </Link>
            </Block>
          </Block>
          <Block
            className={`solutions_grid ${_activeStyleVariant}`}
            id={"w-node-_84903fcd-6d79-af61-81f0-431a1a7613c2-e702f28b"}
            tag={"div"}
          >
            <Block
              className={`solutions_number ${_activeStyleVariant}`}
              id={"w-node-_2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b106-e702f28b"}
              tag={"div"}
            >
              <Block
                className={`solutions_number ${_activeStyleVariant}`}
                tag={"div"}
              >
                {item3NumberText}
              </Block>
            </Block>
            <Block
              className={`solutions_flex-wrapper ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`solutions-headline ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`headline-sm margin-bottom_none scroll-in-view_fade-in ${_activeStyleVariant}`}
                  data-w-id={"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b10c"}
                  tag={item4HeadlineTag}
                >
                  {item4Headline}
                </Heading>
                <Block
                  className={`solutions_subheadline ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {item4DescriptionText}
                </Block>
              </Block>
              <Link
                block={"inline"}
                button={false}
                className={`solutions_arrow-link ${_activeStyleVariant}`}
                id={"w-node-_7b733aa0-0de1-fbe2-38f9-9db5f5d1063b-e702f28b"}
                options={item3Link}
              >
                <Block
                  className={`solutions_arrow ${_activeStyleVariant}`}
                  data-w-id={"2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b113"}
                  id={"w-node-_2db4fb74-e1ff-7d1c-dc80-1bd1e9d6b113-e702f28b"}
                  tag={"div"}
                >
                  <Image
                    className={`solutions_arrow_icon ${_activeStyleVariant}`}
                    height={"Auto"}
                    loading={"lazy"}
                    src={item4Icon}
                    width={"Auto"}
                  />
                </Block>
              </Link>
            </Block>
          </Block>
          <Block
            className={`solutions_grid ${_activeStyleVariant}`}
            id={"w-node-b867bccd-6841-3396-c9cb-d773f9d6607d-e702f28b"}
            tag={"div"}
          >
            <Block
              className={`solutions_number ${_activeStyleVariant}`}
              id={"w-node-b867bccd-6841-3396-c9cb-d773f9d66079-e702f28b"}
              tag={"div"}
            >
              <Block
                className={`solutions_number ${_activeStyleVariant}`}
                tag={"div"}
              >
                {item4NumberText}
              </Block>
            </Block>
            <Block
              className={`solutions_flex-wrapper ${_activeStyleVariant}`}
              id={"w-node-e2645352-b4db-1cfd-ba47-45a4aa184f77-e702f28b"}
              tag={"div"}
            >
              <Block
                className={`solutions-headline ${_activeStyleVariant}`}
                id={"w-node-b867bccd-6841-3396-c9cb-d773f9d6607e-e702f28b"}
                tag={"div"}
              >
                <Heading
                  className={`headline-sm margin-bottom_none scroll-in-view_fade-in ${_activeStyleVariant}`}
                  data-w-id={"b867bccd-6841-3396-c9cb-d773f9d6607f"}
                  tag={item2HeadlineTag}
                >
                  {item2Headline}
                </Heading>
                <Block
                  className={`solutions_subheadline ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {item2DescriptionText}
                </Block>
              </Block>
              <Link
                block={"inline"}
                button={false}
                className={`solutions_arrow-link ${_activeStyleVariant}`}
                id={"w-node-ab429cb6-99d2-e85d-877a-345211822d70-e702f28b"}
                options={item4Link}
              >
                <Block
                  className={`solutions_arrow ${_activeStyleVariant}`}
                  data-w-id={"b867bccd-6841-3396-c9cb-d773f9d66086"}
                  id={"w-node-b867bccd-6841-3396-c9cb-d773f9d66086-e702f28b"}
                  tag={"div"}
                >
                  <Image
                    className={`solutions_arrow_icon ${_activeStyleVariant}`}
                    height={"Auto"}
                    loading={"lazy"}
                    src={item2Icon}
                    width={"Auto"}
                  />
                </Block>
              </Link>
            </Block>
          </Block>
        </Block>
      </BlockContainer>
    </div>
  );
}
