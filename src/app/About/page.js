import React from 'react'

export default function About() {
  return (
    <div>
    <section id="about" className="max-w-3xl text-center mt-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-white-700">
          Hello! I am a passionate web developer who loves building modern and
          responsive websites. I work with Next.js, React, and Tailwind CSS to
          create beautiful UI and smooth user experiences.
        </p>
      </section>
    
      <section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
  <div className="flex flex-wrap gap-3 justify-center">
    <span className="bg-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-110">HTML</span>
    <span className="bg-green-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-110">CSS</span>
    <span className="bg-yellow-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-110">JavaScript</span>
    <span className="bg-red-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-110">Node.js</span>
    <span className="bg-purple-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-110">React</span>
    <span className="bg-pink-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-110">Next.js</span>
  </div>
</section>
</div>
  )
}
