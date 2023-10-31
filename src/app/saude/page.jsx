"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiChecklist,
  GiHealthNormal,
  GiInternalInjury,
  GiLoveInjection,
} from "react-icons/gi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaHandcuffs,
  FaHandshakeSimple,
  FaPeopleRoof,
  FaScaleBalanced,
  FaHandHoldingDollar,
  FaUserInjured,
  FaWhatsapp,
  FaFileMedical,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import Contact from "../../components/Contact/FormSaude";
const Saude = () => {
  const handleGoToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const handleShowSubMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleShowMenu = () => {
    setShowMenuMobile(!showMenuMobile);
  };
  return (
    <>
      <header className="saude">
        <div className=" hidden md:w-full h-16 bg-[#022a2e] md:flex gap-3 items-center justify-between px-4">
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
              <p className=" text-sm text-gray-400 ">
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
        </div>
        <div className="flex items-center justify-between px-10 pt-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="w-[40%]"
          >
            <img src="/ma.png" alt="Logo" />
          </div>
          <div className="flex md:w-full absolute right-2 top-0 pt-4 md:hidden items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-[#022a2e] text-[#c4a24d] "
              onClick={handleShowMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <nav
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="w-[60%] flex items-center justify-end"
          >
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
                ? "flex md:hidden text-gray-400 absolute top-16 border-t-2 border-[#c4a24d] w-full h-screen left-0 bg-[#072137]  flex-col gap-10 px-5 py-5"
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
          <h1 className="text-4xl mb-8 ">Nós podemos te ajudar!</h1>
          <p className="text-base text-white">
            A Guedesbampi Advocacia: Compromisso com a Excelência no Direito
            Empresarial A Guedesbampi Advocacia é uma renomada empresa de
            advocacia que se destaca por sua expertise no campo do Direito
            Empresarial.
          </p>
          <di className="">
            <button className="w-[250px] mt-8 mx-auto py-4 text-white bg-[#022a2e] uppercase font-bold rounded-md">
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=5551980519018&text=Olá!%20Aguardo%20atendimento%20especializado%20para%20área%20médica!"
                }
                target="_blank"
              >
                Fale Conosco
              </Link>
            </button>
          </di>
        </div>
      </header>
      <section className="w-full h-[calc(100%-80px)] py-[4rem] flex ">
        <div className="hidden md:w-32 bg-[#d8d9e2]"></div>
        <div className="grid-cols-1 md:grid md:grid-cols-2 w-full h-full gap-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col items-center justify-center gap-4 w-full h-full px-8 "
          >
            <h1 className="text-[#022a2e] text-3xl uppercase ">
              Assessoria jurídico especializada na área da saúde{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eos
              dolorem explicabo optio dolore corrupti omnis veritatis qui atque
              ut minus, ad tempora necessitatibus quae harum, hic, similique
              excepturi. Veritatis?
            </p>
            <Link
              href={
                "https://api.whatsapp.com/send?phone=5551980519018&text=Olá!%20Aguardo%20atendimento%20especializado%20para%20área%20médica!"
              }
              target="_blank"
            >
              <button className="px-4 py-2 rounded-3xl text-white font-bold bg-[#022a2e] border-2 border-white">
                Solicitar Atendimento
              </button>
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="hidden md:flex items-center justify-center w-full h-full px-2 "
          >
            <img
              src="/saude2.jpg"
              alt="Doc"
              className="brightness-50 rounded-md "
            />
          </div>
        </div>
        <div className=" hidden md:w-32 bg-[#d8d9e2]"></div>
      </section>
      {/*Sobre*/}
      <section className="w-full h-full bg-[#022a2e] py-[4rem] px-4">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" grid-cols-1 md:w-full h-full md:grid md:grid-cols-2 gap-2"
        >
          <div className=" flex flex-col items-center justify-center px-4">
            <h1 className="text-gray-400 text-left w-full py-4 text-3xl font-bold">
              Sobre nós
            </h1>
            <p className="text-gray-400 px-4 py-4 text-justify text-base">
              A Guedesbampi Advocacia é uma renomada empresa de advocacia que se
              destaca por sua expertise no campo do Direito Civil. Com 30 anos
              de experiência e um time de advogados altamente qualificados, a
              empresa consolidou sua reputação como uma das referências no
              mercado jurídico, oferecendo soluções sob medida para uma ampla
              gama de questões civis. No âmbito do Direito Civil, a Guedesbampi
              Advocacia presta serviços abrangentes que abordam as complexidades
              das relações entre indivíduos e entidades privadas. Seus advogados
              estão aptos a lidar com uma variedade de questões, incluindo
              contratos, responsabilidade civil, direito das obrigações,
              propriedade, família e sucessões. O compromisso da Guedesbampi
              Advocacia com a excelência e a satisfação do cliente é evidente em
              cada caso que assumem. A equipe trabalha de forma diligente para
              compreender as necessidades e objetivos de seus clientes,
              desenvolvendo estratégias jurídicas sólidas e eficazes para
              alcançar os melhores resultados. Além disso, a ética e a
              integridade estão no cerne da prática da Guedesbampi Advocacia.
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/team.jpg"
              alt="Team"
              className="w-full h-full rounded-md "
            />
          </div>
        </div>
        <div className="w-full h-full pt-10 flex items-center justify-center">
          <Link
            href={
              "https://api.whatsapp.com/send?phone=5551980519018&text=Olá!%20Aguardo%20atendimento%20especializado%20para%20área%20médica!"
            }
            target="_blank"
          >
            <button className="px-4 py-2 rounded-3xl text-[#022a2e] font-bold bg-white border-2 border-white">
              Solicitar Atendimento
            </button>
          </Link>
        </div>
      </section>
      {/*Banner Curiosidades*/}
      <section className="w-full h-full ">
        <div className="curiosity ">
          <h1
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-4xl text-white font-bold uppercase"
          >
            Você Sabia?
          </h1>
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="grid-cols-1 md:grid md:grid-cols-3 w-full h-full gap-3"
          >
            <div className="w-full flex flex-col items-center  text-white">
              <h2 className="text-7xl font-bold py-10">190%</h2>
              <div className="ml-0 w-[300px] md:w-full flex flex-col items-center justify-center  md:ml-36">
                <p className="text-left w-full  ">
                  No{" "}
                  <span className=" font-bold w-full uppercase"> aumento </span>
                  de puniçoes
                </p>
                <p className="text-left w-full  ">nos conselho regional </p>
                <p className="text-left w-full  ">de medicina.</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center  text-white">
              <h2 className="text-7xl font-bold py-10">13%</h2>
              <div className="ml-0 w-[300px] md:w-full flex flex-col items-center justify-center  md:ml-36">
                <p className="text-left w-full   ">
                  Dos{" "}
                  <span className=" font-bold w-full uppercase">
                    {" "}
                    médicos brasileiros
                  </span>{" "}
                  já{" "}
                </p>
                <p className="text-left w-full  ">foram ou estão sendo</p>
                <p className="text-left w-full  ">processados judicialmente.</p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center  text-white">
              <h2 className="text-7xl font-bold py-10">380%</h2>
              <div className="ml-0  w-[300px] md:w-full flex flex-col items-center justify-center  md:ml-36">
                <p className="text-left w-full ">
                  É o
                  <span className=" font-bold w-full uppercase">
                    {" "}
                    crescimento{" "}
                  </span>{" "}
                  dos processos
                </p>
                <p className="text-left w-full  ">tramitando no conselhos</p>
                <p className="text-left w-full ">regionais de medicina.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Serviços*/}
      <section className="w-full h-full bg-[#d8d9e2] py-[4rem]">
        <h1 className="text-4xl py-4  font-bold text-[#022a2e] text-center uppercase">
          Áreas de atuação
        </h1>
        <div className="grid-cols-1  md:grid md:grid-cols-3 w-full gap-5 px-4 ">
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
              <GiHealthNormal size={40} color="white" />
            </div>
            <p className="text-white uppercase text-lg">Direito Médico</p>
          </div>
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
              <GiLoveInjection size={40} color="white" />
            </div>
            <p className="text-white uppercase text-lg">Plano de Saúde</p>
          </div>
          <div className="flex flex-col mb-3 md:w-full h-full py-14 gap-3  bg-[#022a2e] items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#d8d9e2] flex items-center justify-center ">
              <FaFileMedical size={40} color="white" />
            </div>

            <p className="text-white uppercase text-lg">
              Documentos / Prontuários
            </p>
          </div>
        </div>
        <div className="w-full h-full  flex items-center justify-center py-14">
          <Link
            href={
              "https://api.whatsapp.com/send?phone=5551980519018&text=Olá!%20Aguardo%20atendimento%20especializado%20para%20área%20médica!"
            }
            target="_blank"
          >
            <button className="bg-[#022a2e] px-4 py-2 rounded-3xl  text-gray-100 font-bold">
              Solicitar Atendimento
            </button>
          </Link>
        </div>
      </section>
      {/*Contato*/}
      <section className="w-full h-full bg-[#022a2e]">
        <Contact />
      </section>
      <footer className="w-full h-full bg-[#022a2e]  py-[4rem]">
        <div className="grid-cols-1 gap-8 md:w-full h-full grid md:grid-cols-4 md:gap-4">
          {/*Grid Logo*/}
          <div
            className="flex items-center justify-center w-full  "
            onClick={handleGoToUp}
          >
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#c4a24d] cursor-pointer flex items-center justify-center">
              <img
                src="/icone.png"
                alt="Logo"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
            </div>
          </div>

          {/*Grid Contato*/}
          <div className="flex flex-col  items-center px-4  gap-5">
            <h1 className="block uppercase text-lg text-white w-full text-left">
              Contato
            </h1>
            <div className="w-full flex items-center justify-start gap-4">
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=5551980519018&text=Olá!%20Aguardo%20atendimento%20especializado%20para%20área%20empresarial!"
                }
                target="_blank"
                className="w-full flex items-center justify-start gap-4"
              >
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
                <h2 className="text-gray-400">(51) 980-519-018</h2>
              </Link>
            </div>

            <div className="w-full flex items-center justify-start gap-4">
              <div className=" flex gap-4 items-center">
                <Link
                  href={"mailto:suporte@gmail.com.br"}
                  className="w-full flex items-center justify-start gap-4"
                >
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
                  <h2 className="  text-gray-400">
                    guedesempresarial@gmail.com
                  </h2>
                </Link>
              </div>
            </div>
          </div>
          {/*Grid Menu*/}
          <div className="md:flex flex-col  items-center px-4  gap-5 ">
            <h1 className="block uppercase text-lg text-white w-full text-left ">
              Navegação
            </h1>
            <nav className=" flex w-full gap-2 ">
              <ul className="flex flex-col gap-5 text-gray-400">
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
          {/*Grid Midias Socias*/}
          <div className=" md:flex flex-col  items-center px-4    ">
            <h1 className="block uppercase text-lg text-white w-full text-left ">
              Redes Sociais
            </h1>
            <div className="justify-start flex md:flex items-center md:justify-start w-full h-full gap-4 ">
              <div className="flex  md: items-center md:justify-center gap-4  ">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100086693444267"
                  }
                  target="_blank"
                >
                  <div className="flex items-center justify-center w-9 h-9  rounded-full border-2 border-[#c4a24d] bg-white ">
                    <FaFacebookF size={24} color="#3b5998" />
                  </div>
                </Link>
              </div>

              <div className=" flex justify-start my-2  md: items-center md:justify-center gap-4 ">
                <Link
                  href={"https://www.instagram.com/guedesbampi.adv/"}
                  target="_blank"
                >
                  <div className="flex items-center justify-center w-9 h-9  rounded-full border-2 border-[#c4a24d] bg-white  ">
                    <FaInstagram size={24} className="insta" />
                  </div>
                </Link>
              </div>
              <div className=" flex justify-start  md: items-center md:justify-center gap-4 ">
                <Link
                  href={
                    "https://www.youtube.com/@guedesbampiadvogadosassoci9262"
                  }
                  target="_blank"
                >
                  <div className="flex items-center justify-center w-9 h-9  rounded-full border-2 border-[#c4a24d] bg-white ">
                    <FaYoutube size={24} color="#c4302b" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-white py-4 border-t-2 border-[#c4a24d] mt-4 ">
          <p className="">Todos os direitos reservados</p>&copy;
          <p>GuedesBampi</p>
        </div>
      </footer>
      <div className="fixed bottom-4 right-6">
        <Link
          href={
            "https://api.whatsapp.com/send?phone=5551980519018&text=Olá!%20Aguardo%20atendimento%20especializado%20para%20área%20empresarial!"
          }
          target="_blank"
        >
          <div className="pulsar">
            <FaWhatsapp size={50} color="#fff" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Saude;
