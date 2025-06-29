import { MoveRight } from "lucide-react"

const Pagination = () => {
    const btnStyle = "flex justify-center items-center w-12 h-12 rounded-sm bg-[var(--primary)] text-white font-bold cursor-pointer"
    return (
        <div className="flex justify-center gap-1 mt-10 mb-20">
            <button className={`${btnStyle}`}>1</button>
            <button className={`${btnStyle}`}>2</button>
            <button className={`${btnStyle}`}>
                <MoveRight />
            </button>
        </div>
    )
}

export default Pagination