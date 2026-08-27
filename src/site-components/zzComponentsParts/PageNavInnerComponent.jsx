"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import DropdownList from "../webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "../webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "../webflow_modules/Dropdown/components/DropdownWrapper";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import NavbarButton from "../webflow_modules/Navbar/components/NavbarButton";
import NavbarMenu from "../webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "../webflow_modules/Navbar/components/NavbarWrapper";
import * as _interactions from "../webflow_modules/interactions";
import { ColorNavcardFullpage } from "./ColorNavcardFullpage";
import { WhiteNavcardFullpage } from "./WhiteNavcardFullpage";

const _interactionsData = JSON.parse(
  '{"events":{"e-150":{"id":"e-150","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-151"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658056499},"e-151":{"id":"e-151","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-150"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce0","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658056501},"e-152":{"id":"e-152","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-153"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695587},"e-153":{"id":"e-153","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-152"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"4feb7c3f-1315-16c5-539e-ee97e2f56ce4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1686658695588},"e-628":{"id":"e-628","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-144","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-629"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-navbar_menu-dropdown","originalId":"9189df38-b9e4-2401-ea87-e8c735bded1f","appliesTo":"CLASS"},"targets":[{"selector":".page-navbar_menu-dropdown","originalId":"9189df38-b9e4-2401-ea87-e8c735bded1f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758712742002},"e-629":{"id":"e-629","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-145","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-628"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-navbar_menu-dropdown","originalId":"9189df38-b9e4-2401-ea87-e8c735bded1f","appliesTo":"CLASS"},"targets":[{"selector":".page-navbar_menu-dropdown","originalId":"9189df38-b9e4-2401-ea87-e8c735bded1f","appliesTo":"CLASS"}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758712742006},"e-630":{"id":"e-630","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-125","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-631"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".trigger_page-navbar_open","originalId":"6a09244ce43d4439301ce556|5be35621-9c06-a8a5-7ca0-7bbc29287d98","appliesTo":"CLASS"},"targets":[{"selector":".trigger_page-navbar_open","originalId":"6a09244ce43d4439301ce556|5be35621-9c06-a8a5-7ca0-7bbc29287d98","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758788108815},"e-632":{"id":"e-632","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-126","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-633"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".trigger_page-navbar_close","originalId":"6a09244ce43d4439301ce556|8806b037-94f2-7851-0ab9-e6d7e24281a6","appliesTo":"CLASS"},"targets":[{"selector":".trigger_page-navbar_close","originalId":"6a09244ce43d4439301ce556|8806b037-94f2-7851-0ab9-e6d7e24281a6","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758788171578},"e-638":{"id":"e-638","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-152","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-639"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-639":{"id":"e-639","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-153","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-638"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-640":{"id":"e-640","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-154","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-641"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-641":{"id":"e-641","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-155","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-640"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_sub-link_block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_sub-link_block","originalId":"6a09244ce43d4439301ce561|5951306f-a988-e9f1-fd19-97fad63ff51e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758792040548},"e-692":{"id":"e-692","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-188","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-693"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-navbar_menu-dropdown","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"},"targets":[{"selector":".page-navbar_menu-dropdown","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759190092330},"e-693":{"id":"e-693","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-189","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-692"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-navbar_menu-dropdown","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"},"targets":[{"selector":".page-navbar_menu-dropdown","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c39","appliesTo":"CLASS"}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759190092330},"e-696":{"id":"e-696","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-192","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-697"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_menu-text","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c15","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_menu-text","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c15","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759190092330},"e-697":{"id":"e-697","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-193","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-696"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_menu-text","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c15","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_menu-text","originalId":"6a09244ce43d4439301cef17|59bdbcd8-8514-263d-3984-3af63ebb7c15","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759190092330},"e-708":{"id":"e-708","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-196","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-709"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759234248139},"e-709":{"id":"e-709","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-197","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-708"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759234248142},"e-741":{"id":"e-741","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-742":{"id":"e-742","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-743":{"id":"e-743","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-744":{"id":"e-744","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-745":{"id":"e-745","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-746":{"id":"e-746","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-747":{"id":"e-747","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-748":{"id":"e-748","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-751":{"id":"e-751","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-752":{"id":"e-752","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-753":{"id":"e-753","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-754":{"id":"e-754","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-763":{"id":"e-763","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-764":{"id":"e-764","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-765":{"id":"e-765","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-766":{"id":"e-766","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-767":{"id":"e-767","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-768"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469},"e-768":{"id":"e-768","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-767"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469},"e-769":{"id":"e-769","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-770"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908493},"e-770":{"id":"e-770","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-769"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908497},"e-771":{"id":"e-771","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-772"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216572},"e-772":{"id":"e-772","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-771"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216576},"e-773":{"id":"e-773","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-208","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-774"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419910248},"e-774":{"id":"e-774","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-209","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-773"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"},"targets":[{"selector":".page-nav","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893c3","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419910251},"e-950":{"id":"e-950","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-256","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-951"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769300654747},"e-951":{"id":"e-951","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-257","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-950"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769300654747},"e-992":{"id":"e-992","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-993":{"id":"e-993","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-994":{"id":"e-994","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-995":{"id":"e-995","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-1004":{"id":"e-1004","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1005":{"id":"e-1005","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1006":{"id":"e-1006","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-1007":{"id":"e-1007","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-1008":{"id":"e-1008","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993312},"e-1009":{"id":"e-1009","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1026"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993317},"e-1012":{"id":"e-1012","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-1013":{"id":"e-1013","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-1014":{"id":"e-1014","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-1015":{"id":"e-1015","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-1024":{"id":"e-1024","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1025":{"id":"e-1025","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1026":{"id":"e-1026","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993312},"e-1027":{"id":"e-1027","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1026"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993317},"e-1028":{"id":"e-1028","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-1029":{"id":"e-1029","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280}},"actionLists":{"a-69":{"id":"a-69","title":"Nav Link [ Hover IN ]","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"value":0,"unit":""}},{"id":"a-69-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-69-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-69-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686657573155},"a-70":{"id":"a-70","title":"Nav Link [ Hover OUT ]","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-70-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686657573155},"a-71":{"id":"a-71","title":"Nav Sublink [ Hover IN ]","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-71-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]},{"actionItems":[{"id":"a-71-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"heightValue":50,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-71-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"globalSwatchId":"9474225c","rValue":239,"bValue":122,"gValue":118,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686658737913},"a-72":{"id":"a-72","title":"Nav Sublink [ Hover OUT ]","actionItemGroups":[{"actionItems":[{"id":"a-72-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-72-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686658737913},"a-144":{"id":"a-144","title":"PageNav Arrow Right Menu [OPEN]","actionItemGroups":[{"actionItems":[{"id":"a-144-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"xValue":50,"zValue":null,"xUnit":"px","yUnit":"PX","zUnit":"px"}}]},{"actionItems":[{"id":"a-144-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-145":{"id":"a-145","title":"PageNav Arrow Right Menu [CLOSE]","actionItemGroups":[{"actionItems":[{"id":"a-145-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-145-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-125":{"id":"a-125","title":"OnClick-Menu-Hide","actionItemGroups":[{"actionItems":[{"id":"a-125-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1757200497999},"a-126":{"id":"a-126","title":"OnClick-Menu-Show","actionItemGroups":[{"actionItems":[{"id":"a-126-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1757200497999},"a-152":{"id":"a-152","title":"Nav Link [ Hover IN ] 2","actionItemGroups":[{"actionItems":[{"id":"a-152-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"value":0,"unit":""}},{"id":"a-152-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-152-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-152-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686657573155},"a-153":{"id":"a-153","title":"Nav Link [ Hover OUT ] 2","actionItemGroups":[{"actionItems":[{"id":"a-153-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"xValue":-50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-153-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-menu_container","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d33"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686657573155},"a-154":{"id":"a-154","title":"Nav Sublink [ Hover IN ] 2","actionItemGroups":[{"actionItems":[{"id":"a-154-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-154-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]},{"actionItems":[{"id":"a-154-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"heightValue":50,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-154-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"globalSwatchId":"9474225c","rValue":239,"bValue":122,"gValue":118,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1686658737913},"a-155":{"id":"a-155","title":"Nav Sublink [ Hover OUT ] 2","actionItemGroups":[{"actionItems":[{"id":"a-155-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"heightValue":100,"widthUnit":"PX","heightUnit":"%","locked":false}},{"id":"a-155-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_sub-link_line","selectorGuids":["cd8c0c4e-d65c-944f-bf6b-22e6be1f8d36"]},"globalSwatchId":"81aa02ec","rValue":182,"bValue":145,"gValue":169,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1686658737913},"a-188":{"id":"a-188","title":"PageNav Arrow Right Menu [OPEN] 2","actionItemGroups":[{"actionItems":[{"id":"a-188-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"xValue":50,"zValue":null,"xUnit":"px","yUnit":"PX","zUnit":"px"}}]},{"actionItems":[{"id":"a-188-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"zValue":-180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-189":{"id":"a-189","title":"PageNav Arrow Right Menu [CLOSE] 2","actionItemGroups":[{"actionItems":[{"id":"a-189-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-189-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-navbar_dropdown-icon","selectorGuids":["ef7b9679-c472-3913-c794-95758a089917"]},"yValue":0,"zValue":0,"xUnit":"DEG","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758711997810},"a-192":{"id":"a-192","title":"OnHover In Page NavBar Color Change 2","actionItemGroups":[{"actionItems":[{"id":"a-192-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-192-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"globalSwatchId":"--_color---yellow--normal","rValue":250,"bValue":120,"gValue":202,"aValue":1}},{"id":"a-192-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":1,"unit":""}},{"id":"a-192-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"globalSwatchId":"--_color---primary--inverse","rValue":178,"bValue":222,"gValue":211,"aValue":1}},{"id":"a-192-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"globalSwatchId":"--_color---primary--normal","rValue":22,"bValue":102,"gValue":54,"aValue":1}}]},{"actionItems":[{"id":"a-192-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"heightValue":20,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1758798624698},"a-193":{"id":"a-193","title":"OnHover Out Page NavBar Color 2","actionItemGroups":[{"actionItems":[{"id":"a-193-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"globalSwatchId":"--_color---primary--normal","rValue":22,"bValue":102,"gValue":54,"aValue":1}},{"id":"a-193-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":0.1,"unit":""}},{"id":"a-193-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"globalSwatchId":"--_color---cyan--normal","rValue":0,"bValue":182,"gValue":166,"aValue":1}},{"id":"a-193-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758798712313},"a-196":{"id":"a-196","title":"PageNav OnOpen","actionItemGroups":[{"actionItems":[{"id":"a-196-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_menu-icon","selectorGuids":["fa6083dc-2eec-e528-dac8-f29e6fb487e4"]},"value":"none"}},{"id":"a-196-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":"block"}}]},{"actionItems":[{"id":"a-196-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":"none"}},{"id":"a-196-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_menu-icon","selectorGuids":["fa6083dc-2eec-e528-dac8-f29e6fb487e4"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234259657},"a-197":{"id":"a-197","title":"PageNav OnClose","actionItemGroups":[{"actionItems":[{"id":"a-197-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_menu-icon","selectorGuids":["fa6083dc-2eec-e528-dac8-f29e6fb487e4"]},"value":"block"}},{"id":"a-197-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":"none"}},{"id":"a-197-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-197-n-8","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"globalSwatchId":"--_color---cyan--normal","rValue":0,"bValue":182,"gValue":166,"aValue":1}},{"id":"a-197-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-197-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_menu-icon","selectorGuids":["fa6083dc-2eec-e528-dac8-f29e6fb487e4"]},"value":"none"}},{"id":"a-197-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":"block"}},{"id":"a-197-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":0.2,"unit":""}},{"id":"a-197-n-7","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"globalSwatchId":"--_color---cyan--inverse","rValue":250,"bValue":120,"gValue":202,"aValue":1}},{"id":"a-197-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"heightValue":10,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234372681},"a-204":{"id":"a-204","title":"NavBar Show Line","actionItemGroups":[{"actionItems":[{"id":"a-204-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-204-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-205":{"id":"a-205","title":"NavBar OffHover Hide Line","actionItemGroups":[{"actionItems":[{"id":"a-205-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708},"a-208":{"id":"a-208","title":"PageNav OnHover","actionItemGroups":[{"actionItems":[{"id":"a-208-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_menu-icon","selectorGuids":["fa6083dc-2eec-e528-dac8-f29e6fb487e4"]},"value":"none"}},{"id":"a-208-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":0.2,"unit":""}},{"id":"a-208-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":"block"}}]},{"actionItems":[{"id":"a-208-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":1,"unit":""}},{"id":"a-208-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"heightValue":10,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-208-n-10","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"globalSwatchId":"--_color---yellow--normal","rValue":250,"bValue":120,"gValue":202,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234259657},"a-209":{"id":"a-209","title":"PageNav OffHover","actionItemGroups":[{"actionItems":[{"id":"a-209-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_menu-icon","selectorGuids":["fa6083dc-2eec-e528-dac8-f29e6fb487e4"]},"value":"none"}},{"id":"a-209-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".page-nav_text","selectorGuids":["c96495a7-fc9d-1b20-80ef-c3a3a81bc962"]},"value":"block"}},{"id":"a-209-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"heightValue":10,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-209-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"globalSwatchId":"--_color---yellow--normal","rValue":250,"bValue":120,"gValue":202,"aValue":1}},{"id":"a-209-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-209-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_menu-bg-circle","selectorGuids":["6b65d0c3-ef3a-225e-7693-717e87d08fae"]},"value":0.2,"unit":""}},{"id":"a-209-n-9","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"globalSwatchId":"--_color---aqua--normal","rValue":113,"bValue":197,"gValue":201,"aValue":1}},{"id":"a-209-n-10","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".page-nav_line","selectorGuids":["bcc88c80-351e-5e75-c908-aa3737dd4c7f"]},"heightValue":40,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759234372681},"a-256":{"id":"a-256","title":"NavBar Show Line 4","actionItemGroups":[{"actionItems":[{"id":"a-256-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-256-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-257":{"id":"a-257","title":"NavBar OffHover Hide Line 4","actionItemGroups":[{"actionItems":[{"id":"a-257-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PageNavInnerComponent({
  headlineMenuNavHeadline = "explore",
  headlineMenuNavHeadlineTag = "h2",
  m3Submenu1SubmenuHeadline = "Revenue Strategy",
  m3Submenu2SubmenuHeadline = "BRAND ACTIVATION",
  m3Submenu3SubmenuHeadline = "Optimized Distribution",
  m3Submenu4SubmenuHeadline = "Tech Integration",
  m4Submenu1SubmenuHeadline = "CTRLShift Blog",
  m4Submenu2SubmenuHeadline = "Travel Trends",
  m4Submenu3SubmenuHeadline = "Revenue Toolkits",
  m4Submenu4SubmenuHeadline = "Client Hub",
  menuLink1MenuText = "Home",
  menuLink2MenuText = "Meet the rebels",
  menuLink3MenuText = "Solutions",

  menuLink3SubmenuLink1 = {
    href: "#",
  },

  menuLink3SubmenuLink2 = {
    href: "#",
  },

  menuLink3SubmenuLink3 = {
    href: "#",
  },

  menuLink3SubmenuLink4 = {
    href: "#",
  },

  menuLink4MenuText = "Resources",

  menuLink4SubmenuLink1 = {
    href: "#",
  },

  menuLink4SubmenuLink2 = {
    href: "#",
  },

  menuLink4SubmenuLink3 = {
    href: "#",
  },

  menuLink4SubmenuLink4 = {
    href: "#",
  },

  menuLink5MenuLinkText = "Partners",
  menuLink6MenuLinkText = "faq",
  menuLink7MenuLinkText = "CLient login",
  settingsNavBarId = "",
  settingsNavBarVisibility = true,
  triggerMenuIconVisibility = true,
  triggerMenuTextVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsNavBarVisibility ? (
        <NavbarWrapper
          className={"page-nav"}
          config={{
            easing: "ease-out",
            easing2: "ease-in",
            duration: 400,
            docHeight: true,
            noScroll: true,
            animation: "over-left",
            collapse: "all",
          }}
          id={settingsNavBarId}
          tag={"div"}
        >
          <NavbarButton
            className={"page-nav_menu-button"}
            data-watch={"page-nav-btn"}
            id={"w-node-_5db1e7fe-86c3-dfef-ff70-8bed722893c4-722893c3"}
            tag={"div"}
          >
            <Block
              className={"page-nav_trigger_menu"}
              data-trigger={"page-nav_menu"}
              tag={"div"}
            >
              <Block
                className={"page-nav_menu-bg-circle"}
                data-target={"page-nav_bg-circle"}
                tag={"div"}
              />
              <Block className={"page-nav_menu-wrapper"} tag={"div"}>
                <Block
                  className={"page-nav_line"}
                  data-target={"page-nav_menu-line"}
                  tag={"div"}
                />
                {triggerMenuTextVisibility ? (
                  <Block
                    className={"page-nav_text"}
                    data-target={"page-nav_menu-text"}
                    tag={"div"}
                  >
                    {"Menu"}
                  </Block>
                ) : null}
                {triggerMenuIconVisibility ? (
                  <Image
                    alt={"Asterisk Icon"}
                    className={"page-nav_menu-icon"}
                    data-target={"page-nav_menu-icon"}
                    height={"auto"}
                    loading={"lazy"}
                    src={
                      "https://cdn.prod.website-files.com/6a09244ce43d4439301ce56f/6a09244ce43d4439301cebaf_asterisk.svg"
                    }
                    width={"auto"}
                  />
                ) : null}
              </Block>
            </Block>
          </NavbarButton>
          <NavbarMenu
            className={"page-nav_menu"}
            role={"navigation"}
            tag={"nav"}
          >
            <Block className={"page-nav_grid"} tag={"div"}>
              <Block
                className={"page-nav_border-right"}
                id={"w-node-_5db1e7fe-86c3-dfef-ff70-8bed722893cc-722893c3"}
                tag={"div"}
              />
              <Block
                className={
                  "headline-wrapper padding-left_xs padding-bottom_sm text-color-blue"
                }
                id={"w-node-_5db1e7fe-86c3-dfef-ff70-8bed722893cd-722893c3"}
                tag={"div"}
              >
                <Heading
                  className={"page-nav_heading"}
                  id={"w-node-_5db1e7fe-86c3-dfef-ff70-8bed722893ce-722893c3"}
                  tag={headlineMenuNavHeadlineTag}
                >
                  {headlineMenuNavHeadline}
                </Heading>
              </Block>
              <Block
                className={"page-nav_links-wrapper text-color-blue"}
                id={"w-node-_5db1e7fe-86c3-dfef-ff70-8bed722893d0-722893c3"}
                tag={"div"}
              >
                <Block className={"page-nav_link-block"} tag={"div"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"page-nav_link"}
                    data-w-id={"5e90c011-f7d6-a60c-1839-6b340f1b792c"}
                    dropdown-1={"resize-trigger"}
                    dropdown-2={"."}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={"pagenav_text"}
                      dropdown-1={"font-size-trigger"}
                      dropdown-2={"font-size-trigger"}
                      navbar-onclick={"dropdown-1"}
                      tag={"div"}
                    >
                      {menuLink1MenuText}
                    </Block>
                    <Block
                      className={"navbar_liine is-visible-onhover"}
                      navbar-line={"on-hover"}
                      tag={"div"}
                    />
                  </Link>
                </Block>
                <Block className={"page-nav_link-block"} tag={"div"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"page-nav_link"}
                    dropdown-1={"resize-trigger"}
                    dropdown-2={"."}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={"pagenav_text"}
                      dropdown-1={"font-size-trigger"}
                      dropdown-2={"font-size-trigger"}
                      navbar-onclick={"dropdown-1"}
                      tag={"div"}
                    >
                      {menuLink2MenuText}
                    </Block>
                    <Block
                      className={"navbar_liine is-visible-onhover"}
                      navbar-line={"on-hover"}
                      tag={"div"}
                    />
                  </Link>
                </Block>
                <DropdownWrapper
                  className={"page-nav_link-block is-hidden_mobile-p"}
                  delay={300}
                  hover={false}
                  tag={"div"}
                >
                  <DropdownToggle
                    className={"page-navbar_menu-dropdown link-nav"}
                    id={"w-node-_9189df38-b9e4-2401-ea87-e8c735bded1f-722893c3"}
                    tag={"div"}
                  >
                    <HtmlEmbed
                      className={"page-navbar_dropdown-icon"}
                      content={
                        '<svg viewBox="0 0 100 100" id="right-arrow" xmlns="http://www.w3.org/2000/svg"><path fill="#163666" d="M50.868 78.016l36.418-26.055c.66-.471 1.049-1.233 1.051-2.043 0-.006 0-.006 0-.006 -.002-.815-.396-1.575-1.059-2.048L50.86 21.977c-.767-.546-1.776-.616-2.612-.183 -.835.426-1.361 1.292-1.361 2.236v12.183l-32.709-.001c-1.39 0-2.515 1.125-2.515 2.516l.001 22.541c-.001 1.389 1.124 2.515 2.516 2.516h32.706v12.187c0 .94.53 1.803 1.366 2.237 .837.432 1.848.358 2.616-.193Z"/></svg>'
                      }
                    />
                    <Block className={"page-nav_link"} tag={"div"}>
                      {menuLink3MenuText}
                    </Block>
                  </DropdownToggle>
                  <DropdownList
                    className={"page-navbar_dropdown-list solutions"}
                    tag={"nav"}
                  >
                    <Block className={"page-navbar_container"} tag={"div"}>
                      <Block className={"pagebar_dropdown-wrapper"} tag={"div"}>
                        <Block
                          className={"pagenav_content-wrapper"}
                          tag={"div"}
                        >
                          <Block className={"pagenav_content"} tag={"div"}>
                            <WhiteNavcardFullpage />
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </DropdownList>
                </DropdownWrapper>
                <DropdownWrapper
                  className={"page-nav_link-block is-visible-mobile-p"}
                  delay={0}
                  hover={false}
                  tag={"div"}
                >
                  <DropdownToggle
                    className={"page-navbar_menu-dropdown"}
                    tag={"div"}
                  >
                    <HtmlEmbed
                      className={"page-navbar_dropdown-icon is-down"}
                      content={
                        '<svg viewBox="0 0 100 100" id="down-arrow" xmlns="http://www.w3.org/2000/svg"><path fill="#163666" d="M21.984 50.868l26.055 36.418c.471.66 1.233 1.049 2.043 1.051 .006 0 .006 0 .006 0 .815-.002 1.575-.396 2.048-1.059l25.887-36.417c.546-.767.616-1.776.183-2.612 -.426-.835-1.292-1.361-2.236-1.361H63.787l.001-32.709c0-1.39-1.125-2.515-2.516-2.515l-22.541.001c-1.389-.001-2.515 1.124-2.516 2.516v32.705H24.029c-.94 0-1.803.53-2.237 1.367 -.433.836-.358 1.847.192 2.615Z"/></svg>'
                      }
                    />
                    <Block
                      className={"page-nav_link text-color-primary"}
                      tag={"div"}
                    >
                      {menuLink3MenuText}
                    </Block>
                  </DropdownToggle>
                  <DropdownList
                    className={"page-navbar_dropdown-list is-mobile-version"}
                    tag={"nav"}
                  >
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink3SubmenuLink1}
                      >
                        {m3Submenu1SubmenuHeadline}
                      </Link>
                    </Block>
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink3SubmenuLink2}
                      >
                        {m3Submenu2SubmenuHeadline}
                      </Link>
                    </Block>
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink3SubmenuLink3}
                      >
                        {m3Submenu3SubmenuHeadline}
                      </Link>
                    </Block>
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink3SubmenuLink4}
                      >
                        {m3Submenu4SubmenuHeadline}
                      </Link>
                    </Block>
                  </DropdownList>
                </DropdownWrapper>
                <DropdownWrapper
                  className={"page-nav_link-block is-hidden_mobile-p"}
                  delay={300}
                  hover={false}
                  tag={"div"}
                >
                  <DropdownToggle
                    className={"page-navbar_menu-dropdown link-nav"}
                    id={"w-node-bdda277a-6295-6bba-4eac-efb72a16f05f-722893c3"}
                    tag={"div"}
                  >
                    <HtmlEmbed
                      className={"page-navbar_dropdown-icon"}
                      content={
                        '<svg viewBox="0 0 100 100" id="right-arrow" xmlns="http://www.w3.org/2000/svg"><path fill="#163666" d="M50.868 78.016l36.418-26.055c.66-.471 1.049-1.233 1.051-2.043 0-.006 0-.006 0-.006 -.002-.815-.396-1.575-1.059-2.048L50.86 21.977c-.767-.546-1.776-.616-2.612-.183 -.835.426-1.361 1.292-1.361 2.236v12.183l-32.709-.001c-1.39 0-2.515 1.125-2.515 2.516l.001 22.541c-.001 1.389 1.124 2.515 2.516 2.516h32.706v12.187c0 .94.53 1.803 1.366 2.237 .837.432 1.848.358 2.616-.193Z"/></svg>'
                      }
                    />
                    <Block
                      className={"page-nav_link text-color-primary"}
                      tag={"div"}
                    >
                      {menuLink4MenuText}
                    </Block>
                  </DropdownToggle>
                  <DropdownList
                    className={"page-navbar_dropdown-list menu-dropdown-2"}
                    tag={"nav"}
                  >
                    <Block className={"page-navbar_container"} tag={"div"}>
                      <Block className={"pagebar_dropdown-wrapper"} tag={"div"}>
                        <Block
                          className={"pagenav_content-wrapper"}
                          tag={"div"}
                        >
                          <Block className={"pagenav_content"} tag={"div"}>
                            <ColorNavcardFullpage />
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </DropdownList>
                </DropdownWrapper>
                <DropdownWrapper
                  className={"page-nav_link-block is-visible-mobile-p"}
                  delay={0}
                  hover={false}
                  tag={"div"}
                >
                  <DropdownToggle
                    className={"page-navbar_menu-dropdown"}
                    tag={"div"}
                  >
                    <HtmlEmbed
                      className={"page-navbar_dropdown-icon is-down"}
                      content={
                        '<svg viewBox="0 0 100 100" id="down-arrow" xmlns="http://www.w3.org/2000/svg"><path fill="#163666" d="M21.984 50.868l26.055 36.418c.471.66 1.233 1.049 2.043 1.051 .006 0 .006 0 .006 0 .815-.002 1.575-.396 2.048-1.059l25.887-36.417c.546-.767.616-1.776.183-2.612 -.426-.835-1.292-1.361-2.236-1.361H63.787l.001-32.709c0-1.39-1.125-2.515-2.516-2.515l-22.541.001c-1.389-.001-2.515 1.124-2.516 2.516v32.705H24.029c-.94 0-1.803.53-2.237 1.367 -.433.836-.358 1.847.192 2.615Z"/></svg>'
                      }
                    />
                    <Block
                      className={"page-nav_link text-color-primary"}
                      tag={"div"}
                    >
                      {menuLink4MenuText}
                    </Block>
                  </DropdownToggle>
                  <DropdownList
                    className={"page-navbar_dropdown-list is-mobile-version"}
                    tag={"nav"}
                  >
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink4SubmenuLink3}
                      >
                        {m4Submenu3SubmenuHeadline}
                      </Link>
                      <Block className={"page-nav_sub-link_line"} tag={"div"} />
                    </Block>
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink4SubmenuLink2}
                      >
                        {m4Submenu2SubmenuHeadline}
                      </Link>
                      <Block className={"page-nav_sub-link_line"} tag={"div"} />
                    </Block>
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink4SubmenuLink1}
                      >
                        {m4Submenu1SubmenuHeadline}
                      </Link>
                      <Block className={"page-nav_sub-link_line"} tag={"div"} />
                    </Block>
                    <Block className={"page-nav_sub-link_block"} tag={"div"}>
                      <Link
                        button={false}
                        className={"page-nav_sublink"}
                        options={menuLink4SubmenuLink4}
                      >
                        {m4Submenu4SubmenuHeadline}
                      </Link>
                      <Block className={"page-nav_sub-link_line"} tag={"div"} />
                    </Block>
                  </DropdownList>
                </DropdownWrapper>
                <Block className={"page-nav_link-block"} tag={"div"}>
                  <Link
                    block={"inline"}
                    button={false}
                    className={"page-nav_link"}
                    dropdown-1={"resize-trigger"}
                    dropdown-2={"."}
                    options={{
                      href: "#",
                    }}
                  >
                    <Block
                      className={"pagenav_text"}
                      dropdown-1={"font-size-trigger"}
                      dropdown-2={"font-size-trigger"}
                      navbar-onclick={"dropdown-1"}
                      tag={"div"}
                    >
                      {menuLink5MenuLinkText}
                    </Block>
                    <Block
                      className={"navbar_liine is-visible-onhover"}
                      navbar-line={"on-hover"}
                      tag={"div"}
                    />
                  </Link>
                </Block>
                <Link
                  block={"inline"}
                  button={false}
                  className={"page-nav_link"}
                  dropdown-1={"resize-trigger"}
                  dropdown-2={"."}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={"pagenav_text"}
                    dropdown-1={"font-size-trigger"}
                    dropdown-2={"font-size-trigger"}
                    navbar-onclick={"dropdown-1"}
                    tag={"div"}
                  >
                    {menuLink6MenuLinkText}
                  </Block>
                  <Block
                    className={"navbar_liine is-visible-onhover"}
                    navbar-line={"on-hover"}
                    tag={"div"}
                  />
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={"page-nav_link"}
                  dropdown-1={"resize-trigger"}
                  dropdown-2={"."}
                  options={{
                    href: "#",
                  }}
                >
                  <Block
                    className={"pagenav_text"}
                    dropdown-1={"font-size-trigger"}
                    dropdown-2={"font-size-trigger"}
                    navbar-onclick={"dropdown-1"}
                    tag={"div"}
                  >
                    {menuLink7MenuLinkText}
                  </Block>
                  <Block
                    className={"navbar_liine is-visible-onhover"}
                    navbar-line={"on-hover"}
                    tag={"div"}
                  />
                </Link>
                <Block
                  className={
                    "page-nav_link-block is-padding-right_20pct margin-top_sm trigger_page-navbar_close"
                  }
                  tag={"div"}
                />
              </Block>
            </Block>
          </NavbarMenu>
        </NavbarWrapper>
      ) : null}
    </div>
  );
}
