
const MainButton = ({children, roundedLeft}: {children: string, roundedLeft: number}) => {
  return (
    <button className={`w-fit px-10 py-3 text-white font-medium bg-[var(--primary)] cursor-pointer ${roundedLeft === 0? 'rounded-lg sm:rounded-l-none' : 'rounded-lg'} transition duration-300 hover:opacity-90`}>
      {children}
    </button>
  )
}

export default MainButton