import './header.css';
import logo from '/vite.svg';

export function Header(){
    return (
        <header className="mainHeader">
            <img className='logo' src={logo} alt="Logo" />
            <nav className='nav'>
              <a className='link' href="">Guide</a>
              <a className='link' href="">Config</a>
              <a className='link' href="">Plugins</a>
              <a className='link' href="">Recources</a>
              <a className='link' href="">Version</a>
            </nav>
        </header>
    );
}