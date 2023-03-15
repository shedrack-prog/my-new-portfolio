import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/hero';
import MyStory from '@/components/myStory';
import Header from '@/components/header';
import Project from '@/components/projects';
import Services from '@/components/services';
import Procedure from '@/components/procedures';
import GetInTouch from '@/components/getInTouch';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shedrack Tobiloba</title>
        <meta name="description" content="Shedrack Tobiloba Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Header />
        <Hero />
        <MyStory />
        <Project />
        <Services />
        <Procedure />
        <GetInTouch />
      </main>
    </>
  );
}
