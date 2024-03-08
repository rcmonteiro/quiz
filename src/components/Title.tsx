interface TitleProps {
  text: string
}

const Title = ({ text }: TitleProps) => {

  return (
    <div className="flex">
      <span className="text-2xl font-bold text-center">{text}</span>
    </div>
  )
}

export default Title