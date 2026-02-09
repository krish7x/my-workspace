import Link from "next/link";
import { getHomeData } from "@/lib/home";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

export const metadata = {
  title: "Privacy Policy | PassX Global Immigration",
  description:
    "Privacy Policy of PassX Immigration. Learn how we handle your personal information and data protection.",
};

export default function PrivacyPolicyPage() {
  const homeData = getHomeData();

  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl pt-12 md:pt-16 pb-12 md:pb-16">
        <article className="space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Privacy Policy
          </h1>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Disclaimer:
          </h2>
          <p className="text-slate-800 leading-relaxed">
            PASSX Global Services (hereinafter referred to as PASSX IMMIGRATION CONSULTANTS) is not
            associated or partnered with any government or immigration agency for visas. PassX
            provide documentation, application filling, and concierge services for immigration/visas
            and charges a service fee. All the contents of this site (
            <Link
              href="https://www.passxglobal.com"
              className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              www.passxglobal.com
            </Link>
            ) are only for general information or use related to immigration/visas. The information
            from or through this site is provided for reference purposes only and not as a substitute
            for professional advice. PassX do not provide legal advice, opinions or recommendations
            to our users about their legal rights, legal remedies, legal defenses, legal options or
            legal strategies. PassX, in its sole discretion, may change, amend, cancel or withdraw
            any or all of the terms and conditions mentioned herein at any time without any prior
            notice. No employee of PassX has any authority whatsoever to change / amend / amplify or
            withdraw any or all of the terms and conditions mentioned herein without the prior
            written approval of PassX.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Personal Information:
          </h2>
          <p className="text-slate-800 leading-relaxed">
            Applicants may be required to provide certain information pertaining to them such as
            name, recent photograph, address, date of birth, telephone number, passport details,
            birth certificate, income proof, citizenship status, marital status, employment
            details, criminal, medical and educational background information etc.
          </p>
          <p className="text-slate-800 leading-relaxed">
            All information given to PassX by applicants is kept highly confidential and is
            protected. We assured that your personal information is used only by our trained
            employee for the purpose of the work you have engaged our office to do.
          </p>
          <p className="text-slate-800 leading-relaxed">
            PassX Immigration consultants will never share your information except high
            commission/immigration authorities/embassy (i.e IRCC, Department of Home Affairs, or
            Home Office, UKVI, Consular Affairs, Embassies and Consulates abroad etc)
          </p>
          <p className="text-slate-800 leading-relaxed">
            For the quality control purposes the interaction/s with user/s may be recorded. In such
            cases the applicants will be informed of this practice and purpose at the start of any
            such interaction.
          </p>
          <p className="text-slate-800 leading-relaxed">
            PassX site provides links to websites and access to content, products and services from
            third parties, including users, advertisers, affiliates and sponsors of the Site.
            Applicants agree that PassX is not responsible for the availability of, and content
            provided on, third party websites.
          </p>
          <p className="text-slate-800 leading-relaxed">
            For inquiries as regards Privacy Policy please contact our experts or send an e-mail to{" "}
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
