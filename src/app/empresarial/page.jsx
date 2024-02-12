"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
} from "react-icons/fa6";
import Contact from "../../components/Contact/FormEmpresarial";

const Empresarial = () => {
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
      {" "}
      {/*Header*/}
      <header className="business">
        <div className=" hidden md:w-full h-16 bg-[#1D1E2C] md:flex gap-3 items-center justify-between px-4">
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
                  "https://api.whatsapp.com/send?phone=5551980519018&text=Olá!%20Aguardo%20atendimento%20especializado%20para%20área%20empresarial!"
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
                <p className=" text-sm text-white">51 98051-9018</p>
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
          <div className="w-[50%] flex items-center justify-center  pt-2 md:w-[20%] h-full">
            <img
              src="/ma.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex md:w-full absolute right-2 top-0 pt-4 md:hidden items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-[#1D1E2C] text-[#c4a24d] "
              onClick={handleShowMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <nav className="w-[80%] flex items-center justify-end">
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
                ? "flex md:hidden text-white absolute top-16 border-t-2 border-[#c4a24d] w-full h-screen left-0 bg-[#1D1E2C]  flex-col gap-10 px-5 py-5"
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
          className="ml-0 md:w-[60%] md:ml-8 mt-16  px-10 py-5 flex flex-col text-white   "
        >
          <h2>Precisa de ajuda?</h2>
          <h1 className="text-4xl mb-4 ">Nós podemos te ajudar!</h1>
          <p className="text-base text-white">
            A Guedes Bampi Advogados é um escritório voltado para a assessoria
            completa à empresas, empresários e suas famílias. Essa experiência
            de mais de 30 anos em contato com empresas dos mais diversos ramos
            no Brasil e no Exterior trouxe para a Guedes Bampi uma assessoria
            diferenciada, cuidando de detalhes que apenas advogados
            especialistas com muita experiência percebem. De modo incansável,
            buscamos a justiça, segurança e prosperidade para todos que nos
            procuram. Clicando no botão abaixo, nossa equipe pode trazer a
            solução do seu problema ainda hoje!
          </p>
          <div className="">
            <button className="w-full md:w-[250px] mt-8 mx-auto py-4 text-white bg-[#c4a24d]  uppercase font-bold rounded-md">
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+ser+atendido+por+um+advogado+da+Guedes+Bampi.+%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%28escreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21&type=phone_number&app_absent=0"
                }
                target="_blank"
              >
                Fale Conosco
              </Link>
            </button>
          </div>
        </div>
      </header>
      {/*Sobre*/}
      <section className="w-full h-full bg-[#293844] flex flex-col items-center justify-center px-4 py-[8rem]">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex-col-reverse md:w-full h-full flex md:flex-row gap-5 "
        >
          <div className="w-full md:w-[60%] h-full flex  flex-col relative gap-4 md:border-l-4 md:border-b-4  md:border-t-4  md:border-white py-2 px-4">
            <h1 className="w-full text-white text-left md:text-white bg-[#293844] md:-mt-6 md:ml-7 md:w-1/3 md:text-center text-3xl font-bold uppercase">
              Quem Somos
            </h1>
            <div className="w-full px-0 md:text-justify md:w-[70%] h-full flex items-center justify-center flex-col gap-3  md:px-4   ">
              <p className="text-white text-sm ">
                Guedes Bampi & Associados é um escritório de advocacia
                especializado no ramo empresarial, dedicado a fornecer serviços
                jurídicos de alto nível para empresas. Surgimos no ramo
                empresarial e expandimos conforme as demandas dos empresários e
                suas famílias aumentava. Por isso contamos com uma banca de
                advogados multidisciplinares que proporcionam ampla segurança
                Jurídica em diversas áreas do Direito. Somos um único escritório
                para a solução dos mais diversos problemas jurídicos que um
                empresário possa ter. Atuamos buscando a excelência na defesa
                dos interesses do nosso cliente e sanando suas necessidades com
                uma completa orientação jurídica.
              </p>
              <p className="text-white text-sm ">
                No mundo dos negócios, enfrentar desafios legais é inevitável. É
                aí que entramos em ação. Pela experiência, compreendemos as
                complexidades do ambiente empresarial e sabemos como navegar com
                destreza pelas questões legais que afetam as empresas. Seja em
                contratos comerciais, proteção de propriedade intelectual,
                fusões e aquisições, questões de conformidade ou litígios, nossa
                equipe está preparada para oferecer orientação jurídica
                estratégica.
              </p>
              <p className="text-white ">
                Os fundadores, além de advogados, foram empresários por muitos
                anos e sentiram na pele as dificuldades do empreendedorismo, por
                isso, o atendimento aos empresários na Guedes Bampi é
                diferenciado. A excelência no trabalho vem da soma de anos de
                empreendedorismo com os anos de Advocacia Empresarial. A Guedes
                Bampi está sempre em busca de novas formas de facilitar a vida
                dos empresários Brasileiros, permitindo que se ocupem com o
                empreender, enquanto nós cuidamos dos litígios
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] h-full flex items-center justify-center my-auto ">
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
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
            }
            target="_blank"
            className="flex gap-2 items-center  justify-center w-full px-2"
          >
            <button className="w-full  md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
              Solicitar atendimento
            </button>
          </Link>
        </div>
      </section>
      {/*Servicos*/}
      <section className="business-parallax">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl text-center uppercase font-bold text-white py-8"
        >
          Nossos Serviços{" "}
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid-cols-1 w-full px-4 md:w-11/12 mx-auto h-full grid md:grid-cols-3 gap-3  "
        >
          <div className="h-full w-full py-10 bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#c4a24d] rounded-md sm:mb-4">
          <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Familiar .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              className="flex items-center justify-center flex-col"
              target="_blank"
            >
            <div className=" w-full  h-full text-[#b28422] flex items-center justify-center">
              <FaPeopleRoof size={50} color="#b28422" />
            </div>
            <h1>Familiar</h1>
            </Link>
          </div>

          <div className="h-full w-full py-10 bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
          <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Trabalhista .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              className="flex items-center justify-center flex-col"
              target="_blank"
            >
            <div className="">
              <FaUserInjured size={50} color="#b28422" />
            </div>
            <h2>Trabalhista</h2>
            </Link>
          </div>

          <div className="h-full w-full py-10 bg-[#1D1E2C]   flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
          <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Criminalista .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              className="flex items-center justify-center flex-col"
              target="_blank"
            >
            <div className="">
              <FaHandcuffs size={50} color="#b28422" />
            </div>
            <h2>Criminalista</h2>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid-cols-1 w-full px-4 md:w-11/12 mx-auto h-full grid md:grid-cols-3 gap-3 mt-2"
        >
          <div className="h-full w-full py-10 bg-[#1D1E2C]  flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
          <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Contratual .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              className="flex items-center justify-center flex-col"
              target="_blank"
            >
            <div className="">
              <FaHandshakeSimple size={50} color="#b28422" />
            </div>
            <h2>Contratual</h2>
            </Link>
          </div>

          <div className="h-full w-full py-10 bg-[#1D1E2C]   flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
          <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Empresarial .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              className="flex items-center justify-center flex-col"
              target="_blank"
            >
            <div className="">
              <FaScaleBalanced size={50} color="#b28422" />
            </div>
            <h2>Empresarial</h2>
            </Link>
          </div>

          <div className="h-full w-full py-10 bg-[#1D1E2C]    flex items-center justify-center flex-col gap-2 text-[#b28422] rounded-md">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Tributário .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
              }
              className="flex items-center justify-center flex-col"
              target="_blank"
            >
              <div className="">
                <FaHandHoldingDollar size={50} />
              </div>
              <h2>Direito Tributário</h2>
            </Link>
          </div>
        </div>
        <div className="w-full h-full mt-10 flex items-center justify-center">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi.++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje%21%2A&type=phone_number&app_absent=0"
            }
            target="_blank"
            className="flex gap-2 items-center justify-center w-full px-2"
          >
            <button className="w-full  md:w-96 rounded-3xl bg-[#b28422] py-4 text-white">
              Solicitar atendimento
            </button>
          </Link>
        </div>
      </section>
      {/*Contato*/}
      <section className="w-full h-full bg-[#293844]  " id="contact">
        <Contact />
      </section>
      <footer className="w-full h-full bg-[#1D1E2C]  py-[4rem]">
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
                  "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Empresarial .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje"
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
             "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Empresarial .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje"
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

export default Empresarial;
