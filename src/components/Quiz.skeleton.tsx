const QuizSkeleton = () => {

  return (
    <div className="flex flex-col items-center justify-center animate-pulse">
      <div className="flex flex-col items-center w-96">

        <div className="flex">
          <span className="text-2xl font-bold text-center">Carregando pergunta</span>
        </div>

        <div className="flex text-5xl my-4 rounded-full h-28 w-28 bg-slate-100"/>
        
        <div className="flex h-20 m-2 self-stretch">
          <div className="flex flex-1 relative">
            <div className="flex h-full w-full absolute bg-slate-100 text-black items-center rounded-2xl p-4">
              <div className="flex rounded-full bg-slate-300 text-white justify-center items-center text-xl font-bold w-10 h-10 mr-5">
                ?
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-20 m-2 self-stretch">
          <div className="flex flex-1 relative">
            <div className="flex h-full w-full absolute bg-slate-100 text-black items-center rounded-2xl p-4">
              <div className="flex rounded-full bg-slate-300 text-white justify-center items-center text-xl font-bold w-10 h-10 mr-5">
                ?
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-20 m-2 self-stretch">
          <div className="flex flex-1 relative">
            <div className="flex h-full w-full absolute bg-slate-100 text-black items-center rounded-2xl p-4">
              <div className="flex rounded-full bg-slate-300 text-white justify-center items-center text-xl font-bold w-10 h-10 mr-5">
                ?
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-20 m-2 self-stretch">
          <div className="flex flex-1 relative">
            <div className="flex h-full w-full absolute bg-slate-100 text-black items-center rounded-2xl p-4">
              <div className="flex rounded-full bg-slate-300 text-white justify-center items-center text-xl font-bold w-10 h-10 mr-5">
                ?
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-slate-100 rounded-lg border-none py-2 px-4 mt-10 w-24">...</div>
    </div>
  )
}
export default QuizSkeleton