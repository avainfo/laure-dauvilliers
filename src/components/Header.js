import '../styles/Header.css';
import HeaderLink from "./HeaderLink";

function Header() {
    return (
        <ul>
            <HeaderLink title={"La sophrologie"} url={"#"}/>
            <HeaderLink title={"L'hypnose"} url={"#"}/>
            <HeaderLink title={"Les Séances"} url={"#"}/>
            <HeaderLink title={"Contact"} url={"#"}/>
        </ul>
    );
}

export default Header;
