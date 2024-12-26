import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Kubernetes Cluster Automation",
    description: "Developed automated setup and scaling of K8s clusters using Terraform and AWS EKS",
    tags: ["Kubernetes", "Terraform", "AWS", "Python"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "CI/CD Pipeline Modernization",
    description: "Modernized legacy Jenkins pipelines to GitHub Actions, reducing build times by 40%",
    tags: ["GitHub Actions", "Docker", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Monitoring Dashboard",
    description: "Created comprehensive monitoring solution using Prometheus and Grafana",
    tags: ["Prometheus", "Grafana", "AlertManager", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-600 hover:text-blue-600">
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center text-gray-600 hover:text-blue-600">
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}