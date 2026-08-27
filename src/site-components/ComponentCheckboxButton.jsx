"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import FormCheckboxInput from "./webflow_modules/Form/components/FormCheckboxInput";
import FormCheckboxWrapper from "./webflow_modules/Form/components/FormCheckboxWrapper";
import FormInlineLabel from "./webflow_modules/Form/components/FormInlineLabel";

export function ComponentCheckboxButton({
  checkboxVisibility = true,
  labelsBrandColorPrimaryLabelText = "Blue Checkbox",
  solidCheckboxesBrandColorPrimaryCheckboxVisible = true,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "Color Primary": "w-variant-1eb2c7ed-0d76-2ebd-2712-de33c7514b50",
    "Color 1": "w-variant-bb97dc93-890e-9e19-cba0-1cc16a0e21f3",
    "Color 2": "w-variant-666becd4-946f-3de3-e9f1-82173722dacd",
    "Color 3": "w-variant-05ac484b-beaf-d752-1f1c-0aaafe871ed1",
    "Color 4": "w-variant-66e64400-cf9d-3ffd-1666-d11d4b54d069",
    "Color 5": "w-variant-3d6e7d33-b463-ea37-31a5-2cbedbd38b4b",
    "Color 6": "w-variant-007cbd98-4133-466e-98d1-77c9c00fe588",
    "Color 7": "w-variant-e5a7dd2e-2a5c-dd16-2b58-96322e163c30",
    "Color 8": "w-variant-e8892294-a6e0-5d5f-38b6-ac14594b0376",
    "Color 9": "w-variant-56e31f4a-a9e3-05d5-c49e-93542e711f9f",
    "Primary Outline": "w-variant-7e239322-3455-d1da-2034-de29f97e72c6",
    "Color 1 Outline": "w-variant-ca4fa4d2-d5ee-1996-895d-aee2cfb12b3c",
    "Color 2 Outline": "w-variant-44b8ffa8-1d49-31fe-3d03-7a27633d592e",
    "Color 3 Outline": "w-variant-5138e3e0-55ce-3ed0-5302-8eed6fc2353e",
    "Color 4 Outline": "w-variant-57f64b3f-52f3-44b1-9494-741f46ac7361",
    "Color 5 Outline": "w-variant-92cd92f4-530a-1b68-53ba-cc9fcafc5291",
    "Color 6 Outline": "w-variant-bbdb068c-4914-a39b-e7a7-a8cffd8d6dd1",
    "Color 7 Outline": "w-variant-b4afaee7-5785-7f26-b152-b90e34645a7e",
    "Color 8 Outline": "w-variant-4378c850-db31-8d56-0a99-87b81e36eb5f",
    "Color 9 Outline": "w-variant-3fa72b2d-d8f4-cd3a-fa31-16d8ed74443d",
    "Base 2": "w-variant-a398a65d-9c94-b230-d591-317936d7e0da",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {checkboxVisibility ? (
        <Block tag={"div"}>
          {solidCheckboxesBrandColorPrimaryCheckboxVisible ? (
            <Block
              className={`component_checkbox_color-variants ${_activeStyleVariant}`}
              tag={"div"}
            >
              {solidCheckboxesBrandColorPrimaryCheckboxVisible ? (
                <FormCheckboxWrapper
                  className={`component_checkbox-container ${_activeStyleVariant}`}
                >
                  <FormCheckboxInput
                    checked={false}
                    className={`component_checkbox-button_variants ${_activeStyleVariant}`}
                    customClassName={"w-checkbox-input--inputType-custom"}
                    form={{
                      type: "checkbox-input",
                      name: "",
                    }}
                    inputType={"custom"}
                    required={false}
                    type={"checkbox"}
                  />
                  <FormInlineLabel
                    className={`component_checkbox-label ${_activeStyleVariant}`}
                  >
                    {labelsBrandColorPrimaryLabelText}
                  </FormInlineLabel>
                </FormCheckboxWrapper>
              ) : null}
            </Block>
          ) : null}
        </Block>
      ) : null}
    </div>
  );
}
