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
      <h1 className="text-4xl font-bold mb-8">Resultado Final</h1>

      { (hits === 0) ? (
        <>
          <p>Oops... parece que você não jogou ainda</p>
          <Button href="/game" label="Novo Jogo" bgColor="#F25D27" />
        </>
      ) : (
        <>
          <div className="flex mb-8">
            {/* <StatCard text="Perguntas" value={total} bgColor="#3A758C" fgColor="#FFF" />
            <StatCard text="Certas" value={hits} bgColor="#95F257" fgColor="#333" /> */}
            <StatCard text="Resultado" value={`${score}%`} bgColor="#F2EE57" fgColor="#000" />
          </div>
                  
          <WhatsappShareButton
            url={'https://domilhao.com'}
            title={`Eu consegui acertar *${score}%* do *Desafio do Milhão*, consegue fazer melhor?`}
            separator=" 👉 "

          >
            <div className="flex flex-row justify-center pl-2 pr-4 py-1 rounded-lg items-stretch hover:scale-110 ease-in-out duration-300" style={{backgroundColor:'#25D366'}}>
              <WhatsappIcon size={32} round />
              
              <div className="flex pl-2 flex-grow text-xl items-center">
                Compartilhe seu resultado!
              </div>
            </div>
          </WhatsappShareButton>
          
          <Button href="/game" label="Tentar novamente" bgColor="#9857F2" />
        </>
      )
    }

    </div>
  )
}

export default Stats