import Heading from "./Heading";
import YoutubeBtn from "./YoutubeBtn";
import List from "./List";
import wave from "../images/wave.svg";

function Section() {
  return (
    <section className="w-full bg-pink-light">
      <img
        className="w-full transform -translate-y-2"
        src={wave}
        alt="border"
      />
      <div className="px-6">
        <span
          className="absolute transform -translate-y-8"
          id="Sobre Nos"
        ></span>
        <Heading heading="O Nosso Mundo" />
        <div className="grid-cols-3 xl:grid pt-10 pb-16">
            <p className="text-xl pb-16 text-center xl:hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              neque neque, auctor quis urna non, ullamcorper blandit tellus.
              Integer in erat facilisis nisi iaculis consectetur. Phasellus nec
              eros a lectus auctor pellentesque. Aliquam imperdiet sem urna, ut
              facilisis tellus ultricies a. Aenean laoreet et est eget
              tristique. Mauris quis ligula non leo lacinia molestie.
            </p>
          <List />
          <div className="sm:px-8 sm:py-4 col-span-2">
            <p className="text-2xl mx-auto pb-8 text-left hidden xl:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              neque neque, auctor quis urna non, ullamcorper blandit tellus.
              Integer in erat facilisis nisi iaculis consectetur. Phasellus nec
              eros a lectus auctor pellentesque. Aliquam imperdiet sem urna, ut
              facilisis tellus ultricies a. Aenean laoreet et est eget
              tristique. Mauris quis ligula non leo lacinia molestie.
            </p>
            <Heading heading="Queres Conhecer??" style={"xl:text-left xl:ml-0 py-6 xl:py-0"} />
            <YoutubeBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
