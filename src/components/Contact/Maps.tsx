
const Maps = () => {
    return (
        <div className="w-full h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212753.67440327315!2d-7.7518064707472245!3d33.572178281731155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1751280955211!5m2!1sen!2sma"
              allowFullScreen
              title="maps frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-full border-none"
            ></iframe>
        </div>
    )
}

export default Maps