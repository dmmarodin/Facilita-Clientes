import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uuid } from "../../utils";
import "./input.scss";
import InputGroup from "./InputGroup";

export default function Input({
    value,
    setter,
    title,
    placeholder,
    icon,
    horizontal,
    type = "text",
    maxWidth = "auto",
    className = "",
}) {
    const id = uuid("input-");

    const inputClassName = `input ${icon ? "icon" : ""}`;

    return (
        <InputGroup
            style={{ maxWidth }}
            title={title}
            horizontal={horizontal}
            htmlFor={id}
            className={className}
        >
            <div className="relative">
                <input
                    type={type}
                    className={inputClassName}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setter && setter(e.target.value)}
                    id={id}
                ></input>
                {icon && (
                    <div className="input-icon-container">
                        <FontAwesomeIcon className="input-icon" icon={icon} />
                    </div>
                )}
            </div>
        </InputGroup>
    );
}
