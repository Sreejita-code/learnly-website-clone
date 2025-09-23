import Image from "next/image";
import { FC } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-secondary rounded-3xl p-10 flex flex-col gap-4 flex-1">
    <Image src={icon} alt={`${title} icon`} width={40} height={40} />
    <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
    <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
  </div>
);

export default function WhyChooseSection() {
    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
                        Why Choose <span className="font-serif italic text-primary">Learnly</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Gain clarity & achieve your financial goals with expert guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8 h-full">
                        <Image 
                            src="https://framerusercontent.com/images/TytWPjLDhqtDYn7NeclLy1PWMs.jpg" 
                            alt="A person writing in a notebook while working on a laptop" 
                            width={373}
                            height={400}
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                        <FeatureCard 
                            icon="https://framerusercontent.com/images/4fHwcHVsebVhlQof5EnvfzVZpUM.svg"
                            title="4k+ hours videos"
                            description="Hours of meticulously designed courses, created and taught by industry-leading professionals."
                        />
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-col gap-8 h-full">
                        <div className="bg-secondary rounded-3xl p-10 flex justify-center items-center aspect-square lg:aspect-auto lg:h-[400px]">
                            <Image 
                                src="https://framerusercontent.com/images/5wGFU68kAUuW4rVlpgvz8j7OKQ.png" 
                                alt="Community visualization with interconnected user avatars" 
                                width={280} 
                                height={280}
                                className="w-full h-auto"
                            />
                        </div>
                        <FeatureCard 
                            icon="https://framerusercontent.com/images/brrSoQlk2NoHOFTQGParH2kTbs.svg"
                            title="A Great Community"
                            description="We value our global community's support and embrace diversity to create a wel-coming space for everyone to learn."
                        />
                    </div>
                    {/* Column 3 */}
                    <div className="flex flex-col gap-8 h-full">
                         <FeatureCard 
                            icon="https://framerusercontent.com/images/KTvzM1bqTi1G3PK4exHMTQy6NTI.svg"
                            title="Learn-by-Doing, Teach with Purpose"
                            description="Our philosophy: hands-on learning creates impact. Every course fosters practical skills and transparency."
                        />
                        <Image 
                            src="https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg"
                            alt="A person with headphones smiling and holding a cup"
                            width={373}
                            height={400}
                            className="rounded-3xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}