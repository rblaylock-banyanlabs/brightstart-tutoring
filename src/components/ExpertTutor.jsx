import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const tutors = [
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    title: 'Senior Frontend Developer',
    bio: 'Sarah specializes in React, accessibility, and design systems. She has 8+ years of experience mentoring junior developers.',
    skills: ['React', 'Accessibility', 'Design Systems'],
    email: 'sarah@example.com',
    github: 'https://github.com/sarahjohnson',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    initials: 'MC',
    name: 'Michael Chen',
    title: 'Full Stack Engineer',
    bio: 'Michael is passionate about scalable backend systems and modern DevOps practices. He loves simplifying complex concepts.',
    skills: ['Node.js', 'DevOps', 'MongoDB'],
    email: 'michael@example.com',
    github: 'https://github.com/michaelchen',
    linkedin: 'https://linkedin.com/in/michaelchen'
  },
  {
    initials: 'ER',
    name: 'Emma Rodriguez',
    title: 'UI/UX Designer & Tutor',
    bio: 'Emma guides students in building intuitive UIs and understanding user psychology with Figma and prototyping tools.',
    skills: ['Figma', 'UX Writing', 'Prototyping'],
    email: 'emma@example.com',
    github: 'https://github.com/emmarodriguez',
    linkedin: 'https://linkedin.com/in/emmarodriguez'
  }
];

const OurTutorsSection = () => {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="text-center mb-10">
        <h2 className="text-yellow-400 text-4xl font-bold mb-4">Meet Our Expert Tutors</h2>
        <p className="text-slate-200 text-lg max-w-2xl mx-auto">
          Our experienced tutors are here to guide you through your development journey with personalized attention and proven teaching methods.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {tutors.map((tutor, index) => (
          <Card
            key={index}
            title={tutor.name}
            description={tutor.title}
            className="min-h-[520px] w-full border border-yellow-500"
          >
            <article className="flex flex-col items-center text-center pt-4">
              <div className="bg-yellow-500 text-black rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold mb-4">
                {tutor.initials}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed px-4 pb-3">{tutor.bio}</p>

              <div className="flex flex-wrap justify-center mb-4">
                {tutor.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-yellow-700 text-white rounded-full px-2 py-1 text-sm m-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  label="Email"
                  onClick={() => window.location.href = `mailto:${tutor.email}`}
                  variant="secondary"
                  size="sm"
                  ariaLabel={`Email ${tutor.name}`}
                  className="flex items-center gap-2"
                >
                  <FaEnvelope aria-hidden="true" />
                </Button>

                <Button
                  label="GitHub"
                  onClick={() => window.open(tutor.github, '_blank')}
                  variant="secondary"
                  size="sm"
                  ariaLabel={`${tutor.name}'s GitHub`}
                  className="flex items-center gap-2"
                >
                  <FaGithub aria-hidden="true" />
                </Button>

                <Button
                  label="LinkedIn"
                  onClick={() => window.open(tutor.linkedin, '_blank')}
                  variant="secondary"
                  size="sm"
                  ariaLabel={`${tutor.name}'s LinkedIn`}
                  className="flex items-center gap-2"
                >
                  <FaLinkedin aria-hidden="true" />
                </Button>
              </div>
            </article>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurTutorsSection;