import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            window.scrollTo(0, 0);
        };

        // Listen for route changes
        router.events.on('routeChangeComplete', handleRouteChange);

        // Cleanup the event listener on component unmount
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed lg:bottom-10 bottom-5 right-5 z-50 bg-gradient-to-r from-[#3769e7] to-[#2950b0] text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
                    title="Go to top"
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            )}
        </div>
    );
}
