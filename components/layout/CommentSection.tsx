"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

interface Review {
  name: string;
  content: string;
  rating: number;
  photoUrl?: string; // opcional (Google API)
}

const reviews: Review[] = [
  {
    name: "Emily Johnson",
    rating: 5,
    content:
      "Outstanding residential cleaning service. My home has never felt this fresh and organized.",
  },
  {
    name: "Michael Torres",
    rating: 4,
    content:
      "Professional and reliable commercial cleaning. Our workspace looks immaculate every day.",
  },
  {
    name: "Sarah Mitchell",
    rating: 5,
    content:
      "Their post-construction cleaning exceeded expectations. Attention to detail is impressive.",
  },
  {
    name: "David Brown",
    rating: 5,
    content:
      "Compassionate and professional home care support. Truly made a difference for our family.",
  },
];

const getColorFromName = (name: string) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-yellow-500",
    "bg-teal-500",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-muted-foreground/30"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.364 1.118l1.287 3.965c.3.921-.755 1.688-1.54 1.118l-3.376-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.075 9.392c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.965z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  const initial = review.name.charAt(0).toUpperCase();
  const bgColor = getColorFromName(review.name);

  return (
    <div className="w-80 rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
      
      {/* HEADER */}
      <div className="flex items-center gap-3">
        
        {/* Avatar */}
        {review.photoUrl ? (
          <Image
            src={review.photoUrl}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${bgColor}`}
          >
            {initial}
          </div>
        )}

        {/* Nome + estrelas */}
        <div className="flex flex-col">
          <span className="font-semibold text-foreground text-sm">
            {review.name}
          </span>
          <Stars rating={review.rating} />
        </div>
      </div>

      {/* Comentário */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        "{review.content}"
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Real feedback from residential, commercial, and home care clients.
        </p>
      </div>

        <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* Linha 1 - NORMAL */}
        <Marquee
            reverse={false}
            pauseOnHover
            className="[--duration:35s]"
        >
            {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
            ))}
        </Marquee>

        {/* Linha 2 - REVERSE */}
        <Marquee
            reverse={true}
            pauseOnHover
            className="[--duration:45s]"
        >
            {reviews.map((review, i) => (
            <ReviewCard key={`reverse-${i}`} review={review} />
            ))}
        </Marquee>
        </div>

    </section>
  );
};

export default TestimonialsSection;

