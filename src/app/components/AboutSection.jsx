"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="list-disc">
        <span className="p-2">HTML5</span>
        <span className="p-2">Css3</span>
        <span className="p-2">Bootstap</span>
        <span className="p-2">Tailwind Css</span>
        <span className="p-2">Material UI</span>
        <span className="p-2">JavaScript</span>
        <span className="p-2">TypeScript</span>
        <span className="p-2">React.js</span>
        <span className="p-2">Next.js</span>
        <span className="p-2">Node.js</span>
        <span className="p-2">Express</span>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete Web Development Course With Jhankar Mahbub</li>
        <li>Next Level Web development</li>
        <li>B.A Alif Subhan Chowdhury govt. college ,Habiganj, Sylhet</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete Web Development Course With Jhankar Mahbub</li>
        <li>Next Level Web development</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-4 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/code-Image.gif" className="opacity-75 bg-primary-500" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React.js, Redux, Node.js, Express, next.js,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-5 w-100 h-auto">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
