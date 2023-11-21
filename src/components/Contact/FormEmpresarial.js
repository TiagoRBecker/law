import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa6";

const Contact = () => {

  const formValidation = yup.object({
    name: yup.string().required("Necessário  preencher o campo Nome "),

    email: yup.string().required("Necessário  preencher o campo E-mail"),
    phone: yup
      .string()
      .required("Necessário  preencher o campo Telefone")
      .min(11, "Necessário  preencher o campo telefone com 11 dígitos"),
    message: yup.string().required("Necessário  preencher o campo Mensagem"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  const onSubmit = async (data) => {
   
      alert(`Email enviado com sucesso!`)
      reset()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

     
  };
  return (
    <div className="w-full h-full flex flex-col  mx-auto ">
      <div
        className=" flex-col md:w-[80%] h-full  flex md:flex-row mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-full md:w-[60%] flex items-center justify-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
           method="POST"
            className="mt-20 w-full bg-white border-1 border-gray-600 px-10 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] "
          >
            <h2 className="text-2xl text-center font-bold uppercase text-gray-950">
              Fale Conosco
            </h2>
            <div className="w-full flex flex-col">
              <label htmlFor="" className=" font-bold text-gray-950 ">
                Nome
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Digite seu nome.."
                className="input"
              />
              <p className="text-sm text-red-500">{errors?.name?.message}</p>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className=" font-bold text-gray-950">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Digite seu email.."
                className="input"
              />
              <p className="text-sm text-red-500">{errors?.email?.message}</p>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className=" font-bold text-gray-950">
                Telefone
              </label>
              <input
                {...register("phone")}
                type="text"
                placeholder="(51) 999-999-999"
                className="input"
              />
              <p className="text-sm text-red-500">{errors?.phone?.message}</p>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className=" font-bold text-gray-950 ">
                Mensagem
              </label>
              <textarea
                {...register("message")}
                type="text"
                placeholder="Digite seu mensagem.."
                className="textarea"
              />
              <p className="text-sm text-red-500">{errors?.message?.message}</p>
            </div>
            <button type="submit" className="submit">
              ENVIAR
            </button>
          </form>
        </div>
        <div className="w-full  md:mt-20 md:w-[40%] flex flex-col   bg-gray-900">
          <div className="w-full  py-10 flex items-center justify-center ">
            <img src="/ma.png" alt="" className="w-[70%] h-full" />
          </div>
          <div className="w-full h-full flex-col gap-2 px-4  md:flex md:flex-col items-center justify-start mt-4 ">
            <div className="mb-3 w-[80%] h-full flex items-center ">
              <Link
                href={
                  "https://wa.me/5551980519018?text=Obrigado+por+entrar+em+contato+%21+Aguarde+ser+atendido."
                }
                target="_blank"
                className="flex items-center gap-4 "
              >
                <div className="">
                  <FaLocationDot size={24} color="white" />
                </div>
                <div className="">
                  <p className="text-gray-400 ">Avenida Borges de Medeiros</p>
                  <p className="text-gray-400  "> Porto Alegre, RS, Brazil</p>
                </div>
              </Link>
            </div>

            <div className="mb-3 md:w-[80%] h-full flex items-center ">
              <Link
               href={
                "https://api.whatsapp.com/send/?phone=5551980519018&text=Ol%C3%A1%21+Eu+gostaria+de+conversar+com+um+advogado+da+Guedes+Bampi Direito Empresarial .++%0AAqui+est%C3%A1+um+resumo+do+meu+problema%3A+%2Aescreva+aqui+o+que+n%C3%B3s+podemos+fazer+para+te+ajudar+hoje"
             }
                target="_blank"
                className="flex items-center gap-4 "
              >
                <div className="">
                  <FaWhatsapp size={24} color="white" />
                </div>
                <div className="">
                  <p className="text-gray-400  ">(51) 980-519-018</p>
                </div>
              </Link>
            </div>
            <div className="w-[80%] h-full flex items-center ">
              <Link
                href={"mailto:guedesbampi@gmail.com"}
                target="_blank"
                className="flex gap-4 items-center"
              >
                <div className="">
                  <FaEnvelope size={22} color="white" />
                </div>
                <div className="">
                  <p className="text-gray-400 ">guedesbampi@guedesbampi.com</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-[80%]  flex flex-col items-center justify-center mt-4">
          <h1 className="uppercase text-gray-400  ">Siga Nos</h1>
            <div className="w-[97%]  md:w-[74%] flex items-center justify-center gap-4 py-4">
            <Link
                href={"https://www.instagram.com/guedesbampi.adv/"}
                target="_blank"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <FaInstagram size={35} color="#ccc" />
                </div>
              </Link>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="parallax2"></div>
    </div>
  );
};

export default Contact;
