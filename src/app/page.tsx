import { getHomeData } from "@/lib/home";
import { HomeHero } from "@/components/home/HomeHero";
import { VisaGrid } from "@/components/home/VisaGrid";
import { ExpertConsulting } from "@/components/home/ExpertConsulting";
import { MigrateSection } from "@/components/home/MigrateSection";
import { StudySection } from "@/components/home/StudySection";
import { WorkSection } from "@/components/home/WorkSection";
import { CoachingSection } from "@/components/home/CoachingSection";
import { DestinationsGrid } from "@/components/home/DestinationsGrid";
import { WhyChoosePassX } from "@/components/home/WhyChoosePassX";
import { GatewaySection } from "@/components/home/GatewaySection";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { LeadForm } from "@/components/LeadForm";

/** ISR revalidation: 1 hour. See src/lib/config.ts */
export const revalidate = 3600;

export const metadata = {
  title: "Immigration and Visa Consultants | PassX Global Services",
  description:
    "PassX Global Immigration experts in visa and immigration services for individuals and businesses worldwide. Since 2018, Our 80K+ Stories",
};

export default function HomePage() {
  const data = getHomeData();

  return (
    <>
      <HomeHero data={data.hero} />
      <VisaGrid data={data.visasWeOffer} />
      <ExpertConsulting data={data.expertConsulting} />
      <MigrateSection data={data.migrate} />
      <StudySection data={data.study} />
      <WorkSection data={data.work} />
      <CoachingSection data={data.coaching} />
      <DestinationsGrid data={data.destinations} />
      <WhyChoosePassX data={data.whyChoose} />
      <GatewaySection data={data.gateway} />
      <HomeTestimonials data={data.testimonials} />

      <section className="py-12 md:py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Get Your Free Consultation
          </h2>
          <p className="mt-4 text-slate-600">
            Fill out the form below and our experts will get back to you within
            24 hours.
          </p>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
