interface TitleProps {
  text: string
}

const Title = ({ text }: TitleProps) => {

  return (
    <div className="flex h-16">
      <span className="text-xl font-bold text-center">{text}</span>
    </div>
  )
}

export default Title