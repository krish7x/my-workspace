import Link from "next/link";
import { getHomeData } from "@/lib/home";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

export const metadata = {
  title: "Terms and Conditions | PassX Global Immigration",
  description:
    "Terms and Conditions of PassX Immigration. Our terms of use, refund policy, data protection, and service agreements.",
};

export default function TermsAndConditionsPage() {
  const homeData = getHomeData();

  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl pt-12 md:pt-16 pb-12 md:pb-16">
        <article className="space-y-8">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Terms and Conditions
            </h1>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Disclaimer:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              PassX Global Services (hereinafter referred to as PassX Immigration Consultants) is
              not associated or tie-up with any government or immigration agency for visas. PassX
              provides documentation, application filling, and concierge services for
              immigration/visas and charges a service fee. All the contents of this site (
              <Link
                href="https://www.passxglobal.com"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                www.passxglobal.com
              </Link>
              ) are only for general information or use related to immigration/visas. The
              information from or through this site is provided for reference purposes only and not
              as a substitute for professional advice. PassX do not provide legal advice, opinions
              or recommendations to our users about their legal rights, legal remedies, legal
              defenses, legal options or legal strategies. PassX, in its sole discretion, may change,
              amend, cancel or withdraw any or all of the terms and conditions mentioned herein at
              any time without any prior notice. No employee of PassX has any authority whatsoever
              to change / amend / amplify or withdraw any or all of the terms and conditions
              mentioned herein without the prior written approval of PassX.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Links:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Certain links on the Site may lead to resources located on servers maintained by third
              parties over whom PassX has no control or connection, business or otherwise as these
              sites are external to PassX. You agree and understand that by visiting such sites you
              are beyond the PassX website. PassX therefore neither endorses nor offers any judgment
              or warranty and accepts no responsibility or liability for the authenticity/availability
              of any of the information or for any damage, loss or harm, direct or consequential or
              any violation of local or international laws that may be incurred by your visit and/or
              transaction/s on these sites. Every effort is made to keep the website up and running
              smoothly. However, PassX takes no responsibility for, and will not be liable for, the
              website being temporarily unavailable due to technical issues beyond our control. Any
              purchase made using this website is subject to PassX Terms of Use to which, by using
              this site and/or making any purchase, you are agreeing to be bound all of the terms,
              conditions and details provided herein
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Intellectual property Protection:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              PassX Global Services is the copyright holder of all content, layout, design, data,
              graphics, trademarks and logos under the Passxglobal.com domain. The content is
              protected by India copyright laws. PassX Immigration Consultants will do its utmost to
              protect the rights of employees, customers, members and intellectual property rights.
              We will not hesitate to take legal action if necessary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Changes to This Privacy Policy:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Please be advised that the Privacy Policy may be updated from time to time and Users/
              Applicants to regularly visit PassX Immigration Consultants website to access the
              latest policy statement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Purpose of collection, use, disclosure etc. of Personal Information:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Applicants may be required to provide certain information pertaining to them such as
              name, photograph, address, date of birth, telephone number, passport information,
              birth certificate, income, citizenship status, marital status, employment details,
              criminal and educational background information etc. This information is collected as
              per the requirement mandated by the concerned Governments/Agency and / or relevant Visa
              Offices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Site Warranty Disclaimer:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              PassX Global Services does not represent or warrant that the functions contained in
              the site will be uninterrupted or error free, that the defects will be corrected, or
              that this site or the server that makes the site available are free of viruses or other
              harmful components. PassX Immigration Consultants does not make any warranties or
              representations regarding the use of the materials in this site in terms of their
              correctness, accuracy, adequacy, usefulness, timeliness, reliability or otherwise.
              Some states do not permit limitations or exclusions on warranties, so the above
              limitations may not apply to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Limitation of Personal Use:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              The information, news, articles, emails, products and services provided by PassX are for
              your personal and non-commercial use. You may not modify, copy, distribute, transmit,
              display, perform, reproduce, publish, license, create derivative works from, transfer,
              or sell any information, or other content, products or services obtained from PASSX
              IMMIGRATION CONSULTANTS without express written permission from us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              PassX Newsletter:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Passxglobal.com (this website) provides a free newsletter. This is an Opt-Out
              service, which means that the user has the option of removing his or her email address
              from the newsletter at any time. An unsubscribe page is available to users to this
              end. Your email will never be shared with any third party.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Refund Policy:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              The service charges once received by PassX from the applicant will not be 100%
              non-refundable under any circumstances
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-800 leading-relaxed">
              <li>
                If Credential Evaluation / Skills Assessment is positive and the client fails to
                submit the required documents to prepare his/her visa application.
              </li>
              <li>If you change your mind later and decide to withdraw after purchase</li>
              <li>If the agreement is not signed by you and duly returned to us.</li>
              <li>
                Failure of the medical examination by the client or his/her family members included
                in the application
              </li>
              <li>
                Failure to provide a Police Clearance Certificate which is not less than 3 months
                old.
              </li>
              <li>
                Failure to prove sufficient funds for settlement or maintenance by the client or
                his/her family members included in the application.
              </li>
              <li>
                A prior violation of any immigration or visa law by the client or any of his or her
                family members included in the application.
              </li>
              <li>
                Not attending interview requested by the immigration office or late submission
                additional documents requested by the consulate at a later stage.
              </li>
            </ul>
            <p className="text-slate-800 leading-relaxed">
              PASSX IMMIGRATION CONSULTANTS reserves the right to not issue a refund as per our
              policies and in line with this agreement. By agreeing to our terms and conditions,
              you agree you will not ask for a charge back under any circumstances. For detailed
              information you can refer{" "}
              <Link
                href="/refund-policy"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                refund terms
              </Link>{" "}
              specific to the product in the service agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              PassX Products and Services:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              PassX offers an eligibility evaluation service which will evaluate your profile for a
              selected country and let you know how many points have been scored by our experts. The
              fee for an evaluation report is complimentary for a fee on a subscription basis.
              PassX Immigration Consultants offers documentation & processing for immigration & visas.
              All processing and visa filing is undertaken at a back office in India and you hereby
              agree to this arrangement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Documents and Directories:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              PASSX IMMIGRATION CONSULTANTS offers several types of downloadable documents,
              Directories and application forms as an additional service to our customers. All
              documents are available for a fee on a subscription basis
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              PassX Copyrights:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Documents, Directories and application forms are published by PassX Immigration
              Consultants and are protected by Indian copyright laws. Legal action will be taken
              against anyone who attempts to copy or sell the same.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Shipping Policy:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              For better service to our customers your orders is available for immediate download
              after purchase. Delays, although rare, may happen due to technical difficulties or due
              to issues beyond our control. In case of any technical difficulty, the order will be
              sent to the email-id specified by you. Please note, there is no refund or charge back
              permitted once the order has been placed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Data protection:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              We will comply with data protection law. This says that the personal information we
              hold about you must be:
            </p>
            <p className="text-slate-800 leading-relaxed">
              PASSX IMMIGRATION CONSULTANTS will not trade, rent or sell personal information of
              the Applicants. PASSX IMMIGRATION CONSULTANTS does disclose or otherwise transfer
              Personal Information of the Applicants, except as otherwise set out herein. Personal
              Information will be used only for the purposes of providing services and performing
              its various obligations. Collected only for valid purposes that we have clearly
              explained to you and not used in any way that is incompatible with those purposes.
              However PASSX IMMIGRATION CONSULTANTS may need to disclose and share Personal
              Information when it is necessary to comply with a court order, any on-going judicial
              proceeding, or other legal, statutory or regulatory process served on However PASSX
              IMMIGRATION CONSULTANTS or to exercise the legal rights or defend against legal claims,
              criminal investigations, judicial matters or in prevention, investigation, detection,
              prosecution of criminal activities or matters related to national security. PASSX
              IMMIGRATION CONSULTANTS may disclose (or otherwise make available) personal
              information to third party service providers providing services like courier delivery,
              Transcript vendors, call center services. These third party service providers are
              provided with such information they need to perform their designated functions and are
              not authorized to use or disclose personal information for their own purposes. For
              example, where the applicant has opted for transcript or other third party service,
              PASSX IMMIGRATION CONSULTANTS will disclose certain Personal data such as name,
              address, phone number to the third party courier service providers. Such third party
              service providers are also required to adhere to security & privacy requirements as
              outlined by PASSX IMMIGRATION CONSULTANTS.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Personal information collected and how we will use information about you:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              We collect personal information about data subjects through various methods such as
              Landing pages, Websites, Registration. We are offering free counseling services via
              landing pages and websites.
            </p>
            <p className="text-slate-800 leading-relaxed">
              We will only use your personal information when the law allows us. Most commonly,
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-800 leading-relaxed">
              <li>Where we need to protect your interests (or someone else&apos;s interests)</li>
              <li>
                Where it is needed in the public interest or for official purposes or requested for
                by the CBI, police or governmental authorities.
              </li>
              <li>Where we need to perform the agreement we have entered into with you.</li>
              <li>Where we need to comply with a legal obligation</li>
              <li>
                Where it is necessary for our legitimate interests (or those of a third party) and
                your interests and fundamental rights do not override those interests.
              </li>
            </ul>
            <p className="text-slate-800 leading-relaxed">
              We will only use your personal information for the purposes for which we collected it,
              unless we reasonably consider that we need to use it for another reason and that reason
              is compatible with the original purpose. If we need to use your personal information
              for an unrelated purpose, we will notify you and we will explain the legal basis which
              allows us to do so. Please note that we may process your personal information without
              your knowledge or consent, in compliance with the above rules, where this is required
              or permitted by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Website Cookies:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Cookies are small text files stored on your device and used by web browsers to deliver
              personalized content and remember logins and account settings. PASSX IMMIGRATION
              CONSULTANTS uses cookies and similar technologies, including tracking pixels and web
              beacons, to collect usage and analytic data that helps us provide our Site, Software,
              and/or Services to you, as well as to help deliver ads for relevant PASSX IMMIGRATION
              CONSULTANTS products and services to you when you visit certain pages on the Site and
              then visit certain third-party sites. Our products currently do not respond to Do Not
              Track requests.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Data security:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              PASSX IMMIGRATION CONSULTANTS has implemented measures designed to help protect
              personal information in its custody and control. PASSX IMMIGRATION CONSULTANTS maintains
              reasonable administrative, technical, physical and organizational safeguards in an
              effort to protect personal information in its custody and control. In addition, we
              limit access to your personal information to those employees, agents who have a
              business need to know. They will only process your personal information on our
              instructions and they are subject to a duty of confidentiality. We have put in place
              procedures to deal with any suspected data security breach and will notify you and any
              applicable regulator of a suspected breach where we are legally required to do so.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Retention & Destruction of Personal Information:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Your duty to inform us of changes It is important that the personal information we
              hold about you is accurate and current. Documents collected from Applicants will not
              be copied or retained by PASSX IMMIGRATION CONSULTANTS. Your rights in connection with
              personal information Under certain circumstances, by law you have the right to: Request
              access to your personal information (commonly known as a &quot;data subject access
              request&quot;). This enables you to receive a copy of the personal information we hold
              about you and to check that we are lawfully processing it. Request correction of the
              personal information that we hold about you. This enables you to have any incomplete or
              inaccurate information we hold about you corrected. Request erasure of your personal
              information. This enables you to ask us to delete or remove personal information where
              there is no good reason for us continuing to process it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              What we may need from you?
            </h2>
            <p className="text-slate-800 leading-relaxed">
              We may need to request specific information from you to help us confirm your identity
              and ensure your right to access the information (or to exercise any of your other
              rights). This is another appropriate security measure to ensure that personal
              information is not disclosed to any person who has no right to receive it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              What we collect:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              In particular, we have collected the following categories of personal information
              from consumers within the last twelve (12) months: Name, phone number, email address,
              Occupation, work experience, skill sets, Non-public education information
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              SPAM:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              PASSX IMMIGRATION CONSULTANTS does not tolerate spam. PASSX IMMIGRATION CONSULTANTS
              website/s or communication tools shall not be used to send spam or otherwise send
              content that would violate the terms and conditions of PASSX IMMIGRATION CONSULTANTS
              user agreement.. PASSX IMMIGRATION CONSULTANTS filters and automatically scans messages
              for viruses and other illegal or prohibited content before they are sent. To report any
              issues related to spam or spoof emails to PASSX IMMIGRATION CONSULTANTS please address
              e-mails to{" "}
              <Link
                href="mailto:info@passxglobal.com"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                info@passxglobal.com
              </Link>
              . PASSX IMMIGRATION CONSULTANTS does not permanently store email messages sent to or by
              it through various formats. PASSX IMMIGRATION CONSULTANTS does not rent or sell any
              email addresses to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Contact:
            </h2>
            <p className="text-slate-800 leading-relaxed">
              If you have any questions about this privacy notice or how we handle your personal
              information, please contact us on{" "}
              <Link
                href="mailto:info@passxglobal.com"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                info@passxglobal.com
              </Link>
              . For further details, please get in touch or you can e-mail us at{" "}
              <Link
                href="mailto:Info@passxglobal.com"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                Info@passxglobal.com
              </Link>
              .
            </p>
            <p className="text-slate-800 leading-relaxed">
              *Under Job Search Service, we offer Resume Writing, LinkedIn Optimization and Resume
              Marketing. We do not advertise jobs on behalf of overseas employers or represent any
              overseas employer. This service is not a placement/recruitment service and does not
              guarantee jobs.
            </p>
          </section>
        </article>
      </div>

      <HomeTestimonials data={homeData.testimonials} />
    </>
  );
}
