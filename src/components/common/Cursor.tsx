import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />
  );
};

export default Cursor;