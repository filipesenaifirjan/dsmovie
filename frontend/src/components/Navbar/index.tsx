import {ReactComponent as GithubIcon}  from 'accets/img/github.svg';
import './styles.css';

function Navbar() {

return (
    <header>
        <nav>
            <div>
                <h1>DSMovie</h1>
                <a href="http://github.com/devsuperior">
            
            <div>
            <GithubIcon />
            <p>devsuperior</p>
            </div>
            </a>
            </div>
        </nav>
    
    </header>
)
    
};
export default Navbar;