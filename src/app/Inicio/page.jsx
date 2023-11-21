import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import imagemHome from '/public/img/imagemhome.jpg'

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
              LifeGuardian: Protegendo Vidas desde a Gestação <br /> até os Primeiros Passos. </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-white">
              Descubra como a inovação e o cuidado se encontram <br /> para criar um futuro mais seguro e saudável para mães e bebês.
            </p>
            <button className="bg-yellow-800 text-white rounded-lg px-28 py-4 md:px-13 md:py-3 font-bold mx-5 sm:px-20 sm:py-3 lg:px-24 lg:py-4 xl:px-28 xl:py-4">
              <Link href="/cadastro">Cadastra-se</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
