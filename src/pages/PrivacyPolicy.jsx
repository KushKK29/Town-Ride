import React from "react";
import TermsSection from "./TermsSection";
import SubPoint from "./SubPoint";
const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl py-8 relative">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 grid grid-cols-8 gap-1 opacity-20">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-5">
          PRIVACY POLICY
        </h1>

        <div className="space-y-3 text-gray-700 text-sm font-medium">
          <p>
            Your privacy is of utmost importance to portation TR TOWN RIDE (OPC)
            PRIVATE LIMITED (referred to as the{" "}
            <span className="font-medium">"Company"</span>,{" "}
            <span className="font-medium">"we"</span>,{" "}
            <span className="font-medium">"TR Town Ride"</span>,{" "}
            <span className="font-medium">"us"</span>, or{" "}
            <span className="font-medium">"our"</span>).
          </p>

          <p>
            This Privacy Policy (<span className="font-medium">"Policy"</span>)
            outlines our policies and procedures for the collection, use,
            processing, storage, disclosure, transfer, and protection of your
            information, including personal data and sensitive information (
            <span className="font-medium">"Information"</span>). This applies to
            all interactions with TR Town Ride through our mobile applications (
            <span className="font-medium">"TR Town Ride App"</span>), websites (
            <a
              href="https://TR Town Ride.bike/"
              className="text-blue-600 hover:underline"
            >
              https://TR Town Ride.bike/
            </a>{" "}
            and{" "}
            <a
              href="https://www.TR Town Ride.rentals/"
              className="text-blue-600 hover:underline"
            >
              https://www.TR Town Ride.rentals/
            </a>
            ), and offline communication.
          </p>

          <p>
            The terms <span className="font-medium">"you"</span> and{" "}
            <span className="font-medium">"your"</span> refer to all users of
            the TR Town Ride Platform, including Captains, Customers, Vendor
            Partners, and others availing our services.
          </p>

          <p>
            The term <span className="font-medium">"Services"</span> refers to
            any offerings provided by TR Town Ride, as outlined in the terms and
            conditions available on the TR Town Ride Platform.
          </p>

          <p>
            Please ensure you review this Policy before using the TR Town Ride
            Platform or providing any Information. By continuing to use the
            Platform or our Services, you consent to this Policy and any future
            amendments.
          </p>

          <div className="mt-8">
            <TermsSection title="1. USER ACCEPTANCE">
              By accessing or using the TR Town Ride Platform or the Services,
              you agree and consent to this Policy, along with any amendments
              made by the Company at its sole discretion and posted on the TR
              Town Ride Platform from time to time. Any collection, processing,
              retrieval, transfer, use, storage, disclosure and protection of
              your Information will be in accordance with this Policy and
              applicable laws including but not limited to Information
              Technology Act, 2000, and the rules framed thereunder (“Applicable
              Laws”). If you do not agree with the Policy, please do not use or
              access the TR Town Ride Platform. You hereby represent to TR Town
              Ride that:
              <SubPoint letter="a">
                The Information you provide to TR Town Ride from time to time,
                is and will be authentic, correct, current and updated and you
                have all the rights, permissions and consents as may be required
                to provide such Information to TR Town Ride.
              </SubPoint>
              <SubPoint letter="b">
                Your providing of the Information as well as TR Town Ride's
                consequent storage, collection, usage, transfer, access, or
                processing of such Information will not be in violation of any
                agreement, Applicable Laws, charter documents, judgments, orders
                and decrees.
              </SubPoint>
              <SubPoint letter="c">
                If you disclose to us any Information relating to other people,
                you represent that you have the authority to do so and to permit
                us to use such Information in accordance with this Policy.
              </SubPoint>
            </TermsSection>
            <TermsSection title="2. DEFINITIONS">
              Unless otherwise provided in this Policy, the terms capitalized in
              the Policy shall have the meaning as provided hereunder:
              <SubPoint letter="a">
                “Captains” means independent third-party vehicle operators or
                riders who wish to offer services on the TR Town Ride Platform
                to a user/Customer.
              </SubPoint>
              <SubPoint letter="b">
                “Co-branded Services” shall have the meaning assigned to the
                term in paragraph 5(c) hereto.
              </SubPoint>
              <SubPoint letter="c">
                “Customer” shall mean a person who wishes to receive services of
                the Captains or Vendor Partners on the TR Town Ride Platform.{" "}
              </SubPoint>
              <SubPoint letter="d">
                “Device” shall mean computer, mobile or other device used to
                access the Services.
              </SubPoint>
              <SubPoint letter="e">
                “Device Identifier” shall mean IP address or other unique
                identifier of the Device.
              </SubPoint>
              <SubPoint letter="f">
                “Promotion” shall mean any contest and other promotions offered
                by us.
              </SubPoint>
              <SubPoint letter="g">
                “Personal Information” shall mean such categories of information
                that could reasonably be used to identify you personally,
                including your name, e-mail address, and mobile number.
              </SubPoint>
              <SubPoint letter="h">
                “TPSP” shall mean a third-party service provider.
              </SubPoint>
              <SubPoint letter="i">
                {" "}
                “Usage Information” shall have the meaning assigned to the term
                in paragraph 3(II) hereto.
              </SubPoint>
              <SubPoint letter="j">
                “Vendor Partner” shall mean third party providers who offers
                2-wheeler rental services on TR Town Ride Platform.
              </SubPoint>
            </TermsSection>
            <TermsSection title="3. WHAT INFORMATION DO WE COLLECT?">
              <SubPoint letter="I">
                INFORMATION YOU PROVIDE TO US
                <SubPoint letter="a">
                  Personal Information: We may ask you to provide certain
                  Personal Information to us. We may collect this information
                  through various means and in various places for the provision
                  of Services, including account registration forms, contact us
                  forms, or when you otherwise interact with us. When you sign
                  up to use the Services, you create a user profile. We shall
                  ask you to provide only such Personal Information which is for
                  lawful purpose connected with our Services and necessary to be
                  collected by us for such purpose.
                </SubPoint>
                <SubPoint letter="b">
                  The Information you provide to us includes the following:
                  <ul className="list-disc ml-5">
                    <li>
                      Account Information: Create or update your TR Town Ride
                      account, which may include your email address, name,
                      address, mobile number, gender, date of birth, photograph,
                      login name, password, banking or payment-related
                      information (as permitted by Applicable Laws), etc.
                    </li>
                    <li>
                      Saved Information: While you use our Services, we may
                      collect and store Information about you to process your
                      requests and automatically complete forms for future
                      transactions, including (but not limited to) your phone
                      number, address, email address, billing information,
                      emergency contact information, etc.
                    </li>
                    <li>
                      Verification Information: If you are a Vendor Partner or
                      Captain, we may collect location details, profile picture,
                      call and SMS details, copies of government-issued
                      identification documents such as Aadhaar, Permanent
                      Account Number, etc., license details, and other details
                      (KYC), vehicle-related documents such as certificate of
                      registration, permit of vehicle, certificate of fitness,
                      insurance, pollution certificate, etc., user settings, and
                      such other documents which evidence the health or fitness
                      of the vehicle to provide Services on the TR Town Ride
                      Platform from time to time. If you are a Captain, we may
                      also require you to capture your real-time self-clicked
                      images (selfies) and upload such selfies on the TR Town
                      Ride Platform from time to time to verify your identity.
                    </li>
                    <li>
                      Background check Information: We collect background check
                      and identity verification information of the Captains and
                      Vendor Partners. This may include collection of
                      Information such as driver history or criminal records
                      (where permitted by law), and right to work. This
                      information may also be collected by TPSP on the Company’s
                      behalf.
                    </li>
                    <li>
                      Other Apps: In case you sign up as a Captain or a Vendor
                      Partner, enable features that require Town Ride’s access to
                      other applications on your Device aiming to prevent and
                      detect fraud towards the Customers.
                    </li>
                    <li>
                      Other Information: We collect additional Information you
                      provide when you correspond with TR Town Ride for customer
                      support or report problems for troubleshooting. We also
                      collect Information that you may submit electronically
                      such as when you use in-app messaging, post on any message
                      boards, provide ratings, reviews, or comments. In case you
                      refer a friend, we may also collect, store, and use the
                      name and contact information of your friend to promote our
                      Services.
                    </li>
                    <li>
                      In addition to the foregoing, you will not upload,
                      display, share, host, publish or transmit any information
                      that:
                      <ul className="list-disc ml-5">
                        <li>
                          Is harmful, offensive, harassing, obscene,
                          pornographic, invasive of another’s privacy, hateful,
                          racially or ethnically objectionable, disparaging,
                          relating to or encouraging money laundering or
                          gambling, or an online game that causes user harm, or
                          otherwise unlawful in any manner whatsoever, or
                          promoting enmity between different groups on the
                          grounds of religion or caste with the intent to incite
                          violence;
                        </li>
                        <li>
                          Deceives or misleads the addressee about the origin of
                          such messages, or communicates any misinformation or
                          information which is patently false and untrue or
                          misleading in nature
                        </li>
                        <li>
                          Threatens the unity, integrity, defense, security or
                          sovereignty of India, friendly relations with foreign
                          states, or public order or causes incitement to the
                          commission of any cognizable offence or prevents
                          investigation of any offence or is insulting any other
                          nation.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </SubPoint>
              </SubPoint>
              <SubPoint letter="II">
                INFORMATION WE COLLECT AS YOU ACCESS AND USE TR Town Ride APP
                <ul className="list-disc ml-5">
                  <li>
                    Transaction Information: We collect transaction Information
                    such as trip details, pick-up and drop-off addresses,
                    distance traveled, payment transaction information (subject
                    to Applicable Laws), etc.
                  </li>
                  <li>
                    Location data:
                    <ul className="list-disc ml-5">
                      <li>
                        Captains and Vendor Partners: TR Town Ride collects
                        location data when the TR Town Ride App is running in
                        the foreground (app is open and on-screen) or background
                        (app is not in use) in your mobile device. For Captains,
                        TR Town Ride collects location data only when the
                        Captains have enabled the icon “On-Duty” on the TR Town
                        Ride App.
                      </li>
                      <li>
                        Customers: We collect precise or approximate location
                        data from your Device if you enable us to do so. TR Town
                        Ride collects this data from the time a Service is
                        requested until it is finished, and any time the app is
                        running in the foreground of your Device. We use this
                        data to enhance your use of TR Town Ride App, including
                        to improve pick-up locations, enable safety features,
                        and prevent and detect fraud. Even if you have not
                        enabled us to collect location data from your Device, TR
                        Town Ride collects the Captains’ location data collected
                        during a trip, and links such location data with your
                        account. This enables us to offer services to you, such
                        as receipt generation and customer support, and enable
                        safety of the Customers.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Usage Information: We, our TPSP and the Vendor Partner may
                    use a variety of technologies that automatically (or
                    passively) collect certain Information whenever you visit or
                    interact with the TR Town Ride Platform for obtaining the
                    Services (“Usage Information”). This Usage Information may
                    include the browser that you are using, the URL that
                    referred you to our Services, all of the areas within our
                    Services that you visit, and the time of day, searches and
                    search results, or usage behavior on the TR Town Ride App,
                    etc.
                  </li>
                  <li>
                    Health related Information: If you are a Captain, we may
                    collect certain health related Information and declarations
                    such as body temperature, symptoms, vaccination status and
                    other health conditions.
                  </li>
                  <li>
                    Device Information: We collect Information by ourselves or
                    through integration with third-party applications which
                    consists of technical information and aggregated usage
                    information, and may contain, among other things, Device
                    Identifier of your Device, your preferred language and
                    country site, manufacturer, software, and model of your
                    Device, Device type, operating systems and versions, your
                    geolocation, mobile network data, screens you have visited,
                    your touch gestures performed in your TR Town Ride App, your
                    scrolling activity, and any other actions you have performed
                    during your use of TR Town Ride App, etc., to enhance user
                    interface and experience on TR Town Ride Platform,
                    facilitate the provision of software updates, product
                    support and other services to you, etc. Any sensitive
                    information about other programs that you are running on
                    your Device, passwords, and activity across other
                    applications are not collected and all the sensitive
                    information are masked.
                    <ul className="list-disc ml-5">
                      <li>
                        SMS/Text Messages: We may collect data from SMS/ text
                        messages upon receiving Device access permissions from
                        you for the purposes of (i) issuing and receiving
                        one-time passwords and other device verification, and
                        (ii) automatically filling verification details during
                        financial transactions, either through us or a TPSP, in
                        accordance with Applicable Laws. We do not share or
                        transfer SMS/ text message data to any third party other
                        than as provided under this Policy.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Call details: If you are a Vendor Partner or a Captain, we
                    will, additionally, record your calls with us made from the
                    Device used to provide Services and related call details.
                  </li>
                  <li>
                    Other Information: We collect Information about how you
                    interact with the TR Town Ride App and any of our web sites
                    to which the TR Town Ride App links, such as how many times
                    you use a specific part of the TR Town Ride App over a given
                    time period, the amount of time you spend using the TR Town
                    Ride App , how often you use the TR Town Ride App, actions
                    you take in the TR Town Ride App and how you engage with the
                    TR Town Ride App, etc.
                  </li>
                  <li>
                    Cookies: Usage Information may be collected using a cookie.
                    If you do not want information to be collected through the
                    use of cookies, your browser / app settings allows you to
                    deny or accept the use of cookies. Cookies can be disabled
                    or controlled by setting a preference within your web
                    browser or on your Device. If you choose to disable cookies
                    or flash cookies on your Device, some features of the
                    Services may not function properly or we may not be able to
                    customize the delivery of information to you. The Company
                    cannot control the use of cookies (or the resulting
                    information) by third parties, and use of third-party
                    cookies is not covered by our Policy.
                  </li>
                </ul>
              </SubPoint>
              <SubPoint letter="III">
                INFORMATION THIRD PARTIES PROVIDE ABOUT YOU <br />
                We may, from time to time, collect Information about you through
                TR Town Ride Platform or while availing the Services and collect
                Information from our affiliates or third parties / TPSPs such as
                technical sub-contractors, business partners, analytics
                providers, search information providers, payment service
                providers, etc., and also from publicly available sources such
                as commercially available marketing lists, social networks and
                other related media.
              </SubPoint>
            </TermsSection>
            <TermsSection title="4. USE OF INFORMATION COLLECTED">
              Our primary goal in collecting your Information is to provide you
              with an enhanced experience when using the Services. We may use
              your Information we collect in accordance with this Policy for the
              following purposes:
              <ul style={{ listStyleType: "lower-roman" }} className="ml-5">
                <li>To enable you to access the TR Town Ride Platform.</li>
                <li>
                  To verify your identity and/ or your capacity, under
                  applicable law, to provide Services through the TR Town Ride
                  Platform
                </li>
                <li>
                  To closely monitor which features of the Services are used
                  most, to allow you to view your trip history, rate trips or
                  bookings, and to determine which features need to be improved
                  for enhanced user experience, including usage patterns and
                  geographic locations to determine where we should offer or
                  focus services, features and/or resources
                </li>
                <li>
                  To send you a welcome email/SMS to verify your username and
                  password;
                </li>
                <li>
                  To provide you the correct app version depending on your
                  Device type, for troubleshooting and in some cases, marketing
                  purposes;
                </li>
                <li>
                  To help diagnose problems with our computer server, and to
                  administer TR Town Ride Platform;
                </li>
                <li>
                  To send you strictly service-related announcements on rare
                  occasions when it is necessary to do so. For instance, if our
                  Services are temporarily suspended for maintenance, we might
                  send you an email. If you do not wish to receive them, you
                  have the option to deactivate your account;
                </li>
                <li>
                  To prevent, discover and investigate violations of this Policy
                  or any applicable terms of service or terms of use;
                </li>
                <li>
                  To identify and/or detect security breaches or attacks,
                  errors, fraud, money laundering, abuse and other criminal
                  activities, and investigating and taking appropriate remedial
                  action;
                </li>
                <li>
                  We provide some of your Personal Information (such as your
                  name, pick up address, contact number) to the Captain or the
                  Vendor Partner who accepts your request for Services so that
                  the Captain or the Vendor Partner may contact and find you;
                </li>
                <li>
                  If you are a Customer, we use geo-location information for
                  various purposes, including for you to be able to view the
                  Captains / Vendor Partners in your area that are close to your
                  location to provide services to you, to automatically fetch
                  your location when you open the TR Town Ride App, for the
                  Captains to identify the pickup location and to allow you (if
                  you choose through any features we may provide) to share this
                  information with other people for your safety;
                </li>
                <li>
                  If you are a Captain, we use the geo-location information for
                  (only when the Captain activates the icon “On-Duty” on the TR
                  Town Ride App) you to receive orders close to your location
                  even when the TR Town Ride App is not in use or closed, to
                  enable the Customers to track the distance of the Captains
                  from their location for pick up, to share the exact location
                  for the safety of the Customers, etc.;
                </li>
                <li>
                  If you are a Captain, we may share your name, vehicle number,
                  driving license number, phone number and/or profile picture
                  (if applicable), tracking details with our Customers to
                  provide them the Services;
                </li>
                <li>
                  We may use your Personal Information or Usage Information that
                  we collect about you: (a) to provide you with information or
                  services or process transactions that you have requested or
                  agreed to receive including to send you electronic
                  newsletters, or to provide you with special offers or
                  promotional materials on behalf of us or third parties; (b) to
                  enable you to participate in a variety of the Services’
                  features such as online or mobile entry sweepstakes, contests
                  or other promotions; (c) to contact you with regard to your
                  use of the Services and, in our discretion, changes to the
                  Services and/or the Services’ policies; (d) for internal
                  business purposes; (e) for inclusion in our data analytics;
                  and (f) for purposes disclosed at the time you provide your
                  Information or as otherwise set forth in this Policy;
                </li>
                <li>
                  To enhance your user experience in relation to the TR Town
                  Ride App or the Services, including customisation /
                  personalization of the TR Town Ride App or the Services;
                </li>
                <li>
                  To provide relevant offers or rewards to you, based on your
                  consumption patterns;
                </li>
                <li>
                  To enforce our terms and conditions and this Policy, and
                  resolve any disputes;
                </li>
                <li>
                  To provide functionality, analyse performance, fix errors,
                  bugs, and improve the usability and effectiveness of the TR
                  Town Ride Platform;
                </li>
                <li>
                  To comply with Applicable Laws or requests received from
                  regulators, government, law enforcement or judicial
                  authorities under Applicable Laws or our contract with a third
                  party;
                </li>
                <li>
                  To carry out our obligations and enforcing rights arising from
                  any contracts between us;
                </li>
                <li>
                  To disclose to affiliates, our and their employees, agents and
                  representatives on a need-to-know basis to facilitate
                  provision of Services;
                </li>
                <li>
                  To deliver any administrative notices, alerts, advice,
                  notifications and communication relevant to your use of the
                  Services, through social media (including WhatsApp), SMS and
                  other media;
                </li>
                <li>
                  If you sign up to use our Services as an employee or as a
                  stakeholder of a third party with whom the Company has an
                  arrangement and has offered discount coupons/ or extended
                  certain promotional offers, the Company may share any
                  information provided by you with such third party to be
                  utilised by them for limited internal business purposes only;
                  and/ or
                </li>
                <li>
                  To fulfil any other purpose for which you provide us the
                  Information and/or for any other purpose with your consent.
                  Please note, we do not use the information collected from you
                  for targeted advertising.
                </li>
              </ul>
            </TermsSection>
            <TermsSection title="5. HOW AND WHEN DO WE DISCLOSE INFORMATION TO THIRD PARTIES">
              We do not sell, share, rent or trade the information we have
              collected about you, other than as disclosed within this Policy or
              at the time you provide your Information. Following are the
              situations when Information may be shared:
              <SubPoint letter="a">
                WHEN YOU AGREE TO SHARE INFORMATION WITH THIRD PARTIES:
                <br /> <br />
                You may opt to receive information and/or marketing offers
                directly from third parties when you access third party links on
                the TR Town Ride App. If you do agree to have your Personal
                Information shared, your Personal Information will be disclosed
                to such third parties and all Information you disclose will be
                subject to the privacy policy and practices of such third
                parties. We are not responsible for the privacy policies and
                practices of such third parties and, therefore, you should
                review the privacy policies and practices of such third parties
                prior to agreeing to receive such information from them. If you
                later decide that you no longer want to receive communication
                from a third party, you will need to contact that third party
                directly.
              </SubPoint>
              <SubPoint letter="b">
                THIRD PARTIES PROVIDING SERVICES ON OUR BEHALF
                <br />
                <br />
                We may share the Information you provide with our TPSPs,
                business partners, and agents. Please refer to such
                third-party’s privacy policy for more details before using their
                services on the TR Town Ride App. We use TPSPs to facilitate our
                Services, provide or perform certain aspects of the Services on
                our behalf – such as host the Services, design and/or operate
                the Services’ features, track the Services’ analytics, process
                payments, engage in anti-fraud and security measures, perform
                background and identity verification, run criminal record
                checks, provide customer support, provide geo-location
                information to Captains / Vendor Partners, enable us to send you
                special offers, host our job application form, perform technical
                services (e.g., without limitation, maintenance services,
                database management, web analytics and improvement of the
                Services‘ features), or perform other administrative services.
                These third parties will have access to Information, including
                Personal Information to only carry out the services they are
                performing for you or for us. We will require each of these
                TPSPs to ensure the same level of data protection as us and
                impose contractual obligations not to disclose or use Personal
                Information for any other purpose. TPSPs providing analytics
                related services may set and access their own cookies, web
                beacons and embedded scripts on your Device and they may
                otherwise collect or have access to Information about you. We
                use a third-party hosting provider who hosts our support section
                of our website. Information collected within this section of our
                website by such TPSP is governed by our Policy.
              </SubPoint>
              <SubPoint letter="c">
                CO-BRANDED SERVICES
                <br />
                <br />
                Certain aspects of the Services may be provided to you in
                association with third parties (“Co-Branded Services”) such as
                credit houses, loan providers, sponsors and charities, and may
                require you to disclose Information including Personal
                Information to them. Such Co-Branded Services will identify the
                third party. If you elect to register for products and/or
                services through the Co-Branded Services, you shall have deemed
                to have consented to providing your Information to both us and
                the third party. Further, if you sign-in to a Co-Branded Service
                with a username and password obtained through our Services, your
                Personal Information may be disclosed to the identified third
                parties for that Co-Branded Service and will be subject to their
                privacy policies and practices.
              </SubPoint>
              <SubPoint letter="d">
                CONTESTS AND PROMOTIONS <br />
                <br />
                We may offer Promotions through the Services that may require
                registration. By participating in a Promotion, you are agreeing
                to the official rules that govern that Promotion, which may
                contain specific requirements of you, including, allowing the
                sponsor of the Promotion to use your name, voice and/or likeness
                in advertising or marketing associated with the Promotion. If
                you choose to enter a Promotion, you agree that your Personal
                Information may be disclosed to third parties or the public in
                connection with the administration of such Promotion, including,
                in connection with winner selection, prize fulfilment, and as
                required by law or permitted by the Promotion’s official rules,
                such as on a winners list.
              </SubPoint>
              <SubPoint letter="e">
                ADMINISTRATIVE AND LEGAL REASONS <br />
                <br />
                We cooperate with Government and law enforcement officials and
                private parties to enforce and comply with the Applicable Laws.
                Thus, we may access, use, preserve, transfer and disclose your
                information (including Personal Information, IP address, Device
                Information or geo-location data), to government or law
                enforcement officials or private parties as we reasonably
                determine is necessary and appropriate: (i) to satisfy any
                Applicable Law, regulation, subpoenas, Governmental requests or
                legal process; (ii) to protect and/or defend the terms and
                conditions applicable to use of the TR Town Ride App or the
                Services, including investigation of potential violations
                thereof; (iii) to protect the safety, rights, property or
                security of the Company, our Services or any third party; (iv)
                to protect the safety of the public for any reason; (v) to
                detect, prevent or otherwise address fraud, security or
                technical issues; and /or (vi) to prevent or stop activity we
                may consider to be, or to pose a risk of being, an illegal,
                unethical, or legally actionable activity.
              </SubPoint>
              <SubPoint letter="f">
                AFFILIATES AND BUSINESS TRANSFER <br />
                <br />
                We may share your Information, including your Personal
                Information and Usage Information with our parent, subsidiaries
                and affiliates for internal reasons, including business and
                operational purposes. We also reserve the right to disclose and
                transfer all such information: (i) to a subsequent owner,
                co-owner or operator of the Services or applicable database; or
                (ii) in connection with a corporate merger, consolidation,
                restructuring, the sale of substantially all of our membership
                interests and/or assets or other corporate change, including,
                during the course of any due diligence process.
              </SubPoint>
              <SubPoint letter="g">
                MARKET STUDY AND OTHER BENEFITS <br />
                <br />
                We may share your information, including your Personal
                Information and Usage Information with third parties for any
                purpose, including but not limited to undertaking market
                research/ study, conduct data analysis, determine and customize
                product or service offerings, to improve the products or
                Services or to make any other benefits/products/ services
                available to you.
              </SubPoint>
            </TermsSection>
            <TermsSection title="6. THIRD PARTY CONTENT AND LINKS TO THIRD PARTY SERVICES">
              The Services may contain content that is supplied by a third
              party, and those third parties may collect website usage
              information and your Device Identifier when web pages from any
              online or mobile Services are served to your browser. In addition,
              when you are using the Services, you may be directed to other
              sites or applications that are operated and controlled by third
              parties that we do not control, in which case our Policy will no
              longer apply. We are not responsible for the privacy practices
              employed by any of these third parties. For example, if you click
              on a banner advertisement, the click may take you away from TR
              Town Ride App onto a different web site. These other web sites may
              send their own cookies to you, independently collect data or
              solicit Information and may or may not have their own published
              privacy policies. Information (including Personal Information) may
              be collected by third-parties if there is content from the TR Town
              Ride App that you specifically and knowingly upload to, share with
              or transmit to an email recipient, online community, website, or
              to the public, e.g. uploaded photos, posted reviews or comments,
              or information about you or your ride or booking that you choose
              to share with others through features which may be provided on our
              Services. This uploaded, shared, or transmitted content will also
              be subject to the privacy policy of the email, online community
              website, social media or other platform to which you upload, share
              or transmit the content. We are not responsible for the privacy
              practices employed by any of these third parties. Our online and
              mobile Services may include social media features, such as the
              Facebook Like button, and widgets such as a “Share This” button,
              or interactive mini-programs that run on TR Town Ride App. These
              features may collect Information including your IP address,
              photograph, which page you are visiting on our online or mobile
              Services, and may set a cookie to enable the feature to function
              properly. Social media features and widgets are either hosted by a
              third party or hosted directly on our online Services and/or TR
              Town Ride Platform. Your interactions with these features and
              widgets are governed by the privacy policy of the company
              providing them and we will not be responsible or liable for any
              acts or omissions of such third parties. In particular, remember
              that certain third-parties may be located in or have facilities
              that are located in a different jurisdiction, hence, if you elect
              to proceed with a transaction that involves the services of a
              third-party service provider, then your information may become
              subject to the laws of the jurisdiction(s) in which such service
              provider is, or its facilities are located. We encourage you to
              note when you leave web pages or links controlled by TR Town Ride
              App/ Services and to read the privacy statements of all third
              party web sites or applications before submitting any Information
              to such third parties. We will not be liable for any acts or
              omissions of the third-party service providers.
            </TermsSection>
            <TermsSection title="7. INFORMATION COLLECTED BY CAPTAINS AND VENDOR PARTNERS">
              This Policy does not cover the usage of any information about you
              which is obtained by the Captains or Vendor Partners while
              providing you a Transportation, Delivery, Package or Rentals
              Services, or otherwise.
            </TermsSection>
            <TermsSection title="8. CHANGE OF INFORMATION AND CANCELLATION OF ACCOUNT">
              <SubPoint letter="a">
                You are responsible for maintaining the accuracy of the
                Information you submit to us, such as your contact information
                provided as part of account registration.
              </SubPoint>
              <SubPoint letter="b">
                If your Personal Information or Information you provide to us
                changes, or if you no longer desire our Services, you may
                correct, delete inaccuracies, or amend information by making the
                change on our member information page or by contacting us
                through the email address mentioned on TR Town Ride Platform, or
                contacting the Grievance Officer. We will make good faith
                efforts to make requested changes in our then active databases
                as soon as reasonably practicable.
              </SubPoint>
              <SubPoint letter="c">
                You may also cancel or modify the communications that you have
                elected to receive from TR Town Ride by following the
                instructions contained within an e-mail or by logging into your
                user account and changing your communication preferences.
              </SubPoint>
              <SubPoint letter="d">
                If upon modifying or changing the Information earlier provided
                to Us, we find it difficult to provide access to our Services to
                you due to insufficiency/ inaccuracy of the Information, we may,
                in our sole discretion terminate your access to the Services by
                providing you a written notice to this effect on your registered
                email address.
              </SubPoint>
              <SubPoint letter="e">
                If you wish to cancel your account or request that we no longer
                use your Information to provide you services, contact us through
                email address mentioned on the trip bill received, the TR Town
                Ride Platform or the Grievance Officer mentioned in this Policy.
                Please note, we may not be able to provide some or all of the
                Services in case you disable access to any of your Information
                as described under this Policy.
              </SubPoint>
              <SubPoint letter="f">
                We will retain your Information including Personal Information
                and Usage Information (including geo-location) for as long as
                your account with the Services is active and as needed to
                provide you services. Even after your account is terminated, we
                will retain some of your Information including Personal
                Information and Usage Information (including geo-location, trip
                history, and transaction history) for a period of 180 days, to
                resolve disputes, conclude any activities related to
                cancellation of an account, investigate, or prevent fraud and
                other inappropriate activity related to your account, to enforce
                our agreements, or for other business reasons, etc. After
                completion of such period, your data may either be deleted from
                our database or be anonymized and aggregated, and then may be
                held by us as long as necessary for us to provide our Services
                effectively, but our use of the anonymized data will be solely
                for analytic purposes.
              </SubPoint>
            </TermsSection>
            <TermsSection title="9. SECURITY">
              The Information we collect is securely stored within our
              databases, and we use standard, industry-wide, commercially
              reasonable security practices such as encryption, firewalls and
              SSL (Secure Socket Layers) for protecting your Information.
              However, as effective as encryption technology is, no security
              system is impenetrable. We cannot guarantee the security of our
              databases, nor can we guarantee that Information you supply won't
              be intercepted while being transmitted to us over the Internet or
              wireless communication, and any Information you transmit to us,
              you do at your own risk. We recommend that you not disclose your
              password to anyone.
            </TermsSection>
            <TermsSection tite="10. INFORMATION OF CHILDREN">
              We do not knowingly solicit or collect Information from children
              under the age of 18 years. Use of the TR Town Ride App is only
              available for persons who can enter into a legally binding
              contract under Applicable Laws.
            </TermsSection>
            <TermsSection title="11. GRIEVANCE OFFICER">
              If you would like to ask about, make a request relating to, or
              complain about how We process your information, please contact or
              email our grievance officer, at one of the addresses below. Our
              grievance officer will attempt to expeditiously redress your
              grievances.
              <br /> For any request, complain, feedback or grievances, please
              contact: -
              <ul className="ml-5 list-decimal">
                <li>Contact Number: 81253 58673</li>
                <li>Email details – townride38@gmail.com</li>
              </ul>
            </TermsSection>
            <TermsSection title="12. CHANGES TO THE PRIVACY POLICY">
              We reserve the right to update / modify, from time to time, this
              Policy to reflect changes to our Information practices. Any
              changes will be effective immediately upon the posting of the
              revised Policy on the TR Town Ride Platform. If we make any
              material changes, we will notify you by email (sent to the e-mail
              address specified in your account) or by means of a notice on the
              TR Town Ride App prior to the change becoming effective. We
              encourage you to periodically review this page for the latest
              information on our privacy practices. Your use of the TR Town Ride
              App or availing the Services after an updated Policy becomes
              effective will indicate your acceptance of the updated Policy.
            </TermsSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
