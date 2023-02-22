import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/home/Hero";
import ThreeInOneSection from "@/components/home/ThreeInOneSection";
import BecomeSargeHero from "@/components/home/BecomeSargeHero";
import BraveWarriors from "@/components/home/BraveWarriors";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ThreeInOneSection />
      <BecomeSargeHero />
      <BraveWarriors />
    </>
  );
}
