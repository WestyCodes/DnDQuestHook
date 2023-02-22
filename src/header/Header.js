import { useNavigate, Link } from "react-router-dom"
import "./header.css"
export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="headerWrapper">
            <nav className="headerNav">
                <ul className="headerUL">
                    <li>
                        <Link className="headerLink" to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link className="headerLink" to={`/prompts`}>Add Prompts</Link>
                    </li>
                    <li>
                        <Link className="headerLink" to={`/saved`}>Saved Prompts</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}