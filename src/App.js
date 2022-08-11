import './App.css';

import { GiBodyHeight, GiWeight } from 'react-icons/gi'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [weight, setWeight] = useState(null)
  const [height, setHeight] = useState(null)
  const [result, setResult] = useState('')

  const [imc, setImc] = useState(false);


  const [text, setText] = useState('');

  const Calc = () => {

    if (weight === '' || height === '') {
      toast.error('Preencha todos os campos!', { theme: "colorized" })
    }
    else {
      const imc = weight / (height * height)
      const format = imc.toFixed(1)



      if (format < 18.5) {
        setText('Oops! Você está abaixo do peso.')
      }


      if (format >= 18.5) {
        setText('Parabéns! Você está com um peso na média.')
      }


      if (format >= 25.0) {
        setText('Oops! Você está um pouco acima do peso.')
      }

      if (format >= 30.0) {
        setText('Oops! Você está com excesso de peso. Obesidade: I')
      }

      if (format >= 35.0) {
        setText('Oops! Você está com excesso de peso. Obesidade: II')
      }

      if (format >= 40.0) {
        setText('Oops! Você está com excesso de peso. Obesidade: III')
      }



      setImc(true);
      setResult(format);
      console.log(result)
    }






  }

  const Reset = () => {
    setImc(false)
    setHeight('')
    setWeight('')

  }

  return (
    <>
      <ToastContainer />
      <div className='flex flex-col items-center justify-between h-screen bg-gray-900 p-20'>

        <div className='flex flex-col items-center w-full'>
          <img src="./logo.svg" className='mt-12 w-96' />

          <div className='flex flex-row mt-12'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-500 rounded-md'>
              <GiWeight size={24} color={'#fff'} />

            </div>
            <input type='text' placeholder="Seu peso (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} className='lg:w-96 h-12 sm:w-48 md:w-72 bg-gray-800 rounded-md outline-none ml-2 pl-2 text-white ' />
          </div>

          <div className='flex flex-row mt-3'>
            <div className='flex items-center justify-center w-12 h-12 bg-blue-500 rounded-md'>
              <GiBodyHeight size={24} color={'#fff'} />
            </div>
            <input type='text' placeholder="Sua altura (m)" value={height} onChange={(e) => setHeight(e.target.value)} className='lg:w-96 h-12 sm:w-48 md:w-72 bg-gray-800 rounded-md outline-none ml-2 pl-2 text-white ' />
          </div>

          {imc ? <button onClick={Reset} className='lg:w-1/4 h-12 md:w-1/4 sm:w-1/4 rounded-md bg-gray-700 mt-5 text-white font-semibold hover:bg-gray-800'>Resetar</button> : <button onClick={Calc} className='w-1/4 h-12  rounded-md bg-blue-500 mt-5 text-white font-semibold hover:bg-blue-600'>Calcular IMC</button>}

          <p className='text-white text-md mt-12'>{imc ? 'Seu IMC é' : ''}</p>
          <p className='text-blue-500 text-9xl font-bold mt-2'>{imc ? result : ''}</p>
          <p className='text-blue-500'>{imc ? text : ''}</p>
        </div>


        <div className='flex flex-row items-center'>
          <div className='flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 hover:bg-gray-700 cursor-pointer'><a href='http://github.com/gabrielst03' target='_blank'><AiFillGithub size={24} color='#fff' /></a></div>
          <p className='text-white text-xl ml-2'>Gabriel Santana</p>
        </div>
      </div>
    </>

  );
}

export default App;
