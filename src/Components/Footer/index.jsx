import './index.css';

export const Footer = () => {
    const handleClick = () => {
        document.getElementById('video-reel-container').classList.add('show');
        document.getElementById('video-reel-container').classList.remove('hide');
    }

    return (
        <>
            <footer className='footer'>
                <marquee 
                    width='100%'
                    vspace='20'
                    scrollamount='10'
                    direction='left'
                >
                    <h1 onClick={() => handleClick()}>
                        <span>2024 SIZZLE REEL</span>
                        <span>2024 SIZZLE REEL</span>
                        <span>2024 SIZZLE REEL</span>
                        <span>2024 SIZZLE REEL</span>
                        <span>2024 SIZZLE REEL</span>
                        <span>2024 SIZZLE REEL</span>
                    </h1>
                </marquee>
            </footer>
        </>
    )
}