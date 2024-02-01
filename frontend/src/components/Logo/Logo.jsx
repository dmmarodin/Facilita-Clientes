import "./logo.scss";
import logo from "../../static/logo.jpg";
import { Link } from "react-router-dom";

export default function Logo({ width }) {
    // razão da relação de largura e altura
    // da imagem original
    const aspect_ratio = 3.49;

    const maxWidth = width || 100;
    const maxHeight = maxWidth / aspect_ratio;

    return (
        <div
            className="logo"
            style={{
                width: maxWidth + "px",
                height: maxHeight + "px",
            }}
        >
            <Link to="/">
                <img src={logo} />
            </Link>
        </div>
    );
}
