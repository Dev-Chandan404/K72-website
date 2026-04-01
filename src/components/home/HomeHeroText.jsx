import { Video } from "./Video";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] mt-48 lg:mt-0 pt-5 text-center">
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]">
        The spark for
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw] mt-1 lg:mt-2">
        all
        <div className="lg:h-[7vw] h-[8.5vw] lg:w-[16vw] w-[20vw] rounded-full  lg:mt-0 overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw] mt-1 lg:mt-2">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
