import Link from "next/link"

interface ButtonProps {
  label: string
  href?: string
  bgColor?: string
  onClick?: (e: any) => void
}

const Button = ({ label, href, bgColor = '#F23030', onClick }: ButtonProps) => {

  const render = () => (
    <button 
      className="text-white flex-grow-0 rounded-lg text-xl border-none py-2 px-6 mt-6 cursor-pointer hover:scale-110 ease-in-out duration-300"
      style={{backgroundColor: bgColor}}
      onClick={onClick}
    >
      {label}
    </button>
  )

  return href ? (
    <Link href={href}>{render()}</Link>
  ) : (
    render()
  )
}
export default Button