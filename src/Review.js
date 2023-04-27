import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = people[index];

  // const maxIndex = people.length - 1;
  // const lowestIndex = 0;

  const checkNumber = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) return 0;
    return number;
  };

  const getRandomInt = (max) => {
    console.log(Math.floor(Math.random() * max));
    return Math.floor(Math.random() * max);
  };

  const handleRandom = () => {
    let randomIndex = getRandomInt(people.length);
    randomIndex = index === randomIndex ? randomIndex + 1 : randomIndex;
    setIndex(checkNumber(randomIndex));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const handleNext = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img alt={name} src={image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          // className={index === lowestIndex ? "btn-disable" : "prev-btn"}
          className={"prev-btn"}
          onClick={() => handlePrev()}
        >
          <FaChevronLeft />
        </button>
        <button
          // className={index === maxIndex ? "btn-disable" : "next-btn"}
          className={"next-btn"}
          onClick={() => handleNext()}
        >
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button className="random-btn" onClick={handleRandom}>
          Surprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
