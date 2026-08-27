"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { Button } from "../buttons/Button";
import { CIcon } from "../CIcon";
import { CLabel } from "../CLabel";
import { CLightNavcard } from "./CLightNavcard";
import { CNavcard } from "./CNavcard";
import { TagIcon } from "../uiElements/TagIcon";
import { VNavbar } from "./VNavbar";

export function CNavbar({
  brandLogoBrandLogoVisibility = true,
  brandLogoImage = "",
  brandLogoImageAltText = "__wf_reserved_inherit",

  brandLogoLogoLink = {
    href: "https://revrebel-rebuild.webflow.io/",
  },

  contactButtonButtonColor = "Color Primary",
  contactButtonButtonId = "",

  contactButtonButtonLink = {
    href: "https://revrebel-rebuild.webflow.io/contact",
  },

  contactButtonButtonSize = "Small",
  contactButtonButtonText = "[ Get In Touch ] ",
  contactButtonButtonVisibility = true,
  contactButtonIconAltText = "__wf_reserved_inherit",
  contactButtonIconColorVariants = "Primary",
  contactButtonIconImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf2d5_generic.svg",
  contactButtonIconSizeVariants = "Extra Small",
  contactButtonIconVisibility = false,
  dropdownMenu2MenuVisibility1 = true,
  dropdownMenu2MenuVisibility2 = true,

  menuLink1MenuLink = {
    href: "https://revrebel-rebuild.webflow.io/",
  },

  menuLink1MenuLinkText = "Home",
  menuLink1MenuLinkVisibility = true,

  menuLink2MenuLink = {
    href: "https://revrebel-rebuild.webflow.io/about",
  },

  menuLink2MenuLinkText = "The Rebels",
  menuLink2MenuLinkVisibility = true,

  menuLink3MenuLink = {
    href: "https://revrebel-rebuild.webflow.io/solutions",
  },

  menuLink3MenuLinkText = "Pricing",
  menuLink3MenuLinkVisibility = false,

  menuLink4MenuLink = {
    href: "#",
  },

  menuLink4MenuLinkText = "Log in",
  menuLink4MenuLinkVisibility = true,

  menuLink5MenuLink = {
    href: "#",
  },

  menuLink5MenuLinkText = "Client Login",
  menuLink5MenuLinkVisibility = true,
  navcardColorCard1CardHeadlineText = "CTRLShift Blog",
  navcardColorCard1CardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf213_Brainstorming%20Sketches%2C%20Wireframes%2C%20%26%20Design%20Mockups%20Alt.avif",
  navcardColorCard1CardParagraphText = (
    <>
      {
        "Where we share our tips and ideas on generating revenueat your property"
      }
      <br />
    </>
  ),

  navcardColorCard1Link = {
    href: "https://revrebel-rebuild.webflow.io/blog",
  },

  navcardColorCard2CardHeadlineText = "Travel Trends",
  navcardColorCard2CardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceebd_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
  navcardColorCard2CardParagraphText = "A collection of trends from the largest travel sites, researchers, and companies.",

  navcardColorCard2Link = {
    href: "#",
  },

  navcardColorCard3CardHeadlineText = "Strategy Toolkits",
  navcardColorCard3CardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebde_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.avif",
  navcardColorCard3CardParagraphText = (
    <>
      {
        "Packed with strategies and resources to help increase revenue at your property"
      }
      <br />
    </>
  ),

  navcardColorCard3Link = {
    href: "#",
  },

  navcardColorCard4CardHeadlineText = "The Client Hub",
  navcardColorCard4CardImage = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf274_Man%20Reading%20Newspaper%20in%20Bed%20v2.avif",
  navcardColorCard4CardParagraphText = "Real-time metrics witha full view of our current engagement or project.",

  navcardColorCard4Link = {
    href: "#",
  },

  navcardWhiteCard1CardVariant = "Light",
  navcardWhiteCard1HeadlineTag = "h3",
  navcardWhiteCard1HeadlineText = "Revenue Strategy",
  navcardWhiteCard1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  navcardWhiteCard1IconAltText = "__wf_reserved_inherit",
  navcardWhiteCard1IconVisibility = false,

  navcardWhiteCard1Link = {
    href: "https://revrebel-rebuild.webflow.io/revenue-strategy",
  },

  navcardWhiteCard1Paragraph = "Maximize topline and margin with data-backed strategy",
  navcardWhiteCard2CardVariant = "Light",
  navcardWhiteCard2HeadlineTag = "h3",
  navcardWhiteCard2HeadlineText = "Brand Activation",
  navcardWhiteCard2Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  navcardWhiteCard2IconAltText = "__wf_reserved_inherit",
  navcardWhiteCard2IconVisibility = false,

  navcardWhiteCard2Link = {
    href: "https://revrebel-rebuild.webflow.io/brand-activation",
  },

  navcardWhiteCard2Paragraph = "Create demand and drive bookings with targeted marketing.",
  navcardWhiteCard3CardVariant = "Light",
  navcardWhiteCard3HeadlineTag = "h3",
  navcardWhiteCard3HeadlineText = "Optimized Distribution",
  navcardWhiteCard3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  navcardWhiteCard3IconAltText = "__wf_reserved_inherit",
  navcardWhiteCard3IconVisibility = false,

  navcardWhiteCard3Link = {
    href: "https://revrebel-rebuild.webflow.io/distribution",
  },

  navcardWhiteCard3Paragraph = "Amplify your presence, control your channels, increase conversions.",
  navcardWhiteCard4CardVariant = "Light",
  navcardWhiteCard4HeadlineTag = "h3",
  navcardWhiteCard4HeadlineText = "Tech Integration",
  navcardWhiteCard4Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg",
  navcardWhiteCard4IconAltText = "__wf_reserved_inherit",
  navcardWhiteCard4IconVisibility = false,

  navcardWhiteCard4Link = {
    href: "https://revrebel-rebuild.webflow.io/tech-integration",
  },

  navcardWhiteCard4Paragraph = "Maximize topline and margin with data-backed strategy",
  navigationBarSettingsNavigationColor = "Light",
  navigationBarSettingsNavigationVisibility = true,
  tagIcon1Color = "Primary",
  tagIcon1Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9fa_fi-arrow-right.svg",
  tagIcon1IconAltText = "__wf_reserved_inherit",
  tagIcon1IconSizeVariants = "Extra Small",
  tagIcon1IconVisibility = false,
  tagIcon1TagClickable = "Solid",
  tagIcon1TagId = "",
  tagIcon1TagSize = "Regular",
  tagIcon1TagText = "Maximize Your Topline",
  tagIcon1TagVisibility = true,
  tagIcon2TagColor = "Color 2",
  tagIcon2TagIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9fa_fi-arrow-right.svg",
  tagIcon2TagIconAltText = "__wf_reserved_inherit",
  tagIcon2TagIconSizeVariants = "Extra Small",
  tagIcon2TagIconVisibility = false,
  tagIcon2TagTagClickable = "Solid",
  tagIcon2TagTagId = "",
  tagIcon2TagTagSize = "Regular",
  tagIcon2TagTagText = "Generate Demand",
  tagIcon2TagTagVisibility = true,
  tagIcon3Color = "Color 5",
  tagIcon3Icon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9fa_fi-arrow-right.svg",
  tagIcon3IconAltText = "__wf_reserved_inherit",
  tagIcon3IconSizeVariants = "Extra Small",
  tagIcon3IconVisibility = false,
  tagIcon3TagClickable = "Solid",
  tagIcon3TagId = "",
  tagIcon3TagSize = "Regular",
  tagIcon3TagText = "Connect Strategically",
  tagIcon3TagVisibility = true,
  tagIcon4TagColor = "Color 8",
  tagIcon4TagIcon = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ce9fa_fi-arrow-right.svg",
  tagIcon4TagIconAltText = "__wf_reserved_inherit",
  tagIcon4TagIconSizeVariants = "Extra Small",
  tagIcon4TagIconVisibility = false,
  tagIcon4TagTagClickable = "Solid",
  tagIcon4TagTagId = "",
  tagIcon4TagTagSize = "Regular",
  tagIcon4TagTagText = "Build Your Engine",
  tagIcon4TagTagVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <VNavbar
          brandLogoBrandLogoVisibility={brandLogoBrandLogoVisibility}
          brandLogoImage={brandLogoImage}
          brandLogoImageAltText={brandLogoImageAltText}
          brandLogoLogoLink={brandLogoLogoLink}
          buttonButton={
            <Button
              buttonColor={contactButtonButtonColor}
              buttonId={contactButtonButtonId}
              buttonLink={contactButtonButtonLink}
              buttonSize={contactButtonButtonSize}
              buttonText={contactButtonButtonText}
              buttonVisibility={contactButtonButtonVisibility}
              iconIconAltText={contactButtonIconAltText}
              iconIconColorVariants={contactButtonIconColorVariants}
              iconIconImage={contactButtonIconImage}
              iconIconSizeVariants={contactButtonIconSizeVariants}
              iconIconVisibility={contactButtonIconVisibility}
            />
          }
          menuDropdown1DropdownMenu1Card1={
            <CLightNavcard
              variant={navcardWhiteCard1CardVariant}
              whiteCardHeadlineTag={navcardWhiteCard1HeadlineTag}
              whiteCardHeadlineText={navcardWhiteCard1HeadlineText}
              whiteCardIcon={navcardWhiteCard1Icon}
              whiteCardIconAltText={navcardWhiteCard1IconAltText}
              whiteCardIconVisibility={navcardWhiteCard1IconVisibility}
              whiteCardLink={navcardWhiteCard1Link}
              whiteCardParagraph={navcardWhiteCard1Paragraph}
              whiteCardSlotLabel={
                <TagIcon
                  iconIcon={tagIcon1Icon}
                  iconIconAltText={tagIcon1IconAltText}
                  iconIconSizeVariants={tagIcon1IconSizeVariants}
                  iconIconVisibility={tagIcon1IconVisibility}
                  tagColor={tagIcon1Color}
                  tagTagClickable={tagIcon1TagClickable}
                  tagTagId={tagIcon1TagId}
                  tagTagSize={tagIcon1TagSize}
                  tagTagText={tagIcon1TagText}
                  tagTagVisibility={tagIcon1TagVisibility}
                />
              }
            />
          }
          menuDropdown1DropdownMenu1Card2={
            <CLightNavcard
              variant={navcardWhiteCard2CardVariant}
              whiteCardHeadlineTag={navcardWhiteCard2HeadlineTag}
              whiteCardHeadlineText={navcardWhiteCard2HeadlineText}
              whiteCardIcon={navcardWhiteCard2Icon}
              whiteCardIconAltText={navcardWhiteCard2IconAltText}
              whiteCardIconVisibility={navcardWhiteCard2IconVisibility}
              whiteCardLink={navcardWhiteCard2Link}
              whiteCardParagraph={navcardWhiteCard2Paragraph}
              whiteCardSlotLabel={
                <TagIcon
                  iconIcon={tagIcon2TagIcon}
                  iconIconAltText={tagIcon2TagIconAltText}
                  iconIconSizeVariants={tagIcon2TagIconSizeVariants}
                  iconIconVisibility={tagIcon2TagIconVisibility}
                  tagColor={tagIcon2TagColor}
                  tagTagClickable={tagIcon2TagTagClickable}
                  tagTagId={tagIcon2TagTagId}
                  tagTagSize={tagIcon2TagTagSize}
                  tagTagText={tagIcon2TagTagText}
                  tagTagVisibility={tagIcon2TagTagVisibility}
                />
              }
            />
          }
          menuDropdown1DropdownMenu1Card3={
            <CLightNavcard
              variant={navcardWhiteCard3CardVariant}
              whiteCardHeadlineTag={navcardWhiteCard3HeadlineTag}
              whiteCardHeadlineText={navcardWhiteCard3HeadlineText}
              whiteCardIcon={navcardWhiteCard3Icon}
              whiteCardIconAltText={navcardWhiteCard3IconAltText}
              whiteCardIconVisibility={navcardWhiteCard3IconVisibility}
              whiteCardLink={navcardWhiteCard3Link}
              whiteCardParagraph={navcardWhiteCard3Paragraph}
              whiteCardSlotLabel={
                <TagIcon
                  iconIcon={tagIcon3Icon}
                  iconIconAltText={tagIcon3IconAltText}
                  iconIconSizeVariants={tagIcon3IconSizeVariants}
                  iconIconVisibility={tagIcon3IconVisibility}
                  tagColor={tagIcon3Color}
                  tagTagClickable={tagIcon3TagClickable}
                  tagTagId={tagIcon3TagId}
                  tagTagSize={tagIcon3TagSize}
                  tagTagText={tagIcon3TagText}
                  tagTagVisibility={tagIcon3TagVisibility}
                />
              }
            />
          }
          menuDropdown1DropdownMenu1Card4={
            <CLightNavcard
              variant={navcardWhiteCard4CardVariant}
              whiteCardHeadlineTag={navcardWhiteCard4HeadlineTag}
              whiteCardHeadlineText={navcardWhiteCard4HeadlineText}
              whiteCardIcon={navcardWhiteCard4Icon}
              whiteCardIconAltText={navcardWhiteCard4IconAltText}
              whiteCardIconVisibility={navcardWhiteCard4IconVisibility}
              whiteCardLink={navcardWhiteCard4Link}
              whiteCardParagraph={navcardWhiteCard4Paragraph}
              whiteCardSlotLabel={
                <TagIcon
                  iconIcon={tagIcon4TagIcon}
                  iconIconAltText={tagIcon4TagIconAltText}
                  iconIconSizeVariants={tagIcon4TagIconSizeVariants}
                  iconIconVisibility={tagIcon4TagIconVisibility}
                  tagColor={tagIcon4TagColor}
                  tagTagClickable={tagIcon4TagTagClickable}
                  tagTagId={tagIcon4TagTagId}
                  tagTagSize={tagIcon4TagTagSize}
                  tagTagText={tagIcon4TagTagText}
                  tagTagVisibility={tagIcon4TagTagVisibility}
                />
              }
            />
          }
          menuDropdown1DropdownMenu1MenuVisibility={
            dropdownMenu2MenuVisibility2
          }
          menuDropdown2DropdownMenu2Card1={
            <CNavcard
              cardColor={"primary"}
              cardHeadline={navcardColorCard1CardHeadlineText}
              cardImage={navcardColorCard1CardImage}
              cardLink={navcardColorCard1Link}
              cardParagraph={navcardColorCard1CardParagraphText}
              slotSlotIcon={
                <CIcon
                  iconIconSize={"lg"}
                  iconImage={
                    "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301ceea3_get-quote.svg"
                  }
                  optionsColorMode={"normal"}
                  optionsIconColor={"primary"}
                />
              }
              slotSlotLabel={
                <CLabel
                  labelColorMode={"inverse"}
                  labelDateLabel={"Read the Blog"}
                  labelFontSize={"tiny"}
                />
              }
            />
          }
          menuDropdown2DropdownMenu2Card2={
            <CNavcard
              cardColor={"cyan"}
              cardHeadline={navcardColorCard2CardHeadlineText}
              cardImage={navcardColorCard2CardImage}
              cardLink={navcardColorCard2Link}
              cardParagraph={navcardColorCard2CardParagraphText}
              slotSlotIcon={
                <CIcon
                  iconIconSize={"lg"}
                  iconImage={
                    "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf02f_airplane.svg"
                  }
                  optionsColorMode={"normal"}
                  optionsIconColor={"cyan"}
                />
              }
              slotSlotLabel={
                <CLabel
                  labelColor={"cyan"}
                  labelColorMode={"inverse"}
                  labelDateLabel={"Explore Trends"}
                  labelFontSize={"tiny"}
                />
              }
            />
          }
          menuDropdown2DropdownMenu2Card3={
            <CNavcard
              cardColor={"purple"}
              cardHeadline={navcardColorCard3CardHeadlineText}
              cardImage={navcardColorCard3CardImage}
              cardLink={navcardColorCard3Link}
              cardParagraph={navcardColorCard3CardParagraphText}
              slotSlotIcon={
                <CIcon
                  iconIconSize={"lg"}
                  iconImage={
                    "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf063_computer-graph.svg"
                  }
                  optionsColorMode={"normal"}
                  optionsIconColor={"purple"}
                />
              }
              slotSlotLabel={
                <CLabel
                  labelColor={"purple"}
                  labelColorMode={"inverse"}
                  labelDateLabel={"Get the Brief"}
                  labelFontSize={"tiny"}
                />
              }
            />
          }
          menuDropdown2DropdownMenu2Card4={
            <CNavcard
              cardColor={"yellow"}
              cardColorMode={"normal"}
              cardHeadline={navcardColorCard4CardHeadlineText}
              cardImage={navcardColorCard4CardImage}
              cardLink={navcardColorCard4Link}
              cardParagraph={navcardColorCard4CardParagraphText}
              slotSlotIcon={
                <CIcon
                  iconIconSize={"lg"}
                  iconImage={
                    "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cf07f_gear.svg"
                  }
                  optionsColorMode={"normal"}
                  optionsIconColor={"yellow"}
                />
              }
              slotSlotLabel={
                <CLabel
                  labelColor={"yellow"}
                  labelColorMode={"inverse"}
                  labelDateLabel={"See the Tools"}
                  labelFontSize={"tiny"}
                />
              }
            />
          }
          menuDropdown2DropdownMenu2MenuVisibility={
            dropdownMenu2MenuVisibility1
          }
          menuLink1MenuLink={menuLink1MenuLink}
          menuLink1MenuLinkText={menuLink1MenuLinkText}
          menuLink1MenuLinkVisibility={menuLink1MenuLinkVisibility}
          menuLink2MenuLink={menuLink2MenuLink}
          menuLink2MenuLinkText={menuLink2MenuLinkText}
          menuLink2MenuLinkVisibility={menuLink2MenuLinkVisibility}
          menuLink3MenuLink={menuLink3MenuLink}
          menuLink3MenuLinkText={menuLink3MenuLinkText}
          menuLink3MenuLinkVisibility={menuLink3MenuLinkVisibility}
          menuLink4MenuLink={menuLink4MenuLink}
          menuLink4MenuLinkText={menuLink4MenuLinkText}
          menuLink4MenuLinkVisibility={menuLink4MenuLinkVisibility}
          menuLink5MenuLink={menuLink5MenuLink}
          menuLink5MenuLinkText={menuLink5MenuLinkText}
          menuLink5MenuLinkVisibility={menuLink5MenuLinkVisibility}
          settingsNavigationColor={navigationBarSettingsNavigationColor}
          settingsNavigationVisibility={
            navigationBarSettingsNavigationVisibility
          }
        />
      </Block>
    </div>
  );
}
