import React from "react";

const ratings = [
  {
    id: 1,
    image: "/ClientRatings/trustpilot.png",
    link: "https://example.com/service1",
  },
  {
    id: 2,
    image: "/ClientRatings/Facebook.png",
    link: "https://example.com/service2",
  },
  {
    id: 3,
    image: "/ClientRatings/goodfirm.png",
    link: "https://example.com/service3",
  },
  {
    id: 4,
    image: "/ClientRatings/clutch.png",
    link: "https://example.com/service4",
  },
  {
    id: 5,
    image: "/ClientRatings/DesignRush.png",
    link: "https://example.com/service5",
  },
];

export default function ClientRatings() {
  return (
    <section className="pt-10 pb-20 ">
      {/* Title */}
      <h1 className="px-4 mx-auto title max-w-7xl sm:px-6 lg:px-8">
        Ratings Showcase
      </h1>
      <div className="bg-[#F8F8F8] py-10 mt-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
            {ratings.map((rating) => (
              <a
                key={rating.id}
                href={rating.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[120px] sm:w-[150px] h-[60px]"
              >
                <img
                  src={rating.image}
                  alt={`Client Rating ${rating.id}`}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
