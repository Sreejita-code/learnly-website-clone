"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="w-full border-b border-border/60 bg-background">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Learnly</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/courses" className="hover:text-foreground transition-colors">Courses</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="rounded-full px-5 h-9">
            <Link href="/courses">Explore Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};