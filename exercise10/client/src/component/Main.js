import "../style/Main.css";

function Main(props, children) {
  return (
    <>
      <div className="main">{props.content}</div>
    </>
  );
}

export default Main;
