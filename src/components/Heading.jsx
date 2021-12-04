function Heading(props) {
  return (
    <h1 className={`text-center text-5xl sm:text-6xl px-2 ${props.style}`}>{props.heading}</h1>
  );
}

export default Heading;
