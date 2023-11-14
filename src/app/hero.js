import Image from "next/image";
import Head from "next/head";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-sky-600 text-white p-8 text-center flex flex-col items-center justify-center min-h-screen animate-fade-in"
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        />
      </Head>
      <div className="img-container mb-6">
        <Image
          src="/images/PROFILE.jpg"
          alt="profile-pic"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 pacifico">Hi, I'm R O B I N !</h1>
      <p className="mb-2">
        I'm a Computer Science Engineering student with a passion for ARTIFICIAL
        INTELLIGENCE & MACHINE LEARNING.
      </p>

      <p>
        <a href="/projects/" className="text-blue-300 underline">
          Take me to the magic land ↗
        </a>
      </p>
    </div>
  );
};

export default Hero;
