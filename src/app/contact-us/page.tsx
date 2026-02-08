import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { getHomeData } from "@/lib/home";
import Link from "next/link";

export const metadata = {
    title: "Contact Us | PassX Global Services",
    description: "Get in touch with PassX Global Services for visa and immigration consultation. Call us or visit our office in Tamil Nadu, India.",
};

export default function ContactUsPage() {
    const homeData = getHomeData();

    return (
        <main className="pb-16 bg-white">
            {/* Top Section: Split Layout (Image Left, Form Right) */}
            <section className="container mx-auto px-4 max-w-7xl py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                    {/* Left Side: Image (40%) */}
                    <div className="w-full lg:col-span-2 mx-auto group">
                        <a href="https://wa.me/918939138886?text=How%20can%20I%20help%20you%20today%3F%0A%0AName%3A%0APhone%3A%0APreferred%20Country%3A%0A%0AOur%20experts%20will%20reach%20you%20shortly!%20Thanks%20for%20your%20patience.%0A%0ARegards%2C%0APassX%20Immigration" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/Menu/Contact us - Menu.png"
                                alt="Book a Free Consultation"
                                width={1000}
                                height={800}
                                className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-105"
                                priority
                                unoptimized
                            />
                        </a>
                    </div>

                    {/* Right Side: Form (60%) */}
                    <div className="lg:pl-4 lg:col-span-3">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                            Reach our Experts!
                        </h1>
                        <p className="text-lg text-slate-500 mb-8">
                            Speak With a Consultant. Near you!
                        </p>
                        <div className="bg-white">
                            <LeadForm />
                        </div>
                    </div>

                </div>
            </section>

            {/* Bottom Section: Contact Details & Map */}
            <section className="bg-slate-50 py-12 md:py-16 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {/* Headquarters Office */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">
                                Headquarters Office:
                            </h2>
                            <address className="not-italic text-slate-600 leading-relaxed text-base md:text-lg">
                                PassX Global Visa Solutions,<br />
                                No 143, 1, Uthamar Gandhi Rd, opp. The<br />
                                Park Hotel, Thousand Lights West,<br />
                                Nungambakkam, Chennai, Tamil Nadu<br />
                                600006, India
                            </address>
                        </div>

                        {/* Talk to Us */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">
                                Talk to Us!
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-slate-900" />
                                    <a href="tel:+918939138886" className="text-slate-600 hover:text-blue-700 text-lg">
                                        +91 8939 138 886
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-slate-900" />
                                    <a href="mailto:Info@passxglobal.com" className="text-slate-600 hover:text-blue-700 text-lg">
                                        Info@passxglobal.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-64 md:h-full min-h-[250px] bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-200 relative">
                            <iframe
                                src="https://maps.google.com/maps?q=PassX%20Global%20Visa%20Solutions%2C%20No%20143%2C%201%2C%20Uthamar%20Gandhi%20Rd%2C%20opp.%20The%20Park%20Hotel%2C%20Thousand%20Lights%20West%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600006%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                                title="PassX Global Location"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>

            {/* Connect With PassX Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        Connect With PassX – Your Global Immigration Partner
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        At <strong className="text-slate-900">PassX Immigration</strong>, we're here to help you take the next step in your international journey. Whether you're planning to migrate, study, work, or invest abroad — our experienced consultants are ready to guide you with expert advice and personalized solutions.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        Start Your Immigration Journey Today!
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        With <strong className="text-slate-900">PassX</strong>, you're in trusted hands. Reach out to us now and take the first step towards global opportunities and a better future.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        Have a Complaint or Concern?
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        We value your feedback and are committed to improving our service. If you have any complaints or need assistance with an ongoing application, please visit our help desk:
                    </p>

                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-blue-900 hover:text-blue-700 hover:underline transition-colors"
                    >
                        <span className="text-2xl">👉</span> Complaint Help Desk
                    </Link>

                </div>
            </section>

            {/* Reviews Section */}
            <HomeTestimonials data={homeData.testimonials} />
        </main>
    );
}
