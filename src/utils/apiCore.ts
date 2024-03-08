import { NextResponse } from "next/server"

const error = (message: string, code: number) => {
  
  return NextResponse.json(
    {
      statusCode: code,
      message: message
    },
    { 
      status: code 
    }
  )
}


export {
  error
}