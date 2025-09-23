import Image from "next/image";
import React from "react";

const steps = [
  {
    icon: "https://framerusercontent.com/images/xt7JeydtTZtxsHSGLIkA55gbSJQ.svg",
    alt: "Globe icon",
    title: "1. Explore All courses",
    description: "Browse through a diverse range of courses tailored to different skills and interests. Use filters like subject.",
  },
  {
    icon: "https://framerusercontent.com/images/Hi7xgwLUVYIokxGc9UYi3dGSW0.svg",
    alt: "Shopping bag icon",
    title: "2. Purchase Desired Course",
    description: "Select your chosen course and complete the one-time payment process. You’ll gain lifetime access to the course.",
  },
  {
    icon: "https://framerusercontent.com/images/mYhdhWpotv9wQvQ9H6PaWnrQXEQ.svg",
    alt: "Book icon",
    title: "3. Start Learning Anytime",
    description: "Begin your journey at your own pace. Access the course from anywhere and progress step-by-step.",
  },
];

const arrowAssets = [
  "https://framerusercontent.com/images/H1mLxzYqxYddmJi94W9QNzcEJ0.svg",
  "https://framerusercontent.com/images/Je5hrAf3RusyYeJJZBYZofw83ek.svg",
];

const LearningProcessSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[48px] font-semibold text-foreground leading-tight">
            Discover, Enroll & <span className="text-primary font-serif italic">Learn</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow these simple steps to choose, purchase, and start learning from expertly designed courses tailored to your goals.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-y-12 md:gap-x-4 lg:gap-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex flex-col items-center text-center md:flex-1">
                <div className="w-20 h-20 flex items-center justify-center rounded-xl border border-border bg-card mb-6">
                  <Image src={step.icon} alt={step.alt} width={40} height={40} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-base text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex flex-shrink-0 mt-8">
                  <Image src={arrowAssets[index]} alt="Connecting arrow" width={180} height={16} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningProcessSection;