"use client";
import CarouselComponent from "@/components/Services/ServicesCarousel";

const ServicesPage = () => {
  return (
    <div className="container flex min-h-screen flex-col bg-dashboard">
      <main
        className="flex-grow p-4 md:p-8"
        style={{
          background: "rgba(71, 71, 71, 0.25)",
          backdropfilter: "blur(17.019758224487305px)",
        }}
      >
        <h1 className="mb-4 mt-14 flex items-center justify-center text-4xl font-bold">
          Our Services
        </h1>

        <div>
          <CarouselComponent />
        </div>
        
      </main>
    </div>
  );
};

export default ServicesPage;
