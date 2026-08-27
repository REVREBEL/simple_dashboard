"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormSelect from "./webflow_modules/Form/components/FormSelect";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "./webflow_modules/Form/components/FormTextInput";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Section from "./webflow_modules/Layout/components/Section";
import { listOfElementsToText } from "./webflow_modules/Basic/helpers/listOfElementsToText";

export function GoogleSpreadsheet({
  sectionId = "Google-Sheets",
  sectionVisibility = true,
  settingsGoogleSpreadsheetId = "This is the default text value",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {sectionVisibility ? (
        <Section
          className={"spreadsheet_section"}
          grid={{
            type: "section",
          }}
          id={sectionId}
          tag={"div"}
        >
          <HtmlEmbed
            className={"code-embed-6"}
            content={
              '<script defer src="https://cdn.jsdelivr.net/gh/REVREBEL/rebel-style@main/scripts/google-sheets-min.js" type="text/javascript" referrerpolicy="no-referrer" crossorigin="anonymous">\n</script>'
            }
          />
          <FormWrapper
            className={"spreadsheet"}
            google-spreadsheet-id={listOfElementsToText(
              settingsGoogleSpreadsheetId
            )}
          >
            <FormForm
              className={"spreadsheet_wrapper"}
              data-name={"Google Sheet Spreadsheet"}
              id={"wf-form-Google-Sheet-Spreadsheet"}
              method={"get"}
              name={"wf-form-Google-Sheet-Spreadsheet"}
            >
              <Block className={"top-bar_container"} tag={"div"}>
                <FormTextInput
                  autoFocus={false}
                  className={
                    "spreadsheet_searchbar w-node-_3d882e84-4da2-2154-7a37-4774473fb453-473fb44f"
                  }
                  data-name={"Field"}
                  disabled={false}
                  id={"field"}
                  maxLength={256}
                  name={"field"}
                  placeholder={"Search"}
                  required={false}
                  type={"text"}
                />
                <FormSelect
                  className={"spreadsheet_select-field"}
                  data-name={"Row Per Page"}
                  id={"Row-Per-Page"}
                  multiple={false}
                  name={"Row-Per-Page"}
                  options={[
                    {
                      t: "5 elements",
                      v: "5",
                    },
                    {
                      t: "10 elements",
                      v: "10",
                    },
                    {
                      t: "All elements",
                      v: "0",
                    },
                  ]}
                  required={false}
                />
              </Block>
              <Block className={"spreadsheet_table-wrapper"} tag={"div"}>
                <Block
                  className={"spreadsheet_header_container"}
                  // @ts-ignore - User-defined custom attribute(s)
                  spreadsheet={"header-container"}
                  tag={"div"}
                >
                  <Block className={"spreadsheet_header"} tag={"div"}>
                    <Block
                      className={"spreadsheet_sorter is-icon-color-primary"}
                      spreadsheet-sorter-element={"true"}
                      tag={"div"}
                    />
                  </Block>
                </Block>
                <Block
                  className={"spreadsheet_cell-container"}
                  // @ts-ignore - User-defined custom attribute(s)
                  spreadsheet={"cell-container"}
                  tag={"div"}
                >
                  <Block className={"spreadsheet_row"} tag={"div"}>
                    <Block className={"spreadsheet_cell"} tag={"div"} />
                  </Block>
                </Block>
              </Block>
              <Block
                className={"spreadsheet_empty-state"}
                // @ts-ignore - User-defined custom attribute(s)
                spreadsheet={"empty"}
                tag={"div"}
              >
                <Block className={"spreadsheet_empty-label"} tag={"div"}>
                  {"Empty"}
                </Block>
              </Block>
              <Block className={"spreadsheet_pagination"} tag={"div"}>
                <Block
                  className={"spreadsheet_pages-link-container"}
                  id={"w-node-_3d882e84-4da2-2154-7a37-4774473fb460-473fb44f"}
                  // @ts-ignore - User-defined custom attribute(s)
                  spreadsheet={"pages-link-container"}
                  tag={"div"}
                >
                  <Block
                    className={"spreadsheet_pagination-_button"}
                    tag={"div"}
                  >
                    {"1"}
                  </Block>
                </Block>
              </Block>
            </FormForm>
            <FormSuccessMessage>
              <Block className={"is-hidden"} tag={"div"}>
                {"Thank you! Your submission has been received!"}
              </Block>
            </FormSuccessMessage>
            <FormErrorMessage className={"error-message"}>
              <Block className={"is-hidden"} tag={"div"}>
                {"Oops! Something went wrong while submitting the form."}
              </Block>
            </FormErrorMessage>
          </FormWrapper>
        </Section>
      ) : null}
    </div>
  );
}
