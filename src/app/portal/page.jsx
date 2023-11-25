'use client'

import { Header } from "../components/Header";
import Footer from '../components/Footer';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Image from "next/image";
import Link from 'next/link'; 
import imagemPortal from 'public/img/BgPortal.jpg'

export default function Portal(){

    const isAuthenticated = true;

    const [atendimentos, setAtendimentos] = useState([]);

    useEffect(() => {
        const codAtendimento = '2';
        axios.get(`http://localhost:8080/LifeGuardian/api/atendimento/${codAtendimento}`)
            .then(response => {
                setAtendimentos(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter o atendimento:', error);
            });
    }, []);

    return(
        <main>
            <Header isAuthenticated={isAuthenticated}/>
            <div className="bg-cover bg-center h-[550px] relative flex justify-center items-center">
            <Image
                src= {imagemPortal}
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black bg-opacity-50 rounded-md">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-white">OLÁ, NOME</h1>
                <h3 className=" text-ms md:text-2xl lg:text-3xl font-semibold text-white">SEJA BEM-VINDO AO SEU PORTAL</h3>
            </div>

            </div>
            <div className="mb-5">
                <h3 className="font-roboto-slab mt-16 ml-16 text-2xl text-gray-700">Últimos Atendimentos: </h3>
            </div>
            <div className="w-full flex flex-wrap justify-evenly">
                <div className="w-full overflow-y-scroll h-80 m-10">
                <table className=" w-full h-96 border-2 shadow-lg text-center " >
                    <thead>
                    <tr>
                        <th>Data Atendimento</th>
                        <th>Paciente Atendido</th>
                        <th>Tipo de Atendimeto</th>
                    </tr>
                    </thead>
                    <tbody>
                        {atendimentos.map(atendimento => (
                                <tr key={atendimento.codAtendimento}>
                                    <td>{atendimento.dataAtendimento}</td>
                                    <td>{atendimento.tipoPaciente}</td>
                                    <td>{atendimento.tipoAtendimento}</td>
                                </tr>
                            ))}
                        <tr >
                            <td>08/07/2023</td>
                            <td>Gestante</td>
                            <td>Análise Inteligente</td>
                        </tr>
                        <tr >
                            <td>08/07/2023</td>
                            <td>Bebê</td>
                            <td>NeoNatal</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="w-full">
                <h3 className="font-roboto-slab mt-16 text-center text-2xl text-gray-700">Se deseja realizar uma nova consulta, selecione alguma das opções abaixo:</h3>
                <div className="w-full py-7 mr-5 mb-5 flex justify-center w-auto">
                    
                    <button className="m-10 bg-gray-600 text-white rounded-lg px-4 md:px-28 py-2 md:py-4 ">
                    <Link href="portal/atendimentoGestante">Gestante</Link>
                    </button>
                    <button className=" m-10 bg-gray-600 text-white rounded-lg px-4 md:px-28 py-2 md:py-4">
                    <Link href="portal/atendimentoBebe">Bebê</Link>
                    </button>
                </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}