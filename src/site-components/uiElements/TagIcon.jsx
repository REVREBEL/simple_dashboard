"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { TagVariant } from "../variant/TagVariant";
import { VariantsTagColor } from "../variants/VariantsTagColor";
import { VariantsTagFontSize } from "../variants/VariantsTagFontSize";
import { VariantsTagStates } from "../variants/VariantsTagStates";

export function TagIcon({
  iconIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf129_Arrow-currentColor.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconSizeVariants = "Extra Small",
  iconIconVisibility = false,
  tagColor = "Color 5",
  tagTagClickable = "Solid",
  tagTagId = "",
  tagTagSize = "Regular",
  tagTagText = "Mavericks 4 Life",
  tagTagVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {tagTagVisibility ? (
        <Block className={"component_tag"} id={tagTagId} tag={"div"}>
          <VariantsTagFontSize
            tagSlotLabelFontSize={
              <VariantsTagColor
                settingsColor={tagColor}
                slotVariantsTagColor={
                  <VariantsTagStates
                    slotTagStates={
                      <TagVariant
                        icon={iconIcon}
                        iconAltText={iconIconAltText}
                        iconIconVisibility={iconIconVisibility}
                        iconSizeVariants={iconIconSizeVariants}
                        tagTagText={tagTagText}
                        variantsIconColorIconColor={
                          tagColor === "Primary"
                            ? "Color 4"
                            : tagColor === "Color 1"
                            ? "Color 9"
                            : tagColor === "Color 2"
                            ? "Color 5"
                            : tagColor === "Color 3"
                            ? "Color 8"
                            : tagColor === "Color 4"
                            ? "Primary"
                            : tagColor === "Color 5"
                            ? "Color 7"
                            : tagColor === "Color 6"
                            ? "Primary"
                            : tagColor === "Color 7"
                            ? "Color 4"
                            : tagColor === "Color 8"
                            ? "Color 3"
                            : tagColor === "Color 9"
                            ? "Primary"
                            : tagColor === "Light"
                            ? "Dark"
                            : "None"
                        }
                      />
                    }
                    variant={tagTagClickable}
                  />
                }
              />
            }
            tagTagSize={tagTagSize}
          />
        </Block>
      ) : null}
    </div>
  );
}
