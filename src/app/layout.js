import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guedes Bampi",
  description: "Guedes Bampi advogados associados",
  keywords: [
    "Guedes Bampi",
    "Escritório de advocacia RS",
    "Escritório de advocacia SP",
    "Escritório de advocacia RJ",
    "Direito Civil",
    "Direito Criminal",
    "Advogado de Família",
    "Testamento e Herança",
    "Direito do Trabalho",
    "Responsabilidade Civil",
    "Contratos",
    "Mediação e Arbitragem",
    "Direito Imobiliário",
    "Direito Tributário",
    "Advocacia Ambiental",
    "Direito Previdenciário",
    "Consultoria Jurídica",
    "Advocacia Online",
    "Advogado Especialista",
    "Defesa Criminal",
    "Advocacia Trabalhista",
    "Recuperação Judicial",
    "Advocacia Digital",
    "Consulta Jurídica Online",
    "Honorários Advocatícios",
    "Direito Médico",
    "Profissionais Áera Harmonização",
    "Erro Médico",
  ],
  siteName:"Guedes Bampi & Advogados Associados",
  icon:{
    icon: '/civil.png',
    shortcut: '/civil.png',
    apple: '/civil.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
