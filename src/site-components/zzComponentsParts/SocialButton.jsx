"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function SocialButton({ socialPlatform = "Base" }) {
  const _styleVariantMap = {
    Base: "",
    Instagram: "w-variant-de5fb2a0-ccd0-cdd7-7c2d-7ddea245d37f",
    "Instagram Filled": "w-variant-a2ac16c9-1a02-36bd-44b0-7f0e1005312a",
    Linkedin: "w-variant-841adf25-f31c-fa0c-872e-3155fd2ba4db",
    "LinkedIn Filled": "w-variant-71a44a44-9164-4ae9-1294-436495d35e60",
    Facebook: "w-variant-908ff316-64e0-5224-0e3b-022b57b79d4f",
    "Facebook Filled": "w-variant-e39e2ed1-d2b9-2342-1073-81f59f955c6f",
    X: "w-variant-acccc6fa-2b17-52e4-1dfc-945ffa250823",
    "X Filled": "w-variant-e16391df-4cac-49cb-feff-3ddee21b4500",
    Blog: "w-variant-33b0b924-37a5-d908-0460-c1379a172b0f",
    "Blog Filled": "w-variant-6ea65578-0b49-a0cb-c5e7-ca975a9f9f75",
    Github: "w-variant-f01aa58a-8e1a-9544-26b2-a636753851f0",
    "Github Filled": "w-variant-8c83e54c-e0f0-37ba-0366-12c713629539",
    Google: "w-variant-6cb59e76-ab73-5d2e-1a6b-d32bf38abc88",
    "Google Drive": "w-variant-a3fc72a8-d255-8f83-b892-cdba941e3049",
    Telegram: "w-variant-bdc9df34-0aa2-b0c2-c9b8-4bb5bffb9c37",
    "Telegram Solid": "w-variant-61435de5-e1e3-a41b-2cda-75c7cced4083",
    Email: "w-variant-af9c3b29-8ae1-d622-4439-84af967089d4",
    "Email Solid": "w-variant-dbee9929-e9b3-9f8b-462e-83f138e74813",
  };

  const _activeStyleVariant = _styleVariantMap[socialPlatform];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`socials_component-button icon-toggle ${_activeStyleVariant}`}
        data-icon-size={"2x2"}
        id={"w-node-a2804876-8f34-130a-c7ce-696f48b77deb-48b77deb"}
        tag={"div"}
      >
        <Block
          className={`socials_button_hover-on normal-state ${_activeStyleVariant}`}
          tag={"div"}
        />
        <Block
          className={`socials_button_hover-off hover-state ${_activeStyleVariant}`}
          tag={"div"}
        />
      </Block>
    </div>
  );
}
