import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const footerNavs = [
  {
    title: 'Navigate',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Courses', href: '/courses' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'Faq', href: '#' },
      { label: 'Testimonials', href: '/reviews' },
    ],
  },
  {
    title: 'Utility Pages',
    links: [
      { label: '404', href: '#' },
      { label: 'Password', href: '#' },
      { label: 'Licenses', href: '#' },
    ],
  },
];

const socialLinks = [
  { Icon: Facebook, href: '#', name: 'Facebook' },
  { Icon: Instagram, href: '#', name: 'Instagram' },
  { Icon: Twitter, href: '#', name: 'Twitter' },
  { Icon: Linkedin, href: '#', name: 'LinkedIn' },
];

const FooterSection = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16">
          <div className="lg:col-span-5 xl:col-span-4">
            <Link href="/" aria-label="Home page">
              <Image
                src="https://framerusercontent.com/images/fm7cPRWZj0Ipn7YCM35zpFDFuo.svg"
                alt="Learnly logo"
                width={135}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-sm">
              Learly is an e-learning platform offering courses to help you master in-demand skills.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerNavs.map((nav) => (
              <div key={nav.title}>
                <h3 className="text-lg font-semibold text-foreground">{nav.title}</h3>
                <ul className="mt-6 space-y-4">
                  {nav.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-base text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col-reverse items-center justify-between gap-y-6 sm:flex-row">
          <p className="text-base text-muted-foreground text-center sm:text-left">
            © 2025 Learnly
          </p>
          <div className="flex items-center gap-x-6">
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
              Term and condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;