"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center bg-gray-900 text-white py-12">
      <section id="projects" className="px-4 max-w-5xl w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow">
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
