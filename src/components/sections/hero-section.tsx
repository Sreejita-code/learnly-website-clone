import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-background pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-x-clip">
      {/* Background shape */}
      <div className="absolute inset-x-0 -top-10 z-0">
        <Image
          src="https://framerusercontent.com/images/PA54nObEBvtgqNGkSEoyxSWxago.svg"
          alt="Decorative background shape"
          width={1488}
          height={753}
          className="w-full h-auto object-cover"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Decorative images */}
      <div className="pointer-events-none absolute top-24 left-4 w-[200px] md:w-[240px] xl:w-[280px] h-[200px] md:h-[240px] xl:h-[280px] hidden lg:block z-10">
        <Image
          src="https://framerusercontent.com/images/IrKryFvOruxPxLkGeTjrbmh9k.png"
          alt="A person with a laptop giving a thumbs up"
          width={512}
          height={341}
          className="w-full h-full drop-shadow-md rounded-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute top-40 right-4 w-[200px] md:w-[240px] xl:w-[280px] h-[200px] md:h-[240px] xl:h-[280px] hidden lg:block z-10">
        <Image
          src="https://framerusercontent.com/images/7s0okY0iUpfEYgVNfmMYixehDYY.png"
          alt="A person writing and studying"
          width={512}
          height={327}
          className="w-full h-full drop-shadow-md rounded-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-20 mx-auto flex flex-col items-center text-center px-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="https://framerusercontent.com/images/pFIoKvJH58h0Jhr41LdVGTbr7PQ.svg"
                alt="Star Icon"
                width={24}
                height={25}
              />
            ))}
          </div>
          <p className="font-medium text-lg text-foreground">
            4.9
            <span className="text-muted-foreground ml-1">(15,008)</span>
          </p>
        </div>

        <h1 className="text-5xl md:text-[64px] font-bold text-foreground max-w-4xl tracking-tight leading-tight md:leading-[1.1]">
          Unlock Your Potential{" "}
          <span className="text-primary italic font-serif">With New Skills</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Unlock a world of opportunities and take control of your future by mastering new skills that empower you to achieve your goals.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-8 h-14 px-8 rounded-full text-base font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow"
        >
          <Link href="/courses">
            Explore Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
