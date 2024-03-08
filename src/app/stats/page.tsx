'use client'

import Button from "@/components/Button"
import StatCard from "@/components/StatCard"
import { useSearchParams } from "next/navigation"
import { WhatsappShareButton, WhatsappIcon, } from 'next-share'

const Stats = () => {
  const query = useSearchParams()
  const total:any = query.has('total') ? query.get('total') : 1
  const hits:any = query.has('hits') ? query.get('hits') : 0
  const score = Math.round((+hits/+total)*100)

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Resultado Final</h1>
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
        
      
      <Button href="/" label="Tentar novamente" bgColor="#F25D27" />
    </div>
  )
}

export default Stats