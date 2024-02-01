export default function InputGroup({
    children,
    title,
    htmlFor,
    horizontal = false,
    style,
    className = "",
}) {
    const divClassName = `input-group ${
        horizontal ? "horizontal" : ""
    } ${className}`;
    return (
        <div className={divClassName} style={style}>
            {title && (
                <label className="input-group-title" htmlFor={htmlFor}>
                    {title}
                </label>
            )}
            {children}
        </div>
    );
}
