import Image from "next/image";

interface StatItemProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

const StatItem = ({ iconSrc, iconAlt, title, description }: StatItemProps) => (
  <div className="flex items-start gap-5">
    <div className="flex-shrink-0">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-secondary">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={36}
          height={36}
        />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold leading-7 text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  </div>
);

const GrowthStatsSection = () => {
  const stats = [
    {
      iconSrc: "https://framerusercontent.com/images/HMlHCgYscnv1jbut8ZNDDv8ti4.svg",
      iconAlt: "Stack of layers icon",
      title: "Unlimited Resources",
      description: "Access a vast library of courses, tools, and materials designed to help you master any skill.",
    },
    {
      iconSrc: "https://framerusercontent.com/images/gIAEjPpqlC0GEKIUAl2VoJdLY.svg",
      iconAlt: "Award trophy icon",
      title: "50+ Expert instructors",
      description: "Expert instructors on our platform, each bringing years of industry experience and a passion for teaching.",
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-12 md:gap-y-16 lg:grid-cols-5 lg:gap-x-16">
          <div className="lg:col-span-2">
            <Image
              src="https://framerusercontent.com/images/5cM0zunAJOzPyUrrbVXggN5sTw.png"
              alt="A smiling person wearing headphones uses a laptop while taking notes."
              width={520}
              height={640}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="lg:col-span-3 lg:pl-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Consistent Growth, Endless Possibilities
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Learnly’s online learning platform empowers individuals and teams to build essential skills and boost career confidence. Our expertly curated content ensures a seamless journey to success.
            </p>
            <div className="mt-10 space-y-8">
              {stats.map((stat) => (
                <StatItem
                  key={stat.title}
                  iconSrc={stat.iconSrc}
                  iconAlt={stat.iconAlt}
                  title={stat.title}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthStatsSection;