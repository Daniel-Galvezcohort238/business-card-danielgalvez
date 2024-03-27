import danielGalvez from './images/Daniel-Galvez-Copy.jpg'

export default function Header() {
    return (
        <>
            <div className='navbar'>
                <div className='image'>
                    <img src={danielGalvez} className='daniel'/>
                </div>

                <div className='card-div'>
                    <h1 className='name-h1'>Daniel Galvez</h1>
                    <h3>Frontend Developer</h3>
                    <a href='url' className='href'>danielgalvez.website(WIP)</a>

                    <div className='btns'>

                        <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
                            <button className='mail-btn'>
                                <i className="fa-solid fa-envelope nav-logo"></i>
                                Email
                            </button>
                        </a>
                        
                        <a href='www.linkedin.com/in/daniel-galvez-020954214'>
                            <button className='linkedin-btn'>
                                <i className="fa-brands fa-linkedin nav-logo"></i>
                                LinkedIn
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
