// components/navbar/index.js
import Link from "next/link";
import styles from "@/app/globals.css";
import Head from "next/head";
import About from "@/pages/about";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
        />
      </Head>
      <div className="container mx-auto flex justify-between items-center Itim">
        <div
          className={`${styles.interFont} text-white font-bold text-lg cursor-pointer `}
        >
          <Link href="/">S U J A L</Link>
        </div>
        <ul className="flex items-center space-x-4">
          <li className="link">
            <Link href="/projects/">Projects</Link>
          </li>
          <li className="link">
            <Link href="/certificates/">Achievements</Link>
          </li>
          <li className="link">
            <Link href="/about" className="text-white hover:text-blue-300">
              About Me
            </Link>
          </li>
          <li className="toggle-btn">
            <a
              href="#"
              download="your_cv.pdf"
              className="bg-white text-blue-900 py-2 px-4 rounded-full hover:bg-blue-300 "
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
