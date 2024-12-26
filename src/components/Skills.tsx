import React from 'react';

const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Terraform", "Docker", "Kubernetes", "Linux"]
  },
  {
    category: "CI/CD & Automation",
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "Ansible", "Python"]
  },
  {
    category: "Monitoring & Logging",
    items: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Datadog"]
  },
  {
    category: "Version Control & Tools",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Confluence"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
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