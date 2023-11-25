'use client'
import { Header } from "../../components/Header";
import Footer from '../../components/Footer';
import { useState } from 'react';

const Perfil = () => {
  const isAuthenticated = true; 

  const [imagemPerfil, setImagemPerfil] = useState('/public/img/fotoPerfil.jpg');
  const [novaImagem, setNovaImagem] = useState(null);
  const [edicaoAtiva, setEdicaoAtiva] = useState(false);

  const [dadosPaciente, setDadosPaciente] = useState({
    nome: 'Nome do Paciente',
    idade: 25,
    endereco: 'Endereço do Paciente',
  });

  const [dadosEditados, setDadosEditados] = useState({ ...dadosPaciente });

  const handleChangeImagem = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNovaImagem(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSalvarImagem = () => {
    if (novaImagem) {
      setImagemPerfil(novaImagem);
      setNovaImagem(null);
    }
  };

  const handleEditarClick = () => setEdicaoAtiva(true);

  const handleCancelarEdicao = () => {
    setEdicaoAtiva(false);
    setDadosEditados({ ...dadosPaciente });
  };

  const handleSalvarEdicao = () => {
    setEdicaoAtiva(false);
    setDadosPaciente({ ...dadosEditados });
  };

  const handleChangeCampo = (event) => {
    const { name, value } = event.target;
    setDadosEditados((prevDados) => ({ ...prevDados, [name]: value }));
  };

  return (
    <main>
      <Header isAuthenticated={isAuthenticated} />
        <div className="flex items-center justify-center m-20">
            <div className="relative inline-block mr-4">
            <img src={novaImagem ? novaImagem : imagemPerfil} className="w-48 h-48 rounded-full" />
            <input id="inputImagem" type="file" accept="image/*" className="hidden" onChange={handleChangeImagem} />{novaImagem && (
                <button onClick={handleSalvarImagem} className="mt-3 bg-yellow-800 text-white px-4 py-3 rounded">
                Salvar Imagem
                </button>
            )}
            </div>
            <label htmlFor="inputImagem" className="cursor-pointer bg-yellow-800 text-white rounded px-4 py-3 m-2">
            Alterar
            </label>
            <div className="border border-black p-4 rounded w-1/2">
            {edicaoAtiva ? (
            <>
              {['nome', 'idade', 'endereco'].map((campo) => (
                <div key={campo} className="mb-2">
                  <label htmlFor={campo} className="block mb-2 capitalize">{campo}:</label>
                  <input
                    type={campo === 'idade' ? 'number' : 'text'}
                    id={campo}
                    name={campo}
                    value={dadosEditados[campo]}
                    onChange={handleChangeCampo}
                    className="w-full p-2 mb-2 border rounded-md"
                  />
                </div>
              ))}
              <div className="flex">
                <button onClick={handleCancelarEdicao} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded">
                    Cancelar
                </button>
                <button onClick={handleSalvarEdicao} className="bg-green-500 text-white px-4 py-2 rounded">
                  Salvar
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">{dadosPaciente.nome}</h2>
              <p>
                <strong>Idade:</strong> {dadosPaciente.idade}
              </p>
              <p>
                <strong>Endereço:</strong> {dadosPaciente.endereco}
              </p>
              <button onClick={handleEditarClick} className="mt-2 bg-yellow-800 text-white px-4 py-2 rounded">
                Editar Informações
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Perfil;
