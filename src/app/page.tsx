import Category from './components/Category';
import Food from './components/Food';
import HeadLineCards from './components/HeadLineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="">
     <Navbar />
     <Hero />
     <HeadLineCards />
     <Food />
     <Category />
    </main>
  );
}
