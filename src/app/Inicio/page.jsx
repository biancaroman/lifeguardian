import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import imagemHome from '/public/img/imagemhome.jpg'
import PreNatal from '/public/img/prenatal.jpg' 
import NeoNatal from 'public/img/neonatal.jpg' 
import ConsultasVirtuais from '/public/img/consultasVirtuais.jpg' 
import Conhecimento from '/public/img/conhecimento.jpg' 
import Ia from '/public/img/inteligengiaArtificial.png'

const Inicio = () => {
  return (
    <main>
      <section>
        <div className="bg-cover bg-center h-[550px] relative  md:top-0 flex justify-center items-center">
          <Image
            src={imagemHome}
            layout="fill"
            objectFit="cover"
          />
          <div className="w-90 md:w-full p-10 text-black absolute text-center">
            <h1 className="text-2xl md:text-4xl font-bold mt-9 mb-5 text-white">
              LifeGuardian: Protegendo Vidas desde da Gestação <br /> até os Primeiros Passos. </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white">
              Descubra como a inovação e o cuidado se encontram <br /> para criar um futuro mais seguro e saudável para mães e bebês.
            </p>
            <button className="bg-yellow-800 text-white rounded-lg px-28 py-4 md:px-13 md:py-3 font-bold mx-5 sm:px-20 sm:py-3 lg:px-24 lg:py-4 xl:px-28 xl:py-4">
              <Link href="/cadastro">Cadastra-se</Link>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="p-20">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Com a LifeGuardian, você <br />terá diversos Benefícios</h1>
            <p className="text-base sm:text-lg md:text-xl">
            Um sistema completo e inovador projetado para fornecer cuidados de saúde materno-infantil de forma abrangente e acessível. Integramos uma série de funcionalidades e recursos voltados para o acompanhamento pré-natal, neonatal e infantil, unindo tecnologia avançada e cuidados preventivos para reduzir a mortalidade materna e infantil.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <Link href={'/sobreNos#acompanhamento-pre-natal'} className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Acompanhamento <br /> Pré-Natal</h1>
              <Image src={PreNatal} alt="iconeUm" className=" mx-auto mt-4 " />
            </Link>
            
            <Link href={'/sobreNos#monitoramento-neonatal'} className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Monitoramento Neonatal e Infantil</h1>
              <Image src={NeoNatal} alt="iconeDois" className="mx-auto mt-4" />
            </Link>
            <Link href={'/sobreNos#consultas-virtuais'} className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Consultas Virtuais </h1>
              <Image src={ConsultasVirtuais} alt="iconeTres" className="mx-auto mt-4" />
            </Link>
            <Link href={'/sobreNos#conhecimento'} className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Base de Conhecimento e Educação</h1>
              <Image src={Conhecimento} alt="iconeTres" className="mx-auto mt-4" />
            </Link>
            <Link href={'/sobreNos#Ia'} className="w-full sm:w-1/4 bg-white text-black p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Análise Inteligente de Dados e IA </h1>
              <Image src={Ia} alt="iconeTres" className="mx-auto mt-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
