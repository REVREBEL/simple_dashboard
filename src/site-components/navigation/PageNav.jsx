"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { PageNavInnerComponent } from "../zzComponentsParts/PageNavInnerComponent";

export function PageNav({
  navBarFullPageHeadlineMenuNavHeadline = "explore",
  navBarFullPageHeadlineMenuNavHeadlineTag = "h2",
  navBarFullPageM3Submenu1SubmenuHeadline = "Revenue Strategy",
  navBarFullPageM3Submenu1SubmenuParagraph = "Maximize topline and margin with data-backed strategy",
  navBarFullPageM3Submenu1SubmenuTag = "Maximize Your Topline",
  navBarFullPageM3Submenu2SubmenuHeadline = "BRAND ACTIVATION",
  navBarFullPageM3Submenu2SubmenuParagraph = "Create demand and drive bookings with targeted marketing.",
  navBarFullPageM3Submenu2SubmenuTag = "Generate Demand",
  navBarFullPageM3Submenu3SubmenuHeadline = "Optimized Distribution",
  navBarFullPageM3Submenu3SubmenuParagraph = "Amplify your presence, control your channels, increase conversions.",
  navBarFullPageM3Submenu3SubmenuTag = "Connect Strategically",
  navBarFullPageM3Submenu4SubmenuHeadline = "Tech Integration",
  navBarFullPageM3Submenu4SubmenuParagraph = "Deploy and align the systems that power your hotel.",
  navBarFullPageM3Submenu4SubmenuTag = "Build Your Engine",
  navBarFullPageM4Submenu1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  navBarFullPageM4Submenu1SubmenuHeadline = "CTRLShift Blog",
  navBarFullPageM4Submenu1SubmenuParagraph = "Where we shareour tips and ideas ongeneratingrevenue atyour property",
  navBarFullPageM4Submenu1SubmenuTag = "Expore the trends",
  navBarFullPageM4Submenu2Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceeb8_plane.svg",
  navBarFullPageM4Submenu2SubmenuHeadline = "Travel Trends",
  navBarFullPageM4Submenu2SubmenuParagraph = "A collection of trends from the largest travel sites, researchers, and companies",
  navBarFullPageM4Submenu2SubmenuTag = "Explore the trends",
  navBarFullPageM4Submenu3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee98_gear.svg",
  navBarFullPageM4Submenu3SubmenuHeadline = "Revenue Toolkits",
  navBarFullPageM4Submenu3SubmenuParagraph = "Packed with strategies and resources to help increase revenue.",
  navBarFullPageM4Submenu3SubmenuTag = "Expore the trends",
  navBarFullPageM4Submenu4Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea1_labtop-with-cursor.svg",
  navBarFullPageM4Submenu4SubmenuHeadline = "Client Hub",
  navBarFullPageM4Submenu4SubmenuParagraph = "Real-time metrics + a full view of our current engagement or project.",
  navBarFullPageM4Submenu4SubmenuTag = "Expore the trends",

  navBarFullPageMenuLink1MenuLink = {
    href: "#",
  },

  navBarFullPageMenuLink1MenuText = "Home",

  navBarFullPageMenuLink2MeetTheRebels = {
    href: "#",
  },

  navBarFullPageMenuLink2MenuText = "Meet the rebels",
  navBarFullPageMenuLink3MenuText = "Solutions",

  navBarFullPageMenuLink3SubmenuLink1 = {
    href: "#",
  },

  navBarFullPageMenuLink3SubmenuLink2 = {
    href: "#",
  },

  navBarFullPageMenuLink3SubmenuLink3 = {
    href: "#",
  },

  navBarFullPageMenuLink3SubmenuLink4 = {
    href: "#",
  },

  navBarFullPageMenuLink4MenuText = "Resources",

  navBarFullPageMenuLink4SubmenuLink1 = {
    href: "#",
  },

  navBarFullPageMenuLink4SubmenuLink2 = {
    href: "#",
  },

  navBarFullPageMenuLink4SubmenuLink3 = {
    href: "#",
  },

  navBarFullPageMenuLink4SubmenuLink4 = {
    href: "#",
  },

  navBarFullPageMenuLink5MenuLink = {
    href: "#",
  },

  navBarFullPageMenuLink5MenuLinkText = "Partners",

  navBarFullPageMenuLink6MenuLink = {
    href: "#",
  },

  navBarFullPageMenuLink6MenuLinkText = "faq",

  navBarFullPageMenuLink7MenuLink = {
    href: "#",
  },

  navBarFullPageMenuLink7MenuLinkText = "CLient login",
  navBarFullPageSettingsNavBarId = "",
  navBarFullPageSettingsNavBarMainText = "MENU",
  navBarFullPageSettingsNavBarVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"page-nav_wrapper"} tag={"div"}>
        <PageNavInnerComponent
          headlineMenuNavHeadline={navBarFullPageHeadlineMenuNavHeadline}
          headlineMenuNavHeadlineTag={navBarFullPageHeadlineMenuNavHeadlineTag}
          m3Submenu1SubmenuHeadline={navBarFullPageM3Submenu1SubmenuHeadline}
          m3Submenu2SubmenuHeadline={navBarFullPageM3Submenu2SubmenuHeadline}
          m3Submenu3SubmenuHeadline={navBarFullPageM3Submenu3SubmenuHeadline}
          m3Submenu4SubmenuHeadline={navBarFullPageM3Submenu4SubmenuHeadline}
          m4Submenu1SubmenuHeadline={navBarFullPageM4Submenu1SubmenuHeadline}
          m4Submenu2SubmenuHeadline={navBarFullPageM4Submenu2SubmenuHeadline}
          m4Submenu3SubmenuHeadline={navBarFullPageM4Submenu3SubmenuHeadline}
          m4Submenu4SubmenuHeadline={navBarFullPageM4Submenu4SubmenuHeadline}
          menuLink1MenuText={navBarFullPageMenuLink1MenuText}
          menuLink2MenuText={navBarFullPageMenuLink2MenuText}
          menuLink3MenuText={navBarFullPageMenuLink3MenuText}
          menuLink3SubmenuLink1={navBarFullPageMenuLink3SubmenuLink1}
          menuLink3SubmenuLink2={navBarFullPageMenuLink3SubmenuLink2}
          menuLink3SubmenuLink3={navBarFullPageMenuLink3SubmenuLink3}
          menuLink3SubmenuLink4={navBarFullPageMenuLink3SubmenuLink4}
          menuLink4MenuText={navBarFullPageMenuLink4MenuText}
          menuLink4SubmenuLink1={navBarFullPageMenuLink4SubmenuLink1}
          menuLink4SubmenuLink2={navBarFullPageMenuLink4SubmenuLink2}
          menuLink4SubmenuLink3={navBarFullPageMenuLink4SubmenuLink3}
          menuLink4SubmenuLink4={navBarFullPageMenuLink4SubmenuLink4}
          menuLink5MenuLinkText={navBarFullPageMenuLink5MenuLinkText}
          menuLink6MenuLinkText={navBarFullPageMenuLink6MenuLinkText}
          menuLink7MenuLinkText={navBarFullPageMenuLink7MenuLinkText}
          settingsNavBarId={navBarFullPageSettingsNavBarId}
          settingsNavBarVisibility={navBarFullPageSettingsNavBarVisibility}
        />
      </Block>
    </div>
  );
}
