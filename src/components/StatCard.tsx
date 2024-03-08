interface StatCardProps {
  value: any
  text: string
  bgColor?: string
  fgColor?: string
}


const StatCard = ({ value, text, bgColor, fgColor }: StatCardProps) => {

  return (
    <div 
      className="flex p-5 flex-grow aspect-square self-stretch justify-center items-center rounded-full text-5xl"
      style={{
        backgroundColor: bgColor ?? '#FDD60F',
        color: fgColor ?? '#333'
      }}
    >
      {value}
    </div>
    // <div className="flex flex-col justify-center items-center m-2">
    //   <div 
    //     className="flex flex-grow aspect-square self-stretch justify-center items-center rounded-full text-5xl"
    //     style={{
    //       backgroundColor: bgColor ?? '#FDD60F',
    //       color: fgColor ?? '#333'
    //     }}
    //   >
    //     {value}
    //   </div>
    //   <div className="flex text-2xl mt-2 text-gray-300">
    //     {text}
    //   </div>
    // </div>
  )
}
export default StatCard