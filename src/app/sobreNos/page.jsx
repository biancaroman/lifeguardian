import { Header } from "@/app/components/Header";
import Footer from "../components/Footer";

import Image from "next/image";
import imagemSobreNos from 'public/img/imagem-sobrenos.jpg'
import PreNatal from '/public/img/prenatal.jpg' 
import NeoNatal from 'public/img/neonatal.jpg' 
import ConsultasVirtuais from '/public/img/consultasVirtuais.jpg' 
import Conhecimento from '/public/img/conhecimento.jpg' 
import Ia from '/public/img/inteligengiaArtificial.png'


export default function SobreNos() {

  return (
    <main>
      <Header/>
      <section>
        <div className="bg-cover bg-center h-[550px] relative  md:top-0 flex justify-center items-center">
          <Image
            src= {imagemSobreNos}
            layout="fill"
            objectFit="cover"
          />
          <div className="w-90 md:w-full p-10 text-black absolute top-6 left-0">
            <h1 className="text-2xl md:text-4xl font-semibold text-center text-white">
            Inovação, Prevenção e Cuidado <br />Para um futuro Mais Saudável desde o Início.
            </h1>
          </div>
        </div>
        <div className="p-20 text-left">
          <h1 className="p-4 text-2xl font-semibold">Sobre a LifeGuardian</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          <p className="p-3">
            O LifeGuardian é uma resposta direta ao desafio global da mortalidade materna e infantil,
             buscando eliminar mortes evitáveis de recém-nascidos e crianças menores de 5 anos, 
             especialmente focando na redução da mortalidade neonatal e infantil. 
             Essa plataforma inovadora conecta mães, bebês e profissionais de saúde, 
             proporcionando monitoramento contínuo, consultas virtuais e informações educativas. 
             Com tecnologias avançadas e inteligência artificial, o LifeGuardian busca identificar 
             precocemente os riscos à saúde, permitindo intervenções proativas para garantir um futuro
              mais saudável e seguro para mães e seus filhos globalmente.
          </p>
          <p className="p-3">
            Juntos nos empenhamos em fornecer uma plataforma abrangente que une mães, bebês e profissionais de saúde. 
            Através de monitoramento contínuo, consultas virtuais acessíveis e compartilhamento de informações educativas,
             o objetivo é capacitar e educar mães e cuidadores, melhorando a conscientização sobre práticas de cuidado, 
             nutrição adequada e sinais de alerta durante a gravidez e nos primeiros anos de vida do bebê. Com a integração 
             de tecnologia avançada e análise inteligente de dados, o LifeGuardian pretende promover uma mudança significativa 
             na prestação de cuidados de saúde materno-infantil, contribuindo para um futuro mais saudável e seguro para comunidades 
             em todo o mundo!
          </p>
    
        </div>
        <div className="p-20 text-center" id="acompanhamento-pre-natal">
          <h1 className="p-4 text-2xl font-semibold">Acompanhamento Pré Natal</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          <p className="p-3">
           Oferecemos um acompanhamento detalhado durante a gravidez, permitindo que as mães monitorem sua saúde e a do bebê por meio de relatórios de saúde regulares. 
          Fornecemos também informações sobre nutrição, cuidados essenciais durante a gestação e alertas sobre sintomas preocupantes.
          <Image src={PreNatal} alt="iconeTres" className="mx-auto mt-4 w-1/2 h-1/2" />
          </p>
        </div>
        <div className="p-20 text-center" id="monitoramento-neonatal">
          <h1 className="p-4 text-2xl font-semibold">Monitoramento Neonatal e Infantil</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          <p className="p-3">
          Integração para monitoramento contínuo dos recém-nascidos e bebês, registrando métricas vitais como frequência cardíaca, respiratória e temperatura.
          Alertas automatizados para pais e profissionais de saúde em caso de anomalias, fornecendo orientações para ações imediatas.
          <Image src={NeoNatal} alt="iconeTres" className="mx-auto mt-4 w-1/2 h-1/2" />
          </p>
        </div>
        <div className="p-20 text-center" id="consultas-virtuais">
          <h1 className="p-4 text-2xl font-semibold">Consultas Virtuais</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          <p className="p-3">
          Facilita consultas online com médicos e especialistas em saúde materno-infantil, permitindo diagnósticos precoces e intervenções imediatas, minimizando riscos à saúde.
          <Image src={ConsultasVirtuais} alt="iconeTres" className="mx-auto mt-4 w-1/2 h-1/2" />
          </p>
        </div>
        <div className="p-20 text-center" id="conhecimento">
          <h1 className="p-4 text-2xl font-semibold">Base de Conhecimento e Educação</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          <p className="p-3">
          Disponibiliza conteúdo educativo sobre cuidados pré-natais, neonatais e infantis, promovendo práticas saudáveis e prevenção de doenças.
          <Image src={Conhecimento} alt="iconeTres" className="mx-auto mt-4 w-1/2 h-1/2" />
          </p>
        </div>
        <div className="p-20 text-center" id="Ia">
          <h1 className="p-4 text-2xl font-semibold">Análise Inteligente de Dados e IA</h1>
          <hr className="mt-0 ml-3 bg-black w-88" />
          <p className="p-3">
          Utiliza algoritmos de inteligência artificial para identificar potenciais riscos à saúde materno-infantil, oferecendo recomendações preventivas e diagnósticos precisos.
          <Image src={Ia} alt="iconeTres" className="mx-auto mt-4 w-1/2 h-1/2" />
          </p>
        </div>
      </section>
      <Footer />
    </main>
    
  );
};
