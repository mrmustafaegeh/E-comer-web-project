"use client";
import Link from "next/link";

const featureItems = [
  {
    img: "/image/Fast-dilevery.jpg",
    title: "Fast Delivery",
    desc: "Quick doorstep drops.",
    anim: "zoom-in",
  },
  {
    img: "/image/girl_with_earphone_image.png",
    title: "Top Quality",
    desc: "Original tech only.",
    anim: "zoom-in",
  },
  {
    img: "/image/boy_with_laptop_image.png",
    title: "24/7 Support",
    desc: "We're here always.",
    anim: "zoom-in",
  },
];

const AboutUs = () => (
  <section className="py-12 md:py-16 bg-gray-50" data-aos="fade-up">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          data-aos="fade-down"
        >
          Welcome to MyStore
        </h2>
        <p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Best products, unbeatable service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos={item.anim}
            data-aos-delay={index * 200}
          >
            <div className="h-60 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          To connect people with the best tech, effortlessly.
        </p>
        <Link
          href="/form"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

export default AboutUs;
