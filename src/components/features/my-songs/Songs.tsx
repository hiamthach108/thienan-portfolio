import React from 'react';

import AnimFade from '../animation/AnimFade';

const Songs = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="py-4 px-10 rounded-2xl bg-[#27384c] text-center text-white">
        <h3 className="section-heading text-center font-hand2">Bay</h3>
        <div className="flex gap-4 mt-6">
          <AnimFade
            direction="left"
            className="my-4 flex flex-col gap-2 text-left flex-1"
          >
            <p>
              ✨ “Bay”—the first song I composed—is more than just a piece of music; it
              embodies my aspirations and my dream-filled journey. “Bay” is a metaphor for
              soaring, for the desire to break through all limits to reach a boundless
              sky—a journey of growth that I envision as a young bird taking flight for
              the first time.
            </p>
            <p>
              🌿 One day, that small bird will have to grow up, and face challenges on its
              own, getting out of the company of its parents. The song reflects not only
              my yearning to fly far and wide but also my profound gratitude and respect
              for my beloved parents, my rock, and my dearest friends.
            </p>
          </AnimFade>

          <AnimFade direction="right" className="flex-1">
            <video className="w-full h-auto aspect-video rounded-img" controls>
              <source
                src="https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/bay.mov"
                type="video/mp4"
              />
            </video>
          </AnimFade>
        </div>
        <div className="w-full mt-6">
          <iframe
            width="100%"
            height="150"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1944651423&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily:
                'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
              fontWeight: '100',
            }}
          >
            <a
              href="https://soundcloud.com/cao-thien-an-nguyen"
              title="Cao Thien An Nguyen"
              target="_blank"
              // style="color: #cccccc; text-decoration: none;"
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Cao Thien An Nguyen
            </a>{' '}
            ·{' '}
            <a
              href="https://soundcloud.com/cao-thien-an-nguyen/bay-thien-an"
              title="Bay"
              target="_blank"
              // style="color: #cccccc; text-decoration: none;"
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Bay
            </a>
          </div>
        </div>
      </div>
      <div className="py-4 px-10 rounded-2xl bg-[#27384c] text-center text-white">
        <h3 className="section-heading text-center font-hand2">Embrace</h3>
        <div className="flex gap-4 mt-6">
          <div className="flex gap-6">
            <AnimFade direction="left" className="flex flex-col gap-2 text-left flex-1">
              <p>
                ✨ Then, I suddenly realized that youth is fleeting. In the blink of an
                eye, all the memories—both joyful and sorrowful—faded, slipping away with
                the passage of time. At that moment, I asked myself: Have I truly given my
                all to life? Have I lived fully in pursuit of my dreams?
              </p>
              <p>
                &quot;I want to embrace the moment yet to come I want to embrace the joy
                that never fades And listening to the pounding, echoing heart We weave a
                tale that will forever unfold.&quot;
              </p>
              <p>
                🌻 An overwhelming wave of emotion surged within me, becoming the catalyst
                behind Embrace. I yearn to live my life to the fullest, to make this youth
                truly meaningful, and to &quot;Embrace my dream.&quot; With Embrace, I’ll
                capture this moment—this decision to live without regret.
              </p>
            </AnimFade>
            <AnimFade direction="right" className="flex-1">
              <video className="w-full h-auto aspect-video rounded-img" controls>
                <source
                  src="https://storage.googleapis.com/staging.thach-personal.appspot.com/thienan/embrace%201.mp4"
                  type="video/mp4"
                />
              </video>
            </AnimFade>
          </div>
        </div>
        <div className="w-full mt-6">
          <iframe
            width="100%"
            height="150"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1944655323&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            // style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
            style={{
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily:
                'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
              fontWeight: '100',
            }}
          >
            <a
              href="https://soundcloud.com/cao-thien-an-nguyen"
              title="Cao Thien An Nguyen"
              target="_blank"
              // style="color: #cccccc; text-decoration: none;"
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Cao Thien An Nguyen
            </a>{' '}
            ·{' '}
            <a
              href="https://soundcloud.com/cao-thien-an-nguyen/embrace"
              title="Embrace"
              target="_blank"
              // style="color: #cccccc; text-decoration: none;"
              style={{ color: '#cccccc', textDecoration: 'none' }}
            >
              Embrace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;
