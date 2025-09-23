'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';

type Course = {
  id: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  rating: number;
  reviews: string; // This is not in the data but screenshots imply it might exist; mocking.
  price: string;
  title: string;
  instructor: string;
  instructorUrl: string;
  duration: string;
  lessons: number;
  url: string;
};

const coursesData: Course[] = [
  {
    id: 1,
    level: 'Beginner',
    image: 'https://framerusercontent.com/images/8136BY6iSEiQiFS0aGhF7iJslo.png',
    rating: 4.9,
    reviews: '(4.9)',
    price: '49.99',
    title: 'Creative Writing Bootcamp',
    instructor: 'Desmond Andrade',
    instructorUrl: 'https://learnly.framer.website/instructor/desmond-andrade',
    duration: '5h 30min',
    lessons: 6,
    url: 'https://learnly.framer.website/courses/creative-writing-bootcamp',
  },
  {
    id: 2,
    level: 'Advanced',
    image: 'https://framerusercontent.com/images/2Egur2fNYRGPeQKUmUX2PoOqxM.png',
    rating: 4.3,
    reviews: '(4.3)',
    price: '299.99',
    title: 'Product Design Bootcamp',
    instructor: 'Dr. Michael Lee',
    instructorUrl: 'https://learnly.framer.website/instructor/dr-michael-lee',
    duration: '25h 30min',
    lessons: 33,
    url: 'https://learnly.framer.website/courses/product-design-bootcamp',
  },
  {
    id: 3,
    level: 'Beginner',
    image: 'https://framerusercontent.com/images/7DxiQnfTf62S6Ng5sqGKo3mp8A8.png',
    rating: 4.4,
    reviews: '(4.4)',
    price: '99.99',
    title: 'Digital Marketing Mastery',
    instructor: 'Alex Reveira',
    instructorUrl: 'https://learnly.framer.website/instructor/alex-reveira',
    duration: '15h 35min',
    lessons: 40,
    url: 'https://learnly.framer.website/courses/digital-marketing-mastery',
  },
  {
    id: 4,
    level: 'Intermediate',
    image: 'https://framerusercontent.com/images/JwvWXTcWORlFsJWV5F76T3P5ZE.png',
    rating: 4.8,
    reviews: '(4.8)',
    price: '149.99',
    title: 'Video Editing Masterclass',
    instructor: 'Desmond Andrade',
    instructorUrl: 'https://learnly.framer.website/instructor/desmond-andrade',
    duration: '8h 55min',
    lessons: 32,
    url: 'https://learnly.framer.website/courses/video-editing-masterclass',
  },
  {
    id: 5,
    level: 'Beginner',
    image: 'https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png',
    rating: 4.7,
    reviews: '(4.7)',
    price: '66.99',
    title: 'Photo manipulation',
    instructor: 'Alex Reveira',
    instructorUrl: 'https://learnly.framer.website/instructor/alex-reveira',
    duration: '5h 30min',
    lessons: 24,
    url: 'https://learnly.framer.website/courses/photo-manipulation',
  },
  {
    id: 6,
    level: 'Advanced',
    image: 'https://framerusercontent.com/images/GL5OI4OyKrA02EMkARWlnzm0g.png',
    rating: 4.6,
    reviews: '(4.6)',
    price: '299.99',
    title: 'Data Science Essentials',
    instructor: 'Dr. Liam Morgan',
    instructorUrl: 'https://learnly.framer.website/instructor/dr-liam-morgan',
    duration: '25h 30min',
    lessons: 12,
    url: 'https://learnly.framer.website/courses/data-science-essentials',
  },
];

const categories = [
  'All Courses',
  'Programming',
  'Data Analytics',
  'Product Design',
  'Marketing',
  'Machine Learning',
];

const CourseCard = ({ course }: { course: Course }) => {
  const fullStars = Math.floor(course.rating);
  const hasHalfStar = course.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-card border border-border rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={course.url} className="relative block">
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full border border-border">
          {course.level}
        </div>
        <Image
          src={course.image}
          alt={course.title}
          width={384}
          height={216}
          className="w-full h-[216px] object-cover"
        />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(fullStars)].map((_, i) => (
                <Star key={`full-${i}`} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
              {hasHalfStar && (
                <Star key="half" className="w-4 h-4 text-yellow-500" /> /* Partial fill not easy without custom SVG */
              )}
              {[...Array(emptyStars)].map((_, i) => (
                <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-gray-300" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground ml-1">{course.reviews}</p>
          </div>
          <p className="text-2xl font-bold text-foreground">
            <span className="text-2xl font-bold">$</span>{course.price}
          </p>
        </div>
        <h3 className="text-[22px] font-semibold text-foreground leading-tight mb-2">
          <Link href={course.url} className="hover:text-primary transition-colors">{course.title}</Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          By <a href={course.instructorUrl} className="text-foreground font-medium hover:text-primary transition-colors">{course.instructor}</a>
        </p>

        <div className="border-t border-border mt-auto pt-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{course.lessons} Lessons</span>
            </div>
          </div>
          <Link href={course.url} className="block w-full text-center bg-secondary hover:bg-muted font-medium text-secondary-foreground py-3 rounded-full border border-border transition-colors">
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function NewCoursesSection() {
  const [activeCategory, setActiveCategory] = useState('All Courses');

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold text-center text-foreground mb-8">
          Our New <span className="text-primary italic">Courses</span>
        </h2>
        <div className="flex justify-center flex-wrap gap-x-2 gap-y-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-base transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-[#dedede] text-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="https://learnly.framer.website/courses" className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-px">
            View All Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}