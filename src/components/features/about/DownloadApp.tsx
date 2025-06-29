import img from '@/assets/about/1.mp4'
const DownloadApp = () => {
  return (
    <section className="mb-15">
        <div className="container">
            <div className="flex justify-center">
                <div className="w-1/2">
                    <h2 className="font-medium text-center mb-5">Download Our <span className="cursor-pointer underline text-purple-700">App</span></h2>
                    <video
                        className="w-full h-auto rounded-2xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                        >
                        <source src={img} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DownloadApp