import "./HeaderBar.css";

function HeaderBar(props) {
  return (
    <div className="container container_01">
      <h1 className="text_01"> {props.name}</h1>
    </div>
  );
}

export default HeaderBar;
