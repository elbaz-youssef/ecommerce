import Button from '@/components/common/ui/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="h-screen flex justify-center items-center">
            <div className="py-8 px-4 text-center">
                <h1 className="text-[var(--primary)]">404</h1>
                <h3>Something's missing.</h3>
                <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
                <Link to="/">
                    <Button>Back to Homepage</Button>
                </Link>
            </div>
        </section>
    )
}

export default NotFound;