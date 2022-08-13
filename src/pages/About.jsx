import Accordion from "../components/Accordion";

import React from "react";
import image from "../images/vastra.jpeg";

export default function About() {
  return (
    <div className='mb-14'>
      <h1 className=' my-10 text-center text-2xl font-bold text-neutral'>
        {" "}
        WELCOME TO VASTRA{" "}
      </h1>
      <p className='my-5 text-xl text-neutral px-5'> About us: </p>
      <div className='flex justify-evenly'>
        <div className='w-[50%]'>
          <p>{` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            autem magnam dolores excepturi dolorem rem sint, error, voluptatibus
            beatae aut placeat porro ad. Quam, quo exercitationem excepturi eius
         `}</p>
          <Accordion
            expanded={true}
            header={"First Accordion"}
            body={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            autem magnam dolores excepturi dolorem rem sint, error, voluptatibus
            beatae aut placeat porro ad. Quam, quo exercitationem excepturi eius
            veritatis omnis. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quo sit alias mollitia dolor magnam dignissimos ab esse, at
            non suscipit, nesciunt dolores distinctio illo porro voluptatibus
            explicabo assumenda earum tenetur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque architecto tenetur nostrum vero,
            deleniti maxime nam officia sunt minima, nemo quae doloremque
            doloribus perferendis necessitatibus.`}
          />
          <Accordion
            header={"Second Accordion"}
            body={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            autem magnam dolores excepturi dolorem rem sint, error, voluptatibus
            beatae aut placeat porro ad. Quam, quo exercitationem excepturi eius
            veritatis omnis. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quo sit alias mollitia dolor magnam dignissimos ab esse, at
            non suscipit, nesciunt dolores distinctio illo porro voluptatibus
            explicabo assumenda earum tenetur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque architecto tenetur nostrum vero,
            deleniti maxime nam officia sunt minima, nemo quae doloremque
            doloribus perferendis necessitatibus.`}
          />
          <Accordion
            header={"Third Accordion"}
            body={` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            autem magnam dolores excepturi dolorem rem sint, error, voluptatibus
            beatae aut placeat porro ad. Quam, quo exercitationem excepturi eius
            veritatis omnis. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quo sit alias mollitia dolor magnam dignissimos ab esse, at
            non suscipit, nesciunt dolores distinctio illo porro voluptatibus
            explicabo assumenda earum tenetur. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Atque architecto tenetur nostrum vero,
            deleniti maxime nam officia sunt minima, nemo quae doloremque
            doloribus perferendis necessitatibus.`}
          />
        </div>
        <div className='w-[30%]'>
          <img src={image} alt='' />
        </div>
      </div>
      <br />
    </div>
  );
}
