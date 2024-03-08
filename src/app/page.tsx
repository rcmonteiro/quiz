'use client'

import Button from '@/components/Button'
import { AcademicCapIcon } from '@heroicons/react/24/solid'

const Page = () => {

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <AcademicCapIcon color='#F29F05' width={96} height={96} />
      <h1 className='mt-4 text-4xl font-bold'>Desafio do milhao</h1>
      <div className='flex flex-col justify-center items-center mt-4'>
        <p>Responda 15 perguntas de conhecimentos gerais</p>
        <p>Consegue chegar em 100% de acerto?</p>
      </div>
      <Button href="/game" label="Iniciar" bgColor="#F25D27" />
    </div>    
  )
}

export default Page