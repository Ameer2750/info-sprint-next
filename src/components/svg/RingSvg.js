export default function RingSvg() {
    return (
        <div className="svg-container  ">
            <svg width="120" height="auto" viewBox="0 0 157 391" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-77 45.7888C-16.11 45.7888 33.24 95.2611 33.24 156.28C33.24 217.298 -16.11 266.781 -77 266.781" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 35.5557C-10.48 35.5557 43.45 89.6084 43.45 156.28C43.45 222.951 -10.48 277.014 -77 277.014" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 25.3223C-4.84 25.3223 53.66 83.9554 53.66 156.28C53.66 228.604 -4.84 287.237 -77 287.237" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 15.0891C0.800003 15.0891 63.87 78.3026 63.87 156.28C63.87 234.257 0.800003 297.48 -77 297.48" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 4.85596C6.44 4.85596 74.08 72.6499 74.08 156.28C74.08 239.91 6.44 307.714 -77 307.714" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -5.37744C12.08 -5.37744 84.29 66.9969 84.29 156.28C84.29 245.562 12.08 317.937 -77 317.937" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -15.6006C17.72 -15.6006 94.5 61.3542 94.5 156.29C94.5 251.225 17.72 328.18 -77 328.18" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -25.8337C23.36 -25.8337 104.71 55.7014 104.71 156.29C104.71 256.878 23.36 338.403 -77 338.403" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -36.0671C28.99 -36.0671 114.92 50.0484 114.92 156.29C114.92 262.531 28.99 348.636 -77 348.636" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -46.3003C34.63 -46.3003 125.13 44.4057 125.13 156.29C125.13 268.174 34.63 358.87 -77 358.87" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -56.7842C40.41 -56.7842 135.59 38.6124 135.59 156.29C135.59 273.967 40.41 369.353 -77 369.353" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -66.7668C45.91 -66.7668 145.55 33.0999 145.55 156.29C145.55 279.479 45.91 379.336 -77 379.336" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
                <path d="M-77 -77C51.55 -77 155.76 27.4472 155.76 156.29C155.76 285.132 51.55 389.569 -77 389.569" stroke="#161BAD" stroke-opacity="0.9" stroke-miterlimit="10" />
            </svg>

             {/* CSS for zoom-in animation */}
             <style jsx>{`
                .svg-container {
                    width: 120px; /* Adjust width as needed */
                    height: auto; /* Adjust height as needed */
                    animation: scaleAnimation 2s ease-in-out infinite alternate;
                }

                @keyframes scaleAnimation {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.05);
                    }
                }
            `}</style>

           
        </div>

    )
}