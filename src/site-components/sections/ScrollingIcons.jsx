"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import Section from "../webflow_modules/Layout/components/Section";

export function ScrollingIcons({
  icons113Icon1 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee33_travelocity-square.avif",
  icons113Icon10 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee2d_orbitz-square.avif",
  icons113Icon10Visibility = true,
  icons113Icon11 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee37_egencia-square.avif",
  icons113Icon11Visibility = true,
  icons113Icon12 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a0c6842bd73a2fe9159b08e_dayuse-square.png",
  icons113Icon12Visibility = true,
  icons113Icon13 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a0c6883042f025db69c442c_rakuten-square.png",
  icons113Icon13Visibility = true,
  icons113Icon1Visibility = true,
  icons113Icon2 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee3c_getaroom-square.avif",
  icons113Icon2Visibility = true,
  icons113Icon3 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee32_booking-square.avif",
  icons113Icon3Visibility = true,
  icons113Icon4 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee37_egencia-square.avif",
  icons113Icon4Visibility = true,
  icons113Icon5 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee11_kayak-square.avif",
  icons113Icon5Visibility = true,
  icons113Icon6 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee13_hotwire-square.avif",
  icons113Icon6Visibility = true,
  icons113Icon7 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee3a_hotel-tonight-square.avif",
  icons113Icon7Visibility = true,
  icons113Icon8 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee33_travelocity-square.avif",
  icons113Icon8Visibility = true,
  icons113Icon9 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee3c_getaroom-square.avif",
  icons113Icon9Visibility = true,
  icons1423Icon14 = "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cee2f_bonotel-square.avif",
  icons1423Icon14Visibility = true,
  icons1423Icon15Visibility = true,
  icons1423Icon16Visibility = true,
  icons1423Icon17Visibility = true,
  icons1423Icon18Visibility = true,
  icons1423Icon19Visibility = true,
  icons1423Icon20Visibility = true,
  sectionVisibility = true,
  settingsSectionId = "",
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
          className={"component_size padding-block_sm overflow_hidden"}
          grid={{
            type: "section",
          }}
          id={settingsSectionId}
          tag={"section"}
        >
          <Block className={"scrolling-icons_wrapper"} tag={"div"}>
            <Block className={"scrolling-icons_top"} tag={"div"}>
              {icons113Icon1Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.dribbble.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon1}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon2Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.egencia.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon2}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon3Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.kayak.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon3}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon6Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.hoteltonight.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon4}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon5Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.airbnb.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon5}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon9Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.tripadvisor.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon6}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon7Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.jtb.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon7}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon8Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.getaroom.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon8}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon10Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.hotwire.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon9}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon11Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.orbitz.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon10}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon12Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.priceline.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon11}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon4Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.trip.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon12}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon13Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.vrbo.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon13}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon14Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.agoda.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons1423Icon14}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon15Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.bonotel.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon1}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon16Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.expedia.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon2}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon17Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.travelzoo.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon3}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon18Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.booking.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon4}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon19Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.twitter.com",
                    target: "_blank",
                  }}
                >
                  {icons1423Icon19Visibility ? (
                    <Image
                      alt={""}
                      className={"scrolling_icon"}
                      height={"Auto"}
                      loading={"lazy"}
                      src={icons113Icon5}
                      width={"Auto"}
                    />
                  ) : null}
                </Link>
              ) : null}
              {icons1423Icon20Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.travelocity.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon6}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
            </Block>
            <Block className={"scrolling-icons_bottom"} tag={"div"}>
              {icons113Icon1Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.dribbble.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon1}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon2Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.egencia.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon2}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon3Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.kayak.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon3}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon6Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.hoteltonight.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon4}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon5Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.airbnb.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon5}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon9Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.tripadvisor.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon6}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon7Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.jtb.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon7}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon8Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.getaroom.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon8}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon10Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.hotwire.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon9}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon11Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.orbitz.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon10}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon12Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.priceline.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon11}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon4Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.trip.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon12}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons113Icon13Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.vrbo.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon13}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon14Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.agoda.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons1423Icon14}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon15Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.bonotel.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon1}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon16Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.expedia.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon2}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon17Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.travelzoo.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon3}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon18Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.booking.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon4}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
              {icons1423Icon19Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.twitter.com",
                    target: "_blank",
                  }}
                >
                  {icons1423Icon19Visibility ? (
                    <Image
                      alt={""}
                      className={"scrolling_icon"}
                      height={"Auto"}
                      loading={"lazy"}
                      src={icons113Icon5}
                      width={"Auto"}
                    />
                  ) : null}
                </Link>
              ) : null}
              {icons1423Icon20Visibility ? (
                <Link
                  block={"inline"}
                  button={false}
                  className={"icon-wrapper_150x150"}
                  options={{
                    href: "https://www.travelocity.com",
                    target: "_blank",
                  }}
                >
                  <Image
                    alt={""}
                    className={"scrolling_icon"}
                    height={"Auto"}
                    loading={"lazy"}
                    src={icons113Icon6}
                    width={"Auto"}
                  />
                </Link>
              ) : null}
            </Block>
          </Block>
        </Section>
      ) : null}
    </div>
  );
}
