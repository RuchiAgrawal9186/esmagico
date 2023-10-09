import React from 'react'

const TopSection = () => {
    return (
        <div className='topdiv'>
            <div className='navbar'>
                <div className='logo'>
                    <img src="../images/logo.svg" alt="logo" />
                </div>
            </div>

            <h2>Curate Your own Training Sessions with top Keynote Speakers</h2>

            <div className='content'>

                <div className='flexdiv'>

                    <div style={{ display: "inline" }}>
                        <img src="../images/logo.svg" alt="1" />
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M12.0326 0H8.46741V8.46701H0V12.0322H8.46741V20.5H12.0326V12.0322H20.5V8.46701H12.0326V0Z" fill="white" />
                        </svg>
                    </div>

                    <div className='button1'>
                        <img src="../images/zoom-logo-transparent-6 1.svg" alt="zoom" />
                    </div>

                </div>

                <div className='text'>= Your Own Live Session in 30 minutes</div>
                <div className='button2'>30 Minutes Schedule Now</div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="434" viewBox="0 0 1440 434" fill="none" className='sav1'>
                <path d="M-9.00001 183C-9.00001 183 388 -138.104 723 71.3959C1058 280.896 1568 155.47 1568 155.47L1453 433.5C891.5 197.5 150 258.5 -22 346C-22 230.5 -9.00001 183 -9.00001 183Z" fill="#538DD7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="460" viewBox="0 0 1440 460" fill="none" className='sav2'>
                <path opacity="0.8" d="M-3 159.471C-3 159.471 257 -134.104 592 75.3963C927 284.897 1437 159.471 1437 159.471V256.396C1437 256.396 1825 594 1266 398C707 202 -3 256.396 -3 256.396V159.471Z" fill="#538DD7" />
            </svg>


            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="489" viewBox="0 0 1440 489" fill="none" className='sav3'>
<path d="M-9.00001 182.564C-9.00001 182.564 388 -138.54 723 70.9603C1058 280.461 1568 155.035 1568 155.035L1444.5 489C883 253 151.5 236.5 -20.5 324C-20.5 208.5 -9.00001 182.564 -9.00001 182.564Z" fill="#FFDE00"/>
</svg> */}


            <svg xmlns="http://www.w3.org/2000/svg" width="724" height="1083" viewBox="0 0 724 1083" fill="none" className='sav4'>
                <g opacity="0.96" filter="url(#filter0_d_0_324)">
                    <path d="M64 66.5005C64 52.6934 75.1929 41.5005 89 41.5005H362H598.5L660 93.5005V970.5C660 984.308 648.807 995.5 635 995.5H89C75.1929 995.5 64 984.308 64 970.5V66.5005Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_0_324" x="0" y="0.500488" width="724" height="1082" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="23" />
                        <feGaussianBlur stdDeviation="32" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.32549 0 0 0 0 0.552941 0 0 0 0 0.843137 0 0 0 0.46 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_324" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_324" result="shape" />
                    </filter>
                </defs>
            </svg>

            <div className='secondLogo'>
                <img src="../images/speakin-logo 1.svg" alt="logo" />
            </div>
            <h4>Welcome Form</h4>
            <p></p>

            <div className='name'>
                <img src="../images/input.svg" alt="name" />
            </div>
            <div className='email'>
                <img src="../images/email.svg" alt="email" />
            </div>
            <div className='mobile'>
                <img src="../images/Input_phone.svg" alt="moile" />
            </div>
            <div className='org'>
                <img src="../images/organization.svg" alt="name" />
            </div>
            <div className='date'>
                <img src="../images/Input_dropbox_calendar.svg" alt="name" />
            </div>

            <div className='topic'>
                Topic of the Session:
            </div>
            <div className='leader'>
                Business Leadership
            </div>
            <div className='spri'>
                Spirituality
            </div>

            <button>REGISTER</button>

            <h5 className='details'>Grow with India’s Largest Network of Experts</h5>

            <svg xmlns="http://www.w3.org/2000/svg" width="394" height="571" viewBox="0 0 394 571" fill="none" className='sav5'>
                <path opacity="0.5" d="M581.759 176.396C657.003 306.722 653.158 449.809 508.312 533.436C363.467 617.063 98.4856 550.698 23.2415 420.371C-52.0025 290.045 73.999 115.69 218.845 32.0633C363.69 -51.5634 506.515 46.0694 581.759 176.396Z" fill="#538DD7" />
            </svg>
        </div>

    )
}

export default TopSection