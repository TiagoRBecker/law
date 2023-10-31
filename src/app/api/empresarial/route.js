import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req) {
  const {data} = await req.json();
 
  const transporter = await nodemailer.createTransport({
    service: "SMTP",
    host: process.env.HOST,
    port: 465,
    secure:true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      replyTo: data.email,
      to: process.env.EMAIL,
      subject: "Dúvidas Advocacia Empresarial ",
      text: `
       Email enviado de ${data.email} 
       
       Nome: ${data.name} 
       
       Telefone: ${data.phone} 
       
       mensagem:${data.message}`,
    
    });

    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
  
 
 
}
