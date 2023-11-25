'use client'
import backgroundImage from "public/img/BgCadastro.jpeg";
import Image from "next/image";
import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cadastro() {

  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const [formDataLocalStorage, setFormDataLocalStorage] = useState(
    JSON.parse(localStorage.getItem('formData')) || {}
  );

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formDataLocalStorage));
  }, [formDataLocalStorage]);


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

    setIsSubmitting(true);

    const apiUrl = 'http://localhost:8080/LifeGuardian/api/gestante';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          nome: nome,
          email: email,
          idade: idade,
          cpf: cpf,
          senha: senha,
        }),
      });

      if (response.ok) {
        toast.success('Cadastro realizado com sucesso');

        setFormDataLocalStorage({});
        setCpf('');
        setSenha('');

        window.location.href = '/login';
        
      } else {
        const data = await response.json();
        console.log('Erro ao cadastrar:', data);
        toast.error(`Erro ao cadastrar: ${data.message}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error);
      toast.error(`Erro durante a requisição: ${error.message}`);
      setIsSubmitting(false);
    };
  };

  return (
    <div className="flex h-full">
      <section className="w-1/2 relative hidden md:block">
        <div className="h-full">
          <Image src={backgroundImage} alt="Background Image" layout="fill" objectFit="cover" />
        </div>
      </section>
      <section className="md:w-1/2 relative sm:w-full sm:p-5 md:p-8">
        <form className="max-w-md h-full flex flex-col justify-center" onSubmit={handleSubmit}>
          <h1 className='text-3xl font-medium mb-4'>Realize agora seu cadastro na LifeGuardian</h1>
          <h3 className='font-light mb-8'>Basta preencher o formulário abaixo. É rapidinho!</h3>
          <div className="mb-5">
            <label htmlFor="id" className="block text-left">Rg</label>
            <input type="number" id="id" name="id" placeholder="Digite seu rg" className="border rounded-md p-2" required />
          </div>
          <div className="mb-5">
            <label htmlFor="nome" className="block text-left">Nome Completo</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" className="border rounded-md p-2" required />
          </div>
          <div className="mb-5">
            <label htmlFor="idade" className="block text-left">Idade</label>
            <input type="number" name='idade' id="idade" placeholder="Qual sua idade?" className="border rounded-md p-2" required />
          </div>
          <div className="mb-5">
            <label htmlFor="cpf" className="block text-left">CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF" className="border rounded-md p-2" value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="e-mail" className="block text-left">E-mail</label>
            <input type="email" name='email' id="e-mail" placeholder="Digite seu e-mail" className="border rounded-md p-2" required />
          </div>
          <div className="mb-5">
            <label htmlFor="senha" className="block text-left">Senha</label>
            <input type="password" name='senha' id="senha" placeholder="Sua senha" className="border rounded-md p-2" value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required />
          </div>
          <div className="mb-8 flex items-center">
            <input type="checkbox" name="Termos" id="Termos" className="mr-2" required />
            <label htmlFor="Termos" className="flex items-center">
              <p>Estou de acordo com a Política de Privacidade e com os Termos de Uso da LifeGuardian</p>
            </label>
          </div>
          <div className="mb-10">
            <button className="bg-yellow-800 text-white px-9 py-3 rounded-md" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}