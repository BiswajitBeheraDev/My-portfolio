import React from "react";
import Image from "next/image";

async function getProjects() {
  // ✅ API ko relative path se call karo
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://" + process.env.NEXT_PUBLIC_VERCEL_URL : "http://localhost:3000"}/api/project`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="flex justify-center bg-gray-900 text-white py-12">
      <section id="projects" className="px-4 max-w-5xl w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <div className="flex justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-md"
                />
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
