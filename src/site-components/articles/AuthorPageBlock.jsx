"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import * as _interactions from "../webflow_modules/interactions";
import { AuthorSection } from "./AuthorSection";
import { CResponsiveHeadline } from "../CResponsiveHeadline";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AuthorPageBlock({
  contributorAlignmentVariants = null,
  contributorBioSummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  contributorColorInherit = false,

  contributorEmailAddress = {
    href: "mailto:email@name.com",
  },

  contributorEmailAddressText = "name@domain.com",
  contributorEmailVisibility = true,
  contributorFontWeight = true,
  contributorHeadlineTag = "h1",
  contributorHeadlineVisibility = true,
  contributorLocation = "City, State",
  contributorMetaContributorImageAltText = "__wf_reserved_inherit",
  contributorName = "FirstName LastName",
  contributorPicture = "",
  contributorTextSizeVariants = "base",

  contributorWebsite = {
    href: "#",
  },

  contributorWebsiteText = "website.com",
  contributorWebsiteVisibility = true,

  facebookFacebookProfileLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  facebookFacebookVisibility = true,
  facebookIconSize = "2x2",
  instagramIconSize = "2x2",

  instagramInstagramProfileUrl = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  instagramInstagramVisibility = true,
  linkedinIconSize = "2x2",

  linkedinLinkedinProfileLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
    preload: "none",
  },

  linkedinLinkedInVisibility = true,
  slotHeadline,
  socialsBlockVisibility = true,
  xIconIconSize = "2x2",

  xIconXProfileLink = {
    href: "https://www.instagram.com/hello_revrebel",
    target: "_blank",
  },

  xIconXVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"g-component-base"} tag={"div"}>
        <Block
          className={"author_wrapper margin-top_large margin-inline_auto"}
          tag={"div"}
        >
          <AuthorSection
            authorMetaAuthorBioSummary={contributorBioSummary}
            authorMetaAuthorImage={contributorPicture}
            authorMetaAuthorImageAltText={
              contributorMetaContributorImageAltText
            }
            authorMetaAuthorLocationText={contributorLocation}
            authorMetaEmailAddress={contributorEmailAddress}
            authorMetaEmailAddressText={contributorEmailAddressText}
            authorMetaEmailVisibility={contributorEmailVisibility}
            authorMetaSlotHeadline={
              <CResponsiveHeadline
                headlineColorInherit={contributorColorInherit}
                headlineFontWeight={contributorFontWeight}
                headlineHeadlineSize={contributorTextSizeVariants}
                headlineHeadlineTag={contributorHeadlineTag}
                headlineHeadlineText={contributorName}
                headlineHeadlineVisibility={contributorHeadlineVisibility}
              />
            }
            authorMetaWebsite={contributorWebsite}
            authorMetaWebsiteText={contributorWebsiteText}
            authorMetaWebsiteVisibility={contributorWebsiteVisibility}
            facebookFacebookLink={facebookFacebookProfileLink}
            facebookFacebookVisibility={facebookFacebookVisibility}
            facebookIconSize={facebookIconSize}
            instagramIconSize={instagramIconSize}
            instagramInstagramLink={instagramInstagramProfileUrl}
            instagramInstagramVisibility={instagramInstagramVisibility}
            linkedinIconSize={linkedinIconSize}
            linkedinLinkedInLink={linkedinLinkedinProfileLink}
            linkedinLinkedInVisibility={linkedinLinkedInVisibility}
            socialsVisibility={socialsBlockVisibility}
            xIconSize={xIconIconSize}
            xXLink={xIconXProfileLink}
            xXVisibility={xIconXVisibility}
          />
          <Block tag={"div"}>{slotHeadline}</Block>
        </Block>
      </Block>
    </div>
  );
}
