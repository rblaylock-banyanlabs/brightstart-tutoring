import React from 'react';
import Card from './Card';
import Button from './button';
import ContactForm from "./ContactForm"
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const tutors = [
  {
    initials: 'SJ',
    name: 'Sarah Johnson',
    title: 'Senior Frontend Developer',
    bio: 'Specializes in React, Typescript, and modern development workflows. 5+ years of experience mentoring new developers.',
    skills: ['React', 'TypeScript', 'Git Flow', 'Component Design'],
    email: 'sarah@example.com',
    github: 'https://github.com/sarahjohnson',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    initials: 'MC',
    name: 'Mike Chen',
    title: 'Full Stack Engineer',
    bio: 'Expert in GitHub workflows and DevOps practices. Passionate about teaching clean code principles and best practices.',
    skills: ['Git Flow', 'DevOps', 'Clean Code', 'Testing'],
    email: 'michael@example.com',
    github: 'https://github.com/michaelchen',
    linkedin: 'https://linkedin.com/in/michaelchen'
  },
  {
    initials: 'ER',
    name: 'Emily Rodriguez',
    title: 'UI/UX Designer & Tutor',
    bio: 'Combines design thinking with development skills. Helps students create beautiful, accessible, and reusable components.',
    skills: ['UI/UX', 'Accessibility', 'Tailwind CSS', 'Design Systems'],
    email: 'emma@example.com',
    github: 'https://github.com/emmarodriguez',
    linkedin: 'https://linkedin.com/in/emmarodriguez'
  }
];

const ExpertTutor = () => {

  const [ showContactForm, setShowContactForm ] = useState(false)

  return (
    <section id="tutors" className="py-12 bg-slate-900 text-white">
      <div className="text-center mb-10">
        <h2 className="text-yellow-400 text-4xl font-bold mb-4">Meet Our Expert Tutors</h2>
        <p className="text-slate-200 text-lg max-w-2xl mx-auto">
          Our experienced tutors are here to guide you through your development journey with personalized attention and proven teaching methods.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-[80vw] mx-auto">
        {tutors.map((tutor, index) => (
          <Card
            key={index}
            className="min-h-[520px] w-full border border-yellow-600 pb-8"
          >
            <article className="flex flex-col items-center text-center pt-4">
              <div className="bg-yellow-500 text-black rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold mb-4">
                {tutor.initials}
              </div>
              <div className="font-semibold text-yellow-500 text-xl mb-1">{tutor.name}</div>
  <div className="font-semibold text-yellow-500 text-lg">{tutor.title}</div>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed px-4 pb-3 max-w-md">{tutor.bio}</p>

              <div className="flex flex-wrap justify-center mb-4">
                {tutor.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-yellow-700 text-yellow-400 rounded-full px-2 py-1 text-sm m-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
<div className="text-center mb-2">
                <Button
                onClick={() => setShowContactForm(true)}
                  label="Email"
                  variant="primary"
                  size="sm"
                  ariaLabel={`Email ${tutor.name}`}
                  className="w-[18vw] cursor-pointer"
                >
                  <FaEnvelope aria-hidden="true" />
                </Button>
                </div>

              <div className="flex flex-row justify-center gap-2 text-center">
                <Button
                  label="GitHub"
                  onClick={() => window.open(tutor.github, '_blank')}
                  variant="secondary"
                  size="sm"
                  ariaLabel={`${tutor.name}'s GitHub`}
                  className="gap-2 w-[8.75vw] cursor-pointer"
                >
                  <FaGithub aria-hidden="true" />
                </Button>

{/* <div className="inline-flex"> */}
                <Button
                  label="LinkedIn"
                  onClick={() => window.open(tutor.linkedin, '_blank')}
                  variant="secondary"
                  size="sm"
                  ariaLabel={`${tutor.name}'s LinkedIn`}
                  className="gap-2 w-[8.75vw] cursor-pointer"
                >
<FaLinkedin className="text-yellow-400" size={20} aria-label="Featured" />
                </Button>
                {/* </div> */}
              </div>
            </article>
          </Card>
        ))}
      </div>
      {showContactForm && (
  <ContactForm setShowContactForm={setShowContactForm} />
      )}
    </section>
  );
};

export default ExpertTutor;