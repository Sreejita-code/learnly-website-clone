import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative w-full bg-background py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center z-0" aria-hidden="true">
        <Image
          src="https://framerusercontent.com/images/hLN46BrMGUFlrVIVnnIVCFNqN0U.png"
          alt="Decorative background shape"
          width={1358}
          height={521}
          className="w-full max-w-none md:max-w-[1358px] h-auto object-contain"
          priority
        />
      </div>

      {/* Decorative Learner Images */}
      <div className="hidden lg:block absolute left-0 bottom-[81px] w-[254px] h-[252px] z-10">
        <Image
          src="https://framerusercontent.com/images/FqOcK9akSMnBaj4e39zgqC6m8.png"
          alt="A smiling male learner with headphones and a laptop"
          width={254}
          height={252}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-[136px] w-[228px] h-[226px] z-10">
        <Image
          src="https://framerusercontent.com/images/22l2NKVipfO8kNlRCexP1yhec.png"
          alt="A smiling female learner wearing a backpack and holding books"
          width={228}
          height={226}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-[690px] mx-auto gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Unlock Your Learning
            <span className="text-primary italic"> Potential Today</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of learners around the world who are advancing their careers with our expertly crafted courses.
          </p>
          <Link
            href="/courses"
            className="inline-block bg-primary text-primary-foreground font-medium py-3 px-8 rounded-full shadow-[0_4px_14px_0_rgba(255,69,0,0.39)] hover:shadow-[0_6px_20px_0_rgba(255,69,0,0.23)] hover:scale-105 transform transition-all duration-200 ease-in-out"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}