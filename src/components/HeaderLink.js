function HeaderLink({title, url}) {
    return (
        <li>
            <a href={url}>{title}</a>
        </li>
    );
}

export default HeaderLink;
