import LightDarkModeToggle from "./LightDarkModeToggle";
import DownloadButton from "./DownloadButton";
import HelpMenu from "./HelpMenu";
import '../App.css';

function Header(){
    return (
        <header>
            <div className="title-container">
                <h1>Mathix</h1>
            </div>
            <div className="button-container">
                <LightDarkModeToggle/>
                <div className="spacer" />
                <HelpMenu/>
                <div className="spacer" />
                <DownloadButton/>
            </div>
        </header>
    );
}

export default Header;