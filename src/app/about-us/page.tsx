import { getHomeData } from "@/lib/home";
import { WhyChoosePassX } from "@/components/home/WhyChoosePassX";
import { GatewaySection } from "@/components/home/GatewaySection";
import { LeadForm } from "@/components/LeadForm";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import Image from "next/image";

export const metadata = {
    title: "About Us | PassX Global Immigration",
    description: "Your trusted immigration, visa, and education experts since 2018. We value people, diversity, and customer satisfaction.",
};

export default function AboutPage() {
    const homeData = getHomeData();

    return (
        <main>
            {/* Who We Are Section (Hero Replacement) */}
            <section className="py-16 md:py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Text Content */}
                        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
                                Your Trusted Immigration, Visa & Education Experts – Since 2018
                            </h2>

                            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed text-left">
                                <p className="flex gap-4">
                                    <span className="text-blue-900 font-bold mt-1 flex-shrink-0">•</span>
                                    <span>
                                        At <strong className="text-slate-900">PassX Immigration</strong>, we are committed to empowering global careers and dreams.
                                        We specialize in providing reliable, ethical, and result-oriented immigration and visa services for individuals and families looking to migrate, study, work, or settle abroad.
                                        Established in 2018 and headquartered in Tamil Nadu, India, and proudly serving clients across the globe, we have successfully guided over 1 million satisfied customers and counting.
                                    </span>
                                </p>

                                <p className="flex gap-4">
                                    <span className="text-blue-900 font-bold mt-1 flex-shrink-0">•</span>
                                    <span>
                                        We are a team of dedicated immigration consultants and trusted partnerships, working closely with regulated and accredited immigration lawyers in countries like Australia, Canada, UK, US, Germany, and New Zealand.
                                        We take pride in delivering comprehensive, end-to-end immigration solutions. Because we combine global experience with local understanding.
                                        We believe in building long-term relationships based on trust, transparency, and excellence.
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <a href="https://wa.me/918939138886?text=How%20can%20I%20help%20you%20today%3F%0A%0AName%3A%0APhone%3A%0APreferred%20Country%3A%0A%0AOur%20experts%20will%20reach%20you%20shortly!%20Thanks%20for%20your%20patience.%0A%0ARegards%2C%0APassX%20Immigration" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src="/images/Menu/About us.png"
                                        alt="PassX Consultants at Work"
                                        width={1000}
                                        height={800}
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy, Values, Mission, Vision */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    {/* Privacy Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Your Privacy Is Our Priority
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                            At PassX, your data is safe. We use high-grade encryption software, comparable to what is used by embassies and consulates, to keep your personal information secure and confidential. With local language experts, we also ensure communication is clear, personal, and respectful.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {/* Our Values */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Values:</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-blue-900 font-bold">•</span>
                                    <span className="text-lg text-slate-700">
                                        <strong className="text-slate-900">People First:</strong> We value our people, care for them, and treat everyone with equity and fairness.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-900 font-bold">•</span>
                                    <span className="text-lg text-slate-700">
                                        <strong className="text-slate-900">Diversity & Inclusion:</strong> We proudly embrace diversity, equity, and inclusion in every part of our work culture and customer service.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-900 font-bold">•</span>
                                    <span className="text-lg text-slate-700">
                                        <strong className="text-slate-900">Customer Focused:</strong> Our commitment is to deliver exceptional customer service, ensuring a convenient, transparent, and seamless experience for every client.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Mission & Vision Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission:</h3>
                                <ul className="space-y-2">
                                    <li className="flex gap-3">
                                        <span className="text-blue-900 font-bold">•</span>
                                        <span className="text-lg text-slate-700">
                                            To be the most trusted partner for global Indians
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Vision */}
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision:</h3>
                                <ul className="space-y-2">
                                    <li className="flex gap-3">
                                        <span className="text-blue-900 font-bold">•</span>
                                        <span className="text-lg text-slate-700 leading-relaxed">
                                            To lead and set the standard in the visa and consular services industry—through innovation, secure technology, and excellence in customer service.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New CTA Section */}
            <section className="py-20 bg-slate-900 text-center text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Let's Build Your Global Future Together
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied clients who have trusted PassX with their dreams. <br className="hidden md:block" />
                        Contact us today to begin your successful journey abroad.
                    </p>
                </div>
            </section>



            {/* Contact CTA */}
            <section className="bg-white py-8 md:py-12">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        Reach our Experts!
                    </h2>
                    <p className="text-lg text-slate-500 mb-8">
                        Speak With a Consultant. Near you!
                    </p>
                    <div className="bg-white mx-auto max-w-2xl text-left">
                        <LeadForm />
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <HomeTestimonials data={homeData.testimonials} />
        </main>
    );
}
