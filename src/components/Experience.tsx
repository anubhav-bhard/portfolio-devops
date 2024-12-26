import React from 'react';

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    responsibilities: [
      "Led migration of 50+ microservices to Kubernetes, improving deployment time by 70%",
      "Implemented GitOps workflow using ArgoCD, reducing deployment errors by 60%",
      "Designed and maintained CI/CD pipelines for multiple development teams"
    ]
  },
  {
    title: "DevOps Engineer",
    company: "CloudScale Inc",
    period: "2021 - 2023",
    responsibilities: [
      "Managed AWS infrastructure using Terraform, supporting 100+ EC2 instances",
      "Implemented monitoring solutions using Prometheus and Grafana",
      "Automated backup and disaster recovery procedures"
    ]
  },
  {
    title: "Junior DevOps Engineer",
    company: "StartUp Tech",
    period: "2020 - 2021",
    responsibilities: [
      "Maintained CI/CD pipelines using Jenkins and Docker",
      "Assisted in cloud infrastructure management and monitoring",
      "Implemented logging solutions using ELK Stack"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}