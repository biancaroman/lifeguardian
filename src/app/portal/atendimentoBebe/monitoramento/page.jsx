'use client'

import { Header } from '@/app/components/Header';
import Footer from '@/app/components/Footer';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Image from "next/image";
import imagemPortal from 'public/img/vacinas.jpg'

export default function Portal(){

    const isAuthenticated = true;

    const [vacinas, setVacinas] = useState([]);

    useEffect(() => {
        const id_vacina = '2';
        axios.get(`http://localhost:8080/LifeGuardian/api/vacina/${id_vacina}`)
            .then(response => {
                console.log(response.data)
                setVacinas(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter a vacina', error);
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
            </div>
            <div className="mb-5">
                <h3 className="font-roboto-slab mt-16 ml-16 text-2xl text-gray-700">Historico de vacinas: </h3>
            </div>
            <div className="w-full flex flex-wrap justify-evenly">
                <div className="w-full overflow-y-scroll h-80 m-10">
                <table className=" w-full h-96 border-2 shadow-lg text-center " >
                    <thead>
                    <tr>
                        <th>Código da Vacina</th>
                        <th>Nome</th>
                        <th>Fabricante</th>
                        <th>Lote</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vacinas.map(vacina => (
                                <tr key={vacina.id_vacina}>
                                    <td>{vacina.id_vacina}</td>
                                    <td>{vacina.nome_vacina}</td>
                                    <td>{vacina.fabricante}</td>
                                    <td>{vacina.lote}</td>
                                </tr>
                            ))}
                        <tr >
                            <td>052</td>
                            <td>PFIZER</td>
                            <td>BioNTech</td>
                            <td>2F1070A</td>
                        </tr>
                        <tr >
                            <td>052</td>
                            <td>PFIZER</td>
                            <td>BioNTech</td>
                            <td>2F1070A</td>
                        </tr>
                        <tr >
                            <td>052</td>
                            <td>PFIZER</td>
                            <td>BioNTech</td>
                            <td>2F1070A</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <Footer />
        </main>
    )
}