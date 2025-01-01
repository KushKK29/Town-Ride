import React from "react";
import TermsSection from "./TermsSection";
import TermsPoint from "./TermsPoint";
import SubPoint from "./SubPoint";

const Terms = () => {
  return (
    <main className="px-2 md:px-3 py-12 text-[14px]">
      <div className="max-w-4xl mx-1">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            TERMS AND CONDITIONS FOR CAPTAINS
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-800 font-medium">(Auto and Cabs)</h2>
        </div>

        {/* Terms Content */}
        <div className="space-y-6 text-gray-700">
          <p className="uppercase font-bold">
            THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF INFORMATION
            TECHNOLOGY ACT, 2000 AND RULES THEREUNDER AS APPLICABLE AND THE
            PROVISIONS PERTAINING TO ELECTRONIC RECORDS IN VARIOUS STATUTES AS
            AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000.
          </p>
          <p className="font-semibold">
            TR TOWN RIDE (OPC) PRIVATE LIMITED ("
            <span className="font-medium">Town Ride</span>"/ "
            <span className="font-medium">Company</span>"/ "
            <span className="font-medium">us</span>"/ "
            <span className="font-medium">we</span>"/ "
            <span className="font-medium">our</span>") provides technology-based
            platform, as Software-as-a-Service ("
            <span className="font-medium">SAAS</span>"), and acts as a discovery
            platform for enabling lead generation for Captains, who shall offer
            ride services directly to the Captain's Customers (defined below)
            through three-wheelers ("<span className="font-medium">Auto</span>")
            and four-wheelers ("<span className="font-medium">Cab</span>")
            (collectively "<span className="font-medium">Vehicle(s)</span>"),
            and other platform based support services, as SAAS, as offered by
            Town Ride from time to time by means of the Company's website and
            the mobile application "Town Ride App" (collectively, "
            <span className="font-medium">SAAS Platform</span>").
          </p>

          <p className="font-semibold">
            The ride services are provided/ offered by third party vehicle
            operators, service providers or drivers who wish to use the Platform
            to discover their Customers hereinafter referred to as ("
            <span className="font-medium">Captain(s)</span>"/ "
            <span className="font-medium">you</span>").
          </p>

          <p className="font-semibold">
            On the basis of the representations and warranties provided by the
            Captain, the Company has agreed to onboard Captains on the Platform
            and to enable the Captains to discover their Customers. The Captain
            shall act in accordance with the terms and conditions as hereinafter
            provided and any other policy or agreement or document made
            applicable / executed by you for the purpose of your usage of the
            Platform (collectively, "T&Cs"). These T&Cs will govern the
            relationship between you and the Company in the course of your usage
            of the Platform. By signing up or registering on the Platform, you
            acknowledge that you have read and understood these T&Cs and agree
            to be bound by these T&Cs, without any limitation or qualification.
            If you do not agree with these T&Cs, please do not sign up or
            register on the Platform.
          </p>

          <p className="font-semibold">
            These T&Cs expressly supersede prior agreements or arrangements with
            you. Use of, and access to, the Platform, is offered to you upon the
            unconditional acceptance of all the terms, conditions and notices
            contained in these T&Cs and Privacy Policy (which is incorporated
            herein by reference), along with any amendments made by the Company
            at its sole discretion and posted on the Platform from time to time.
          </p>

          <p className="font-semibold">
            These T&Cs expressly supersede prior agreements or arrangements with
            you.
          </p>

          {/* Conduct Section */}
          <div className="space-y-8">
            <TermsSection title="I. GENERAL COVENANTS">
              In relation to your access of the Platform to provide the
              Services, you covenant and agree to the following:
              <TermsPoint number={1}>
                For the purposes of registration/ creation of an account on the
                Platform and providing the Services, you confirm that you are 18
                years of age.
              </TermsPoint>
              <TermsPoint number={2}>
                You are not restricted by any legal, regulatory, judicial,
                quasi-judicial or other authority, to access the Platform or
                provide the Services, including to enter into transactions
                contemplated using the Services.
              </TermsPoint>
              <TermsPoint number={3}>
                You will provide the Services solely as permitted and in
                accordance with these T&Cs and in accordance with applicable
                laws.
              </TermsPoint>
              <TermsPoint number={4}>
                By using the Platform and offering the Services, you authorize
                Town Ride, whether directly or indirectly through third parties,
                to collect information about you or make any inquiries necessary
                to validate your identity including conduct police verification
                and background checks, in accordance with our Privacy Policy.
                Please read the Privacy Policy to understand how we collect,
                process, and share your information, including personal
                information and sensitive personal data or information
                (collectively, “Information”).
              </TermsPoint>
              <TermsPoint number={5}>
                When you provide any Information to Town Ride, you will provide
                only true, accurate, current, and complete Information. You
                understand and acknowledge that the responsibility to provide
                correct Information, including the contact information, bank
                account details etc., as required in connection with the
                Services, lies solely with you. You must take all caution to
                ensure that there are no mistakes and errors in the Information
                you provide. We will not be responsible to verify the accuracy
                of the Information provided by you.
              </TermsPoint>
              <TermsPoint number={6}>
                These T&Cs impose valid and legally binding obligations on you
                and are enforceable against you.
              </TermsPoint>
            </TermsSection>
            <TermsSection title="II. REGISTRATION ON AND OPERATION OF THE PLATFORM">
              <TermsPoint number={1}>
                To offer the Services on the Platform, you should be eligible as
                per the onboarding criteria and provide such documents as
                requested by Town Ride as per applicable law and Town Ride’s
                internal policies and ensure continued compliance with the same.
                Particularly, you represent, warrant and covenant to Town Ride
                that:
                <SubPoint letter="a">
                  You have at least 2 years or driving experience;
                </SubPoint>
                <SubPoint letter="b">
                  No proceeding is pending against you regarding and neither
                  have been convicted of (a) driving under the influence of
                  drugs or alcohol; or (b) any cognizable offence under the Code
                  of Criminal Procedure, 1973, including fraud, sexual offences,
                  use of a motor vehicle to commit cognizable offence, or of any
                  crime involving property damage, theft, acts of violence, or
                  acts of terror, in the past 3 years; and
                </SubPoint>
                <SubPoint letter="c">
                  You have cleared and have no pending challans applicable to
                  the Vehicle prior to integration with the Platform.
                </SubPoint>
              </TermsPoint>
              <TermsPoint number={2}>
                You must register on the Platform and create an account on the
                Platform (“Your Account”) by providing accurate Information as
                sought during the registration process.
              </TermsPoint>
              <TermsPoint number={3}>
                Further, we may ask you for Information or documents that will
                allow us, whether directly or indirectly through third parties,
                to reasonably identify you, requiring you to take steps to
                confirm your right over your email address or financial
                instruments, or verifying your information against third party
                databases or through other sources. We reserve the right to
                terminate, suspend, or limit access to the Platform in the event
                we are unable to obtain or verify this Information.
              </TermsPoint>
              <TermsPoint number={4}>
                You are solely responsible for maintaining the confidentiality
                of your credentials (username, password, etc.) provided upon
                registration by you, and the Company is not liable for any loss
                you may incur as a result of someone else using Your Account,
                either with or without your knowledge.
              </TermsPoint>
              <TermsPoint number={5}>
                You agree to accept responsibility for all activities that occur
                in or from Your Account and agree to establish reasonable
                security procedures and controls to limit access to the password
                or other identifying information of Your Account to unauthorized
                individuals, which includes choosing passwords and other
                credentials in a manner that will protect the security of your
                Information. Your credentials include your username and password
                to Your Account and to any third-party account you have used to
                login to Your Account.
              </TermsPoint>
              <TermsPoint number={6}>
                You agree to inform us immediately if you have any reason to
                believe that your login credentials have become known to anyone
                else, or if the password is being or is likely to be used in any
                unauthorized manner.
              </TermsPoint>
              <TermsPoint number={7}>
                Town Ride will not be liable for any breach of security or
                unauthorized use of Your Account.
              </TermsPoint>
              <TermsPoint number={8}>
                The Company will take the booking request of the customer made
                on the Platform (“Service Request”) and forward it to you
                through the Platform, or in such other manner based on Town
                Ride’s sole discretion, and the Captain is prohibited from
                accepting a ride through street hailing or other means while
                using the Platform.
              </TermsPoint>
              <TermsPoint number={9}>
                The Company reserves the right to discontinue or introduce any
                other modes of Service Requests and/or for providing Services.
                In case of Package Services, at no time whatsoever will the
                Captain tamper, damage, open or do anything to the parcels that
                he/she is not specifically permitted to do during the course of
                providing the Services.
              </TermsPoint>
              <TermsPoint number={10}>
                The Company may monitor, and record calls made by you to the
                customers, for the purpose of training and improving customer
                care services, including complaint handling, and you provide
                your consent for the same.
              </TermsPoint>
              <TermsPoint number={11}>
                The Company will not be liable if you do not download the
                correct mobile application including correct and compatible
                version of the Town Ride mobile application.
              </TermsPoint>
              <TermsPoint number={12}>
                You agree that Town Ride (either directly or indirectly through
                its affiliates or third parties) may communicate with you in
                connection with the Platform or the Services, either
                electronically (for example, push notifications), or through
                phone calls, WhatsApp messenger application, email, or in
                writing through other modes.
              </TermsPoint>
              <TermsSection title="III. YOUR CONDUCT">
                <TermsPoint number={1}>
                  The Captain will not reject Service Request(s) from a
                  customer, except when deemed absolutely necessary and/or under
                  exceptional circumstances, as deemed acceptable by Town Ride
                  at its sole discretion. In case of repeated or consistent
                  denial of Service Requests, Town Ride reserves the right to
                  take appropriate action including suspension or permanent
                  deactivation of Your Account and termination of these T&Cs.
                </TermsPoint>
                <TermsPoint number={2}>
                  The Captain will refrain from doing anything which the Company
                  reasonably believes to be disreputable or capable of damaging
                  the Company’s reputation and will comply with all applicable
                  laws of the Republic of India.
                </TermsPoint>
                <TermsPoint number={3}>
                  In relation to the Platform, the Captain agrees to:
                  <SubPoint letter="a">
                    Not authorize others to use Your Account on the Platform or
                    your Vehicle;
                  </SubPoint>
                  <SubPoint letter="b">
                    Not assign or otherwise transfer Your Account to any other
                    person or legal entity;
                  </SubPoint>
                  <SubPoint letter="c">
                    Not use the Platform for unlawful purposes, including but
                    not limited to sending or storing any unlawful material or
                    for fraudulent purposes;
                  </SubPoint>
                  <SubPoint letter="d">
                    Not use the Platform to cause nuisance, annoyance, or
                    inconvenience to customer, Town Ride or any other person;
                  </SubPoint>
                  <SubPoint letter="e">
                    Not consume alcohol or drugs or be under the influence of
                    drugs or other illegal substances, prior to or during the
                    provision of Services. Town Ride has a zero-tolerance policy
                    in respect of use of drugs, alcohol, intoxicants, or other
                    illegal substances, by any Captain and the customers can
                    report any such behaviour to Town Ride and strict action
                    will be taken by Town Ride including but not limited to
                    suspension of your Services / Your Account while under
                    investigation and termination;
                  </SubPoint>
                  <SubPoint letter="f">
                    Not impair the proper operation of the network/ Platform and
                    will not use any device, software, routine, file or other
                    tool or technology, which includes any viruses, trojan
                    horses, worms, time bombs or cancelbots, intended to damage,
                    interfere with or affect functionality or operation of the
                    Platform, to surreptitiously intercept or expropriate any
                    system, data or information in connection with the content
                    hosted/ available on the Platform, or to affect the
                    operation of any other websites or the internet;
                  </SubPoint>
                </TermsPoint>
                <TermsPoint number={4}>
                  In addition to the foregoing, you will not upload, display,
                  share, host, publish or transmit any information that:
                  <SubPoint letter="a">
                    Either belongs to another person or to which you do not have
                    any right whatsoever;
                  </SubPoint>
                  <SubPoint letter="b">
                    Is harmful, offensive, harassing, obscene, pornographic,
                    invasive of another’s privacy, hateful, racially, or
                    ethnically objectionable, disparaging, relating to or
                    encouraging money laundering or gambling, or an online game
                    that causes user harm, or otherwise unlawful in any manner
                    whatsoever, or promoting enmity between different groups on
                    the grounds of religion or caste with the intent to incite
                    violence;
                  </SubPoint>
                  <SubPoint letter="c">
                    Infringes any patent, trademark, copyright, or any other
                    proprietary rights;
                  </SubPoint>
                  <SubPoint letter="d">
                    Harms minors in any way or is harmful to child;
                  </SubPoint>
                  <SubPoint letter="e">
                    Includes any commercial material or content (including
                    solicitation of funds, advertising, or marketing of any good
                    or services);
                  </SubPoint>
                  <SubPoint letter="f">
                    Deceives or misleads the addressee about the origin of such
                    messages, or communicates any misinformation or information
                    which is patently false and untrue or misleading in nature
                    or in respect of any business of the Central Government, is
                    identified as fake or false or misleading by such fact check
                    unit specified by the Government;
                  </SubPoint>
                </TermsPoint>
                <TermsPoint number={5}>
                  The Company reserves the right to immediately terminate the
                  use of the Platform by the Captain if he does not comply with
                  any of the above rules in Clauses III.3 and III.4 above.
                </TermsPoint>
                <TermsPoint number={6}>
                  The Captain will not be permitted to operate on the Platform
                  for more than 12 hours on a calendar day and should take a
                  mandatory break of 10 hours before subsequent login into the
                  Platform and offering the Services.
                </TermsPoint>
                <TermsPoint number={7}>
                  The Captain consents to provide identity documents for police
                  verification and background checks by the Company, directly or
                  indirectly through a third party appointed by the Company.
                </TermsPoint>
                <TermsPoint number={8}>
                  The Captain will have to mandatorily undergo an induction
                  training program of 30 hours before onboarding with the Town
                  Ride Platform and agrees to undergo any other training
                  programs including refresher training program as required by
                  applicable law or as deemed necessary by Town Ride.
                </TermsPoint>
                <TermsPoint number={9}>
                  The Captain will not be allowed to operate without undergoing
                  a complete medical examination including eye check-up through
                  a medical institution prescribed by the Company. The cost of
                  such medical check-up will be borne by the Company.
                </TermsPoint>
                <TermsPoint number={10}>
                  Town Ride / its personnel may undertake spot checks of the
                  Bikes to verify and ensure your compliance with these T&Cs and
                  applicable laws.
                </TermsPoint>
              </TermsSection>
            </TermsSection>
            <TermsSection title="IV. YOUR CONDUCT">
              <TermsPoint number="1">
                In relation to the Platform, the Captain agrees to:
                <SubPoint letter="a">
                  Not authorize others to use Your Account on the Platform.
                </SubPoint>
                <SubPoint letter="b">
                  Not assign or otherwise transfer Your Account to any other
                  person or legal entity.
                </SubPoint>
                <SubPoint letter="c">
                  Not use the Platform for unlawful purposes.
                </SubPoint>
                <SubPoint letter="d">
                  Not carry out any activity prohibited by any law.
                </SubPoint>
                <SubPoint letter="e">
                  Not impair the proper operation of the network/Platform.
                </SubPoint>
              </TermsPoint>

              <TermsPoint number="2">
                In addition to the foregoing, you will not upload, display,
                share, host, publish, or transmit any information that:
                <SubPoint letter="a">
                  Belongs to another person or to which you do not have any
                  right.
                </SubPoint>
                <SubPoint letter="b">
                  Is harmful, offensive, harassing, obscene, or unlawful.
                </SubPoint>
                <SubPoint letter="c">
                  Infringes any intellectual property rights.
                </SubPoint>
                <SubPoint letter="d">
                  Harms minors in any way or is harmful to children.
                </SubPoint>
              </TermsPoint>
            </TermsSection>
            <TermsSection title="V. REPRESENTATIONS, WARRANTIES AND COVENANTS">
              <TermsPoint number={1}>
                The Captains and the Company represent the following:
                <SubPoint letter="a">
                  They have all requisite power and authority to deliver and
                  perform the obligations imposed herein;
                </SubPoint>
                <SubPoint letter="b">
                  The execution and performance of the obligations do not and
                  will not violate any provision of any existing agreement, law,
                  rule, regulation, any order, or judicial pronouncement which
                  is applicable to each party; and
                </SubPoint>
                <SubPoint letter="c">
                  They have not been convicted by any court in India or any
                  other country of any crimes including but not limited to
                  involving moral turpitude.
                </SubPoint>
              </TermsPoint>
              <TermsPoint number={2}>
                The Captains hereby represent, warrant, and covenant the
                following:
                <SubPoint letter="a">
                  They have the requisite authority or assignment to drive the
                  Vehicle and there are no restrictions with respect to the use
                  of the Vehicle that will hinder the Captain from the
                  performance of the Services or using the Platform;
                </SubPoint>
                <SubPoint letter="b">
                  They have all rights, licenses, and permits as may be required
                  under applicable laws to perform the Service in accordance
                  with these T&Cs;
                </SubPoint>
                <SubPoint letter="c">
                  They are in compliance with the Motor Bikes Act, 1988 (“MV
                  Act”), Food Safety and Standards Act 2006 and any other
                  applicable laws (including rules, regulations and orders
                  notified thereunder) as required to be complied with by any
                  person driving Bikes and providing the Services;
                </SubPoint>
                <SubPoint letter="d">
                  At the time of onboarding with the Platform, they have not
                  been convicted within the past 3 years, for the offence of
                  driving under the influence of alcohol or any cognizable
                  offence under the Code of Criminal Procedure, ‘1973 or the
                  Indian Penal Code, 1860 (as may be applicable) including
                  fraud, sexual offences, use of a motor vehicle to commit a
                  cognizable offence, a crime involving property damage or
                  theft, acts of violence, or acts of terror;
                </SubPoint>
                <SubPoint letter="e">
                  They hold and will maintain updated/renewed licenses,
                  insurance and permits necessary for the use of Vehicle;
                </SubPoint>
                <SubPoint letter="f">
                  They will not drive rashly, will follow traffic regulations
                  and all applicable laws, not consume liquor/cigarette/bidi, or
                  any other kind of intoxicant and will have and hold a valid
                  driving license and registration/insurance papers for the
                  Vehicle at all times, during the performance of the Services.
                  The Captain will not take any personal calls except in the
                  event of an emergency, without prejudicing the safety of the
                  Vehicle and the customer. The Captain will take all calls from
                  the customer and the Company only after stopping the Vehicle
                  at an appropriate location to take the call, without being a
                  hindrance to the traffic around him or without violating any
                  traffic rules;
                </SubPoint>
                <SubPoint letter="g">
                  They will provide the Services in a courteous and professional
                  manner as reasonably expected by a service provider providing
                  the Services;
                </SubPoint>
                <SubPoint letter="h">
                  They will at all times during which he is undertaking the
                  Services, maintain dress, appearance, and hygiene codes
                  reasonably expected from a service provider;
                </SubPoint>
                <SubPoint letter="i">
                  They will perform its obligations with promptness and use
                  reasonable care and skill and in accordance with standards of
                  diligence, care, skill, quality, and integrity to be
                  reasonably expected of an experienced and reputable provider
                  of Services;
                </SubPoint>
                <SubPoint letter="j">
                  They will provide Services in accordance with all the
                  specifications that may be prescribed and formulated by the
                  Company from time to time;
                </SubPoint>
                <SubPoint letter="k">
                  They will follow all the standard operating procedures (SOPs)
                  and policies that may be prescribed and formulated by the
                  Company from time to time;
                </SubPoint>
                <SubPoint letter="l">
                  They will not carry any weapons, firearms, ammunition,
                  explosive devices, and dangerous substances during performance
                  of the Services;
                </SubPoint>
                <SubPoint letter="m">
                  They will not seek any extra monetary compensation from the
                  customer for the completion of Services by way of tips or
                  otherwise;
                </SubPoint>
                <SubPoint letter="n">
                  They will not commit any fraud while providing the Services or
                  otherwise commit any act or omission, to gain any undue
                  advantage which may include, but not be limited to:
                  intentionally falsify information; accept Service Requests
                  without the intention to complete or provide the Services,
                  provoke customers to cancel for fraudulent purposes; claim
                  fraudulent fees or charges; intentionally request, accept, or
                  complete fraudulent or falsified Service Requests;
                  deliberately increase the time or distance of a trip or
                  delivery for fraudulent purposes or otherwise; claim to
                  complete a delivery without ever picking up the delivery item;
                  picking up a delivery item but retaining all or a portion of
                  the item, or not delivering the entire order; actions intended
                  to disrupt or manipulate the normal functioning of the
                  Company’s Platform, including manipulating the settings on a
                  phone to prevent the proper functioning of the Platform and
                  the GPS system; or falsify documents, records, or other data
                  for fraudulent purposes; creating improper duplicate accounts;
                  or falsify documents, records, or other data for fraudulent
                  purposes, or any other fraudulent, negligent or unlawful
                  activity in contravention of the intent of these T&Cs,
                  permitted scope of Services envisaged under these T&Cs, or
                  applicable laws;
                </SubPoint>
                <SubPoint letter="o">
                  They will not allow more than 1 (one) pillion rider on Bikes;
                </SubPoint>
                <SubPoint letter="p">
                  They will ensure that the Vehicle has a valid fitness
                  certificate issued, insurance certificate, pollution under
                  control certificate, and other permits / certificates /
                  licenses and will operate under valid and subsisting permit(s)
                  granted under relevant provisions of MV Act or any other
                  applicable law;
                </SubPoint>
                <SubPoint letter="q">
                  They will adhere to applicable laws including in relation to
                  road safety, abide by traffic signals, speed limits and such
                  other norms or rules applicable for plying the Vehicle on
                  road;
                </SubPoint>
                <SubPoint letter="r">
                  They will perform each pick-up and delivery in the most
                  efficient manner possible and will make best efforts to adhere
                  to the timelines prescribed;
                </SubPoint>
                <SubPoint letter="s">
                  They will also ensure that the safety of packages is not
                  compromised at the time of delivery;
                </SubPoint>
                <SubPoint letter="t">
                  They will report to TR Town Ride immediately if any illegal or
                  prohibited items are being provided by customer or asked to be
                  delivered by the customer;
                </SubPoint>
                <SubPoint letter="u">
                  Their total earnings for any given financial year do not
                  exceed INR 20,00,000 (Rupees Twenty Lakhs) and that they are
                  an unregistered GST service provider; and
                </SubPoint>
                <SubPoint letter="v">
                  They will promptly inform the Company in case their total
                  earnings exceed or is expected to exceed INR 20,00,000 (Rupees
                  Twenty Lakhs) in a financial year.
                </SubPoint>
              </TermsPoint>
            </TermsSection>
            <TermsSection title="VI. RELATIONSHIP BETWEEN THE PARTIES">
              Independent Contractor: The Captain will operate as, and have the
              status of, an independent contractor. The relationship between the
              Company and the Captain is on a principal-to- principal basis. The
              Company and the Captain are independent legal entities, and
              nothing in these T&Cs will be construed to create a partnership,
              joint venture, an association of persons, agency (disclosed or
              undisclosed), franchise, sales representative, or employment
              relationship between the Company and the Captain. It is clarified
              that the Captain will not have any right to conclude any contract
              for and / or on the behalf of the Company or bind the Company in
              any manner.
            </TermsSection>
            <TermsSection title="VII. CAPTAIN INFORMATION">
              <TermsPoint number={1}>
                TR Town Ride may collect Captain Information at the time of
                onboarding of the Captains and from time to time, to establish
                the identity of the Captains. TR Town Ride reserves the right to
                store, process, access and use the Captain Information for
                business purposes and needs, background check, verification,
                marketing, service, development, analytics, research, and any
                other purpose as TR Town Ride may deem fit and in accordance
                with Town Ride’s Privacy Policy and applicable law. The Captain
                hereby expressly consents to such collection and use of Captain
                Information.
              </TermsPoint>
              <TermsPoint number={2}>
                Subject to applicable laws, TR Town Ride may provide to a third
                party, governmental agency, judicial body, any Captain
                Information, or information relating to the Captain, if there is
                a complaint, dispute, or conflict, including any accident
                involving a Captain on one hand and end-consumer, or a third
                party on the other hand.
              </TermsPoint>
              <TermsPoint number={3}>
                Please read our Privacy Policy to understand how we deal /
                handle Information collected from you. “Captain Information”
                shall mean and include any personal data or Information
                collected from the Captain including know your customer
                documents with Captain’s bank, copies of valid government-issued
                vehicle registration certificate, mobile number, bank account
                details, vehicle insurance copy, driving license, identity
                proof, self-clicked images (selfies), residence proof, location
                data, proof of ownership of Captains’ Vehicle and any other
                Information that TR Town Ride may deem fit.
              </TermsPoint>
            </TermsSection>
            <TermsSection title="VIII. CONFIDENTIALITY">
              <TermsPoint number={1}>
                The Captain will keep confidential all data including customer
                details, market information, all work products and documents
                related thereto, and the contents of the Platform and will not
                sell or otherwise make that information available to any third
                parties. Except as otherwise agreed, the data of customers will
                be the exclusive property of the Company, and the Captain will
                not use the same for any purpose or distribute such data in any
                form or means except for the purpose of providing the Services
                and other than as permitted by the Company and will keep it
                confidential at all times.
              </TermsPoint>
              <TermsPoint number={2}>
                All non-public information relating to us or disclosed by us or
                our affiliates to you that is designated as confidential or
                that, given the nature of the information or the circumstances
                surrounding its disclosure, reasonably should be considered as
                confidential. Confidential information includes but is not
                limited to: (a) contents / information relating to Services and
                Platform; (b) information relating to our or our affiliates or
                business partners’ technology, software, customers, business
                plans, product plans and designs, promotional and marketing
                activities, finances and other business affairs; (c) third-party
                information including that of customers which we are obligated
                to keep confidential; (d) the nature, content and existence of
                any discussions or negotiations between you and us or our
                affiliates; and (e) any other information which should be
                reasonably kept confidential.
              </TermsPoint>
            </TermsSection>
            <TermsSection title="IX. PROPRIETARY RIGHTS">
              <TermsPoint number={1}>
                The Company is the sole owner and lawful licensee of all the
                rights to Platform or any other digital media and its contents.
                The content means its design, layout, text, images, graphics,
                sounds, video, the website/ Platform, etc. or any other digital
                media content embodying trade secrets and Intellectual Property
                Rights protected under worldwide copyright and other laws. All
                titles, ownership and Intellectual Property Rights in the
                Platform and its content (except third party links) will remain
                with the Company, its affiliates, agents, authorized
                representatives, or licensors as the case may be. <br /> <br />
                The term “Intellectual Property Rights” means all intellectual
                property rights or similar proprietary rights, including: (i)
                patent rights and utility models, (ii) copyrights and database
                rights including moral rights, (iii) trademarks, trade names,
                domain names and trade dress and the associated goodwill, (iv)
                trade secrets, and (v) industrial design rights; and for each of
                the foregoing includes any registrations of, applications to
                register, and renewals and extensions of, any of the foregoing
                in any jurisdiction in the world.
              </TermsPoint>
              <TermsPoint number={2}>
                All rights not otherwise claimed under this T&Cs or by the
                Company are hereby reserved. The information contained in this
                Platform is intended, solely to provide general information for
                the personal use of the reader, who accepts full responsibility
                for its use.
              </TermsPoint>
              <TermsPoint number={3}>
                All related icons and logos are registered trademarks or service
                marks or word marks of the Company in various jurisdictions and
                are protected under applicable copyrights, trademarks, and other
                proprietary rights laws. The unauthorized copying, modification,
                use or publication of these marks is strictly prohibited.
              </TermsPoint>
              <TermsPoint number={4}>
                Subject to your compliance with these T&Cs, the Company grants
                you a limited, non- exclusive, non-transferable license to
                download and install a copy of the TR Town Ride mobile
                application on a single mobile device that you own or control
                and to run such copy of the TR Town Ride mobile application
                solely for your own personal use and for providing the Services.
              </TermsPoint>
              <TermsPoint number={5}>
                Captain data: As between TR Town Ride and Captain, all right,
                title and interest in: (i) the Information, (ii) other
                information input into the Platform by Captain or its authorized
                users (“Other Information”), and (iii) all Intellectual Property
                Rights in each of the foregoing, belong to and are retained
                solely by the Captain. Information and Other Information are
                collectively referred to as “Your Information”. Captain grants
                to TR Town Ride a unlimited, non-exclusive, royalty-free,
                worldwide license to use Your Information and perform all acts
                with respect to the Your Information, as may be necessary for TR
                Town Ride to operate, maintain and improve the Platform or
                provide the Services to customers, and a non-exclusive,
                perpetual, irrevocable, worldwide, royalty-free, fully paid-up
                license to use, reproduce, modify and distribute the Other
                Information as a part of the Aggregated Statistics (defined
                below). Captain is solely responsible for the accuracy, quality,
                veracity, integrity, legality, reliability, and appropriateness
                of Your Information. TR Town Ride agrees to access and use Your
                Information solely for Captain’s / customer’s benefit and as set
                forth in these T&Cs or the Privacy Policy.
              </TermsPoint>
              <TermsPoint number={6}>
                Aggregated statistics: Notwithstanding anything else in these
                T&Cs, TR Town Ride may monitor Captain’s use of the Platform and
                use data and information related to such use and Your
                Information in an aggregate and anonymous manner, including to
                compile statistical and performance information related to the
                provision and operation of the Platform and the Services
                (“Aggregated Statistics”). As between TR Town Ride and Captain,
                all right, title and interest in the Aggregated Statistics and
                all Intellectual Property Rights therein, belong to and are
                retained solely by TR Town Ride. Captain acknowledges that TR
                Town Ride will be compiling Aggregated Statistics based on Your
                Information and Information input by other customers / other
                captains into the Platform. Captain agrees that TR Town Ride
                may: (i) make such Aggregated Statistics publicly available, and
                (ii) use such information to the extent and in the manner
                required by applicable law and for purposes of data gathering,
                analysis, service enhancement and marketing, provided that such
                data and information does not identify Captain.
              </TermsPoint>
              <TermsPoint number={7}>
                The Captain will not do the following:
                <SubPoint letter="a">
                  License, sublicense, sell, resell, transfer, assign,
                  distribute or otherwise commercially exploit or make available
                  to any third party the Platform in any way;
                </SubPoint>
                <SubPoint letter="b">
                  Modify or make derivative works based upon the Platform;
                </SubPoint>
                <SubPoint letter="c">
                  Create internet “links” or “frame” or “mirror” any application
                  on any other server or wireless or internet-based device;
                </SubPoint>
                <SubPoint letter="d">
                  Reverse engineer or access the Platform in order to:
                  <TermsPoint number={1}>
                    design or build a competitive product or service,
                  </TermsPoint>
                  <TermsPoint number={2}>
                    design or build a product using similar ideas, features,
                    functions, or graphics of the Platform, or
                  </TermsPoint>
                  <TermsPoint number={3}>
                    copy any ideas, features, functions, or graphics of the
                    Platform, or
                  </TermsPoint>
                  <TermsPoint number={4}>
                    launch an automated program or script, including, but not
                    limited to, web spiders, web crawlers, web robots, web ants,
                    web indexers, bots, viruses or worms, or any program which
                    may make multiple server requests per second, or unduly
                    burdens or hinders the operation and/or performance of the
                    Platform.
                  </TermsPoint>
                </SubPoint>
              </TermsPoint>
            </TermsSection>
            <TermsSection title="X. INDEMNITY">
              <TermsPoint number={1}>
                The Captain agrees to indemnify, defend and hold harmless, the
                Company, its affiliates, licensees and its officers, directors,
                agents and employees, from and against any claim, liability,
                obligation, loss, damage, deficiency, assessment, judgment, cost
                or expense (including, without limitation to costs and expenses
                incurred in preparing and defending against or prosecuting any
                litigation, claim, action, suit proceeding or demand) of any
                kind or character, arising out of or in any manner incidental,
                relating, or attributable to any inaccuracy, breach, or failure
                by the Captain to perform its obligations under these T&Cs or
                the applicable laws in relation to performance of the Services.
              </TermsPoint>
              <TermsPoint number={2}>
                TR Town Ride reserves the right, at your expense, to assume the
                exclusive defence and control of any matter for which you are
                required to indemnify TR Town Ride, including rights to settle,
                and you agree to cooperate with TR Town Ride for such defence
                and settlement. TR Town Ride will use reasonable efforts to
                notify you of any claim, action, or proceeding brought by a
                third party that is subject to the foregoing indemnification
                upon becoming aware of it. Captain may, at its own expense,
                engage separate counsel to advise Captain regarding a claim and
                to participate in the defence of the claim, subject to Town
                Ride’s right to control the defence and settlement.
              </TermsPoint>
            </TermsSection>
            <TermsSection title="XI. DISCLAIMERS">
              <TermsPoint number={1}>
                THE COMPANY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTEE AS
                TO THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY,
                AVAILABILITY, ACCURACY OR COMPLETENESS OF THE SERVICES PROVIDED
                BY TR Town Ride AND/OR THE PLATFORM. THE COMPANY DOES NOT
                REPRESENT OR WARRANT THAT (A) THE USE OF THE SERVICES PROVIDED
                BY TR Town Ride AND/OR THE PLATFORM WILL BE SECURE, TIMELY,
                UNINTERRUPTED OR ERROR-FREE OR OPERATE IN COMBINATION WITH ANY
                OTHER HARDWARE, SOFTWARE, SYSTEM OR DATA, (B) THE PLATFORM /
                SERVICE WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (C) ANY
                STORED DATA WILL BE ACCURATE OR RELIABLE, (D) THE QUALITY OF ANY
                SERVICES, INFORMATION OBTAINED BY YOU THROUGH THE PLATFORM WILL
                MEET YOUR REQUIREMENTS OR EXPECTATIONS, (E) ERRORS OR DEFECTS IN
                THE SERVICES PROVIDED BY TR Town Ride AND/OR THE PLATFORM WILL
                BE CORRECTED, OR (F) THE PLATFORM OR THE SERVER(S) ARE FREE OF
                VIRUSES OR OTHER HARMFUL COMPONENTS. THE PLATFORM IS PROVIDED TO
                YOU STRICTLY ON AN “AS IS” BASIS.
              </TermsPoint>
              <TermsPoint number={2}>
                All conditions, representations, and warranties, whether
                express, implied, statutory, or otherwise, including, without
                limitation, any implied warranty of merchantability, fitness for
                a particular purpose, or non-infringement of third-party rights,
                are hereby excluded and disclaimed to the highest and maximum
                extent. The Company makes no representation, warranty, or
                guarantee as to the reliability, safety, timeliness, quality,
                suitability, or availability of the Platform. You acknowledge
                and agree that the entire risk arising out of your use of the
                Platform remains solely and absolutely with you and you will
                have no recourse whatsoever to the Company.
              </TermsPoint>
              <TermsPoint number={3}>
                The Platform may be subject to limitations, delays, and other
                problems inherent in the use of the internet and electronic
                communications including the device used by you being faulty,
                not connected, out of range, switched off or not functioning.
                The Company is not responsible for any delays, service failures
                or interruptions, errors, damages, or losses resulting from such
                problems. Access to the Platform or the Services may be
                unavailable, delayed, limited, or slowed, from time to time, due
                to the inherent nature of the internet and among other things
                also due to:
                <SubPoint letter="a">
                  Servers, networks, hardware failure (including your own
                  computer or mobile), telecommunication lines and connections,
                  and other electronic and mechanical equipment;
                </SubPoint>
                <SubPoint letter="b">
                  Software failure, including among other things, bugs, errors,
                  viruses, configuration problems, incompatibility of systems,
                  utilities or applications, the operation of firewalls or
                  screening programs, unreadable codes, or irregularities within
                  particular documents or other content;
                </SubPoint>
                <SubPoint letter="c">Overload of system capacities; </SubPoint>
                <SubPoint letter="d">
                  Damage caused by severe weather, earthquakes, wars,
                  insurrection, riots, civil commotion, act of God, accident,
                  fire, water damage, explosion, mechanical breakdown, or
                  natural disasters;
                </SubPoint>
                <SubPoint letter="e">
                  Interruption (whether partial or total) of power supplies or
                  other utility service, strike, or other stoppage (whether
                  partial or total) of labour;
                </SubPoint>
                <SubPoint letter="f">
                  Governmental or regulatory restrictions, exchange rulings,
                  court or tribunal orders or other human intervention; or
                </SubPoint>
                <SubPoint letter="g">
                  Any other cause (whether similar or dissimilar to the above)
                  beyond the control of TR Town Ride.
                </SubPoint>
              </TermsPoint>
            </TermsSection>
            <TermsSection title="XII. LIMITATION OF LIABILITY">
              <TermsPoint number={1}>
                The Company is not liable to the Captain, for any condition,
                suitability, quality, merchantability, and fitness for any
                purposes in respect of the Platform or the Services provided
                through the Platform and is not liable for any civil, criminal,
                tortious, or any other liability, that may accrue as a
                consequence of the use and access of the Platform.
              </TermsPoint>
              <TermsPoint number={2}>
                To the extent permissible under applicable laws, the Company is
                not liable for any civil, criminal, tortious, or any other
                liability, that may accrue as a consequence of the breach by the
                Captain: (a) of the applicable laws in respect of the use of the
                Platform or providing the Services; (b) of the terms of the
                applicable licenses and permits that are issued by the transport
                authorities; (c) of the terms of these T&Cs; or (d) of the duty
                of care the Captain owes to the users of the Platform.
              </TermsPoint>
              <TermsPoint number={3}>
                The Company is not responsible for the behaviour, actions, or
                inactions of the Captain or, quality of the Vehicle. Any
                contract for the provision of Vehicle is exclusively between the
                customer and the Captain and the Company is not a party to the
                same.
              </TermsPoint>
              <TermsPoint number={4}>
                The Company does not represent or endorse the accuracy or
                reliability of any information or advertisement contained on,
                distributed through, or linked, downloaded or accessed from any
                of the services contained on the Platform, or the quality of any
                products, information or other materials displayed, or obtained
                by you as a result of any product, information or other
                materials displayed, or obtained by you as a result of an
                advertisement or any other information or offer in or in
                connection with the Services.
              </TermsPoint>
              <TermsPoint number={5}>
                IN NO EVENT WILL TR Town Ride BE LIABLE FOR ANY INDIRECT,
                PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES OR FOR
                ANY DAMAGES WHATSOEVER, WHETHER BASED ON CONTRACT, TORT,
                NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF IT HAS BEEN
                ADVISED OF THE POSSIBILITY THEREOF.
              </TermsPoint>
              <TermsPoint number={6}>
                IN ADDITION, AND WITHOUT LIMITING THE FOREGOING, TO THE FULLEST
                EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL Town Ride’s
                AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE
                T&Cs OR THE SERVICES RENDERED HEREUNDER, WHETHER IN CONTRACT,
                TORT (INCLUDING NEGLIGENCE, PRODUCT LIABILITY, OR OTHER THEORY),
                WARRANTY, OR OTHERWISE, EXCEED THE AMOUNT OF INR 1000/-.
              </TermsPoint>
            </TermsSection>
            <TermsSection title="XIII. TERMINATION">
              <TermsPoint number={1}>
                Company is entitled to terminate these T&Cs at all times and
                with immediate effect, at its sole discretion, (by disabling the
                Captain’s registration on the Platform and use of the Platform)
                for any one or more of the following reasons:
                <SubPoint letter="a">
                  Any violation or breach of any term of these T&Cs;
                </SubPoint>
                <SubPoint letter="b">
                  If the Captain, in the opinion of the Company, misuses the
                  Platform;
                </SubPoint>
                <SubPoint letter="c">
                  If the Captain is non-compliant with the requirements under
                  applicable laws;
                </SubPoint>
                <SubPoint letter="d">
                  Failure to verify or authenticate Captain Information;
                </SubPoint>
                <SubPoint letter="e">
                  Any action or omission by the Captain which can cause legal or
                  contractual liability for TR Town Ride including but not
                  limited to fraudulent conduct, customer complaints, continuous
                  unsatisfactory reviews by merchants or the users, misconduct,
                  negligence, and all other actions specifically prohibited
                  under applicable laws; or
                </SubPoint>
                <SubPoint letter="f">
                  Where, in their opinion, continuance of the Services of
                  Captain is detrimental to the business interest of TR Town
                  Ride due to the acts of the Captains, such as the following:
                  <TermsPoint number={1}>
                    Misbehaviour, rude behaviour with the staff of TR Town Ride,
                    customers or any other persons associated with the TR Town
                    Ride or any other persons;
                  </TermsPoint>
                  <TermsPoint number={2}>
                    Any acts involving criminal offence punishable under law,
                    including physical assault, threatening any of the staff of
                    TR Town Ride, person associated with TR Town Ride, customers
                    or any other persons;
                  </TermsPoint>
                  <TermsPoint number={3}>
                    Concealment of fact/material information while entering into
                    a contract with TR Town Ride;
                  </TermsPoint>
                  <TermsPoint number={4}>
                    Poor or irregular at work, meetings, and failure to abide by
                    the rules/terms of the T&Cs or other applicable policies /
                    SOPs notified by TR Town Ride;
                  </TermsPoint>
                  <TermsPoint number={5}>
                    Being Drunk / under the influence of drugs or other illegal
                    substances, while providing the Services and unruly/drunken
                    behaviour. TR Town Ride has a zero-tolerance policy in
                    respect of use of drugs or alcohol by any Captain;
                  </TermsPoint>
                  <TermsPoint number={6}>
                    Commission of fraud/ misappropriation/embezzlement for undue
                    monetary gain, or any act which is against the interest of
                    the TR Town Ride;
                  </TermsPoint>
                  <TermsPoint number={7}>
                    Negligence in performing the duty, causing damage of
                    moveable and immoveable assets of TR Town Ride, its
                    employees, customers, or any other persons;
                  </TermsPoint>
                  <TermsPoint number={8}>
                    Indulging in spreading content through digital media, social
                    networking sites, or any other form, which could be
                    detrimental to Town Ride’s brand and its image / reputation;
                  </TermsPoint>
                  <TermsPoint number={9}>
                    Indulging in acts such as creating ruckus/ strike/ or any
                    activity against TR Town Ride, which could be detrimental to
                    the Town Ride’s brand and its image/ reputation;
                  </TermsPoint>
                  <TermsPoint number={10}>
                    Indulging in unauthorized disclosure of Confidential
                    Information of TR Town Ride to external agency, person, or
                    organization;
                  </TermsPoint>
                  <TermsPoint number={11}>
                    Misuse of assets provided by TR Town Ride and welcome kits,
                    which could be detrimental to the interest of Town Ride’s
                    brand and its image / reputation;
                  </TermsPoint>
                  <TermsPoint number={12}>
                    Absconding for more than 4 hours with any asset, delivery
                    item, money or any other valuable item belonging to TR Town
                    Ride, its employees, customers, or other staff member(s);
                  </TermsPoint>
                  <TermsPoint number={13}>
                    Failure to abide by any of the rules and guidelines given by
                    TR Town Ride as part of Service quality standards and
                    principles;
                  </TermsPoint>
                  <TermsPoint number={14}>
                    Doing any act unbecoming of a Captain; or
                  </TermsPoint>
                  <TermsPoint number={15}>
                    In case the background check, whether wholly or partially,
                    is found negative at any point of time during the term of
                    these T&Cs.
                  </TermsPoint>
                  The Company may terminate these T&Cs immediately on the above
                  grounds and is not obliged to give notice of the termination
                  of these T&Cs in advance.
                </SubPoint>
              </TermsPoint>
              <TermsPoint number={2}>
                TR Town Ride or Captain may terminate these T&Cs by providing 7
                days’ written notice to the other party.
              </TermsPoint>
              <TermsPoint number={3}>
                TR Town Ride, in addition to its right to terminate these T&Cs,
                in its sole discretion reserves the right to legally prosecute
                the Captain immediately, if there is reason to believe that the
                Captain has indulged in any fraudulent activity or contravened
                the T&Cs of the Platform or violated any applicable laws and TR
                Town Ride will not be responsible for any consequences to the
                Captain arising from the same.
              </TermsPoint>
              <TermsPoint number={4}>
                Upon termination:
                <SubPoint letter="a">
                  Captain will stop accessing the Platform and offering the
                  Services;
                </SubPoint>
                <SubPoint letter="b">
                  TR Town Ride will settle all outstanding dues accrued to the
                  Captain subject to deductions / set off of any amount owed by
                  the Captain to TR Town Ride;
                </SubPoint>
                <SubPoint letter="c">
                  Captain will return all property and materials including
                  confidential information belonging to TR Town Ride; and
                </SubPoint>
                <SubPoint letter="d">
                  Captain will cease holding out as a service provider
                  integrated with or connected with TR Town Ride in any manner.
                </SubPoint>
              </TermsPoint>
            </TermsSection>
            <TermsSection title="XIV. GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION">
              <TermsPoint number={1}>
                These T&Cs will be governed by and interpreted in all respects
                in accordance with the laws of the Republic of India.
              </TermsPoint>
              <TermsPoint number={2}>
                Subject to the provisions made in Clause XIV.3, the parties
                hereby submit to the exclusive jurisdiction of the courts of
                Bangalore, India.
              </TermsPoint>
              <TermsPoint number={3}>
                All disputes arising out of or in relation to these T&Cs will be
                settled amicably by the parties. In the event, no amicable
                settlement is arrived at within a period of 15 (fifteen) days
                from the date of first initiation of the dispute by one party to
                other, the parties will resolve the dispute by means of
                arbitration pursuant to the Arbitration and Conciliation Act,
                1996.
              </TermsPoint>
              <TermsPoint number={4}>
                The arbitration proceedings will be conducted by an arbitral
                tribunal comprising of 1 arbitrator mutually appointed by you
                and the Company.
              </TermsPoint>
              <TermsPoint number={5}>
                The arbitration proceedings will be conducted in English
                language only and the seat for arbitration will be Bangalore,
                India.
              </TermsPoint>
              <TermsPoint number={6}>
                The award of the arbitral tribunal will be final and binding.
              </TermsPoint>
            </TermsSection>
            <TermsSection title="XV. ASSIGNMENT">
              The Captain may not assign its rights or obligations under these
              T&Cs without prior written approval of the Company. The Company
              may assign any of its rights and obligations to its affiliates or
              third parties without prior consent or notice.
            </TermsSection>
            <TermsSection title="XVI. AMENDMENT">
              These T&Cs may be amended from time to time and as and when
              required, at the sole discretion of the Company. If TR Town Ride
              makes any changes to these T&Cs that it deems to be material, TR
              Town Ride will make a reasonable effort to inform you of such
              changes, but it is your responsibility to review the T&Cs posted
              to the Platform from time to time to see if it has been changed.
              The updated version of these T&Cs will supersede the current
              version and such updated version will be immediately effective
              upon being posted on the Platform. The continued use of the
              Platform following the notification of modification of the T&Cs or
              after being updated on the Platform will be construed to mean the
              acceptance of the said modified T&Cs.
            </TermsSection>
            <TermsSection title="XVII. SEVERABILITY">
              If any provision or any part of a provision of these T&Cs is
              invalid, unenforceable or prohibited by applicable laws of the
              Republic of India , such provision or part of provision will be
              severed from these T&Cs and will be considered divisible as to
              such provision or part thereof and such provision or part thereof
              will be inoperative and will not be part of the consideration
              moving between you and the Company hereto and the remainder of
              these T&Cs will be valid and binding and of like effect as though
              such provision was not included herein.
            </TermsSection>
            <TermsSection title="XVIII. INSURANCE">
              The Company at its sole discretion may insure the Captain against
              any accident suffered by the Captain during provision of Services
              by the Captain using the Platform. The Company reserves the right
              to recover any amount paid by the Company in lieu of the insurance
              from the Captain.
            </TermsSection>
            <TermsSection title="XIX. NOTICES">
              <TermsPoint number={1}>
                The Company may give notice by means of a general notice on the
                Platform, or by electronic mail to your email address on record
                in the Company’s account information, or by written
                communication sent by regular mail to the Captain’s address on
                record in the Company’s account information.
              </TermsPoint>
              <TermsPoint number={2}>
                Captain needs to send any notice at email id: captaincare@TR
                Town Ride.bike .
              </TermsPoint>
            </TermsSection>
            <TermsSection title="XX. CUSTOMER CARE AND GRIEVANCE REDRESSAL">
              Any opinions, issues or suggestion regarding the Platform can be
              provided / resolved by reaching out to the customer care number or
              email mentioned below: <br />
              <br />
              <span className="font-bold">Customer Care details:</span>{" "}
              shoutout@TR Town Ride.bike
              <br />
              <br /> Any complaint, dispute, or grievance in relation to the
              Services or the Platform should be addressed to TR Town Ride as
              given below. Such complaint, dispute or grievance will be handled
              as per applicable laws.
              <br />
              <br /> <span className="font-bold">E-mail: </span>
              townride38@gmail.com <br />
              <br />
              <span className="font-bold">Contact Number:</span> 81253 58673{" "}
              <br />
              <br /> <span className="font-bold">Address.</span> Dhanyasree
              Residency,201,Eswar villas road, Nizampet 500090,India.
            </TermsSection>
            <TermsSection title=""></TermsSection>
          </div>
        </div>
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            TERMS AND CONDITIONS FOR CAPTAINS
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-800">
            (Auto and Cabs)
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Terms;
