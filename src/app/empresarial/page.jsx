"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import {
  FaGlobe,
  FaHandcuffs,
  FaHandshakeSimple,
  FaPeopleRoof,
  FaScaleBalanced,
  FaHandHoldingDollar,
  FaUserInjured,
  FaWhatsapp,
} from "react-icons/fa6";
const Empresarial = () => {
  const id = "#contato";
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [slider, setShowSlider] = useState();
  const [showModal, setShowModal] = useState(false);
  const imgs = ["/team.jpg", "/contrato.jpg", "/about.jpg", "/team.jpg"];
  useEffect(() => {
    AOS.init();
  }, []);
  const handleShowSubMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleShowMenu = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  const handleShowImg = (img) => {
    setShowModal(true);
    setShowSlider(img);
  };
  return (
    <>
      {" "}
      {/*Header*/}
      <header className="business">
        <div className=" hidden md:w-full h-16 bg-[#1D1E2C] md:flex gap-3 items-center justify-between px-4">
          <div className="flex gap-3 items-center ">
            <div className=" flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#c4a24d]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p className=" text-sm text-white">
                guedesbampiempresarial@gmail.com
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#c4a24d]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p className=" text-xs text-white">51 9999-9999</p>
            </div>
            <div className=" flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#c4a24d]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className=" text-xs text-white">9:00AM - 05:00PM</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-6">
              <BsFacebook size={25} color="#c4a24d" />

              <BsInstagram size={25} color="#c4a24d" />
              <BsYoutube size={26} color="#c4a24d" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 pt-4">
          <div className="w-[40%]">
            <img src="/ma.png" alt="Logo" />
          </div>
          <div className="flex md:w-full absolute right-2 top-0 pt-4 md:hidden items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-black text-[#c4a24d] "
              onClick={handleShowMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <nav className="w-[60%] flex items-center justify-end">
            <ul className=" hidden md:flex gap-5 text-white font-bold">
              <li className="hover:text-[#c4a24d]">
                <Link href={"#"}>Home</Link>
              </li>
              <li className="hover:text-[#c4a24d]">
                <Link href={"#servicos"}>Serviços</Link>
              </li>
              <li className="hover:text-[#c4a24d]">
                <Link href={"#sobre"}>Sobre Nós</Link>
              </li>
              <li className="hover:text-[#c4a24d]">
                <Link href={"#contato"}>Contato</Link>
              </li>
              <li
                className="flex flex-col relative cursor-pointer hover:text-[#c4a24d]"
                onClick={handleShowSubMenu}
              >
                Selecionar Área
                <ul
                  className={
                    showMenu
                      ? " absolute top-5 flex flex-col gap-2 mt-2 "
                      : "hidden"
                  }
                >
                  <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link href={"/civil"}>Civil</Link>
                  </li>
                  <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link href={"/empresarial"}>Empresarial</Link>
                  </li>
                  <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
                    <Link href={"/saude"}>Saúde</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <ul
            className={
              showMenuMobile
                ? "flex md:hidden text-white absolute top-16 border-t-2 border-[#c4a24d] w-full h-screen left-0 bg-black  flex-col gap-10 px-5 py-5"
                : "hidden"
            }
          >
            <li className="hover:text-[#c4a24d]">
              <Link href={"#"} onClick={() => setShowMenuMobile(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#c4a24d]">
              <Link href={"#sobre"} onClick={() => setShowMenuMobile(false)}>
                Sobre Nós
              </Link>
            </li>
            <li className="hover:text-[#c4a24d]">
              <Link href={"#contato"} onClick={() => setShowMenuMobile(false)}>
                Contato
              </Link>
            </li>
            <li
              className="flex flex-col relative cursor-pointer hover:text-[#c4a24d]"
              onClick={handleShowSubMenu}
            >
              Selecionar Área
              <ul
                className={
                  showMenu
                    ? " absolute top-5 flex flex-col gap-2 mt-2 "
                    : "hidden"
                }
              >
                <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
                  <Link
                    href={"/civil"}
                    onClick={() => setShowMenuMobile(false)}
                  >
                    Civil
                  </Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
                  <Link
                    href={"/empresarial"}
                    onClick={() => setShowMenuMobile(false)}
                  >
                    Empresarial
                  </Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white">
                  <Link
                    href={"/saude"}
                    onClick={() => setShowMenuMobile(false)}
                  >
                    Saúde
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-[60%] ml-8 mt-16  px-10 py-5 flex flex-col text-white  "
        >
          <h2>Precisa de ajuda?</h2>
          <h1 className="text-4xl mb-4 ">Nós podemos te ajudar!</h1>
          <p className="text-xs">
            A Guedesbampi Advocacia: Compromisso com a Excelência no Direito
            Empresarial A Guedesbampi Advocacia é uma renomada empresa de
            advocacia que se destaca por sua expertise no campo do Direito
            Empresarial.
          </p>
          <button className="w-[250px] mt-8 mx-auto py-4 text-white bg-[#c4a24d] uppercase font-bold rounded-md">
            <Link href={"#contato"}>Fale Conosco</Link>
          </button>
        </div>
      </header>
      {/*Sobre*/}
      <section className="w-full h-full bg-[#293844] flex flex-col items-center justify-center px-4 py-[8rem]">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-full h-full flex gap-5 "
        >
          <div className="w-[60%] h-full flex  flex-col relative gap-4 border-l-4 border-b-4  border-t-4  border-white py-2 px-4">
            <h1 className="text-white bg-[#293844] -mt-6 ml-7 w-1/3 text-center text-3xl font-bold uppercase">
              Quem Somos
            </h1>
            <div className="text-justify w-[70%] h-full flex items-center justify-center flex-col gap-3  px-4   ">
              <p className="text-white text-sm ">
                Guedes Bampi & Associados é um escritório de advocacia
                especializado no ramo empresarial, dedicado a fornecer serviços
                jurídicos de alto nível para empresas. Liderados por Guedes
                Bampi, nossos advogados associados formam uma equipe altamente
                capacitada e experiente, focada exclusivamente nas necessidades
                jurídicas das empresas.
              </p>
              <p className="text-white text-sm ">
                No mundo dos negócios, enfrentar desafios legais é inevitável. É
                aí que entramos em ação. Compreendemos as complexidades do
                ambiente empresarial e sabemos como navegar com destreza pelas
                questões legais que afetam as empresas. Seja em contratos
                comerciais, proteção de propriedade intelectual, fusões e
                aquisições, questões de conformidade ou litígios, nossa equipe
                está preparada para oferecer orientação jurídica estratégica.
              </p>
              <p className="text-white ">
                A ética e a integridade são fundamentais em nosso trabalho. Não
                apenas buscamos cumprir a lei, mas também orientamos nossos
                clientes sobre como manter a integridade em suas operações
                empresariais. Acreditamos que uma abordagem ética não apenas
                evita problemas legais, mas também constrói uma base sólida para
                o sucesso a longo prazo.
              </p>
            </div>
          </div>
          <div className="w-[40%] h-full flex items-center justify-center my-auto ">
            <div className="w-full h-full  flex items-center justify-center ">
              <img
                src="/team.jpg"
                alt="Team"
                className="w-full h-auto bg-cover "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full mt-8 flex items-center justify-center">
          <button className="w-96 rounded-3xl bg-[#b28422] py-4 text-white">Solicitar atendimento</button>
        </div>
      </section>
      {/*Servicos*/}
      <section className="business-parallax">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-3xl text-center uppercase font-bold text-white py-8"
        >
          Nossos Serviços{" "}
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-11/12 mx-auto h-full grid grid-cols-3 gap-3"
        >
          <div className="h-full w-full bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#c4a24d] rounded-md">
            <div className="text-[#b28422]">
              <FaPeopleRoof size={50} color="#b28422" />
            </div>
            <h1>Familiar</h1>
          </div>
          <div className="h-full w-full bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
            <div className="">
              <FaUserInjured size={50} color="#b28422" />
            </div>
            <h2>Trabalhista</h2>
          </div>
          <div className="h-full w-full bg-[#1D1E2C]   flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
            <div className="">
              <FaHandcuffs size={50} color="#b28422" />
            </div>
            <h2>Criminalista</h2>
          </div>
          <div className="h-full w-full bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
            <div className="">
              <FaHandshakeSimple size={50} color="#b28422" />
            </div>
            <h2>Contratual</h2>
          </div>
          <div className="h-full w-full bg-[#1D1E2C]   flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
            <div className="">
              <FaScaleBalanced size={50} color="#b28422" />
            </div>
            <h2>Empresarial</h2>
          </div>
          <div className="h-full w-full bg-[#1D1E2C]    flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
         <FaHandHoldingDollar size={50}/>
         <h2>Direito Tributário</h2>
          </div>
        </div>
        <div className="w-full h-full mt-5 flex items-center justify-center">
          <button className="w-96 rounded-3xl bg-[#b28422] py-4 text-white">Solicitar atendimento</button>
        </div>
      </section>
      {/*Contato*/}
      <section className="w-full h-full bg-[#293844] bg-contain bg-no-repeat py-[4rem] ">
        <div className="flex w-[90%] h-full mx-auto relative">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="w-[80%] h-[600px] bg-[#56b2] relative "
          >
            <div className="absolute top-10 left-4">
              <h1 className="text-white text-3xl uppercase opacity-50 font-bold">
                Fale Conosco
              </h1>
              <h2 className="text-white opacity-40">
                Envie sua mensagem preenchendo o formulário abaixo.
              </h2>
            </div>

            <form
              action=""
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-full h-full px-4 py-4 flex items-center justify-end flex-col "
            >
              <div className="w-full flex gap-2 mb-10">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full bg-transparent border-b-2  border-white outline-none placeholder-white text-white pb-2"
                />
                <input
                  type="text"
                  placeholder="SobreNome"
                  className="w-full bg-transparent border-b-2  border-white outline-none placeholder-white text-whitepb-2"
                />
              </div>
              <div className="w-full flex gap-2 mb-16">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full  bg-transparent border-b-2  border-white outline-none placeholder-white text-white pb-2"
                />
                <input
                  type="text"
                  placeholder="Telefone"
                  className="w-full  bg-transparent border-b-2  border-white outline-none placeholder-white text-white pb-2"
                />
              </div>
              <div className="w-full">
                <textarea
                  type="text"
                  placeholder="Mensagem"
                  className="w-full h-40 resize-none bg-transparent border-b-2 border-white outline-none placeholder-white text-white"
                />
              </div>
              <div className="w-full flex items-center justify-end mt-7">
                <button className="bg-[#293844] text-white w-32 h-8 rounded-sm">
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex items-center justify-center flex-col bg-white w-[40%] h-[600px]   gap-5 px-4 "
          >
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-20 h-20 mt-10 rounded-full bg-black flex items-center justify-center border-2 border-[#c4a24d]"
            >
              <img src="/icone.png" alt="Logo" className="w-12 h-12 bg-cover" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-col w-full items-center justify-around gap-4"
            >
              <div className="w-full flex items-center justify-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#c4a24d]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h2 className="text-gray-500">(51) 999-999-999</h2>
              </div>

              <div className="w-full flex items-center justify-start gap-4">
                <div className=" flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#c4a24d]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <h2 className="  text-gray-500">
                    guedesempresarial@gmail.com
                  </h2>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-full flex flex-col items-center justify-start "
            >
              <h2 className="w-full text-gray-500 text-left text-lg font-bold uppercase py-8">
                Redes Sociais
              </h2>
              <div className="flex items-center gap-6 justify-start w-full">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-[#c4a24d] rounded-full">
                  <BsFacebook size={22} color="#c4a24d" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 border-2 border-[#c4a24d] rounded-full">
                  <BsInstagram size={22} color="#c4a24d" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 border-2 border-[#c4a24d] rounded-full">
                  <BsYoutube size={22} color="#c4a24d" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-full bg-[#1D1E2C]  py-[4rem]">
        <div className="grid-cols-1 md:w-full h-full grid md:grid-cols-4 gap-4">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-36 h-36 rounded-full border-2 border-[#c4a24d] ">
              <img
                src="/icone.png"
                alt="Logo"
                className="w-24 h-24 bg-contain"
              />
            </div>
          </div>

          <div className=" justify-start md:flex  md:justify-center  ">
            <h1 className="block md:hidden mb-4 text-lg text-[#c4a24d]">
              Menu Navegação
            </h1>
            <nav className=" flex ">
              <ul className="flex flex-col gap-5 text-white">
                <li className="hover:text-[#c4a24d]">
                  <Link href={"#"}>Home</Link>
                </li>
                <li className="hover:text-[#c4a24d]">
                  <Link href={"#sobre"}>Sobre Nós</Link>
                </li>
                <li className="hover:text-[#c4a24d]">
                  <Link href={"#contato"}>Contato</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" md:flex flex-col items-center  md:gap-5  ">
            <h1 class="block md:hidden mb-4 text-lg text-[#c4a24d]">
              Redes Socias
            </h1>
            <div className="flex justify-start  md: items-center md:justify-center gap-4  ">
              <Link
                href={"https://www.facebook.com/profile.php?id=100086693444267"}
                target="_blank"
              >
                <div className="flex items-center justify-center w-9 h-9  rounded-full border-2 border-[#c4a24d] bg-white ">
                  <BsFacebook size={24} color="#3b5998" />
                </div>
              </Link>
              <p className="w-24 text-white">Facebook</p>
            </div>

            <div className=" flex justify-start my-2  md: items-center md:justify-center gap-4 ">
              <div className="flex items-center justify-center w-9 h-9  rounded-full border-2 border-[#c4a24d] bg-white  ">
                <BsInstagram size={24} className="insta" />
              </div>
              <p className="w-24 text-white">Instagram</p>
             </div>
            <div className=" flex justify-start  md: items-center md:justify-center gap-4 ">
              <div className="flex items-center justify-center w-9 h-9  rounded-full border-2 border-[#c4a24d] bg-white ">
                <BsYoutube size={24} color="#c4302b" />
              </div>
              <p className="w-24 text-white">Youtube</p>
            </div>
          </div>

          <div className=" justify-start md:flex flex-col items-center   gap-5">
            <h1 className="block md:hidden mb-4 text-lg text-[#c4a24d]">
              Links Úteis
            </h1>
            <Link
              href={"https://adv-harmo.vercel.app/"}
              target="_blank"
              className="flex items-center justify-start w-full gap-2"
            >
              <FaGlobe size={25} color="#fff" />
              <p className="text-white">Advogados Harmonizaçao</p>
            </Link>
            <Link
              href={"https://hotmart.com/pt-br"}
              target="_blank"
              className="flex items-center justify-start w-full gap-2"
            >
              <img src="/hot.png" alt="" className="w-11 -11 -ml-2" />
              <p className="text-white">Hotmart</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center text-white py-4 border-t-2 border-[#c4a24d] mt-4 ">
          <p className="">Todos os direitos reservados</p>&copy;
          <p>GuedesBampi</p>
        </div>
      </footer>
      <div className="fixed bottom-4 right-6">
        <div className="pulsar">
          <FaWhatsapp size={50} color="#fff" />
        </div>
      </div>
    </>
  );
};

export default Empresarial;
