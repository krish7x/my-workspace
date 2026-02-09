import Link from "next/link";
import { getHomeData } from "@/lib/home";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

export const metadata = {
  title: "Refund Policy | PassX Global Immigration",
  description:
    "Refund and Cancellation Policies of PassX Immigration. Learn about our refund eligibility criteria and terms.",
};

export default function RefundPolicyPage() {
  const homeData = getHomeData();

  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl pt-12 md:pt-16 pb-12 md:pb-16">
        <article className="space-y-8">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Refund Policy
            </h1>
          </header>

          <section className="space-y-4">
            <p className="text-slate-800 leading-relaxed">
              This Refund Policy only applies to fees collected by PassX Immigration Consultants for
              services provided. And this does not apply to Government authorities and Visa fees
              which are paid towards your visa application to the country you are applying for. It
              is mandatory that you aware of this Refund Policy. You should familiarise yourself with
              the terms of this Refund Policy, prior to purchasing any goods or services from PassX.
            </p>
          </section>

          <section className="space-y-4">
            <ol className="list-decimal list-inside space-y-4 text-slate-800 leading-relaxed">
              <li>
                The refund policy and percentages are mentioned for the clients who have made full
                amount and not for the amount paid. If any balance or part payment is pending than
                refund won&apos;t be applicable. All the refund policies and products services was
                mentioned in your agreement stage wise even if they fall in one of the mentioned
                clauses or full service fees haven&apos;t paid than applicants won&apos;t be
                eligible for refund.
              </li>
              <li>
                The applicant understands that total amount paid will include PassX consultation fee
                and the applicable GST. However, the refund would be calculated only on PassX
                consultation fee. The GST component is non-refundable at any stage.
              </li>
              <li>
                PassX is not responsible for any delay caused by third-party services such as
                Transcript, postal services etc. These services are offered by third parties and
                amount paid to them. Also, clients cannot claim a refund of service charges.
              </li>
              <li>
                A refund of Service Fees is applicable only if you satisfy the Refund Eligibility
                Criteria in full. If you fail to meet any of the Refund Eligibility Criteria, We
                shall have the right in our sole discretion to decline the request for a refund.
              </li>
              <li>
                PassX is not responsible for refund of any fees or other amounts/charges that have
                been paid to any Assessing Bodies, Immigration Authorities, Embassy/Consulate/High
                Commission in the event of the applicant not getting approval of visa/immigration,
                or in case of rejection or non-acceptance of his/her application at any stage by any
                respective authority. The processing fees only includes the services rendered by
                PassX and does not include any additional fees. The applicant agrees to pay the
                entire additional fees, as applicable during the processing.
              </li>
              <li>
                If applicant made the payment through online card payment, the client agrees that
                he/she will not withdraw or charge back the amount without the knowledge of PassX.
                This includes any customer who disputes a credit card payment that is found to be
                valid will be permanently blacklisted and barred from use of the service. The policy
                of refund as mentioned in the agreement and the procedure prescribed by law
                prevailing at that time under the Jurisdiction of Chennai, Tamil Nadu.
              </li>
              <li>
                If applicant is made the payment through credit/debit or Net Banking, the applicant
                undertakes voluntarily that he will not dispute the payment or notify the designated
                bank for chargeback, insisting that the bank to withhold or cancel the payment made
                to PassX. The applicant further undertakes to inform his bank that the transaction
                made to PassX is genuine and the transaction is an exception for his request to
                cancel or chargeback the payment in his favor. This includes misuse and card loss
                cases either by him or through anyone else. The applicant agrees to cooperate with
                PassX in this aspect in case PassX wishes to defend/represent the matter in their
                favor before any bank/authority.
              </li>
              <li>
                The service fees offered by PassX have no comparison to the market price and as per
                the company standard to which client agreed to make the payment. Any claims after
                the payment, like charges being too expensive or asking for discount and such, would
                not be entertained and the applicant would have no right to contest the same as it
                was explained through all the sources of information, and the client has accepted
                before registering.
              </li>
              <li>
                Before signing up, applicants accepts that the immigration process includes proof of
                submitting financial funds (if required), which differs from country to country and
                the process/category the applicant applies. If failure to provide such documents
                requested by the concerned immigration/other authorities. PassX shall not liable for
                any refund of the service charges. In such cases, no refund request for service
                charges will be entertained.
              </li>
              <li>
                If incase visa being rejected under the following grounds, Application won&apos;t be
                eligible for refund:
              </li>
            </ol>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-800 leading-relaxed">
              <li>Applicant failed to submit the sufficient documents requested by the authority</li>
              <li>
                Failure to submit additional documents requested by the consultants, also applicant
                fails to meet the eligibility score in English Language test as advised by the PassX.
              </li>
              <li>
                If applicant fails to attend the interview requested by the high
                commission/embassy.
              </li>
              <li>
                Failure to submit medical clearance certificate by the applicant or family member
                included in the application.
              </li>
              <li>
                Failure to submit police clearance certificate, which is not less than 3 months old.
              </li>
              <li>
                If the applicant does not meet the requirements of the Embassy or the Consulate
              </li>
              <li>
                Failure to continue the process due to personal/family problems, also abandons
                his/her case within 3 months from the date of registration. There would be strictly no
                refund.
              </li>
              <li>
                No refund for Prior crime/violation/debt penalty of any immigration or visa law by
                the client or any of his or her family members included in the application.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <ol className="list-decimal list-inside space-y-4 text-slate-800 leading-relaxed" start={11}>
              <li>
                Applicant must submit all documents include identity, personal form and facts within
                30 days of signing up that will help PassX to sort his/her documentation ready to
                submit in relevant assessing/immigration authority. If applicant failed to do the same
                that no reimbursement of the advisory/consulting fee offered to PassX is outstanding.
              </li>
              <li>
                Each and every communication received by him/her from the processing visa office in
                writing or via phone-inside a week of the receiving of such a message applicant
                should notify PassX immediately. Includes visiting visa office, email, written post
                and/or inquiry made via phone. If applicant failed to do the same will only suggest
                that no money back whatsoever is outstanding of any secretarial charges offered to
                PassX.
              </li>
              <li>
                Applicant needs to attend each and every interview, as and when requested by the
                concerned processing visa authority, at the time by the visa authority and at
                his/her own cost. If applicant failed to do the same will only suggest that no
                refund whatsoever is outstanding of any secretarial charges offered to PassX.
              </li>
              <li>
                If the any payment related to visa processing is being rejected/returned/delayed or
                paid incorrect fees or mode of payment, the applicant agrees not to contest on
                withdrawal of his application on this ground; as the payment fee is the sole
                liability of the applicant. This was initially explained by PassX before signing up.
              </li>
              <li>
                The applicant must understand and agrees that no refund or transfer of PassX
                service to a friend or relatives in the even he/she abandons or withdrawal his/her
                application or due to any reason during the proceedings after he/she signs up.
              </li>
              <li>
                Applicant understands that submission of a visa application processing time will vary
                time to time. The concerned visa officer may ask for additional documents based on the
                requirements, and may ask for further submission of such additional documents to the
                immigration authorities. Any request for the refund on these grounds will not be
                accepted.
              </li>
              <li>
                Applicant understands that every document other than English, must be translated in
                English. In case the furnished details are discovered to be inaccurate or fake or
                deficient or incorrect, such scenario PassX takes no responsibilities for negative
                impact of the result. Also no refund shall be claimed–either of the consulting
                charge or the amount paid to the government authorities.
              </li>
              <li>
                At the discretion of PassX has the right to terminate/withdraw their services
                without refund of service fee if the applicant falls under this grounds:
              </li>
            </ol>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-800 leading-relaxed mb-4">
              <li>
                If applicant tries to malign the name of the company in whatsoever manner, which
                tampers the functioning of the business or reputation
              </li>
              <li>
                If applicant doesn&apos;t respond to the emails, calls and text made by the company
                for more than a month and withdraw due to personal reasons
              </li>
              <li>
                If someone other than the applicant is attempting to gain access to the Service for
                his or her personal benefit.
              </li>
              <li>
                If tries to malign the name of the company, which tampers the functioning reputation,
                standard or business in whatsoever manner.
              </li>
              <li>
                If you behave in such a way that your consultant unable to provide the Service(s)
                any longer.
              </li>
            </ul>
            <ol className="list-decimal list-inside space-y-4 text-slate-800 leading-relaxed" start={19}>
              <li>
                Applicant agrees to submit all the documents including originals if required by the
                concerned assessing authorities or visa officer. If failure to submit the requested
                documents on his/her part thereof is an independent failure of applicant and PassX is
                in no way responsible for the same. Hence, applicant failure to submit the
                documents cannot be a valid reason to claim a refund.
              </li>
              <li>
                Applicant will inform PassX, about each every news involving a change of
                housing/mailing address, educational/specialized credentials, and change of
                matrimonial status/service or company, newly born kids or any police /unlawful case
                after the submission of the application. The client&apos;s inability to do the same will
                only show that no refund at all is outstanding of any advisory charges given to the
                immigration consultancy.
              </li>
              <li>
                Applicants understands that all charges which may be owed to a variety of government
                and skills assessing bodies, English language testing authorities, police clearance,
                medical clearance and university transcript fees etc. The said amount are strictly
                non-refundable and not adjustable by either any of the receiving offices or the
                immigration consultancy. PassX has given no assurance whatever of a favorable
                appraisal or end result of the projected petition of the client in any phase.
              </li>
              <li>
                Applicants understands that an acceptable English language or other language test as
                applicable and score minimum points in every given four appraisal factors–read, write,
                speak & listen as per the requirement of the visa Issuing Authority/Skill assessment
                authority/embassy. Also applicant agrees that his application cannot be submitted
                without the necessary Acceptable English language or other language tests, including
                for partner or dependents above 18 years, and no reimbursement of the
                advisory/consulting/secretarial services charge offered to PassX will be outstanding
                or settled in a situation wherein he fails to attain the required Acceptable English
                language or other language test.
              </li>
              <li>
                By signing/acknowledging the agreement to avail our services, the client cannot
                withdraw AT ANY REASON during the process because of own personal circumstances which
                may have changed. It is unacceptable to consider or entertain any form of settlement.
                As a business with heavy investment and processing your application, we cannot
                accommodate requests for refunds once services have been provided for or when any
                part of the process has commenced.
              </li>
              <li>
                PassX has not offered any sort of promises, guarantee, advice or pledge on work or
                job assurance, also approval of visa permit and after landing for any given country.
                No compensation can be claimed of any advisory/consulting service charges offered
                earlier to PassX by the client on the ground that PassX has been unable to offer a
                job guarantee abroad
              </li>
              <li>
                In a situation wherein a clash/ debate/dispute in the matter of the payment made by
                client to PassX towards the AGREEMENT duly inked with PassX. It is PassX
                responsibility, in case it arises and is outstanding, either monetary or
                otherwise–shall not surpass, and will be restricted to the charges offered to PassX
                advisor/consulting/secretarial charges as part of the duly inked AGREEMENT.
              </li>
              <li>
                If your refund request is genuine and falls under our terms and conditions of the
                company and agreement, processing refund would be between 20-30 working days.
              </li>
              <li>
                Pass-X have highly secured software to protect the confidentiality and privacy of our
                client. PassX pledged to protect personal details submitted to PassX from misuse, thief
                and from unauthorized access, modification or disclosure. Also under following purpose
                PassX will disclose the personal details under following:
              </li>
            </ol>
            <ul className="list-disc list-inside ml-4 space-y-2 text-slate-800 leading-relaxed">
              <li>To process visa application</li>
              <li>To market our service and conduct business</li>
              <li>To communicate with the clients</li>
              <li>To helps us improve our customer service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Note
            </h2>
            <p className="text-slate-800 leading-relaxed">
              <strong>PASSX IMMIGRATION CONSULTANTS</strong> is not a part of any government
              authority/organization or embassy. It is Indian based private limited company and we
              do not have the authority to grant you a visa of any kind. We can only advise applicant
              who want to migrate or travel to their selected country. The applicant has noticed and
              aware of all the above provisions in detail, agrees, and continues to adhere to all
              the terms and conditions of signing/acknowledging this agreement. PassX is operated
              and controlled in India with its registered office at Chennai, Tamil Nadu. The courts in
              Chennai, Tamil Nadu alone shall have jurisdiction to try any dispute between the
              company and any person arising out of any issue concerning the company. Force
              Majeure- In no event shall the Company be responsible or liable for any failure or
              delay in the performance of its obligations hereunder arising out of or caused by,
              directly or indirectly, forces beyond its control, including, without limitation-
              strikes, work stoppages, accidents, acts of war or terrorism, civil or military
              disturbances, nuclear or natural catastrophes or acts of God, any outbreaks, Epidemics
              or Pandemics; and interruptions, loss or malfunctions of utilities, communications or
              computer (software and hardware) services; it is understood that the company shall use
              reasonable efforts to resume service as soon as practicable under the circumstances.
              Your file will be withheld /deferred until the situations are under control. If we
              found you ineligible to apply, no refund will be due on service fee paid as service has
              already been initiated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Chargebacks
            </h2>
            <p className="text-slate-800 leading-relaxed">
              We expect you to contact us to resolve any problem or issue related to your
              application and payment, before you make any Charge back request to your bank. The
              client the client hereby undertakes that he will not claim a refund of the fees and
              charges paid to PassX, except to the extent provided in the agreement. Our agreements
              with clients are drawn on the sincerity, and security, and each option is spelled out
              clearly. Our terms are transparent and there is nothing hidden. Applicant understands
              and hereby agrees the deliverables and refund policy of the service signed up for. For
              detailed information, please contact our experts or send an e-mail to{" "}
              <Link
                href="mailto:Support@passxglobal.com"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
              >
                Support@passxglobal.com
              </Link>
              .
            </p>
          </section>
        </article>
      </div>

      <HomeTestimonials data={homeData.testimonials} />
    </>
  );
}
