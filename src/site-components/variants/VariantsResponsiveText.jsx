"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsResponsiveText({
  settingsResponsiveTextVariants = "Regular Text Label",
  slotResponsiveTextSlotResponsiveText,
}) {
  const _styleVariantMap = {
    "Extra Small Text Label": "w-variant-aea304d4-45c4-c08b-f67e-90f5f57aa2a5",
    "Regular Text Label": "",
    "Small Text Label": "w-variant-bac7c444-90db-02dc-749e-55cf82dc3c29",
    "Medium Text Label": "w-variant-b55dd382-7c43-731e-55c1-46950476d930",
    "Small Paragraph": "w-variant-af7d40f9-fb1a-8b54-9fac-057ed19c26a8",
    "Regular Paragraph": "w-variant-84f684f2-3e11-ec30-bb31-098b678dbb69",
    "Medium Paragraph": "w-variant-ae4065f3-4e06-b2ff-927d-829f51394248",
    "Large Pararaph": "w-variant-495c48eb-6815-632c-a964-8b003c66be61",
    "Text Pair Label": "w-variant-d998744b-3c2d-caa4-be54-91d64b8f41d9",
    "Text Pair Body": "w-variant-e50e697e-5db2-5667-53c3-8701165f251e",
  };

  const _activeStyleVariant = _styleVariantMap[settingsResponsiveTextVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`text_responsive-wrapper ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`variants_label-text-size ${_activeStyleVariant}`}
          tag={"div"}
        >
          {slotResponsiveTextSlotResponsiveText}
        </Block>
      </Block>
    </div>
  );
}
