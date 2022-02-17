import button from "../images/btn-youtube.svg";
import hosts from "../images/hosts.svg";

function YoutubeBtn() {
  return (
    <div className="w-54 sm:w-72 mt-16 relative mx-auto xl:mx-0 cursor-pointer z-10">
      <a href="https://www.youtube.com/channel/UCIAAPpxxSibPBOSOIa11Qcw"><img className="w-full" src={button} alt="youtube button" /></a>
      <img className="w-1/4 absolute -bottom-2 right-4" src={hosts} alt="youtube button" />
    </div>
  );
}

export default YoutubeBtn;
