"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { FormFieldStateAbbreviated } from "../formFields/FormFieldStateAbbreviated";

export function FormInputStateCountry({
  colorSelection = false,
  formInputSelection = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "State (Full)": "w-variant-80067dd6-2f3f-99bc-ac41-f7e0cd1ae603",
    "State (Abv)": "w-variant-189c9829-af74-4299-97b6-a7891401456c",
    Country: "w-variant-ce0a0c91-2b5a-dc73-8d57-9690707ae100",
  };

  const _activeStyleVariant = _styleVariantMap[formInputSelection];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`component_form-input ${_activeStyleVariant}`}
        tag={"div"}
      >
        {formInputSelection === "State (Full)" ? (
          <Block
            className={`visablity-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          />
        ) : null}
        {formInputSelection === "State (Abv)" ? (
          <Block
            className={`visablity-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            <FormFieldStateAbbreviated
              variant={
                colorSelection ? "Light" : !colorSelection ? "Dark" : "Light"
              }
            />
          </Block>
        ) : null}
        {formInputSelection === "Country" ? (
          <Block
            className={`visablity-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          />
        ) : null}
        {formInputSelection === "Playlist" ? (
          <Block
            className={`visablity-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`form_input is-form-input-selection ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`label text-color-2 is-line-height_sm ${_activeStyleVariant}`}
                tag={"div"}
              >
                {"Choose a Input Type"}
              </Block>
            </Block>
          </Block>
        ) : null}
      </Block>
    </div>
  );
}
