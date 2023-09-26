import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Tilt } from "react-tilt";



const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
       <Tilt>
      <div className="  border rounded-2xl p-2">
      <img className="Curl-Img h-[270px] xl:h-[320px] " src={imgUrl} alt="" />
        <div className=" items-center justify-center flex">
          <Link
            href={gitUrl} _blank
            className="mx-5 "
          >
            <CodeBracketIcon className="h-8 w-8 hover:w-12 hover:h-12 hover:text-white  text-[#ff0dd7]" />
          </Link>
          <Link
            href={previewUrl} _blank
            className="mx-5 "
          >
            <EyeIcon className="h-8 w-8 hover:w-12 hover:h-12 hover:text-white text-[#fd0dd5]" />
          </Link>
        </div>
            <div className=" text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
          </div>
      </div>
     
      </Tilt>
    </div>
  );
};

export default ProjectCard;
