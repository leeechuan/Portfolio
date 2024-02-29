import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (

    <div className='py-10 flex flex-col'>
          <h3 className={`${styles.sectionHeadText}`}>My Skills</h3>
  
          <div className='mt-16 flex flex-wrap gap-12'>
            {technologies.map((technology) => (
              <div className='block-container w-20 h-20' key={technology.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  );
};

export default SectionWrapper(Tech, "");
