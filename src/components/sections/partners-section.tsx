import Image from 'next/image';

const partners = [
  { src: 'https://framerusercontent.com/images/PDOFpDQea3o4JKJ4otDr1C96Z8.svg', alt: 'Brand Icon', width: 132 },
  { src: 'https://framerusercontent.com/images/wOIolRYjDRIOIfrt93CLz0k7M0.svg', alt: 'Brand Icon', width: 174 },
  { src: 'https://framerusercontent.com/images/tnwsKDAD4QSNS9BHkcnbO1NrI.svg', alt: 'Brand Icon', width: 148 },
  { src: 'https://framerusercontent.com/images/D3HegFtTzXti9udeLR0hQLLKYSI.svg', alt: 'Brand Icon', width: 139 },
  { src: 'https://framerusercontent.com/images/cptg6aDzfEb35dVIpsfAnAN3bbw.svg', alt: 'Brand Icon', width: 140 },
  { src: 'https://framerusercontent.com/images/YmpyeFQfpanfAj6emztFErft6Y.svg', alt: 'Brand Icon', width: 137 },
  { src: 'https://framerusercontent.com/images/xId9U3zvgnf6KfdYq9P4xMAsyA.svg', alt: 'Brand Icon', width: 153 },
];

const PartnersSection = () => {
  return (
    <section className="bg-background py-[100px] w-full">
      <div className="container">
        <h6 className="text-center text-xl font-medium uppercase tracking-widest text-muted-foreground">
          Our Valued Partners
        </h6>
      </div>

      {/* Row 1 - left direction */}
      <div className="relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex min-w-max items-center gap-20 pr-20 animate-[marquee-left_30s_linear_infinite]">
          {partners.map((partner, index) => (
            <Image
              key={`row1-a-${index}`}
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={32}
              className="flex-shrink-0 grayscale opacity-60"
            />
          ))}
          {partners.map((partner, index) => (
            <Image
              key={`row1-b-${index}`}
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={32}
              className="flex-shrink-0 grayscale opacity-60"
            />
          ))}
        </div>
      </div>

      {/* Row 2 - right direction */}
      <div className="relative mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex min-w-max items-center gap-20 pr-20 animate-[marquee-right_30s_linear_infinite]">
          {partners.map((partner, index) => (
            <Image
              key={`row2-a-${index}`}
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={32}
              className="flex-shrink-0 grayscale opacity-60"
            />
          ))}
          {partners.map((partner, index) => (
            <Image
              key={`row2-b-${index}`}
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={32}
              className="flex-shrink-0 grayscale opacity-60"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;