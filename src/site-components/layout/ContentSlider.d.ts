import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ContentSlider(props: {
  autoplay?: Types.Boolean.Boolean;
  autoplaySpeedS?: number;
  header?: React.ReactNode;
  previewSlide?: number;
  showArrows?: Types.Boolean.Boolean;
  showDots?: Types.Boolean.Boolean;
  showHeader?: Types.Boolean.Boolean;
  slide1BottomRight?: React.ReactNode;
  slide1Content?: React.ReactNode;
  /** Type: Full, 35, 50, or 50v*/
  slide1Layout?: string;
  /** Top section height %. Bottom auto-fills to 100%.*/
  slide1Top?: number;
  slide1TopLeft?: React.ReactNode;
  slide2BottomRight?: React.ReactNode;
  slide2Content?: React.ReactNode;
  /** Type: Full, 35, 50, or 50v*/
  slide2Layout?: string;
  /** Top section height %. Bottom auto-fills to 100%.*/
  slide2Top?: number;
  slide2TopLeft?: React.ReactNode;
  slide3BottomRight?: React.ReactNode;
  slide3Content?: React.ReactNode;
  /** Type: Full, 35, 50, or 50v*/
  slide3Layout?: string;
  /** Top section height %. Bottom auto-fills to 100%.*/
  slide3Top?: number;
  slide3TopLeft?: React.ReactNode;
  slide4BottomRight?: React.ReactNode;
  slide4Content?: React.ReactNode;
  /** Type: Full, 35, 50, or 50v*/
  slide4Layout?: string;
  /** Top section height %. Bottom auto-fills to 100%.*/
  slide4Top?: number;
  slide4TopLeft?: React.ReactNode;
  /** Type: Auto, or a number in px.*/
  slideHeight?: string;
  slides?: "1" | "2" | "3" | "4";
}): React.JSX.Element;
