"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import DropdownList from "../webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "../webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "../webflow_modules/Dropdown/components/DropdownWrapper";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../webflow_modules/Basic/components/Image";
import Link from "../webflow_modules/Basic/components/Link";
import NavbarBrand from "../webflow_modules/Navbar/components/NavbarBrand";
import NavbarButton from "../webflow_modules/Navbar/components/NavbarButton";
import NavbarMenu from "../webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "../webflow_modules/Navbar/components/NavbarWrapper";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-677":{"id":"e-677","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-180","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cebc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cebc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-676":{"id":"e-676","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-181","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cebc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cebc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-680":{"id":"e-680","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-685":{"id":"e-685","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-681":{"id":"e-681","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-682":{"id":"e-682","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cec8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-679":{"id":"e-679","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-684":{"id":"e-684","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-683":{"id":"e-683","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-678":{"id":"e-678","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563ced6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-741":{"id":"e-741","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-742":{"id":"e-742","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-743":{"id":"e-743","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-744":{"id":"e-744","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"043b033e-5b1a-90e0-fc79-7b0d77e64d14","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-745":{"id":"e-745","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-746":{"id":"e-746","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d052d9c9-d058-fecf-0f36-93722f9466e4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-747":{"id":"e-747","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-748":{"id":"e-748","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-750":{"id":"e-750","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-180","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-749":{"id":"e-749","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-181","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a83","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a83","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-751":{"id":"e-751","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-752":{"id":"e-752","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-753":{"id":"e-753","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-754":{"id":"e-754","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-755":{"id":"e-755","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-758":{"id":"e-758","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-756":{"id":"e-756","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-757":{"id":"e-757","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25a90","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-760":{"id":"e-760","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-762":{"id":"e-762","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-761":{"id":"e-761","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-759":{"id":"e-759","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25ad4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-763":{"id":"e-763","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-764":{"id":"e-764","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-765":{"id":"e-765","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-766":{"id":"e-766","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6259fa21-7c2a-e2b6-2a14-60a3b6b25b1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-767":{"id":"e-767","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-768"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469},"e-768":{"id":"e-768","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-767"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6a09244ce43d4439301cede2|5e90c011-f7d6-a60c-1839-6b340f1b792c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418482469},"e-769":{"id":"e-769","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-770"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908493},"e-770":{"id":"e-770","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-769"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link-block","originalId":"5db1e7fe-86c3-dfef-ff70-8bed722893d1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759418908497},"e-771":{"id":"e-771","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-772"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216572},"e-772":{"id":"e-772","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-771"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"},"targets":[{"selector":".page-nav_link","originalId":"64780d23-b571-80e3-fab9-5b9e29a57ca9","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759419216576},"e-930":{"id":"e-930","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-236","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-931"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769299395558},"e-931":{"id":"e-931","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-237","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-930"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769299395558},"e-932":{"id":"e-932","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-238","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-933"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769299395558},"e-933":{"id":"e-933","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-239","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-932"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"56c2035e-8fc8-1d79-865b-2f880d0061ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769299395558},"e-950":{"id":"e-950","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-256","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-951"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769300654747},"e-951":{"id":"e-951","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-257","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-950"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e08b8b5e-991f-933b-94a9-aaa6a2411ad2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1769300654747},"e-972":{"id":"e-972","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-973"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770011213750},"e-973":{"id":"e-973","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-972"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770011213750},"e-974":{"id":"e-974","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-975"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770011213750},"e-975":{"id":"e-975","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-974"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6983ab92-cca1-382d-2d45-ce911992b86b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770011213750},"e-977":{"id":"e-977","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-180","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-976":{"id":"e-976","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-181","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f19","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f19","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-982":{"id":"e-982","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-985":{"id":"e-985","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-983":{"id":"e-983","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-984":{"id":"e-984","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f29","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-987":{"id":"e-987","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-989":{"id":"e-989","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-988":{"id":"e-988","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-986":{"id":"e-986","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8806b222-9220-72e8-3ec0-e663595c3f3a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-991":{"id":"e-991","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-180","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-990":{"id":"e-990","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-181","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43afc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43afc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-992":{"id":"e-992","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-993":{"id":"e-993","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-994":{"id":"e-994","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-995":{"id":"e-995","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b09","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-996":{"id":"e-996","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-999":{"id":"e-999","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-997":{"id":"e-997","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-998":{"id":"e-998","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-1001":{"id":"e-1001","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1003":{"id":"e-1003","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1002":{"id":"e-1002","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1000":{"id":"e-1000","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b1d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1004":{"id":"e-1004","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1005":{"id":"e-1005","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b2e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1006":{"id":"e-1006","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-1007":{"id":"e-1007","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63dd9663-07e4-cfdd-7024-19dcf4b43b34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-1008":{"id":"e-1008","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993312},"e-1009":{"id":"e-1009","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1026"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e698cc38-9e6e-1354-9f78-ca258563cee2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993317},"e-1011":{"id":"e-1011","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-180","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-749"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae637f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae637f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-1010":{"id":"e-1010","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-181","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-750"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae637f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae637f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-1012":{"id":"e-1012","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-752"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687761},"e-1013":{"id":"e-1013","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-751"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae637fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361687764},"e-1014":{"id":"e-1014","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-754"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-1015":{"id":"e-1015","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-753"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63801","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361866514},"e-1016":{"id":"e-1016","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-758"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-1019":{"id":"e-1019","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-755"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-1017":{"id":"e-1017","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-757"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-1018":{"id":"e-1018","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-756"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63804","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1650153139915},"e-1021":{"id":"e-1021","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-182","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-762"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1023":{"id":"e-1023","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-183","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-760"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1022":{"id":"e-1022","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-184","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-759"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1020":{"id":"e-1020","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-185","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-761"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1757201878058},"e-1024":{"id":"e-1024","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-764"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1025":{"id":"e-1025","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-763"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae63826","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361947631},"e-1026":{"id":"e-1026","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1027"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993312},"e-1027":{"id":"e-1027","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1026"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1770142993317},"e-1028":{"id":"e-1028","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-204","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-766"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280},"e-1029":{"id":"e-1029","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-205","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-765"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b77ce42-c67a-341f-441a-1c179ae6382d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759361823280}},"actionLists":{"a-180":{"id":"a-180","title":"Navbar menu -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-180-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422a1"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-180-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42288"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-180-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42297"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-180-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42297"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-180-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42288"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-181":{"id":"a-181","title":"Navbar menu -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-181-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42297"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-181-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42288"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-181-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-top","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42297"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-181-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-bottom","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac42288"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-181-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon_line-middle","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422a1"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-182":{"id":"a-182","title":"Navbar05 -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-182-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-182-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac4228f"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-182-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-183":{"id":"a-183","title":"Navbar05 -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-183-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac4228f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-183-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-184":{"id":"a-184","title":"Navbar05 dropdown (tablet) -> OPEN 4","actionItemGroups":[{"actionItems":[{"id":"a-184-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-184-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-185":{"id":"a-185","title":"Navbar05 dropdown (tablet) -> CLOSE 4","actionItemGroups":[{"actionItems":[{"id":"a-185-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157},"a-204":{"id":"a-204","title":"NavBar Show Line","actionItemGroups":[{"actionItems":[{"id":"a-204-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-204-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-205":{"id":"a-205","title":"NavBar OffHover Hide Line","actionItemGroups":[{"actionItems":[{"id":"a-205-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708},"a-236":{"id":"a-236","title":"Navbar05 -> OPEN 5","actionItemGroups":[{"actionItems":[{"id":"a-236-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-236-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac4228f"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-236-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626161550593},"a-237":{"id":"a-237","title":"Navbar05 -> CLOSE 5","actionItemGroups":[{"actionItems":[{"id":"a-237-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-icon","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac4228f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-237-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626161607847},"a-238":{"id":"a-238","title":"Navbar05 dropdown (tablet) -> OPEN 5","actionItemGroups":[{"actionItems":[{"id":"a-238-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-238-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626242958157},"a-239":{"id":"a-239","title":"Navbar05 dropdown (tablet) -> CLOSE 5","actionItemGroups":[{"actionItems":[{"id":"a-239-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar_dropdown-menu","selectorGuids":["4f94592c-466b-f938-f6f4-d20b5ac422bc"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626242958157},"a-256":{"id":"a-256","title":"NavBar Show Line 4","actionItemGroups":[{"actionItems":[{"id":"a-256-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-256-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1759361565807},"a-257":{"id":"a-257","title":"NavBar OffHover Hide Line 4","actionItemGroups":[{"actionItems":[{"id":"a-257-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar_liine.is-visible-onhover","selectorGuids":["befe56a7-62b6-a6a8-edf1-7ebdd3051906","9158c0a4-226c-3801-0c73-beb3ddedfb20"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1759361620708}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VNavbar({
  brandLogoBrandLogoVisibility = true,
  brandLogoImage = "",
  brandLogoImageAltText = "__wf_reserved_inherit",

  brandLogoLogoLink = {
    href: "https://revrebel-rebuild.webflow.io/",
  },

  buttonButton,
  menuDropdown1DropdownMenu1Card1,
  menuDropdown1DropdownMenu1Card2,
  menuDropdown1DropdownMenu1Card3,
  menuDropdown1DropdownMenu1Card4,
  menuDropdown1DropdownMenu1MenuVisibility = true,
  menuDropdown2DropdownMenu2Card1,
  menuDropdown2DropdownMenu2Card2,
  menuDropdown2DropdownMenu2Card3,
  menuDropdown2DropdownMenu2Card4,
  menuDropdown2DropdownMenu2MenuVisibility = true,

  menuLink1MenuLink = {
    href: "https://revrebel-rebuild.webflow.io/",
  },

  menuLink1MenuLinkText = "Home",
  menuLink1MenuLinkVisibility = true,

  menuLink2MenuLink = {
    href: "#",
  },

  menuLink2MenuLinkText = "The Rebels",
  menuLink2MenuLinkVisibility = true,

  menuLink3MenuLink = {
    href: "#",
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
  settingsNavigationColor = "Light",
  settingsNavigationVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-40473bb4-baf9-fd84-48bf-0619dbc14721",
  };

  const _activeStyleVariant = _styleVariantMap[settingsNavigationColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsNavigationVisibility ? (
        <NavbarWrapper
          className={`navbar_wrapper ${_activeStyleVariant}`}
          config={{
            easing: "ease",
            easing2: "ease",
            duration: 400,
            docHeight: true,
            noScroll: false,
            animation: "default",
            collapse: "medium",
          }}
          data-nav-open={"False"}
          data-w-id={"e698cc38-9e6e-1354-9f78-ca258563cebc"}
          data-watch={"nav-bar"}
          tag={"div"}
        >
          <BlockContainer
            className={`navbar_container ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            tag={"div"}
          >
            <Block
              className={`navbar_padding ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`navbar_inner-content-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <NavbarBrand
                  className={`navbar_logo-link nav-is-open ${_activeStyleVariant}`}
                  options={brandLogoLogoLink}
                >
                  <Block
                    className={`navbar_brand-logo-wrapper ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`navbar_brand-logo-size ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      {brandLogoBrandLogoVisibility ? (
                        <Image
                          className={`navbar_brand-logo ${_activeStyleVariant}`}
                          height={"auto"}
                          loading={"lazy"}
                          src={brandLogoImage}
                          width={"auto"}
                        />
                      ) : null}
                    </Block>
                  </Block>
                </NavbarBrand>
                <NavbarMenu
                  className={`navbar_menu-wrapper ${_activeStyleVariant}`}
                  role={"navigation"}
                  tag={"nav"}
                >
                  <Block
                    className={`navbar_menu-left ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink1MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"7d2b1833-db7f-0ca0-f406-1a0e1fbe6208"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink1MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink1MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuLink2MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"d052d9c9-d058-fecf-0f36-93722f9466e4"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"."}
                        options={menuLink2MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          navbar-onclick={"dropdown-1"}
                          tag={"div"}
                        >
                          {menuLink2MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuDropdown1DropdownMenu1MenuVisibility ? (
                      <DropdownWrapper
                        className={`navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                        data-nav-dropdown-1={"False"}
                        data-w-id={"e698cc38-9e6e-1354-9f78-ca258563cec8"}
                        delay={300}
                        dropdown-1={"trigger"}
                        dropdown-2={"resize-trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`navbar_menu-dropdown ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`navbar_dropdown_wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_text ${_activeStyleVariant}`}
                              dropdown-2={"font-size-trigger"}
                              tag={"div"}
                            >
                              {"Solutions"}
                            </Block>
                            <HtmlEmbed
                              className={`navbar_dropdown-icon navbar_line-none ${_activeStyleVariant}`}
                              content={
                                '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21.9 50.8l26 36.4c.4.6 1.2 1 2 1 0 0 0 0 0 0 .8-.1 1.5-.4 2-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7 -.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6 0c-1.4-.1-2.6 1.1-2.6 2.5v32.7H23.3c-1 0-1.9.5-2.3 1.3 -.5.8-.4 1.8.1 2.6Z"/></svg>'
                              }
                              dropdown-2={"resize-icon-trigger"}
                            />
                          </Block>
                          <Block
                            className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                            navbar-line={"on-hover"}
                            tag={"div"}
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`navbar_dropdown-menu ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`navbar_menu-content-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_menu-container ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`navcard_dropdown-container ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-d0174b07-a47b-ca67-eae4-84541ca22ebf-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card1}
                                </Block>
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-d0174b07-a47b-ca67-eae4-84541ca22ec0-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card2}
                                </Block>
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-d0174b07-a47b-ca67-eae4-84541ca22ec1-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card3}
                                </Block>
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-d0174b07-a47b-ca67-eae4-84541ca22ec2-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown1DropdownMenu1Card4}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </DropdownList>
                      </DropdownWrapper>
                    ) : null}
                    {menuDropdown2DropdownMenu2MenuVisibility ? (
                      <DropdownWrapper
                        className={`navbar_menu-dropdown-wrapper ${_activeStyleVariant}`}
                        data-nav-dropdown-2={"False"}
                        data-w-id={"e698cc38-9e6e-1354-9f78-ca258563ced6"}
                        delay={300}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        hover={false}
                        tag={"div"}
                      >
                        <DropdownToggle
                          className={`navbar_menu-dropdown ${_activeStyleVariant}`}
                          tag={"div"}
                        >
                          <Block
                            className={`navbar_dropdown_wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_text ${_activeStyleVariant}`}
                              dropdown-1={"font-size-trigger"}
                              tag={"div"}
                            >
                              {"Resources"}
                            </Block>
                            <HtmlEmbed
                              className={`navbar_dropdown-icon navbar_line-none ${_activeStyleVariant}`}
                              content={
                                '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21.9 50.8l26 36.4c.4.6 1.2 1 2 1 0 0 0 0 0 0 .8-.1 1.5-.4 2-1.1l25.8-36.5c.5-.8.6-1.8.1-2.7 -.5-.9-1.3-1.4-2.3-1.4H63.3l0-32.8c0-1.4-1.2-2.6-2.6-2.6l-22.6 0c-1.4-.1-2.6 1.1-2.6 2.5v32.7H23.3c-1 0-1.9.5-2.3 1.3 -.5.8-.4 1.8.1 2.6Z"/></svg>'
                              }
                              dropdown-1={"resize-icon-trigger"}
                            />
                          </Block>
                          <Block
                            className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                            navbar-line={"on-hover"}
                            tag={"div"}
                          />
                        </DropdownToggle>
                        <DropdownList
                          className={`navbar_dropdown-menu ${_activeStyleVariant}`}
                          tag={"nav"}
                        >
                          <Block
                            className={`navbar_menu-content-wrapper ${_activeStyleVariant}`}
                            tag={"div"}
                          >
                            <Block
                              className={`navbar_menu-container ${_activeStyleVariant}`}
                              tag={"div"}
                            >
                              <Block
                                className={`navcard_dropdown-container ${_activeStyleVariant}`}
                                tag={"div"}
                              >
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-fe630c68-1d5c-edf9-efd2-012148f2566b-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card1}
                                </Block>
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-fe630c68-1d5c-edf9-efd2-012148f25676-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card2}
                                </Block>
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-fe630c68-1d5c-edf9-efd2-012148f25681-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card3}
                                </Block>
                                <Block
                                  className={`navcard-wrapper ${_activeStyleVariant}`}
                                  id={
                                    "w-node-fe630c68-1d5c-edf9-efd2-012148f2568c-8563cebc"
                                  }
                                  tag={"div"}
                                >
                                  {menuDropdown2DropdownMenu2Card4}
                                </Block>
                              </Block>
                            </Block>
                          </Block>
                        </DropdownList>
                      </DropdownWrapper>
                    ) : null}
                    {menuLink3MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"8e1c4bda-66e4-4c29-7e7a-f5f4753c3d27"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink3MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink3MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                  </Block>
                  <Block
                    className={`navbar_menu-right ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {menuLink4MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"e698cc38-9e6e-1354-9f78-ca258563cee2"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink4MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink4MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    {menuLink5MenuLinkVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={`navbar_link ${_activeStyleVariant}`}
                        data-w-id={"043b033e-5b1a-90e0-fc79-7b0d77e64d14"}
                        dropdown-1={"resize-trigger"}
                        dropdown-2={"resize-trigger"}
                        options={menuLink5MenuLink}
                      >
                        <Block
                          className={`navbar_text ${_activeStyleVariant}`}
                          dropdown-1={"font-size-trigger"}
                          dropdown-2={"font-size-trigger"}
                          tag={"div"}
                        >
                          {menuLink5MenuLinkText}
                        </Block>
                        <Block
                          className={`navbar_liine is-visible-onhover ${_activeStyleVariant}`}
                          navbar-line={"on-hover"}
                          tag={"div"}
                        />
                      </Link>
                    ) : null}
                    <Block
                      className={`navbar_link padding-right_none ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`navbar_button-alignment navbar_link ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {buttonButton}
                      </Block>
                    </Block>
                  </Block>
                </NavbarMenu>
                <NavbarButton
                  className={`navbar_menu-button ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`menu-icon_component ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Block
                      className={`menu-icon_line-top ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`menu-icon_line-middle ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`menu-icon_line-middle-inner ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                    </Block>
                    <Block
                      className={`menu-icon_line-bottom ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                  </Block>
                </NavbarButton>
              </Block>
            </Block>
          </BlockContainer>
        </NavbarWrapper>
      ) : null}
    </div>
  );
}
