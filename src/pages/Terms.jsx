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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            TERMS AND CONDITIONS FOR CAPTAINS
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-800">(Auto and Cab)</h2>
        </div>

        {/* Terms Content */}
        <div className="space-y-6 text-gray-700">
          <p className="uppercase font-bold">
            THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF INFORMATION
            TECHNOLOGY ACT, 2000 AND RULES THEREUNDER AS APPLICABLE...
          </p>
          <p className="font-semibold">
            Roppen Transportation Services Private Limited ("
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
