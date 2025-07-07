import aboutVideo from '@/assets/about/1.mp4';

const DownloadApp = () => {
  return (
    <section className="mb-10">
        <div className="container">
            <div className="flex justify-center">
                <div className="min-w-50 max-w-125">
                    <h3 className="font-medium text-center mb-5">Download Our <span className="cursor-pointer underline text-purple-700">App</span></h3>
                    <video
                        className="w-full rounded-2xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                        >
                        <source src={aboutVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DownloadApp