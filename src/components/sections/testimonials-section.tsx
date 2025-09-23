import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StarIcon = ({ filled = true, className }: { filled?: boolean; className?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`${filled ? 'text-[#FFC107]' : 'text-gray-300'} ${className}`}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
  </svg>
);

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              What Our <span className="text-primary italic font-serif">Learners</span> Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don’t just take our word for it! Here’s what our learners have to say about their journey with Learnly.
            </p>
          </div>
          <Link
            href="/reviews"
            passHref
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 pl-6 pr-2 rounded-full inline-flex items-center gap-4 text-sm transition-colors shrink-0"
          >
            View More
            <span className="bg-white text-primary rounded-full p-2">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-2xl border border-border p-8 flex flex-col">
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => <StarIcon key={i} filled={true} />)}
              {[...Array(1)].map((_, i) => <StarIcon key={i} filled={false} />)}
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground flex-grow">
              "The courses on Learly are incredible. I learned digital marketing from scratch and landed a job in just three months. The instructors are amazing, and the platform is so easy to use. Truly life-changing!"
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-base text-foreground">Marketing Specialist</h3>
                <p className="text-muted-foreground text-sm">Jhonny Dope,</p>
              </div>
              <Image
                src="https://framerusercontent.com/images/rvUmqvCWSlGjZMuf11ul95crPU.png"
                alt="Jhonny Dope"
                width={56}
                height={56}
                className="rounded-full shrink-0"
              />
            </div>
          </div>

          <div className="bg-secondary rounded-2xl border border-border p-8 flex flex-col">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => <StarIcon key={i} filled={true} />)}
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground flex-grow">
              "Learly made learning easy and fun. I explored data science and UI/UX design at my own pace. The detailed courses and hands-on projects helped me build confidence and real skills. Highly recommend it!"
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-base text-foreground">James Patel,</h3>
                <p className="text-muted-foreground text-sm">Freelance UI/UX Designer</p>
              </div>
              <Image
                src="https://framerusercontent.com/images/aCUQwg4vD3p2rcHSJkMfWYL15g.png"
                alt="James Patel"
                width={56}
                height={56}
                className="rounded-full shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;