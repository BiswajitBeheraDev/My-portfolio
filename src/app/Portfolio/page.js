import Image from 'next/image';
import About from '../About/page';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center">
      <section className="flex flex-col items-center justify-center mt-10">
        <div className="rounded-full overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/bikun.jpg.jpeg"
            alt="My Profile"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4">Biswajit Amrit Ranjan Behera</h1>
        <p className="text-white-600 mt-2">Frontend Developer | Web Designer</p>
      </section>
      <About/>
    </div>
  );
}