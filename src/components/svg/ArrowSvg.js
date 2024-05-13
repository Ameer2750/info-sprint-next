export default function ArrowSvg() {
    return (
        <div className="arrow-container">
            <svg width="60" height="230" viewBox="0 0 60 338" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.5511 337.053L0 308.88H8.16255L29.5511 329.276L50.9614 308.88H59.1021L29.5511 337.053Z" fill="#263238" />
                <path d="M29.5511 302.733L0 274.56H8.16255L29.5511 294.957L50.9614 274.56H59.1021L29.5511 302.733Z" fill="#263238" />
                <path d="M29.5511 268.413L0 240.24H8.16255L29.5511 260.637L50.9614 240.24H59.1021L29.5511 268.413Z" fill="#263238" />
                <path d="M29.5511 234.093L0 205.92H8.16255L29.5511 226.316L50.9614 205.92H59.1021L29.5511 234.093Z" fill="#263238" />
                <path d="M29.5511 199.773L0 171.6H8.16255L29.5511 191.997L50.9614 171.6H59.1021L29.5511 199.773Z" fill="#263238" />
                <path d="M29.5511 165.453L0 137.28H8.16255L29.5511 157.677L50.9614 137.28H59.1021L29.5511 165.453Z" fill="#263238" />
                <path d="M29.5511 131.133L0 102.96H8.16255L29.5511 123.357L50.9614 102.96H59.1021L29.5511 131.133Z" fill="#263238" />
                <path d="M29.5511 96.8127L0 68.64H8.16255L29.5511 89.0365L50.9614 68.64H59.1021L29.5511 96.8127Z" fill="#263238" />
                <path d="M29.5511 62.4928L0 34.3199H8.16255L29.5511 54.7165L50.9614 34.3199H59.1021L29.5511 62.4928Z" fill="#263238" />
                <path d="M29.5511 28.1946L0 0L8.16255 0L29.5511 20.3965L50.9614 0L59.1021 0L29.5511 28.1946Z" fill="#263238" />
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