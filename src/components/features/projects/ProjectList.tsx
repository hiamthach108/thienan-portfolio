import Image from 'next/image';

import React from 'react';

const list = {
  id: 1,
  title: '',
  content: [''],
};

const ProjectList = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="fluid-container py-10">
        <div className="mt-10 flex gap-10 items-center">
          <div className="text-justify flex flex-col gap-1">
            <h2 className="section-heading mb-4 text-center">Mush-Room Of Love</h2>
            <p>
              The Mush-Room of Love project is a personal initiative aimed at supporting
              visually impaired and disabled children through the sale of organic
              mushrooms. 🍄
            </p>
            <p>
              The mushrooms are grown entirely from organic sources without chemicals,
              benefiting health and contributing to environmental protection. The
              cultivation process follows sustainable, eco-friendly principles, helping
              maintain the ecosystem and reduce pollution. 🌱
            </p>
            <p>
              What makes this project special is that all profits from mushroom sales will
              be used to fund charitable activities, particularly supporting visually
              impaired and disabled children. This modest amount will help the children
              have better access to education, development, and integration into society,
              offering them a brighter future. 🌟
            </p>
            <p>
              Mush-Room of Love not only provides value in terms of health and the
              environment but also spreads love and compassion to those in need, opening
              opportunities and hope for the children.💖
            </p>
          </div>
          <Image
            src={'/projects/mushroomoflove.jpg'}
            width={600}
            height={600}
            alt="Mush-Room Of Love"
            className="w-1/3 h-auto aspect-square rounded-xl object-cover object-center shadow-md"
          />
        </div>
      </div>

      <div className="bg-white py-10">
        <div className="fluid-container flex gap-8">
          <Image
            src={'/projects/17.jpg'}
            width={600}
            height={600}
            alt="Mush-Room Of Love"
            className="h-auto w-full md:w-[40%] object-cover object-center"
          />

          <div className="text-justify flex-1 flex flex-col gap-2">
            <h3 className="section-heading ">MUSHROOM FUNDRAISING PROJECT – CHARITY</h3>
            <p className="">
              At Mush-Room of Love, we aim to bring safe and healthy food to everyone. Our
              mushrooms are cultivated according to organic standards, with no harmful
              chemicals, ensuring that organic mushrooms are the safest and best choice
              for your family’s daily meals.
            </p>
            <p className="">
              At Mush-Room of Love, organic mushrooms not only bring health benefits, but
              the profits from each product sold are used for charitable activities, from
              donations to those in need to organizing charity projects. Every
              contribution, big or small, has significant value for the project and the
              community at large.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h3>FARMING EXPERIENCE</h3>
        <p>
          From the moment I first stepped onto the farm, I was captivated by the lush and
          soothing atmosphere, where hundreds of mushroom beds of all kinds were
          flourishing. I personally chose growing mushroom beds, gently watering them, and
          it felt as if I was transmitting a strong life energy from mother earth to each
          mushroom sprout. 🌱 The mushroom farming experience not only brought endless joy
          but also helped me deeply understand patience and how to connect with nature.
          After tending to them and watching the mushrooms grow like my 'little children,'
          the feeling was truly heartwarming and full of anticipation! ✨
        </p>
        <p>
          The organic mushroom cultivation process was also fascinating, from preparing
          the substrate using natural materials like straw and sawdust to create a living
          environment for the mushrooms. After sterilizing the substrate to eliminate
          unwanted bacteria, I inoculated it with mushroom spores. The care process was
          continuous, watering and monitoring the humidity and temperature to create ideal
          conditions for the mushrooms to thrive. Finally, when the mushrooms reached the
          desired size, I harvested and stored them properly, not only to enjoy but to
          fully appreciate the love for nature through each mushroom I had nurtured."
        </p>
      </div>

      <div className="">
        <h3>&quot;JOYFUL SUMMER TUNES&quot; PROJECT</h3>
        <p>
          From the very first moment I stepped onto the farm, I was captivated by the
          lush, soothing environment, where hundreds of mushroom beds of various types
          were in full bloom. I personally selected growing mushroom beds, gently watered
          them, and felt as if I was transmitting a powerful life energy from mother earth
          to each mushroom sprout. 🌱 The mushroom farming experience not only brought
          endless joy but also allowed me to deeply understand patience and how to connect
          with nature. Tending to them and watching the mushrooms grow like my
          &apos;little children&apos; was a truly heartwarming and full-of-anticipation
          experience! ✨
        </p>

        <h6>Organic mushroom cultivation process:</h6>
        <ul>
          <li>
            Preparing the space: Create a lush, airy environment for growing mushrooms,
            with soft light and the right humidity.
          </li>
          <li>
            Choosing materials: Select natural materials like straw, sawdust, or coffee
            grounds as substrates for the mushrooms.
          </li>
          <li>
            Sterilizing the substrate: Sterilize the substrate with steam or high
            temperatures to eliminate unwanted bacteria and molds.
          </li>
          <li>
            Inoculating the mushrooms: Once the substrate has cooled, gently inoculate it
            with mushroom spores, ensuring an even distribution for balanced growth.
          </li>
          <li>
            Keep the mushrooms healthy: Regularly water to maintain humidity, and monitor
            the air temperature and moisture to create ideal conditions for mushroom
            development.
          </li>
          <li>
            Monitoring growth: Observe the mushrooms’ growth like &apos;little
            children,&apos; feeling the joy and connection with nature.
          </li>
          <li>
            Harvesting the mushrooms: When they reach the desired size, carefully harvest
            them, and feel the happiness of seeing the fully grown mushroom beds.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
