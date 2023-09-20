import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Tilt } from "react-tilt";



const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
       <Tilt>
      <div>
      <img className=" longImg h-[270px] xl:h-[320px] " src={imgUrl} alt="" />
        <div className="items-center justify-center flex">
          <Link
            href={gitUrl}
            className=" "
          >
            <CodeBracketIcon className="h-10 w-10 text-[#e326c3]" />
          </Link>
          <Link
            href={previewUrl}
            className=" "
          >
            <EyeIcon className="h-10 w-10 text-[#e326c3]" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;
