'use client'

import Button from "@/components/Button"
import StatCard from "@/components/StatCard"
import { WhatsappShareButton, WhatsappIcon, } from 'next-share'
import { useEffect, useState } from "react"

const Stats = () => {

  const [hits, setHits] = useState<any>(0)

  useEffect(() => {
    setHits(localStorage.getItem('quiz') ? localStorage.getItem('quiz') : 0)
  },[])
  const total = 15
  const score = Math.round((+hits/+total)*100)

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Resultado Final</h1>

      { (hits === 0) ? (
        <>
          <p>Oops... parece que você não jogou ainda</p>
          <Button href="/game" label="Novo Jogo" bgColor="#F25D27" />
        </>
      ) : (
        <>
          <div className="flex flex-row mb-4">
            <StatCard text="Perguntas" value={total} bgColor="#3A758C" fgColor="#FFF" />
            <StatCard text="Certas" value={hits} bgColor="#F29F05" fgColor="#FFF" />
            <StatCard text="Resultado" value={`${score}%`} bgColor="#F2E0D5" fgColor="#0D0D0D" />
          </div>
                  
          <WhatsappShareButton
            url={'desafiodomilhao.vercel.app'}
            title={`Eu consegui acertar ${hits} do Desafio do Milhão, consegue fazer melhor?`}
            separator=":: "
          >
            <div className="flex flex-row justify-center items-center">
              <WhatsappIcon size={32} round />
              
              <div className="flex ml-2">
                Compartilhe seu resultado!
              </div>
            </div>
          </WhatsappShareButton>
          
          <Button href="/game" label="Tentar novamente" bgColor="#F25D27" />
        </>
      )
    }

    </div>
  )
}

export default Stats