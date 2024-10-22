import AnimText from '@/components/features/animation/AnimText';
import HomeHero from '@/components/features/home/HomeHero';
import HomeProject from '@/components/features/home/HomeProject';
import VideoIntro from '@/components/shared/VideoIntro';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <VideoIntro>
        <h1 className="absolute position-center w-fit whitespace-nowrap">
          <AnimText
            text="Nguyen Cao Thien An"
            className="text-white text-3xl md:text-7xl font-heading uppercase tracking-wider"
          />
        </h1>
      </VideoIntro>
      <HomeHero />
      <HomeProject />
    </div>
  );
}
