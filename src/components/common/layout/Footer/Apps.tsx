import pay from "@/assets/pay/pay.png";

type AppType = {
    id: number;
    href: string;
    label: string;
    srcImg: string;
    altImg: string;
}

interface AppsProps {
    apps: AppType[];
}

const Apps = ({apps}: AppsProps) => {
    return (
        <div>
            <h5 className="font-bold">Install App</h5>
            <p>From App Store or Google Play</p>
            <div className="flex flex-wrap gap-6">
              {apps.map(({ id, href, label, srcImg, altImg }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group border border-[var(--black)] overflow-hidden"
                >
                  <img
                    className="group-hover:scale-105 transition duration-300 ease-in-out"
                    src={srcImg}
                    alt={altImg}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>

            {/* Payments Method */}
            <p>Secured Payment Gateways</p>
            <div>
              <img src={pay} alt="payments method" loading="lazy" />
            </div>
        </div>
    )
}

export default Apps;