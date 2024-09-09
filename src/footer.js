import GitLogo from './Components/githubLogo.png'

function Footer(){
    return(
        <footer>
            <div className="left-link">
                <a href='https://gigi-codeace.github.io/GIGIs-portfolio/' target='_blank'>
                    <span>Explore more</span>
                </a>
            </div>
            <div className="right-link">
                <a href='https://github.com/GIGI-CodeAce' target='_blank'>
                    <span>GitHub</span>
                <img src={GitLogo}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;