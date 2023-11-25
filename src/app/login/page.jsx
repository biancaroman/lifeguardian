'use client'

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import backgroundImage from '/public/img/BgLogin.jpg';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const isCpfValido = (cpf) => {
    cpf = cpf.replace(/[^0-9]/g, '');

    if (cpf.length !== 11) {
      return false;
    }
    
    return true;
  };

  const isSenhaValida = (senha) => senha.length >= 8;

  const router = useRouter

  const salvarInfoLogin = (cpf) => {
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('cpf', cpf);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isCpfValido(cpf)) {
      toast.info('CPF inválido. Por favor, insira um CPF válido.');
      return;
    }

    if (!isSenhaValida(senha)) {
      toast.info('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    const apiUrl = 'http://localhost:8080/LifeGuardian/api/gestante/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: cpf,
          senha: senha,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.info(data.message); 

        if (data.success) {
          salvarInfoLogin(cpf);
          router.push('/portal');
        }
      } else {
        const data = await response.json();
        toast.info(data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      toast.error('Erro na requisição. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className="flex h-screen">
      <section className="md:w-1/2 sm:w-full relative">
        <form className="max-w-md mx-auto h-full flex flex-col justify-center text-center" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-light mb-10">Login</h1>
          <div className="mb-8">
            <label htmlFor="cpf" className="block text-left ml-14">CPF</label>
            <input type="text" name="cpf" id="cpf" className="border rounded p-2"  value={cpf}
            onChange={(e) => setCpf(e.target.value)}
         />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="block text-left ml-14">Senha</label>
            <input type="password" name="senha" id="senha" className="border rounded p-2" value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          </div>
          <div className="mb-8">
            <input type="checkbox" name="salvarInfos" id="salvarInfos" value="True" className="mr-2" />
            <label htmlFor="salvarInfos">Salvar informações de login</label>
          </div>
          <div className="mb-10">
            <button className="bg-yellow-800 text-white px-9 py-3 rounded">Entrar</button>
          </div>
          <a href="#" className="text-center block mb-4">Esqueceu a senha</a>
          <div className="h-20 border shadow-lg flex items-center justify-center font-semibold">
            <p className="text-center">Novo no site? <Link href="/cadastro" className="text-yellow-800">Cadastre-se</Link></p>
          </div>
        </form>
      </section>
      <section className="w-1/2 relative hidden md:block">
        <div className="h-full">
          <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
