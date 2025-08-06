import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ExpertTutors = () => {
  const tutors = [
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      bio: 'Specializes in React, TypeScript, and modern development workflows. 5+ years of experience mentoring new developers.',
      skills: ['React', 'TypeScript', 'Git Flow', 'Component Design'],
      email: 'sarah.johnson@example.com',
      github: 'https://github.com/sarahjohnson',
      linkedin: 'https://linkedin.com/in/sarahjohnson'
    },
    {
      initials: 'MC',
      name: 'Mike Chen',
      title: 'Full Stack Engineer',
      bio: 'Expert in GitHub workflows and DevOps practices. Passionate about teaching clean code principles and best practices.',
      skills: ['Git Flow', 'DevOps', 'Clean Code', 'Testing'],
      email: 'mike.chen@example.com',
      github: 'https://github.com/mikechen',
      linkedin: 'https://linkedin.com/in/mikechen'
    },
    {
      initials: 'ER',
      name: 'Emily Rodriguez',
      title: 'UI/UX Developer',
      bio: 'Combines design thinking with development skills. Helps students create beautiful, accessible, and reusable components.',
      skills: ['UI/UX', 'Accessibility', 'Tailwind CSS', 'Design Systems'],
      email: 'emily.rodriguez@example.com',
      github: 'https://github.com/emilyrodriguez',
      linkedin: 'https://linkedin.com/in/emilyrodriguez'
    }
  ];

  return (
    <section className="bg-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center my-8">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Meet Our Expert Tutors
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our experienced tutors are here to guide you through your development 
            journey with personalized attention and proven teaching methods.
          </p>
        </div>

        {/* Tutor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {tutors.map((tutor, index) => (
            <article 
              key={index}
              className="bg-slate-800 rounded-lg p-6 border border-yellow-500 flex flex-col h-full"
            >
              {/* Initial Circle */}
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-500 text-black rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">
                  {tutor.initials}
                </div>
              </div>

              {/* Tutor Name & Title */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {tutor.name}
                </h3>
                <p className="text-yellow-300 font-medium">
                  {tutor.title}
                </p>
              </div>

              {/* Short Bio */}
              <p className="text-slate-100 leading-relaxed mb-6 flex-grow">
                {tutor.bio}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center mb-6 gap-1">
                {tutor.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="rounded-full bg-yellow-700 px-3 py-1 text-sm text-white m-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Email Button */}
                <a
                  href={`mailto:${tutor.email}`}
                  className="w-full flex items-center justify-center gap-2 border border-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition text-yellow-400 hover:text-black font-medium"
                >
                  <Mail size={18} />
                  Email
                </a>

                {/* GitHub and LinkedIn Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={tutor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition text-yellow-400 hover:text-black font-medium"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={tutor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition text-yellow-400 hover:text-black font-medium"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTutors;