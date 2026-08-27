"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-71":{"id":"e-71","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-72"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.margin-bottom_sm.mobile-margin-bottom_sm.mobile-margin-top_sm.mobile-text-align-center.scroll-in-view_slide-up","originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-458":{"id":"e-458","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"813d7324-d624-8c85-9af5-9375e7578b6d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114},"e-1080":{"id":"e-1080","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1081"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"23cecb21-f082-33d0-e8fe-a26195396b8c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"23cecb21-f082-33d0-e8fe-a26195396b8c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044214213},"e-1082":{"id":"e-1082","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1083"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e55891bd-0f89-ecd2-e35d-6f4552e74acd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e55891bd-0f89-ecd2-e35d-6f4552e74acd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044225013},"e-1084":{"id":"e-1084","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1085"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1cf011f6-d93a-5cd5-4803-0a79d87aa790","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1cf011f6-d93a-5cd5-4803-0a79d87aa790","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044234221},"e-1086":{"id":"e-1086","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1087"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"35fd2fbc-a2aa-3693-edc0-8c8765892f55","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"35fd2fbc-a2aa-3693-edc0-8c8765892f55","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044249207},"e-1088":{"id":"e-1088","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-1089"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f7a50bc0-8e7a-0ded-1c5f-607f52cb4650","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f7a50bc0-8e7a-0ded-1c5f-607f52cb4650","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044260388},"e-1258":{"id":"e-1258","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-284","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"},"targets":[{"selector":".paragraph.text-color-component.scroll-in-view_sticky-fade-in","originalId":"6a20e3037a4694a3f915ebe6|a6594166-6076-b2e6-dabf-2969a593837d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1785093140088}},"actionLists":{"a-22":{"id":"a-22","title":"sticky-headline_fade-in","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a09244ce43d4439301ce553|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"a-284":{"id":"a-284","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-284-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-284-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6a20e3037a4694a3f915ebe6|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SolutionsCategories({
  category1CategoryText = "Revenue Strategy",

  category1Link = {
    href: "https://revrebel-rebuild.webflow.io/revenue-strategy",
  },

  category2CategoryText = "Distribution",

  category2Link = {
    href: "https://revrebel-rebuild.webflow.io/distribution",
  },

  category3CategoryText = "Brand Activation",

  category3Link = {
    href: "https://revrebel-rebuild.webflow.io/brand-activation",
  },

  category4CategoryText = "Tech Integration",

  category4Link = {
    href: "https://revrebel-rebuild.webflow.io/tech-integration",
  },

  category5CategoryText = "View Solutions",

  category5Link = {
    href: "https://revrebel-rebuild.webflow.io/solutions",
  },

  headlineBottomAreaText = "Flexible options include short or long-term support, project management, or leverage our team to power your entire commercial strategy.",
  headlineCategorySubHeadlineText = "Custom-Tailored Solutions",
  headlineSubHeadlineText = "Known for crafting unique strategies that get noticed while optimizing your hotel’s performance in each revenue generation area, driving bottom-line impact and more profit.",
  settingsSectionId = "",
  settingsSectionVisibility = true,
  slotHeadline,
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
          className={"component_solutions-categories"}
          id={settingsSectionId}
          tag={"div"}
        >
          <Block className={"solutions_text-wrapper text-primary"} tag={"div"}>
            <Block
              className={"solutions_text-block"}
              data-w-id={"630afabb-4582-9700-3647-d1671a38e9fe"}
              tag={"div"}
            >
              <Block
                className={
                  "solutions_text text-xl text-weight-semibold text-color-black-900"
                }
                tag={"div"}
              >
                {slotHeadline}
                <Block className={"subheadline-xxs text-size-xl"} tag={"div"}>
                  {headlineSubHeadlineText}
                </Block>
              </Block>
            </Block>
            <Block className={"content-wrapper"} tag={"div"}>
              <Block
                className={
                  "section-headline-text text-sm text-weight-semibold text-color-black-900"
                }
                tag={"div"}
              >
                <Block
                  className={"headline-xxs margin-bottom_none"}
                  tag={"div"}
                >
                  {headlineCategorySubHeadlineText}
                </Block>
              </Block>
              <Block className={"solutions_content-wrapper"} tag={"div"}>
                <Link
                  block={"inline"}
                  button={false}
                  className={"solutions_card-wrapper is-primary"}
                  data-w-id={"23cecb21-f082-33d0-e8fe-a26195396b8c"}
                  id={"w-node-_23cecb21-f082-33d0-e8fe-a26195396b8c-33197370"}
                  options={category1Link}
                >
                  <Block className={"solutions_number-text"} tag={"div"}>
                    <Block className={"label"} tag={"div"}>
                      {"01"}
                    </Block>
                  </Block>
                  <Block
                    className={"line-22px is-color-primary is-inverse"}
                    tag={"div"}
                  />
                  <Block
                    className={
                      "solutions_category-wrapper text-xl-2 text-weight-semibold text-color-black-900"
                    }
                    tag={"div"}
                  >
                    <Block className={"solutions_category"} tag={"div"}>
                      {category1CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={"solutions_card-wrapper is-color-yellow"}
                  data-w-id={"e55891bd-0f89-ecd2-e35d-6f4552e74acd"}
                  id={"w-node-e55891bd-0f89-ecd2-e35d-6f4552e74acd-33197370"}
                  options={category2Link}
                >
                  <Block className={"solutions_number-text"} tag={"div"}>
                    <Block className={"label"} tag={"div"}>
                      {"02"}
                    </Block>
                  </Block>
                  <Block
                    className={"line-22px is-color-yellow is-inverse"}
                    tag={"div"}
                  />
                  <Block className={"solutions_category-wrapper"} tag={"div"}>
                    <Block className={"solutions_category"} tag={"div"}>
                      {category2CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={"solutions_card-wrapper is-color-cyan"}
                  data-w-id={"35fd2fbc-a2aa-3693-edc0-8c8765892f55"}
                  id={"w-node-_35fd2fbc-a2aa-3693-edc0-8c8765892f55-33197370"}
                  options={category3Link}
                >
                  <Block className={"solutions_number-text"} tag={"div"}>
                    <Block className={"label"} tag={"div"}>
                      {"03"}
                    </Block>
                  </Block>
                  <Block
                    className={"line-22px is-color-cyan is-inverse"}
                    tag={"div"}
                  />
                  <Block className={"solutions_category-wrapper"} tag={"div"}>
                    <Block className={"solutions_category"} tag={"div"}>
                      {category3CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={"solutions_card-wrapper is-color-purple"}
                  data-w-id={"1cf011f6-d93a-5cd5-4803-0a79d87aa790"}
                  id={"w-node-_1cf011f6-d93a-5cd5-4803-0a79d87aa790-33197370"}
                  options={category4Link}
                >
                  <Block className={"solutions_number-text"} tag={"div"}>
                    <Block className={"label"} tag={"div"}>
                      {"04"}
                    </Block>
                  </Block>
                  <Block
                    className={"line-22px is-color-purple is-inverse"}
                    tag={"div"}
                  />
                  <Block className={"solutions_category-wrapper"} tag={"div"}>
                    <Block className={"solutions_category"} tag={"div"}>
                      {category4CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={"solutions_card-wrapper is-color-red"}
                  data-w-id={"f7a50bc0-8e7a-0ded-1c5f-607f52cb4650"}
                  id={"w-node-f7a50bc0-8e7a-0ded-1c5f-607f52cb4650-33197370"}
                  options={category5Link}
                >
                  <Block
                    className={
                      "solutions_number-text text-base text-color-black-900"
                    }
                    tag={"div"}
                  >
                    <Block className={"label"} tag={"div"}>
                      {"05"}
                    </Block>
                  </Block>
                  <Block
                    className={"line-22px is-color-red is-inverse"}
                    tag={"div"}
                  />
                  <Block className={"solutions_category-wrapper"} tag={"div"}>
                    <Block className={"solutions_category"} tag={"div"}>
                      {category5CategoryText}
                    </Block>
                  </Block>
                </Link>
              </Block>
              <Block className={"paragraph"} tag={"div"}>
                {headlineBottomAreaText}
              </Block>
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
