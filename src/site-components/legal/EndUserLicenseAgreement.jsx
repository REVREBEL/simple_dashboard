"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Link from "../webflow_modules/Basic/components/Link";
import List from "../webflow_modules/Basic/components/List";
import ListItem from "../webflow_modules/Basic/components/ListItem";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import RichText from "../webflow_modules/Basic/components/RichText";
import Strong from "../webflow_modules/Basic/components/Strong";
import Superscript from "../webflow_modules/Basic/components/Superscript";

export function EndUserLicenseAgreement({
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <BlockContainer
          className={"color-variants is-lg padding_large"}
          grid={{
            type: "container",
          }}
          id={settingsSectionId}
          tag={"div"}
        >
          <RichText className={"rich-text_policies"} tag={"div"}>
            <Heading tag={"h2"}>{"END USER LICENSE AGREEMENT"}</Heading>
            <Paragraph>
              <Strong>{"Last updated July 19, 2022"}</Strong>
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Paragraph>
              {
                'REVREBEL TOOLS is licensed to You (End-User) by REVREBEL LLC, located and registered at 5101 Santa Monica Blvd, STE 8 PMB 69, Los Angeles, California 90029 , United States ("'
              }
              <Strong>{"Licensor"}</Strong>
              {'"), for use only under the terms of this License Agreement.'}
            </Paragraph>
            <Paragraph>
              {
                'By downloading the Licensed Application from , and any update thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement. referred to in this License Agreement as "'
              }
              <Strong>{"Services "}</Strong>
              {'."'}
            </Paragraph>
            <Paragraph>
              {
                "The parties of this License Agreement acknowledge that the Services are not a Party to this License Agreement and are not bound by any provisions or obligations with regard to the Licensed Application, such as warranty, liability, maintenance and support thereof. REVREBEL LLC, not the Services, is solely responsible for the Licensed Application and the content thereof."
              }
            </Paragraph>
            <Paragraph>
              {
                'This License Agreement may not provide for usage rules for the Licensed Application that are in conflict with the latest ("'
              }
              <Strong>{"Usage Rules "}</Strong>
              {
                '" ). REVREBEL LLC acknowledges that it had the opportunity to review the Usage Rules and this License Agreement is not conflicting with them.'
              }
            </Paragraph>
            <Paragraph>
              {
                "REVREBEL TOOLS when purchased or downloaded through the Services, is licensed to You for use only under the terms of this License Agreement. The Licensor reserves all rights not expressly granted to You. REVREBEL TOOLS is to be used on devices that operate with ."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"TABLE OF CONTENTS"}</Heading>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_application",
                }}
              >
                {"1. THE APPLICATION"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_scope",
                }}
              >
                {"2. SCOPE OF LICENSE"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_requirements",
                }}
              >
                {"3. TECHNICAL REQUIREMENTS"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_no-support",
                }}
              >
                {"4. NO MAINTENANCE AND SUPPORT"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_ugc",
                }}
              >
                {"5. USER-GENERATED CONTRIBUTIONS"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_contribution",
                }}
              >
                {"6. CONTRIBUTION LICENSE"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_liability",
                }}
              >
                {"7. LIABILITY"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_warranty",
                }}
              >
                {"8. WARRANTY"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_product-claims",
                }}
              >
                {"9. PRODUCT CLAIMS"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_compliance",
                }}
              >
                {"10. LEGAL COMPLIANCE"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_contact",
                }}
              >
                {"11. CONTACT INFORMATION"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_termination",
                }}
              >
                {"12. TERMINATION"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_third-party",
                }}
              >
                {"13. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_ipr",
                }}
              >
                {"14. INTELLECTUAL PROPERTY RIGHTS"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_law",
                }}
              >
                {"15. APPLICABLE LAW"}
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                button={false}
                options={{
                  href: "#eula_misc",
                }}
              >
                {"16. MISCELLANEOUS"}
              </Link>
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"1.THE APPLICATION"}</Heading>
            <Paragraph>
              {'REVREBEL TOOLS ("'}
              <Strong>{"Licensed Application "}</Strong>
              {
                '") is a piece of software created to Our business analytics tools allow organizations a complete overview of the company to provide key insights and understanding of the business so smarter decisions may be made regarding business operations, customer conversions, and more. Our intelligence tools also collect and display aggregate data; business analytics and provide reasons why the results occurred to help identify weaknesses, fix potential problem areas, alert decision-makers to unforeseen events, and even forecast future results based on decisions the company might make. '
              }
            </Paragraph>
            <Paragraph>
              {
                'The applicated aims to assist users in achieving their business goals, remain competitive and increase overall customer satisfaction. — and customized for mobile devices ("'
              }
              <Strong>{"Devices "}</Strong>
              {
                '"). It is used to Application software retrieves data from one or more business systems and combines it in a repository, such as a data warehouse, to be reviewed and analyzed. Provides insights into the performance of a business by producing real-time analysis through visualization of data and may include spreadsheets with statistical functions, statistical software packages, sophisticated data mining tools, and predictive modeling tools. .'
              }
            </Paragraph>
            <Paragraph>
              {
                "The Licensed Application is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Licensed Application. You may not use the Licensed Application in a way that would violate the Gramm-Leach-Bliley Act (GLBA)."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading id={"eula_scope"} tag={"h3"}>
              {"2. SCOPE OF LICENSE"}
            </Heading>
            <Paragraph>
              {
                "2 . 1 Licensor reserves the right to modify the terms and conditions of licensing."
              }
            </Paragraph>
            <Paragraph>
              {
                "2 . 2 Nothing in this license should be interpreted to restrict third-party terms. When using the Licensed Application, You must ensure that You comply with applicable third-party terms and conditions."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"3. TECHNICAL REQUIREMENTS"}</Heading>
            <Paragraph>
              {
                "3. 1 The Licensed Application requires a firmware version 1.0.0 or higher . Licensor recommends using the latest version of the firmware."
              }
            </Paragraph>
            <Paragraph>
              {
                "3. 2 Licensor attempts to keep the Licensed Application updated so that it complies with modified/new versions of the firmware and new hardware. You are not granted rights to claim such an update."
              }
            </Paragraph>
            <Paragraph>
              {
                "3. 3 You acknowledge that it is Your responsibility to confirm and determine that the app end-user device on which You intend to use the Licensed Application satisfies the technical specifications mentioned above."
              }
            </Paragraph>
            <Paragraph>
              {
                "3. 4 Licensor reserves the right to modify the technical specifications as it sees appropriate at any time."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"4. NO MAINTENANCE OR SUPPORT"}</Heading>
            <Paragraph>
              {
                "4.1 REVREBEL LLC is  not obligated, expressed or implied, to provide any maintenance, technical or other support for the Licensed Application."
              }
            </Paragraph>
            <Paragraph>
              {
                "4.2 REVREBEL LLC and the End-User acknowledge that the Services have no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"5. USER-GENERATED CONTRIBUTIONS"}</Heading>
            <Paragraph>
              {
                'The Licensed Application may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or in the Licensed Application, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions" ). Contributions may be viewable by other users of the Licensed Application and through third-party websites or applications. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:'
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <List className={"list-2"} tag={"ol"} unstyled={false}>
              <ListItem>
                {
                  "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party."
                }
              </ListItem>
              <ListItem>
                {
                  "You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Licensed Application, and other users of the Licensed Application to use your Contributions in any manner contemplated by the Licensed Application and thisLicense Agreement."
                }
              </ListItem>
              <ListItem>
                {
                  "You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness or each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Licensed Application and this License Agreement."
                }
              </ListItem>
              <ListItem>
                {"Your Contributions are not false, inaccurate, or misleading."}
              </ListItem>
              <ListItem>
                {
                  "Your Contributions are not unsolicited or unauthorizedadvertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous , slanderous, or otherwise objectionable (as determined by us)."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions do not violate any applicable law, regulation, or rule."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions do not violate the privacy or publicity rights of any third party."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap."
                }
              </ListItem>
              <ListItem>
                {
                  "Your Contributions do not otherwise violate, or link to material that violates, any provision of this License Agreement, or any applicable law or regulation."
                }
                <br />
                {"‍"}
              </ListItem>
            </List>
            <Paragraph>
              {
                "Any use of the Licensed Application in violation of the foregoing violates this LicenseAgreement and may result in, among other things, termination or suspension of your rights to use the Licensed Application."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"6. CONTRIBUTION LICENSE"}</Heading>
            <Paragraph>
              {
                "By posting your Contributions to any part of the Licensed Application or making Contributions accessible to the Licensed Application by linking your account from the Licensed Application to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use copy, reproduce, disclose, sell, resell, publish, broad cast, retitle, archive, store, cache, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial advertising, or otherwise, and to prepare derivative works of, or incorporate in other works, such as Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels."
              }
            </Paragraph>
            <Paragraph>
              {
                "This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions."
              }
            </Paragraph>
            <Paragraph>
              {
                "We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area in the Licensed Application. You are solely responsible for your Contributions to the Licensed Application and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions."
              }
            </Paragraph>
            <Paragraph>
              {"We have the right, in our sole and absolute discretion, "}
            </Paragraph>
            <List tag={"ol"} unstyled={false}>
              <ListItem>
                {"To edit, redact, or otherwise change any Contributions; "}
              </ListItem>
              <ListItem>
                {
                  "To recategorize any Contributions to place them in more appropriate locations in the Licensed Application; and "
                }
              </ListItem>
              <ListItem>
                {
                  "To prescreen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions."
                }
              </ListItem>
            </List>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"7. LIABILITY"}</Heading>
            <Paragraph>
              {
                "7.1 Licensor's responsibility in the case of violation of obligations and tort shall be limited to intent and gross negligence. Only in case of a breach of essential contractual duties (cardinal obligations), Licensor shall also be liable in case of slight negligence. In any case, liability shall be limited to the foreseeable, contractually typical damages. The limitation mentioned above does not apply to injuries to life, limb, or health."
              }
            </Paragraph>
            <Paragraph>
              {
                "7.2 Licensor takes no accountability or responsibility for any damages caused due to a breach of duties according to Section 2 of this License Agreement. To avoid data loss, You are required to make use of backup functions of the Licensed Application to the extent allowed by applicable third-party terms and conditions of use. You are aware that in case of alterations or manipulations of the Licensed Application, You will not have access to the Licensed Application."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"8. WARRANTY"}</Heading>
            <Paragraph>
              {
                "8.1 Licensor warrants that the Licensed Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Licensed Application works as described in the user documentation."
              }
            </Paragraph>
            <Paragraph>
              {
                "8 .2 No warranty is provided for the Licensed Application that is not executable on the device, that has been unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, or if there are any other reasons outside of REVREBEL LLC 's sphere of influence that affect the executability of the Licensed Application."
              }
            </Paragraph>
            <Paragraph>
              {
                "8 .3 You are required to inspect the Licensed Application immediately after installing it and notify REVREBEL LLC about issues discovered without delay by email provided in "
              }
              <Link
                button={false}
                options={{
                  href: "#eula_product-claims",
                }}
              >
                {"Product Claims "}
              </Link>
              {
                ". The defect report will be taken into consideration and further investigated if it has been emailed within a period of  zero days after discovery."
              }
            </Paragraph>
            <Paragraph>
              {
                "8 .4 If we confirm that the Licensed Application is defective, REVREBEL LLC reserves a choice to remedy the situation either by means of solving the defect or substitute delivery."
              }
            </Paragraph>
            <Paragraph>
              {
                "8.5 In the event of any failure of the Licensed Application to conform to any applicable warranty, You may notify the Services Store Operator, and Your Licensed Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the Services Store Operator will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other losses, claims, damages, liabilities, expenses, and costs attributable to any negligence to adhere to any warranty."
              }
            </Paragraph>
            <Paragraph>
              {
                "8.6 If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve (12) months after the Licensed Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"9. PRODUCT CLAIMS"}</Heading>
            <Paragraph>
              {
                "REVREBEL LLC and the End-User acknowledge that;REVREBEL LLC , and not the Services, is responsible for addressing any claims of the End-User or any third party relating to the Licensed Application or the End-User’s possession and/or use of that Licensed Application, including, but not limited to:"
              }
            </Paragraph>
            <Paragraph>{"(i) product liability claims;"}</Paragraph>
            <Paragraph>
              {
                "(ii) any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and"
              }
            </Paragraph>
            <Paragraph>
              {
                "(iii) claims arising under consumer protection, privacy, or similar legislation ."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"10. LEGAL COMPLIANCE"}</Heading>
            <Paragraph>
              {
                'You represent and warrant that You are not located in a country that is subject to a US Government embargo, or that has been designated by the US Government as a "terrorist supporting" country; and that You are not listed on any US Government list of prohibited or restricted parties.'
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"11. CONTACT INFORMATION"}</Heading>
            <Paragraph>
              {
                "For general inquiries, complaints, questions or claims concerning the Licensed Application, please contact:"
              }
            </Paragraph>
            <Paragraph>
              <Superscript>
                {"REVREBEL LLC"}
                <br />
                {"5101 Santa Monica Blvd"}
                <br />
                {"STE 8 PMB 69"}
                <br />
                {"Los Angeles , CA 90029"}
                <br />
                {"United States"}
              </Superscript>
              {"‍"}
            </Paragraph>
            <Paragraph>
              <Strong>{"Email: "}</Strong>
              {"helpdesk@revrebel.io"}
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"12. TERMINATION"}</Heading>
            <Paragraph>
              {
                "The license is valid until terminated by REVREBEL LLC or by You. Your rights under this license will terminate automatically and without notice from REVREBEL LLC if you fail to adhere to any term(s) of this license . Upon License termination, You shall stop all use of the Licensed Application, and destroy all copies, full or partial, of the Licensed Application."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading id={"eula_third-party"} tag={"h3"}>
              {"13. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY"}
            </Heading>
            <Paragraph>
              {
                "REVREBEL LLC represents and warrants that REVREBEL LLC will comply with applicable third-party terms of agreement when using Licensed Application."
              }
            </Paragraph>
            <Paragraph>
              {
                'In Accordance with Section 9 of the"Instructions for Minimum Terms of Developer\'s End-User License Agreement," subsidiaries shall be third-party beneficiaries of this End User License Agreement and — upon Your acceptance of the terms and conditions of this License Agreement, will have the right (and will be deemed to have accepted the right) to enforce this End User License Agreement against You as a third-party beneficiary thereof.'
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading id={"eula_ipr"} tag={"h3"}>
              {"14. INTELLECTUAL PROPERTY RIGHTS"}
            </Heading>
            <Paragraph>
              {
                "REVREBEL LLC and the End-User acknowledge that, in the event of any third-party claim that the Licensed Application or the End-User's possession and use of that Licensed Application infringes on the third party's intellectual property rights, REVREBEL LLC , and not the Services, will be solely responsible for the investigation, defense, settlement, and discharge or any such intellectual property infringement claims."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"15. APPLICABLE LAW"}</Heading>
            <Paragraph>
              {
                "This License Agreement is governed by the laws of the State of California excluding its conflicts of law rules."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Heading tag={"h3"}>{"16. MISCELLANEOUS"}</Heading>
            <Paragraph>
              {
                "16 .1 If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose."
              }
            </Paragraph>
            <Paragraph>
              {
                "16 .2 Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing."
              }
            </Paragraph>
            <Paragraph>{"‍"}</Paragraph>
            <Paragraph>{"‍"}</Paragraph>
          </RichText>
        </BlockContainer>
      ) : null}
    </div>
  );
}
