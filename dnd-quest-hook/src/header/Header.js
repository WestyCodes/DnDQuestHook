import "./header.css"
export default function Header() {
    return (
        <div className="headerWrapper">
            <nav className="headerNav">
                <ul className="headerUL">
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>Menu</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}