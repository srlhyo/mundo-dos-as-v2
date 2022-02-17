import monster from "../images/monters.svg";
import logo from "../images/logo-small.svg";

function Form() {
  return (
    <section className="bg-lightyellow">
      <span className="absolute transform -translate-y-8" id="Contacto"></span>
      <form className="pb-16 w-4/5 lg:w-2/4 mx-auto flex flex-col" action="">
        <div className="">
          <img
            className="justify-self-start h-10 m-2 float-left"
            src={monster}
            alt="monster"
          />
          <img
            className="justify-self-start h-10 m-2 float-left"
            src={logo}
            alt="logo"
          />
          <h1 className="block sm:inline text-5xl sm:text-6xl px-2">
            Contacte Nos
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row w-full pt-2">
          <input
            className="bg-palepink m-2 py-4 px-6 flex-1"
            type="text"
            placeholder="Nome.."
          />
          <input
            className="bg-palepink my-2 mx-2 py-4 px-6 flex-1"
            type="text"
            placeholder="Email.."
          />
        </div>
        <textarea
          className="flex-1 bg-palepink m-2 py-4 px-6"
          id="subject"
          name="subject"
          placeholder="Mensagem.."
          rows="5"
        ></textarea>
        <input
          className="bg-golden m-2 px-8 py-2 text-xl cursor-pointer animate-pulse"
          type="submit"
          value="Enviar"
        />
      </form>
    </section>
  );
}

export default Form;
