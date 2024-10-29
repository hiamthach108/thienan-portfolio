import React from 'react';

import ImgCarousel from '@/components/shared/ImgCarousel';

import AnimFade from '../animation/AnimFade';

import clsx from 'clsx';

const list: {
  id: number;
  title: string;
  content: string[];
  images?: string[];
  prefix?: string;
}[] = [
  {
    id: 1,
    title: 'Workshop - HCM CLB Future Business Leader',
    content: [
      'As part of the event organizers, I had a significant opportunity to connect and facilitate speakers from the Business and F&B industries. The goal of the event was to provide deep insights into the development of Vietnamese coffee products in the international market.',
      'I coordinated the program, from selecting appropriate speakers to scheduling each segment. Additionally, I was responsible for preparing materials, necessary equipment, and creating a comfortable environment for speakers and attendees to easily exchange experiences and knowledge.',
      'Moreover, I served as a bridge between the speakers and participants, helping everyone gain a better understanding of the value and potential of Vietnamese coffee in a global context. Through the event, not only did I learn new things, but I also felt proud to have contributed to promoting the image of Vietnamese coffee and the business industry to young people.',
    ],
    images: [
      '/social-activities/7.jpg',
      '/social-activities/8.jpg',
      '/social-activities/9.jpg',
      '/social-activities/10.jpg',
      '/social-activities/11.jpg',
      '/social-activities/12.jpg',
      '/social-activities/7.jpg',
      '/social-activities/8.jpg',
      '/social-activities/9.jpg',
      '/social-activities/10.jpg',
      '/social-activities/11.jpg',
      '/social-activities/12.jpg',
    ],
  },
  {
    id: 2,
    title: 'Fund-raising concert \n "I SEE YOUR VOICE"',
    content: [
      'I participated in selling dried mangoes, peanuts, and tickets for a charity concert to raise funds for the children at the "Bừng Sáng" shelter for the visually impaired. It feels so heartwarming to know that thanks to my efforts and those of others, over 24 million VND has been donated! I feel very proud to have contributed my small part to such a meaningful goal.',
      'Not only did I sell items to raise funds, but I also performed on the violin during the fundraising concert on June 1, 2024. Everyone listened attentively, and I felt that I was able to convey my music and love to the children.',
      'Afterward, I participated in giving gifts and playing with the kids at the "Bừng Sáng" shelter. They are incredibly adorable, and every time I tell stories or play with them, their joyful laughter fills the air, making me feel truly happy! Those moments will always be cherished memories in my heart.',
    ],
    images: [
      '1.JPG',
      '2.JPG',
      '3.JPG',
      '4.JPG',
      '5.JPG',
      '6.JPG',
      '7.JPG',
      '8.JPG',
      '9.JPG',
      '10.JPG',
      '11.JPG',
      '12.JPG',
      '13.JPG',
      '14.JPG',
      '15.JPG',
      '16.JPG',
      '17.JPG',
      '18.JPG',
      '19.jpg',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/fund-raising/',
  },
  {
    id: 7,
    title: 'Young Acheiver Business Olympiad 2024',
    content: [
      'Attended YABO 2024 in Singapore, participating in masterclasses on sustainable development goals and collaborating with an international team to create a simulated sustainable tourism company, "AA Travel." The team strategized eco-friendly tour packages, advancing through multiple competition rounds and securing second place overall, along with the Silver Award and the Business Pitch & Roadshow Award for a personalized eco-tourism concept in Vietnam.',
    ],
    images: [
      '0bbd37bc2d5c8a02d34d.jpg',
      '0e37df7d0f8ba8d5f19a.jpg',
      '0e5a600ba4fc03a25aed.jpg',
      '10795777838124df7d90.jpg',
      '1b0501875e67f939a076.jpg',
      '1ba025546ab4cdea94a5.jpg',
      '22ab29a04f72e82cb163.jxl',
      '2604207ad99e7ec0278f.jpg',
      '43fed88c5978fe26a769.jpg',
      '4828596088962fc87687.jpg',
      '54cbb135bee619b840f7.jxl',
      '55607f933073972dce62.jpg',
      '5612924a88aa2ff476bb.jpg',
      '60f325305dc5fa9ba3d4.jpg',
      '6688e42747c1e09fb9d0.jpg',
      '70d9359be56d42331b7c.jpg',
      '7669cb4a35ab92f5cbba.jpg',
      '7d0491c3e9364e681727.jpg',
      '7d2a036763bec4e09daf.jxl',
      '7d56b4c1eb214c7f1530.jpg',
      '8044074ad19a76c42f8b.jxl',
      '86e64f96b470132e4a61.jpg',
      '91bb8478018ca6d2ff9d.jpg',
      '9d6f5b47dab77de924a6 (1).jpg',
      'a0a739674192e6ccbf83.jpg',
      'aad985c65130f66eaf21.jpg',
      'aeb5785888ac2ff276bd.jpg',
      'bc34981999c63e9867d7.jxl',
      'bf9faf0c6be3ccbd95f2.jpg',
      'cf4bb3b2cb476c193556.jpg',
      'da96bc1638f09faec6e1.jpg',
      'db1f877b5f99f8c7a188.jpg',
      'e7bc2dfefd085a560319.jpg',
      'eb0ca2b8c36a64343d7b.jxl',
      'f171e9e5b605115b4814.jpg',
      'f217c1a0887f2f21766e.jxl',
      'fb3555aa0f74a82af165.jxl',
      'ffa7cfda253c8262db2d.jpg',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/young-acheiver/',
  },
  {
    id: 8,
    title: 'Echoes of Culture',
    content: [
      'Attended Model United Nations at DAV Open Simulation 2024: Echoes of Culture. Joined The UN  Economic and Social Council (ECOSOC) as a Delegate of New Zealand, discussing the topic “Enhancing the minorities’ rights to natural resources.”',
    ],
    images: [
      'z5952625343907_56cfdc572d8368c00dfc718538237e90.jpg',
      'z5952625343983_154e4a922c52c82bdc8b1faec9546d9f.jpg',
      'z5952625343987_d2775e18c3597f943b3bbde922f823dd.jpg',
      'z5952625343989_d83bed7b4c208e7963d02b26ca0d8d62.jpg',
      'z5952625360501_fa4f035abaced7dbdf2d70812103cea7.jpg',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/echoes-of-culture/',
  },
  {
    id: 3,
    title: 'Nong Trai Xanh Green Noel 2024',
    content: [
      `"I'm really lucky to have had the opportunity to spend an exciting day as a farmer with you all. We got to participate in outdoor games, breathe in the fresh air, and enjoy fun moments surrounded by nature. Wearing the cool traditional áo bà ba outfits, we felt even more connected to the simplicity of the countryside.`,
      'The most memorable moment was definitely catching fish in the canal. The whole group was laughing and cheering as each fish wriggled in our hands, and that feeling is truly unforgettable! ',
    ],
    images: [
      'IMG_8472(1).JPG',
      'IMG_8472.JPG',
      'IMG_8479.JPG',
      'IMG_8480.JPG',
      'IMG_8481.JPG',
      'IMG_8482.JPG',
      'IMG_8483.JPG',
      'IMG_8484.JPG',
      'IMG_8486.JPG',
      'IMG_8487.JPG',
      'IMG_8488.JPG',
      'IMG_8489.JPG',
      'IMG_8490.JPG',
      'IMG_8491.JPG',
      'IMG_8492.JPG',
      'IMG_8493.JPG',
      'IMG_8494.JPG',
      'IMG_8496.JPG',
      'IMG_8498.JPG',
      'IMG_8499.JPG',
      'IMG_8501.JPG',
      'IMG_8503.JPG',
      'IMG_8504.JPG',
      'IMG_8506.JPG',
      'IMG_8507.JPG',
      'IMG_8509.JPG',
      'IMG_8510.JPG',
      'IMG_8511.JPG',
      'IMG_8512.JPG',
      'IMG_8513.JPG',
      'IMG_8516.JPG',
      'IMG_8517.JPG',
      'IMG_8518.JPG',
      'IMG_8519.JPG',
      'IMG_8521.JPG',
      'IMG_8523.JPG',
      'IMG_8525.JPG',
      'IMG_8526.JPG',
      'IMG_8528.JPG',
      'IMG_8529.JPG',
      'IMG_8530.JPG',
      'IMG_8531.JPG',
      'IMG_8532.JPG',
      'IMG_8533.JPG',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/greem-farm/',
  },
  {
    id: 4,
    title: 'Buon Ma Thuot',
    content: [
      `"A Journey Through Vietnam's Central Highlands" takes place from June 10 to 12, 2024. Arriving in Buon Ma Thuot, I will experience the traditional culture of the area. I will participate in specific activities and stages of mushroom cultivation, engage in cultural practices, and interact with and distribute gifts to underprivileged children.`,
    ],
    images: [
      'IMG_0208.JPG',
      'IMG_0218.JPG',
      'IMG_0222.JPG',
      'IMG_0228.JPG',
      'IMG_0325.JPG',
      'IMG_0385.JPG',
      'IMG_0392.JPG',
      'IMG_0657.JPG',
      'IMG_0717.JPG',
      'IMG_0718.JPG',
      'IMG_0721.JPG',
      'IMG_0745.JPG',
      'IMG_0793.JPG',
      'IMG_0823.JPG',
      'IMG_0825.JPG',
      'IMG_0826.JPG',
      'IMG_0933.JPG',
      'IMG_0935.JPG',
      'IMG_0977.JPG',
      'IMG_0982.JPG',
      'IMG_1002.JPG',
      'IMG_1105.JPG',
      'IMG_1107.JPG',
      'IMG_1110.JPG',
      'IMG_1111.JPG',
      'IMG_1128.JPG',
      'IMG_8909.webp',
      'IMG_8960.webp',
      'IMG_8983.webp',
      'IMG_8999.webp',
      'IMG_9023.JPG',
      'IMG_9024.JPG',
      'IMG_9036.webp',
      'IMG_9065.webp',
      'IMG_9128.JPG',
      'IMG_9132.JPG',
      'IMG_9144.webp',
      'IMG_9146.webp',
      'IMG_9252.webp',
      'IMG_9423.webp',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/buon-ma-thuot/',
  },
  {
    id: 5,
    title: 'Hues of Spring',
    content: [
      'Organized the “Hues of Spring” Tet Festival, bringing vibrant Tet celebrations to students in Cu Chi, HCMC. Led cultural performances, interactive activities, and setup, raising over 25 million VND for the school’s education fund, supporting New Year supplies and scholarships for disadvantaged students.',
    ],
    images: [
      'IMG_1878.JPG',
      'IMG_1880.JPG',
      'IMG_2037.JPG',
      'IMG_2039.JPG',
      'IMG_2702.JPG',
      'IMG_2727.JPG',
      'IMG_2841.JPG',
      'IMG_2844.JPG',
      'IMG_2845.JPG',
      'IMG_2847.JPG',
      'IMG_2848.JPG',
      'IMG_7669.JPG',
      'IMG_7670.JPG',
      'IMG_7676.JPG',
      'nem-lon.jpg',
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/an-giang/',
  },

  {
    id: 6,
    title: 'School Performing',
    content: [
      'Attended the AHS dance team. Practice "Rewrite the Stars" by Anne-Marie and James Arthur for the graduating class of 2024.',
    ],
    images: [
      'DSC06811.jpeg',
      'DSC06813.jpeg',
      'DSC06818.jpeg',
      'DSC06819.jpeg',
      'IMG_8537.webp',
      'IMG_8543.webp',
      'IMG_8548.webp',
      'IMG_8550.webp',
      'IMG_8701.JPG',
      'IMG_8704.JPG',
      'IMG_8705.JPG',
      'IMG_8706.JPG',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/school-performing/',
  },

  {
    id: 9,
    title: 'History Class',
    content: [
      'With the topic of "Cultural Interweaving Among ASEAN Nations," our team chose to present on Thai culture and cuisine. I took on the role of team leader and lead presenter.',
    ],
    images: [
      'z5952624675445_d4e23cc4ef673a67e22258974ea8bb63.jpg',
      'z5952624675546_00d7f1b2338804364013e09cc060aefe.jpg',
      'z5952624675547_839c6925ed47fa579ec95ae0abb977aa.jpg',
      'z5952624675561_f2359cc5398d2c869acddf335f87f53a.jpg',
      'z5952624675571_f5225a6deb978847e98cf23e87399885.jpg',
      'z5952624675573_98bed1a549db9e61a9630d369656d12e.jpg',
      'z5952624675587_77c2c0914dfe58a990f7cb8816fdebf1.jpg',
      'z5952624675588_58e911e0bcfbdb4e19118a81a047a9d2.jpg',
      'z5952624675596_82c18a5b27d2b64c21ca7db690f9b150.jpg',
      'z5952624675618_ba69e90c84ef068d73b933e3cf058b58.jpg',
      'z5952624675619_6fb99fdb4cf2a0c603b376b892e094cc.jpg',
      'z5952624675642_3fb8425e8413f91da3a4350e59503f61.jpg',
    ],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/history-class/',
  },
  {
    id: 10,
    title: 'MUN Conference in Asian School',
    content: [],
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
    prefix:
      'https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/social-activities/mun-conference/',
  },
];

const ActivityList = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        {list.map((item, i) => {
          return (
            <div key={item.id} className={clsx('w-full', i % 2 !== 0 && 'bg-white')}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-6 md:py-12 fluid-container items-center">
                <div className="flex-1">
                  <AnimFade direction="up">
                    <h2 className="section-heading w-fit mb-2 text-xl">{item.title}</h2>
                  </AnimFade>
                  <AnimFade
                    direction="up"
                    delay={0.1}
                    className="flex flex-col gap-1 w-full text-justify"
                  >
                    {item.content.map((content, index) => {
                      return (
                        <p key={index} className="text-sm ">
                          {content}
                        </p>
                      );
                    })}
                  </AnimFade>
                </div>
                <div className="w-full md:w-[54%]">
                  <ImgCarousel
                    images={
                      item.images?.map((i) => {
                        return item.prefix ? item.prefix + i : i;
                      }) || []
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityList;
