import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Course = {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
  rating: number;
  price: number;
  title: string;
  instructor: {
    name: string;
    href: string;
  };
  duration: string;
  lessons: number;
  courseUrl: string;
  starColor: string;
};

const courses: Course[] = [
  {
    level: 'Advanced',
    imageUrl: 'https://framerusercontent.com/images/GL5OI4OyKrA02EMkARWlnzm0g.png',
    rating: 4.6,
    price: 299.99,
    title: 'Data Science Essentials',
    instructor: {
      name: 'Dr. Liam Morgan',
      href: '/instructor/dr-liam-morgan',
    },
    duration: '25h 30min',
    lessons: 12,
    courseUrl: '/courses/data-science-essentials',
    starColor: 'text-yellow-400',
  },
  {
    level: 'Intermediate',
    imageUrl: 'https://framerusercontent.com/images/5xOvDYwbAGnMVJpzeSTgW5QMA.png',
    rating: 4.5,
    price: 199.99,
    title: 'Digital Marketing Pro',
    instructor: {
      name: 'Alex Reveira',
      href: '/instructor/alex-reveira',
    },
    duration: '18h 45min',
    lessons: 10,
    courseUrl: '/courses/digital-marketing-pro',
    starColor: 'text-yellow-400',
  },
  {
    level: 'Beginner',
    imageUrl: 'https://framerusercontent.com/images/dezvWUxEuf980W2tvPb5iq6u0.png',
    rating: 4.7,
    price: 99.99,
    title: 'UI/UX Design Essentials',
    instructor: {
      name: 'Dr. Michael Lee',
      href: '/instructor/dr-michael-lee',
    },
    duration: '25h 30min',
    lessons: 28,
    courseUrl: '/courses/ui-ux-design-essentials',
    starColor: 'text-yellow-400',
  },
];

const StarRating = ({ rating, className }: { rating: number; className?: string }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn('h-5 w-5 fill-current', className)} />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 fill-current text-gray-200" />
      ))}
    </div>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <Link href={course.courseUrl} className="relative block">
        <div className="absolute top-4 left-4 z-10 rounded-md bg-background px-3 py-1 text-xs font-semibold text-foreground">
          {course.level}
        </div>
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={384}
          height={216}
          className="aspect-[16/9] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <StarRating rating={course.rating} className={course.starColor} />
            <span className="text-sm text-muted-foreground">({course.rating})</span>
          </div>
          <p className="text-xl font-bold text-foreground">${course.price}</p>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          <Link href={course.courseUrl} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          By{' '}
          <Link href={course.instructor.href} className="font-medium text-foreground hover:text-primary transition-colors">
            {course.instructor.name}
          </Link>
        </p>
        <div className="mt-4 flex-grow border-t border-border pt-4 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{course.lessons} Lessons</span>
            </div>
        </div>
        <div className="mt-6">
          <Button variant="outline" className="w-full rounded-full" asChild>
            <Link href={course.courseUrl}>View Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};


const FeaturedCoursesSection = () => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Our Featured <span className="text-primary text-accent-italic font-serif">Courses</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;