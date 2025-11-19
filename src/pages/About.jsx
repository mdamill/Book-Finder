import aboutImg from "../assets/images/about-img.jpg"; // Importing the about image; ensure the path is correct

// About component to display information about BookHub
const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="p-6 md:p-12">
        {/* Section title for the About page */}
        <div className="section-title mb-8">
          <h2 className="text-2xl font-bold text-black uppercase">About</h2>
        </div>

        {/* Grid layout for the image and text */}
        <div className="grid gap-8 md:gap-16 md:grid-cols-2">
          {/* About image section */}
          <div className="about-img">
            <img
              src={aboutImg}
              alt="About BookHub"
              className="max-w-full h-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
          </div>

          {/* About text section */}
          <div className="about-text">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              About BookHub
            </h2>

            {/* Description paragraphs about BookHub */}
            <p className="text-base md:text-lg opacity-80 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </p>
            <p className="text-base md:text-lg opacity-80 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
