
import SearchForm from "../SearchForm/SearchForm.jsx";
import libraryImg from "../../assets/images/library-img.jpg"; 

const HeroSection = () => {
  return (
    <section className="relative overflow-auto flex items-center justify-center min-h-[75vh] bg-gradient-to-r from-blue-500 text-white">
      <div className="absolute z-20 flex flex-col items-center text-center max-w-[770px] px-4">
        {/* Main title of the Hero section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase">
          Find Your Book of Choice
        </h1>

        {/* Description paragraph providing context for the application */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
          sapiente quibusdam consequatur perspiciatis facere laboriosam non
          nesciunt at id repudiandae, modi iste? Eligendi, rerum!
        </p>

        {/* Align SearchForm in flex column */}
        <SearchForm />
      </div>

      {/* Library image with low opacity */}
      <img
        src={libraryImg} // Source of the library image
        className="absolute inset-0 w-full h-full object-cover opacity-60" // Full coverage with low opacity
      />
    </section>
  );
};

export default HeroSection;