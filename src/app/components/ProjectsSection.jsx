"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Computer Pars",
    description: "React.js, Tailwind Css, Desy UI,Firebase, Node.js, Express.js Mongodb",
    image: "https://i.ibb.co/Rv3CYbn/1.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/computer-pars-cline/",
    previewUrl: "https://computer-info-parts.web.app/",
  },
  {
    id: 2,
    title: "Roktto Bondhu",
    description: "React.js, Tailwind Css, Desy UI,Firebase, Node.js, Express.js Mongodb",
    image: "https://i.ibb.co/cxDSnQx/2.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/RoktoBondu/",
    previewUrl: "https://incandescent-choux-787455.netlify.app/",
  },
  {
    id: 3,
    title: "Red Onion",
    description: "React.js, Tailwind Css, Desy UI,Firebase, Node.js, Express.js Mongodb",
    image: "https://i.ibb.co/SX48Tys/3.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/onion",
    previewUrl: "https://red-onion-abbee.web.app/",
  },
  {
    id: 4,
    title: "Open Library",
    description: "React.js, Tailwind Css, Desy UI,Natlify, Node.js, Express.js Mongodb",
    image: "https://i.ibb.co/pvk7jV1/4.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/livery-project",
    previewUrl: "https://mellow-axolotl-fd8a16.netlify.app/",
  },
  {
    id: 5,
    title: "ViVo Phone Shop Project",
    description: "React.js, Tailwind Css, Desy UI,Firebase, Node.js, Express.js Mongodb",
    image: "https://i.ibb.co/yYv3SNm/5.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/smartphone-shop-cline/",
    previewUrl: "https://smartphone-show-room-88deb.web.app/",
  },
  {
    id: 6,
    title: "Food Ordering Application",
    description: "React.js, Tailwind Css, Desy UI,Firebase, Node.js, Express.js Mongodb",
    image: "https://i.ibb.co/NrP5tJb/6.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "/",
    previewUrl: "https://online-restaurant1.web.app/",
  },
  {
    id: 7,
    title: "NFters-web-Application",
    description: "React.js, Tailwind Css, Desy UI",
    image: "https://i.ibb.co/jvpNCJc/7.png",
    tag: ["All", "front-End"],
    gitUrl: "/https://github.com/shorifuddin2/NFters-web-Application",
    previewUrl: "https://timely-meringue-13005e.netlify.app/",
  },
  {
    id: 8,
    title: "Deshbood App",
    description: "React.js, Tailwind css, Desy Ui, Node.js, Experss.js,Mongodb,Firebase",
    image: "https://i.ibb.co/6XXYd3q/8.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/Student-data-Collection",
    previewUrl: "https://student-app-a5b1d.web.app/",
  },
  {
    id: 9,
    title: "Protfolio Preject",
    description: "HTML5, Row Css3",
    image: "https://i.ibb.co/DWNjwFb/9.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/misson-2022",
    previewUrl: "https://vigilant-ardinghelli-39dee0.netlify.app/",
  },
  {
    id: 10,
    title: "Our Crouses",
    description: "React.js Tailwind Css, Firebase",
    image: "https://i.ibb.co/BrjFHPX/10.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/Our-courses-website",
    previewUrl: "https://our-courses-132f5.web.app/",
  },
  // {
  //   id: 10,
  //   title: "Tourist World",
  //   description: "React.js Tailwind Css, Firebase",
  //   image: "https://i.ibb.co/BrjFHPX/10.png",
  //   tag: ["All", "Front-End"],
  //   gitUrl: "https://github.com/shorifuddin2/tourist-would",
  //   previewUrl: "https://tourist-man.web.app/",
  // },
  {
    id: 11,
    title: "Discovres Research",
    description: "Bootstrap 5, React.js,Natlify",
    image: "https://i.ibb.co/9st6GCz/11.png",
    tag: ["All", "MEAN Stack"],
    gitUrl: "https://github.com/shorifuddin2/Research-Gate",
    previewUrl: "https://graceful-sopapillas-5f36aa.netlify.app/",
  },
  {
    id: 12,
    title: "E-Commars",
    description: "HTML-5,Bootstrap-5",
    image: "https://i.ibb.co/W6PszDp/12.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/panda-commerce",
    previewUrl: "https://shorifuddin2.github.io/panda-commerce/",
  },
  {
    id: 13,
    title: "InFluencer Porduct",
    description: "HTML-5 Css",
    image: "https://i.ibb.co/CvLLrbW/13.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/influencer-gear",
    previewUrl: "https://app.netlify.com/sites/flamboyant-hopper-894bfa/",
  },
  {
    id: 14,
    title: "E-Commars",
    description: "HTML-5,Bootstrap-5",
    image: "https://i.ibb.co/98ZhP78/14.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/hot-gadgets",
    previewUrl: "https://shorifuddin2.github.io/hot-gadgets/",
  },
  {
    id: 15,
    title: "Protfolio Project",
    description: "React.js, React Bootstrap,Firebase, React Animation",
    image: "https://i.ibb.co/8B8KtSB/15.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/Protfolio-Of-Shorif-Uddin",
    previewUrl: "https://portfolio-of-shorif-uddin.web.app/",
  },
  {
    id: 16,
    title: "E-Shcool Project",
    description: "HtML-5 Tailwind css",
    image: "https://i.ibb.co/VwDzyLr/16.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/e-school-resources-",
    previewUrl: "https://shorifuddin2.github.io/e-school-resources-/",
  },
  // {
  //   id: 17,
  //   title: "Wedding Celebration",
  //   description: "React.js, React-Bootstrap",
  //   image: "https://i.ibb.co/R69krYL/17.png",
  //   tag: ["All", "Front-End"],
  //   gitUrl: "https://github.com/shorifuddin2/wedding-celebration",
  //   previewUrl: "/",
  // },
  {
    id: 18,
    title: "Wedding Celebration",
    description: "React.js, React-Bootstrap",
    image: "https://i.ibb.co/WzQTFNs/18.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/wedding-celebration",
    previewUrl: "https://shorifuddin2.github.io/wedding-celebration/index.html",
  },
  // {
  //   id: 19,
  //   title: "E-Commars",
  //   description: "HTML 5, Css 3",
  //   image: "https://i.ibb.co/60cSL07/19.png",
  //   tag: ["All", "Front-End"],
  //   gitUrl: "https://github.com/shorifuddin2/ledarbood-css3",
  //   previewUrl: "https://shorifuddin2.github.io/ledarbood-css3/",
  // },
  {
    id: 20,
    title: "Protfolio Project",
    description: "HTML 5, Css-3",
    image: "https://i.ibb.co/hWwnvq8/20.png",
    tag: ["All", "Front-End"],
    gitUrl: "https://github.com/shorifuddin2/web-portfolio",
    previewUrl: "https://shorifuddin2.github.io/web-portfolio/",
  },
  // {
  //   id: 21,
  //   title: "Protfolio Project",
  //   description: "HTML-5, Css-3",
  //   image: "https://i.ibb.co/71VbvhL/21.png",
  //   tag: ["All", "Front-End"],
  //   gitUrl: "https://github.com/shorifuddin2/my_hard_work",
  //   previewUrl: "https://github.com/shorifuddin2/my_hard_work",
  // },
  // {
  //   id: 22,
  //   title: "C.R.L FLUD STUDEIO",
  //   description: "React.js, Tailwind Css",
  //   image: "https://i.ibb.co/qJJ5XBF/22.png",
  //   tag: ["All", "Front-End"],
  //   gitUrl: "https://github.com/shorifuddin2/netart-test",
  //   previewUrl: "https://frabjous-daffodil-f48afe.netlify.app/",
  // },
  // {
  //   id: 23,
  //   title: "MERVAL Project",
  //   description: "React.js, Tailwind Css",
  //   image: "",
  //   tag: ["All", "Front-End"],
  //   gitUrl: "https://github.com/shorifuddin2/marvel-comics",
  //   previewUrl: "https://harmonious-cascaron-c1d92f.netlify.app/",
  // },
  // {
  //   id: 24,
  //   title: "MERVAL Project",
  //   description: "React.js, Tailwind Css",
  //   image: "https://i.ibb.co/CtRJk6H/24.png",
  //   tag: ["All", "Front-End"],
  //   gitUrl: "https://github.com/shorifuddin2/marvel-comics",
  //   previewUrl: "https://harmonious-cascaron-c1d92f.netlify.app/",
  // },
];

/**
https://i.ibb.co/jDvX2gM/hero-image.png

https://i.ibb.co/NWb8MJx/about-image.png
https://i.ibb.co/rGkhQ6h/code.gif

 * 
 */

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MEAN Stack"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front-End"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
