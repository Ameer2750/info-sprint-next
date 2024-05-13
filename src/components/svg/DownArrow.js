export default function DownArrow() {
    return (
        <div className="arrow-container">
            <svg width="60" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_87_35)">
                    <path d="M80.9655 53.6369C80.2262 52.8975 79.0241 52.8975 78.2848 53.6369L47.394 84.5276V1.89589C47.394 0.849393 46.5448 0 45.4983 0C44.4518 0 43.6024 0.849393 43.6024 1.89589V84.5276L12.7155 53.6408C11.9761 52.9014 10.7741 52.9014 10.0348 53.6408C9.29538 54.3801 9.29538 55.5822 10.0348 56.3215L44.156 90.4428C44.3304 90.6172 44.5428 90.7576 44.774 90.856C45.0052 90.9508 45.2518 91.0002 45.4983 91.0002C45.7448 91.0002 45.9911 90.9509 46.2225 90.856C46.4577 90.7613 46.6662 90.6209 46.8405 90.4428L80.9618 56.3215C81.7049 55.5782 81.7049 54.3801 80.9655 53.6369Z" fill="#161BAD" />
                </g>
                <defs>
                    <clipPath id="clip0_87_35">
                        <rect width="91" height="91" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <style jsx>{`
                .arrow-container {
                    width: 60px; /* Adjust width as needed */
                    height: 230px; /* Adjust height as needed */
                    position: relative;
                    animation: oscillationAnimation 2s ease-in-out infinite alternate;
                }

                @keyframes oscillationAnimation {
                    0% {
                        top: 0;
                    }
                    100% {
                        top: 15px; /* Adjust the distance of oscillation as needed */
                    }
                }
            `}</style>


        </div>
    )
}