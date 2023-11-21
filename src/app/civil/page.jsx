"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGlobe,
  FaHandcuffs,
  FaHandshakeSimple,
  FaPeopleRoof,
  FaScaleBalanced,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaUserInjured,
  FaWhatsapp,
} from "react-icons/fa6";
import Contact from "../../components/Contact/FormCivil";

import { useEffect, useState } from "react";

const Civil = () => {
  const id = "#contato";
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
  const handleGoToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header className="civil">
        <div className=" hidden md:w-full h-16 bg-[#072137] md:flex gap-3 items-center justify-between px-4">
          <div className="flex gap-3 items-center ">
            <div className=" flex items-center gap-2">
              <Link
                href={"mailto:guedesbampi@gmail.com"}
                className="flex gap-2"
                target="_blank"
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
                <p className="text-sm text-white">
                guedesbampi@gmail.com
                </p>
              </Link>
            </div>
            <div className=" flex items-center gap-2">
              <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
              }
                target="_blank"
                className="flex gap-2 items-center"
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
                <p className=" text-sm text-white">51 980-519-018</p>
              </Link>
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
              <p className="text-sm text-white">9:00AM - 05:00PM</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around  w-full px-4">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="w-[50%] flex items-center justify-center  pt-2 md:w-[20%] h-full"
          >
            <img
              src="/ma.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/*hidden flex md:w-full absolute right-2 top-0 pt-4 md:hidden items-center justify-end*/}
          <div className="flex md:w-full absolute right-2 top-0 pt-4 md:hidden items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-[#072137] text-[#c4a24d] "
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
            className="w-[80%] flex items-center justify-end"
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
          className=" ml-0 md:w-[60%] md:ml-8 mt-16  px-10 py-5 flex flex-col text-white  "
        >
          <h2>Precisa de ajuda?</h2>
          <h1 className="text-3xl mb-4 ">
            Os advogados da Guedes Bampi podem te ajudar!
          </h1>
          <p className="text-base ">
            Nosso escritório é um dos mais completos para o atendimento de
            pessoas físicas e jurídicas, uma banca de advogados
            multidisciplinares que proporcionam ampla segurança Jurídica em
            diversas áreas do Direito. Somos um único escritório para a solução
            dos mais diversos problemas jurídicos da sua família e sua empresa.
            Atuamos buscando a excelência na defesa dos interesses do nosso
            cliente e sanando suas necessidades com uma completa orientação
            jurídica. De modo incansável, buscamos a justiça, segurança e
            prosperidade para todos que nos procuram. Clicando no botão abaixo,
            nossa equipe pode trazer a solução do seu problema ainda hoje!
          </p>

          <div className="px-2">
            <Link
              href={
                "https://wa.me//5551980519018?text=Ol%C3%A1%21%20Eu%20gostaria%20de%20conversar%20com%20um%20advogado%20da%20Guedes%20Bampi.%20%20%0AAqui%20est%C3%A1%20um%20resumo%20do%20meu%20problema%3A%20%2Aescreva%20aqui%20o%20que%20n%C3%B3s%20podemos%20fazer%20para%20te%20ajudar%20hoje%21%2A"
              }
              target="_blank"
            >
              <button className="w-full md:w-[250px] mt-8 mx-auto py-4 text-white bg-[#c4a24d] uppercase font-bold rounded-md">
                Fale Conosco
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/*Banner sobre*/}
      <section id="sobre" className="w-full h-full bg-[#072137] py-[4rem]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex-col md:flex md:flex-row w-full h-full py-[3rem] px-4"
        >
          <div className="w-full md:w-[40%] h-full flex items-center justify-center  ">
            <img
              src="/team.jpg"
              alt=""
              className="w-full h-auto object-cover rounded-md md:shadow-[21px_24px_0px_0px_#c4a24d,0px_3px_8px_0px_#00000024] "
            />
          </div>
          <div className="w-full md:w-[60%] flex flex-col items-center justify-center  px-10">
            <span className="hidden md:text-[#c4a24d] text-xl  text-left w-full font-bold uppercase">
              Sobre Nós
            </span>
            <h1 className="text-2xl md:text-3xl text-left w-full py-5 font-bold text-[#c4a24d]">
              Bem vindo a Guedes Bampi{" "}
            </h1>
            <div className="w-full">
            <p className="w-full  text-justify md:mb-2 text-gray-400">
              A Guedes Bampi Advogados Associados é um renomado escritório de
              advocacia que se destaca por seu atendimento diferenciado, com
              qualidade e agilidade na solução dos problemas de seus clientes.
              Com anos de experiência e um time de advogados altamente
              qualificados, a empresa consolidou sua reputação como a mais
              completa, principalmente no atendimento de empresas, empresários e
              suas famílias, oferecendo soluções sob media para uma ampla gama
              de questões civis. A Guedes Bampi cresce cada vez mais através da
              indicação dos seus satisfeitos clientes.
            </p>
            <p className="text-gray-400">
              No âmbito do Direito Civil, a Guedes Bampi Advogados Associados
              presta serviços abrangentes que abordam as complexidades das
              relações entre indivíduos e entidades privadas. Seus advogados
              estão prontos para lidar com qualquer tipo de questões, incluindo
              as que envolvem contratos, responsabilidade civil, direito das
              obrigações, propriedade, família e sucessões. O compromisso da
              Guedes Bampi Advogados Associados com a excelência e a satisfação
              do cliente é evidente em cada caso que assumem. A equipe trabalha
              de forma ágil e humanizada para compreender as necessidades e
              objetivos de seus clientes, desenvolvendo estratégias jurídicas
              sólidas e eficazes para alcançar os melhores resultados. Além
              disso, a ética e a integridade estão no cerne da prática da Guedes
              Bampi Advogados Associados.
            </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full h-full py-[2rem] flex items-center justify-center"
        >
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
            }
            target="_blank"
            className="flex gap-2 w-full px-2 items-center justify-center"
          >
            <button className="w-full md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
              Solicitar atendimento
            </button>
          </Link>
        </div>
      </section>
      {/*Banner Civil*/}
      <section id="servicos" className="parallax">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl font-bold text-gray-400  mb-2 uppercase"
        >
          Àreas de Atuação
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid-cols-1 md:grid md:grid-cols-5 gap-10 mt-20"
        >
          <div className="services">
            <FaPeopleRoof size={50} />
            Familiar
            <div className="contact">
              <p>Informações</p>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito de Familia.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                }
                target="_blank"
              >
                <FaWhatsapp size={50} color="#25D366" />
              </Link>
            </div>
          </div>
          <div className="services">
            <FaUserInjured size={50} />
            Trabalhista
            <div className="contact">
              <p>Informações</p>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito Trabalhista.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                }
                target="_blank"
              >
                <FaWhatsapp size={50} color="#25D366" />
              </Link>
            </div>
          </div>
          <div className="services">
            <FaHandcuffs size={50} />
            Criminalista
            <div className="contact">
              <p>Informações</p>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre Direito Criminal.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                }
                target="_blank"
              >
                <FaWhatsapp size={50} color="#25D366" />
              </Link>
            </div>
          </div>
          <div className="services">
            <FaHandshakeSimple size={50} />
            Contratual
            <div className="contact">
              <p>Informações</p>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi sobre sobre Contratos.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                }
                target="_blank"
              >
                <FaWhatsapp size={50} color="#25D366" />
              </Link>
            </div>
          </div>
          <div className="services">
            <FaScaleBalanced size={50} />
            ...Outros
            <div className="contact">
              <p>Informações</p>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
                }
                target="_blank"
              >
                <FaWhatsapp size={50} color="#25D366" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full mt-5 flex items-center justify-center">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
            }
            target="_blank"
            className="flex w-full px-2 gap-2 items-center justify-center"
          >
            <button className="w-full md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
              Solicitar atendimento
            </button>
          </Link>
        </div>
      </section>
      {/*Contato*/}
      <section
        id="contato"
        className="w-full h-full flex flex-col  bg-[#072137] "
      >
        <Contact />
      </section>
      {/*Footer*/}
      <footer className="w-full h-full bg-[#072137]  py-[4rem]">
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
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
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
                  href={"mailto:guedesbampi@gmail.com"}
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
                  guedesbampi@gmail.com
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
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A"
                }
                target="_blank">
        <div className="pulsar">
          <FaWhatsapp size={50} color="#fff" />
        </div>
        </Link>
      </div>
    </>
  );
};

export default Civil;
