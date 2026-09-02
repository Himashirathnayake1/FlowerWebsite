const features = [
  {
    number: "01",
    title: "Fresh Every Morning",
    description:
      "Our flowers are carefully selected and prepared fresh so every bouquet arrives looking beautiful.",
  },
  {
    number: "02",
    title: "Thoughtfully Arranged",
    description:
      "Each arrangement is handcrafted by our florists with attention to every little detail.",
  },
  {
    number: "03",
    title: "Delivered With Care",
    description:
      "We carefully package every bouquet to keep your flowers fresh and beautiful during delivery.",
  },
  {
    number: "04",
    title: "Made For Your Moments",
    description:
      "Whether it's a birthday, anniversary or simply a thoughtful gesture, we have something special.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-20 md:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
            The Blossom Promise
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#e8b4c2]" />

            <span className="text-sm text-[#d95c83]">
              ♥
            </span>

            <span className="h-px w-12 bg-[#e8b4c2]" />
          </div>

          <h2 className="mt-4 font-serif text-4xl text-[#292326] md:text-5xl">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            We believe flowers are more than beautiful things.
            They carry feelings, memories and moments.
          </p>

        </div>

        {/* Features */}
        <div className="grid border-y border-[#eadcdf] md:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`group px-7 py-10 text-center md:py-12 ${
                index !== 0
                  ? "border-t border-[#eadcdf] md:border-l md:border-t-0"
                  : ""
              }`}
            >

              {/* Number */}
              <span className="font-serif text-sm italic text-[#d95c83]">
                {feature.number}
              </span>

              {/* Decorative line */}
              <div className="mx-auto mt-5 h-px w-8 bg-[#e8b4c2] transition-all duration-300 group-hover:w-14" />

              {/* Title */}
              <h3 className="mt-6 font-serif text-xl text-[#552b38]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}