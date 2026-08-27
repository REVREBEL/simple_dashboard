"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import RichText from "../webflow_modules/Basic/components/RichText";

export function BlogArticleSection({
  mainSectionRichText = "",
  mainSectionSlotLikeButton,
  settingsBlogArticleSectionId = "article-body",
  settingsSummaryBlockVisibility = true,
  summarySectionSlotCategoryLabel,
  summarySectionSlotDate,
  summarySectionSlotHeadline,
  summarySectionSlotViewsLikes,
  summarySectionSummaryBlockId = "",
  summarySectionSummaryParagraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  summarySectionSummaryParagraphVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSummaryBlockVisibility ? (
        <Block
          className={"g-container text-primary"}
          id={settingsBlogArticleSectionId}
          tag={"div"}
        >
          <HtmlEmbed
            className={"code-embed"}
            content={
              "<style>\n.articles-body_rich-text h1:first-child,\n.articles-body_rich-text h2:first-child,\n.articles-body_rich-text h3:first-child,\n.articles-body_rich-text h4:first-child,\n.articles-body_rich-text h5:first-child,\n.articles-body_rich-text h6:first-child {\n  margin-top: 1em;\n}\n\n.articles-body_rich-text h1 + h2,\n.articles-body_rich-text h2 + h3 {\n  margin-top: .25em !important;\n}\n\n  \n.articles-body_rich-text h3 + h4,\n.articles-body_rich-text h4 + h5,\n.articles-body_rich-text h5 + h6,\n.articles-body_rich-text h1 + h1,\n.articles-body_rich-text h2 + h2,\n.articles-body_rich-text h3 + h3,\n.articles-body_rich-text h4 + h4,\n.articles-body_rich-text h5 + h5,\n.articles-body_rich-text h6 + h6 {\n  margin-top: 0 !important;\n}\n\n.articles-body_rich-text p {\n  margin-top: 0.5em;\n  margin-bottom: 2em;\n}\n\n\n/* Paragraph followed by paragraph */\n.articles-body_rich-text p:has(+ p) {\n  margin-bottom: 0.5em;\n}\n\n.articles-body_rich-text p + p {\n  margin-top: 0.5em;\n}\n\n.articles-body_rich-text p:has(strong):has(+ p),\n.articles-body_rich-text p:has(b):has(+ p) {\n  margin-top: 0 !important;\n  margin-bottom: 0.5em;\n}\n\n.articles-body_rich-text p:has(strong) + p,\n.articles-body_rich-text p:has(b) + p {\n  margin-top: 0 !important;\n  margin-top: 0;\n}\n\n.articles-body_rich-text li + li {\n  margin-top: 0.5em;\n}\n\n.articles-body_rich-text ul,\n.articles-body_rich-text ol {\n  margin: .5em 0 .5em 2em;\n}\n\n.articles-body_rich-text ul li,\n.articles-body_rich-text ol li {\n  margin-top: .5em;\n  margin-bottom: 1em;\n}\n\n.articles-body_rich-text ul li + li,\n.articles-body_rich-text ol li + li {\n  margin-top: 0;\n  margin-bottom: 1em;\n</style>"
            }
          />
          <BlockContainer
            className={"global-component_wrapper flex-vertical"}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={"data-share-start"}
              data-share-start={"data-share-start"}
              tag={"div"}
            />
            <Block className={"article-body_meta_wrapper"} tag={"div"}>
              <Block
                className={"grid-inline_2-col full-width mobile_1_col"}
                tag={"div"}
              >
                <Block
                  className={"meta-item_wrapper"}
                  id={"w-node-fef597ff-9b63-9ddd-c9d9-ad9e4cb3bee9-8ea2f6a7"}
                  tag={"div"}
                >
                  {summarySectionSlotCategoryLabel}
                </Block>
                <Block
                  className={"meta-item_wrapper"}
                  id={"w-node-a0d8ada0-d920-445d-ace7-2bad2ee1fcac-8ea2f6a7"}
                  tag={"div"}
                >
                  {summarySectionSlotViewsLikes}
                </Block>
              </Block>
            </Block>
            <Block
              className={"article-body_single color-card_body"}
              tag={"div"}
            >
              {settingsSummaryBlockVisibility ? (
                <Block
                  className={"grid_2-row is-flex-mobile"}
                  id={summarySectionSummaryBlockId}
                  tag={"header"}
                >
                  <Block
                    id={"w-node-_1789a0fc-6b5b-388c-8a60-4a9acfe6ea8f-8ea2f6a7"}
                    tag={"div"}
                  >
                    {summarySectionSlotHeadline}
                  </Block>
                  {summarySectionSummaryParagraphVisibility ? (
                    <Paragraph
                      className={"paragraph-md"}
                      id={
                        "w-node-c4bf2031-ece2-a7ec-4cb6-49fb8ea2f6d0-8ea2f6a7"
                      }
                    >
                      {summarySectionSummaryParagraphText}
                    </Paragraph>
                  ) : null}
                  <Block
                    className={"data-share-start"}
                    data-share-start={"data-share-start"}
                    id={"w-node-c4bf2031-ece2-a7ec-4cb6-49fb8ea2f6ce-8ea2f6a7"}
                    tag={"div"}
                  />
                </Block>
              ) : null}
              <HtmlEmbed
                className={"article_custom-code"}
                content={
                  '<style>\n/* Fallback for browsers that do not support "word-break:  auto-phrase" */\n@supports (word-break: auto-phrase) {\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    word-break: auto-phrase;\n    /* Apply "auto-phrase" if supported */\n  }\n}\n\n/* Fallback for browsers that do not support "word-break:  auto-phrase" */\n@supports not (word-break: auto-phrase) {\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    word-break: normal;\n    /* Apply "normal" if "auto-phrase" is not supported */\n  }\n}\n</style>'
                }
              />
              <RichText
                className={"article-body_rich-text"}
                ct-readtime-element={"target"}
                data-blog-summary={"article-body"}
                data-wordcount={"reading-article"}
                tag={"main"}
              >
                {mainSectionRichText}
              </RichText>
              <Block
                className={"data-share-end"}
                data-share-end={"data-share-end"}
                tag={"div"}
              />
              {mainSectionSlotLikeButton}
            </Block>
          </BlockContainer>
        </Block>
      ) : null}
    </div>
  );
}
