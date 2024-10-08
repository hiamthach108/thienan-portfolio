import React from 'react';

const projects = [
  {
    id: 1,
    title: "A MIDSUMMER NIGHT'S DREAM",
    description:
      'The concert will take place on August 11, 2024, at Air Strings - Violin Choir.',
    sub: 'The song is titled: Oblivion - Astor Piazzolla.',
    link: '',
  },

  {
    id: 2,
    title: 'I SEE YOUR VOICE',
    description: 'The "I Can See Your Voice" program will take place on June 1, 2024.',
    sub: 'The charity concert raises funds for the "Bừng Sáng" shelter for the visually impaired, with donations exceeding 24,000,000 VND.',
    link: '',
  },
  {
    id: 3,
    title: 'WINTER WONDERLAND 2023',
    description: 'The concert will take place on [date] at Air Strings - Violin Choir.',
    sub: 'The song is titled: Hallelujah - Leonard Cohen.',
    link: '',
  },
  {
    id: 4,
    title: 'TERESARO CHOIR - PHU HANH CHURCH 2023-2024',
    description: 'The birthday of the Teresa Choir at Phú Hạnh Church: May 7, 2023.',
    sub: 'The song is titled: Dắt dìu con đi - Phương Anh.',
    link: '',
  },
];

const HobbiesProjects = () => {
  return (
    <div className="py-10 fluid-container">
      <div className="flex flex-col gap-10">
        {projects.map((p) => {
          return (
            <div className="flex gap-10 w-full" key={p.id}>
              <h5 className="section-heading-hand">0{p.id}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HobbiesProjects;
