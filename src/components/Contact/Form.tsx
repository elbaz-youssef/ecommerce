import Button from "@/components/common/ui/Button";

const Form = () => {
    return (
        <div className="text-center lg:text-left lg:col-span-2">
            <p className="uppercase">leave a message</p>
            <h3 className="mb-3">We love to hear from you</h3>
            <form className="flex flex-col gap-3">
                <input className="border border-gray-100 p-3 rounded-lg" type="text" placeholder="Your Name" />
                <input className="border border-gray-100 p-3 rounded-lg" type="email" placeholder="E-mail" />
                <input className="border border-gray-100 p-3 rounded-lg" type="text" placeholder="Subject" />
                <textarea className="border border-gray-100 p-3 rounded-lg" rows={6} placeholder="Your Message"></textarea>
                <div>
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default Form;