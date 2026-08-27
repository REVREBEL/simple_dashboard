"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Link from "../webflow_modules/Basic/components/Link";
import { SocialButton } from "../zzComponentsParts/SocialButton";

export function SocialsElement({
  iconSize = "2x2",
  socialButtonIconSettingsSocialButtonId = "",
  socialButtonIconSettingsSocialButtonVisibility = true,

  socialButtonLinksSocialButtonLinkLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  socialPlatform = "Base",
}) {
  const _styleVariantMap = {
    "2x2": "",
    "3x3": "w-variant-21e7c99c-32e2-5b55-71ee-ce0675045332",
    "4x4": "w-variant-cd42a16a-90b9-27c3-5ba2-e2c82cafdd57",
  };

  const _activeStyleVariant = _styleVariantMap[iconSize];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {socialButtonIconSettingsSocialButtonVisibility ? (
        <Block
          className={`social_icon ${_activeStyleVariant}`}
          id={socialButtonIconSettingsSocialButtonId}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`socials_link-block ${_activeStyleVariant}`}
            options={socialButtonLinksSocialButtonLinkLink}
          >
            <Block
              className={`socials_icon-size ${_activeStyleVariant}`}
              tag={"div"}
            >
              <SocialButton socialPlatform={socialPlatform} />
            </Block>
          </Link>
        </Block>
      ) : null}
    </div>
  );
}
