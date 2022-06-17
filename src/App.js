import CircularProgressBar from "./components/CircularProgressBar";

const App = () => {
  return(
    <div>
      <CircularProgressBar 
      size={100}
      progress={70}
      strokeWidth={10}
      circleOneStroke='#fff'
      circleTwoStroke='red'
    />
    <CircularProgressBar 
      size={200}
      progress={35}
      strokeWidth={20}
      circleOneStroke='#fff'
      circleTwoStroke='red'
    />
    <CircularProgressBar 
      size={100}
      progress={88}
      strokeWidth={10}
      circleOneStroke='#fff'
      circleTwoStroke='red'
    />
    </div>
  )
};

export default App;
