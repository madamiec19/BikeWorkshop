import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-accent to-green-700 text-transparent bg-clip-text">
          Twój{" "}
        </span>
        Serwis Rowerowy
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500">
        Niezależnie od tego, czy potrzebujesz szybkiej regulacji, kompleksowego
        przeglądu, czy specjalistycznej naprawy – jesteśmy tu, by zadbać o Twój
        rower z pasją i precyzją. Zaufaj ekspertom, dla których dwa kółka to
        cały świat.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-accent text-white py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300"
        >
          Umów wizytę
        </a>
        <a
          href="#"
          className="ml-4 py-3 px-6 border rounded-md shadow-lg hover:shadow-xl transition duration-300"
        >
          Poznaj ofertę
        </a>
      </div>
      <div className="flex justify-center mt-10 ">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-accent shadow-sm shadow-accent mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-accent shadow-sm shadow-accent mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
