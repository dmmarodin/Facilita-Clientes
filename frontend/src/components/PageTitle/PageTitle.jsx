import "./pageTitle.scss";

export default function PageTitle(props) {
    return <h1 className="page-title">{props.children}</h1>;
}
