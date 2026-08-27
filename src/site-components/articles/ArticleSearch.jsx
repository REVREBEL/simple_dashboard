"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import FormBlockLabel from "../webflow_modules/Form/components/FormBlockLabel";
import Heading from "../webflow_modules/Basic/components/Heading";
import SearchButton from "../webflow_modules/Search/components/SearchButton";
import SearchForm from "../webflow_modules/Search/components/SearchForm";
import SearchInput from "../webflow_modules/Search/components/SearchInput";
import { VariantsResponsiveText } from "../variants/VariantsResponsiveText";

export function ArticleSearch({
  headlineSubHeadlineText = "Get fresh takes on travel, hotels, and smart revenue moves. Quick reads, bold ideas, and the latest trends, Your go-to for hospitality know-how.",
  searchBarCategoriesLabel = "Top Recommended",
  searchBarSearchLabel = "Search",
  slotCategoryLabel,
  slotCategoryLabel2,
  slotCategoryLabel3,
  slotCategoryLabel4,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <BlockContainer
        className={"component_wrapper"}
        grid={{
          type: "container",
        }}
        tag={"div"}
      >
        <BlockContainer
          className={"component_container"}
          grid={{
            type: "container",
          }}
          tag={"div"}
        >
          <Block
            className={
              "component_padding padding-md max-width_medium text-color-primary"
            }
            tag={"div"}
          >
            <Block className={"headline-base"} tag={"div"}>
              <Block
                className={"v-headline-wrapper component-headline-color"}
                tag={"div"}
              >
                <Block className={"headline-responsive_wrapper"} tag={"div"}>
                  <Heading
                    className={
                      "v-headline-responsive scroll-in-view_sticky-fade-in component-headline-color"
                    }
                    tag={"h2"}
                  >
                    {"Hospitality Insights. Revenue unlocked."}
                  </Heading>
                </Block>
              </Block>
              <Block className={"subheadline-base"} tag={"div"}>
                {headlineSubHeadlineText}
              </Block>
              <VariantsResponsiveText />
            </Block>
            <Block
              className={"search_item-wrapper margin-top_large"}
              tag={"div"}
            >
              <SearchForm action={"/search"} className={"search"}>
                <FormBlockLabel
                  className={"label text-align_left"}
                  htmlFor={"search"}
                >
                  {searchBarSearchLabel}
                </FormBlockLabel>
                <SearchInput
                  autoFocus={false}
                  className={"form_input"}
                  disabled={false}
                  id={"search"}
                  maxLength={256}
                  name={"query"}
                  placeholder={"Search Content ....."}
                  required={true}
                  type={"search"}
                />
                <SearchButton
                  className={"search-icon is-search-icon"}
                  type={"submit"}
                />
              </SearchForm>
              <Block className={"search_category"} tag={"div"}>
                <Block className={"label_sm"} tag={"div"}>
                  {searchBarCategoriesLabel}
                </Block>
                {slotCategoryLabel}
                {slotCategoryLabel4}
                {slotCategoryLabel3}
                {slotCategoryLabel2}
              </Block>
            </Block>
          </Block>
        </BlockContainer>
      </BlockContainer>
    </div>
  );
}
