import CircularProgressBar from "./components/CircularProgressBar";

const App = () => {
  return(
    <CircularProgressBar 
      size={100}
      progress={70}
      strokeWidth={10}
      circleOneStroke='#fff'
      circleTwoStroke='red'
    />
  )
};

export default App;
