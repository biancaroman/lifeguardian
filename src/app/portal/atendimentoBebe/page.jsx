import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import atendimentoBebe from '/public/img/atendimentoBebe.jpg'
import NeoNatal from '/public/img/neonatal2.jpeg' 
import ConsultasVirtuais from 'public/img/consultasVirtuais2.jpeg' 
import Conhecimento from '/public/img/conhecimento2.jpeg' 
import Ia from 'public/img/inteligengiaArtificial2.jpeg'

import { Header } from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const AtendimentoBebe = () => {
    
const isAuthenticated = true;

  return (
    <main>
    <Header isAuthenticated={isAuthenticated}/>
      <section>
        <div className="bg-cover bg-center h-[550px] relative  md:top-0 flex justify-center items-center">
          <Image
            src={atendimentoBebe}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      <section>
        <div>
          <div className="p-20 text-left">
          <h1 className="p-4 text-2xl md:text-4xl text-gray-700">Escolha o atendimento ideal para seu bebê!</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          </div>
          <div className="flex flex-wrap justify-center">     
            <Link href={'atendimentoBebe/monitoramento'} className="w-full h-100 sm:w-1/4 border border-gray-400 text-black font-bold p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Monitoramento Neonatal e Infantil</h1>
              <Image src={NeoNatal} alt="iconeDois" className="mx-auto mt-4" />
            </Link>
            <div className="w-full h-100 sm:w-1/4 border border-gray-400 text-black font-bold p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Consultas Virtuais </h1>
              <Image src={ConsultasVirtuais} alt="iconeTres" className="mx-auto mt-4" />
            </div>
            <div className="w-full h-100 sm:w-1/4 border border-gray-400 text-black font-bold p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Base de Conhecimento e Educação</h1>
              <Image src={Conhecimento} alt="iconeTres" className="mx-auto mt-4" />
            </div>
            <div className="w-full h-100 sm:w-1/4 border border-gray-400 text-black font-bold p-4 mx-4 my-8 text-center rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:scale-105">
              <h1 className="text-2xl">Análise Inteligente de Dados e IA </h1>
              <Image src={Ia} alt="iconeTres" className="mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default AtendimentoBebe;