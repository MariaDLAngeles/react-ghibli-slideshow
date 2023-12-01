import { useState } from "react";

function Slideshow(props) {
  // console.log('this is props in Slideshow:', props)

  const [index, setIndex] = useState(0)

  const handleBackClick = () => {
    // here we need to do [index] - 1
    setIndex(index === 0 ? index : index - 1)
    // no back option at index[0]
  }

  const handleNextClick = () => {
    // here we need to do [index] + 1

    // check that index >=0?
    setIndex(index === props.data.length - 1 ? index : index + 1)
    // no next option at index[the last one]
    // stop when index === data.length - 1

  }

  const handleStartOverClick = () => {
    // here we need to do [index] = [0]
    setIndex(0)
    // no start over at index [0]
  }

  return (
    <div className="slideshow">
      <div className="title">
      {props.data[index].title}
      </div>
      <div className="posterImage">
        <img src={props.data[index].image} alt="Movie Poster" />
      </div>
      <div className="blockOfText">
      <p className="japTitle">{props.data[index].original_title}</p>
      <p className="releaseDate">{props.data[index].release_date}</p>
      <p className="description">{props.data[index].description}</p>
      </div>
      <div>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handleStartOverClick}>Start Over</button>
      </div>
    </div>
  );
}

export default Slideshow;
