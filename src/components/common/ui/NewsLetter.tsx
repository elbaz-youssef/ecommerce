import Button from "@/components/common/ui/Button"

const NewsLetter = () => {
  return (
    <section className="py-15 bg-[var(--darkBlue)]">
            <div className="container">
                <div className="text-center lg:text-left lg:flex justify-between items-center text-white">
                    <div>
                        <h4 className="font-bold text-[2rem]">Sign Up For Newsletter</h4>
                        <p className="!text-gray-300">Get E-mail updates about our latest shop and <span className="text-yellow-400">special offers</span></p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-0">
                            <input className="w-full max-w-100 mx-auto p-3 inline-block bg-white rounded-l-sm rounded-r-sm sm:rounded-r-none sm:w-100 outline-none text-[var(--black)] px-2 sm:mx-0" type="email" placeholder="Your email address" />
                            <div className="text-center">
                                <Button isLeftRounded={false}>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default NewsLetter