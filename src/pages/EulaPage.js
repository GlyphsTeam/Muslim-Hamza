import style from "../assets/style/eula.module.css";
function EulaPage() {
  const projectTitle = process.env.REACT_APP_legalProjectTitle;

  return (
    <>
      <div className="container pt-4">
        <div className={`row ${style.eulaContainer}`}>
          <h3>EULA for {projectTitle}</h3>
          <hr />
          <h1>End-User License Agreement ("Agreement")</h1>
          <p>Last updated: May 30, 2023</p>
          <p>
            Please read this End-User License Agreement carefully before
            clicking the "I Agree" button, downloading or using {projectTitle}.
          </p>
          <h1>Interpretation and Definitions</h1>

          <h3 className="pt-4">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h3>Definitions</h3>
          <p>For the purposes of this End-User License Agreement:</p>
          <ul className={style.listStyle}>
            <li>
              {" "}
              <b>Agreement </b> means this End-User License Agreement that forms
              the entire agreement between You and the Company regarding the use
              of the Application.
            </li>
            <li>
              {" "}
              <b>Application </b> means the software program provided by the
              Company downloaded by You through an Application Store's account
              to a Device, named {projectTitle}
            </li>
            <li>
              {" "}
              <b>Application </b> Store means the digital distribution service
              operated and developed by Apple Inc. (Apple App Store) or Google
              Inc. (Google Play Store) by which the Application has been
              downloaded to your Device.
            </li>
            <li>
              <b>Company </b> (referred to as either "the Company", "We", "Us"
              or "Our" in this Agreement) refers to {projectTitle}.
            </li>
            <li>
              {" "}
              <b>Content </b> refers to content such as text, images, or other
              information that can be posted, uploaded, linked to or otherwise
              made available by You, regardless of the form of that content.
            </li>
            <li>
              <b>Country </b> refers to: Georgia, United States
            </li>
            <li>
              {" "}
              <b>Device </b> means any device that can access the Application
              such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              {" "}
              <b>Family Sharing / Family Group </b> permits You to share
              applications downloaded through the Application Store with other
              family members by allowing them to view and download each others'
              eligible Applications to their associated Devices.
            </li>
            <li>
              <b>Third-Party Services </b>means any services or content
              (including data, information, applications and other products
              services) provided by a third-party that may be displayed,
              included or made available by the Application.
            </li>
            <li>
              <b>You </b> means the individual accessing or using the
              Application or the company, or other legal entity on behalf of
              which such individual is accessing or using the Application, as
              applicable.
            </li>
          </ul>
          <h1>Acknowledgment</h1>
          <p className="pt-3">
            By clicking the "I Agree" button, downloading or using the
            Application, You are agreeing to be bound by the terms and
            conditions of this Agreement. If You do not agree to the terms of
            this Agreement, do not click on the "I Agree" button, do not
            download or do not use the Application. <br />
            <br />
            This Agreement is a legal document between You and the Company and
            it governs your use of the Application made available to You by the
            Company. <br />
            <br />
            This Agreement is between You and the Company only and not with the
            Application Store. Therefore, the Company is solely responsible for
            the Application and its content. Although the Application Store is
            not a party to this Agreement, it has the right to enforce it
            against You as a third party beneficiary relating to your use of the
            Application. <br />
            <br />
            Since the Application can be accessed and used by other users via,
            for example, Family Sharing / Family Group or volume purchasing, the
            use of the Application by those users is expressly subject to this
            Agreement. <br />
            <br />
            The Application is licensed, not sold, to You by the Company for use
            strictly in accordance with the terms of this Agreement
          </p>
          <h1>License</h1>
          <h2 className="pt-3">Scope of License</h2>
          <p className="pt-3">
            The Company grants You a revocable, non-exclusive, non-transferable,
            limited license to download, install and use the Application
            strictly in accordance with the terms of this Agreement. <br />{" "}
            <br /> You may only use the Application on a Device that You own or
            control and as permitted by the Application Store's terms and
            conditions. <br />
            <br /> The license that is granted to You by the Company is solely
            for your personal, non-commercial purposes strictly in accordance
            with the terms of this Agreement.
          </p>
          <h2>License Restrictions</h2>
          <p>You agree not to, and You will not permit others to:</p>
          <ul className={style.listStyle}>
            <li>
              Modify, make derivative works of, disassemble, decrypt, reverse
              compile or reverse engineer any part of the Application.{" "}
            </li>
            <li>
              Remove, alter or obscure any proprietary notice (including any
              notice of copyright or trademark) of the Company or its
              affiliates, partners, suppliers or the licensors of the
              Application.
            </li>
          </ul>
          <h1>Content</h1>
          <h2 className="pt-4">Content Restrictions</h2>
          <p>
            The Company is not responsible for the entries, information or
            content of the Application's users. You expressly understand and
            agree that You are solely responsible for the Content and for all
            activity that occurs under your account, whether done so by You or
            any third person using your account.
          </p>
          <p>
            You may not transmit any Content that is unlawful, offensive,
            upsetting, intended to disgust, threatening, libelous, defamatory,
            obscene or otherwise objectionable. Examples of such objectionable
            Content include, but are not limited to, the following:
          </p>
          <ul className={style.listStyle}>
            <li> Unlawful or promoting unlawful activity. </li>
            <li>
              Defamatory, discriminatory, or mean-spirited content, including
              references or commentary about religion, race, sexual orientation,
              gender, national/ethnic origin, or other targeted groups.{" "}
            </li>
            <li>
              Spam, machine generated content or randomly generated content,
              constituting unauthorized or unsolicited advertising, chain
              letters, any other form of unauthorized solicitation, or any form
              of lottery or gambling.{" "}
            </li>
            <li>
              Containing or installing any viruses, worms, malware, trojan
              horses, or other content that is designed or intended to disrupt,
              damage, or limit the functioning of any software, hardware or
              telecommunications equipment or to damage or obtain unauthorized
              access to any data or other information of a third person.
            </li>
            <li>
              Infringing on any proprietary rights of any party, including
              patent, trademark, trade secret, copyright, right of publicity or
              other rights.
            </li>
            <li>
              Impersonating any person or entity including the Company and its
              employees or representatives.
            </li>
            <li> Violating the privacy of any third person. </li>
            <li>False information and features.</li>
          </ul>
          <p className="pt-3">
            The Company reserves the right, but not the obligation, to, in its
            sole discretion, determine whether or not any Content is appropriate
            and complies with this Agreement, to refuse or remove any Content.
            The Company further reserves the right to make formatting and edits
            and change the manner of any Content. The Company can also limit or
            revoke the use of the Application if You post such objectionable
            Content. <br /> <br />
            As the Company cannot control all content posted by users and/or
            third parties on the Application, you agree to use the Application
            at your own risk. You understand that by using the Application You
            may be exposed to content that You may find offensive, indecent,
            incorrect or objectionable, and You agree that under no
            circumstances will the Company be liable in any way for any content,
            including any errors or omissions in any content, or any loss or
            damage of any kind incurred as a result of your use of any content.
          </p>
          <h1>Intellectual Property</h1>
          <p>
            The Application, including without limitation all copyrights,
            patents, trademarks, trade secrets and other intellectual property
            rights are, and shall remain, the sole and exclusive property of the
            Company. <br /> <br />
            The Company shall not be obligated to indemnify or defend You with
            respect to any third party claim arising out of or relating to the
            Application. To the extent the Company is required to provide
            indemnification by applicable law, the Company, not the Application
            Store, shall be solely responsible for the investigation, defense,
            settlement and discharge of any claim that the Application or your
            use of it infringes any third party intellectual property rights.
          </p>
          <h1>Modifications to the Application</h1>
          <p>
            The Company reserves the right to modify, suspend or discontinue,
            temporarily or permanently, the Application or any service to which
            it connects, with or without notice and without liability to You.
          </p>
          <h2>Updates to the Application</h2>
          <p>
            The Company may from time to time provide enhancements or
            improvements to the features/functionality of the Application, which
            may include patches, bug fixes, updates, upgrades and other
            modifications.
            <br /> <br />
            Updates may modify or delete certain features and/or functionalities
            of the Application. You agree that the Company has no obligation to
            (i) provide any Updates, or (ii) continue to provide or enable any
            particular features and/or functionalities of the Application to
            You.
            <br /> <br />
            You further agree that all updates or any other modifications will
            be (i) deemed to constitute an integral part of the Application, and
            (ii) subject to the terms and conditions of this Agreement.
          </p>
          <h2>Maintenance and Support</h2>
          <p>
            The Company does not provide any maintenance or support for the
            download and use of the Application. To the extent that any
            maintenance or support is required by applicable law, the Company,
            not the Application Store, shall be obligated to furnish any such
            maintenance or support.
          </p>
          <h1>Third-Party Services</h1>
          <p>
            The Application may display, include or make available third-party
            content (including data, information, applications and other
            products services) or provide links to third-party websites or
            services. <br /> <br />
            You acknowledge and agree that the Company shall not be responsible
            for any Third-party Services, including their accuracy,
            completeness, timeliness, validity, copyright compliance, legality,
            decency, quality or any other aspect thereof. The Company does not
            assume and shall not have any liability or responsibility to You or
            any other person or entity for any Third-party Services.
            <br /> <br /> You must comply with applicable Third parties' Terms
            of agreement when using the Application. Third-party Services and
            links thereto are provided solely as a convenience to You and You
            access and use them entirely at your own risk and subject to such
            third parties' Terms and conditions.
          </p>
          <h1>Privacy Policy</h1>
          <p>
            The Company collects, stores, maintains, and shares information
            about You in accordance with Our Privacy Policy:
            https://www.arab-georgia.com/Terms-conditions <br /> <br />
            By accepting this Agreement, You acknowledge that You hereby agree
            and consent to the terms and conditions of Our Privacy Policy.
          </p>
          <h1>Term and Termination</h1>
          <p>
            This Agreement shall remain in effect until terminated by You or the
            Company. The Company may, in its sole discretion, at any time and
            for any or no reason, suspend or terminate this Agreement with or
            without prior notice.
            <br /> <br />
            This Agreement will terminate immediately, without prior notice from
            the Company, in the event that you fail to comply with any provision
            of this Agreement. You may also terminate this Agreement by deleting
            the Application and all copies thereof from your Device or from your
            computer.
            <br /> <br />
            Upon termination of this Agreement, You shall cease all use of the
            Application and delete all copies of the Application from your
            Device.
            <br /> <br />
            Termination of this Agreement will not limit any of the Company's
            rights or remedies at law or in equity in case of breach by You
            (during the term of this Agreement) of any of your obligations under
            the present Agreement.
          </p>
          <h1>Indemnification</h1>
          <p>
            You agree to indemnify and hold the Company and its parents,
            subsidiaries, affiliates, officers, employees, agents, partners and
            licensors (if any) harmless from any claim or demand, including
            reasonable attorneys' fees, due to or arising out of your: (a) use
            of the Application; (b) violation of this Agreement or any law or
            regulation; or (c) violation of any right of a third party.
          </p>
          <h1>No Warranties</h1>
          <p>
            The Application is provided to You "AS IS" and "AS AVAILABLE" and
            with all faults and defects without warranty of any kind. To the
            maximum extent permitted under applicable law, the Company, on its
            own behalf and on behalf of its affiliates and its and their
            respective licensors and service providers, expressly disclaims all
            warranties, whether express, implied, statutory or otherwise, with
            respect to the Application, including all implied warranties of
            merchantability, fitness for a particular purpose, title and
            non-infringement, and warranties that may arise out of course of
            dealing, course of performance, usage or trade practice. Without
            limitation to the foregoing, the Company provides no warranty or
            undertaking, and makes no representation of any kind that the
            Application will meet your requirements, achieve any intended
            results, be compatible or work with any other software,
            applications, systems or services, operate without interruption,
            meet any performance or reliability standards or be error free or
            that any errors or defects can or will be corrected. <br /> <br />
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Application, or the information, content, and materials or products
            included thereon; (ii) that the Application will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Application; or (iv)
            that the Application, its servers, the content, or e-mails sent from
            or on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
            <br /> <br />
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            set forth in this section shall be applied to the greatest extent
            enforceable under applicable law. To the extent any warranty exists
            under law that cannot be disclaimed, the Company, not the
            Application Store, shall be solely responsible for such warranty.
          </p>
          <h1>Limitation of Liability</h1>
          <p>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Agreement and your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You for
            the Application or through the Application or 100 USD if You haven't
            purchased anything through the Application. <br /> <br />
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Application, third-party software and/or
            third-party hardware used with the Application, or otherwise in
            connection with any provision of this Agreement), even if the
            Company or any supplier has been advised of the possibility of such
            damages and even if the remedy fails of its essential purpose.{" "}
            <br /> <br />
            Some states/jurisdictions do not allow the exclusion or limitation
            of incidental or consequential damages, so the above limitation or
            exclusion may not apply to You. <br /> <br />
            You expressly understand and agree that the Application Store, its
            subsidiaries and affiliates, and its licensors shall not be liable
            to You under any theory of liability for any direct, indirect,
            incidental, special consequential or exemplary damages that may be
            incurred by You, including any loss of data, whether or not the
            Application Store or its representatives have been advised of or
            should have been aware of the possibility of any such losses
            arising.
          </p>
          <h1>Severability and Waiver</h1>
          <h2>Severability</h2>
          <p>
            If any provision of this Agreement is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
          </p>

          <h2>Waiver</h2>
          <p>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under this Agreement shall not
            effect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall the waiver of a breach
            constitute a waiver of any subsequent breach.
          </p>

          <h1>Product Claims</h1>
          <p>
            The Company does not make any warranties concerning the Application.
            To the extent You have any claim arising from or relating to your
            use of the Application, the Company, not the Application Store, is
            responsible for addressing any such claims, which may include, but
            not limited to: (i) any product liability claims; (ii) any claim
            that the Application fails to conform to any applicable legal or
            regulatory requirement; and (iii) any claim arising under consumer
            protection, or similar legislation.
          </p>
          <h1>United States Legal Compliance</h1>
          <p>
            You represent and warrant that (i) You are not located in a country
            that is subject to the United States government embargo, or that has
            been designated by the United States government as a "terrorist
            supporting" country, and (ii) You are not listed on any United
            States government list of prohibited or restricted parties.
          </p>

          <h1>Changes to this Agreement</h1>
          <p>
            The Company reserves the right, at its sole discretion, to modify or
            replace this Agreement at any time. If a revision is material we
            will provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at the
            sole discretion of the Company.
            <br /> <br />
            By continuing to access or use the Application after any revisions
            become effective, You agree to be bound by the revised terms. If You
            do not agree to the new terms, You are no longer authorized to use
            the Application.
          </p>
          <h1>Governing Law</h1>
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Agreement and your use of the Application. Your use of
            the Application may also be subject to other local, state, national,
            or international laws.
          </p>
          <h1>Entire Agreement</h1>
          <p>
            and contemporaneous written or oral agreements between You and the
            Company. <br /> <br />
            You may be subject to additional terms and conditions that apply
            when You use or purchase other Company's services, which the Company
            will provide to You at the time of such use or purchase.
          </p>
          <h1>Contact Us</h1>
          <p>If you have any questions about this Agreement, You can contact Us:</p>
          <ul className={style.listStyle}>
            <li>By email: info@arab-new-york.com</li>
            <li>By visiting this page on our website: https://www.arab-newyork.com/Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default EulaPage;
