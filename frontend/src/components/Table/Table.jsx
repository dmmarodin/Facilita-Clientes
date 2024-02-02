import "./table.scss";

export default function Table({ component: Component, rows, headers }) {
    return (
        <table className="table">
            {headers && (
                <thead>
                    <tr>
                        {headers.map((v, i) => (
                            <th key={i}>{v}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {rows && rows.map((v, i) => <Component key={i} data={v} />)}
            </tbody>
        </table>
    );
}
