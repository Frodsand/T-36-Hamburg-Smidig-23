import { useEffect } from "react";
import { useLectureContext } from "../hooks/useLectureContext";

const Lectures = () => {
  const { lectures, dispatch } = useLectureContext();

  useEffect(() => {
    const fetchLectures = async () => {
      const response = await fetch("/api/lectures");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_LECTURES", payload: json });
      }
    };

    fetchLectures();
  }, [dispatch]);

  console.log('lectures', lectures)

  return (
    <>
      <div>
        {lectures.map((lecture) => (
            <div key={lecture.id}>
                <h3>{lecture.recipeTitle}</h3>
                <p>{lecture.title}</p>
                <p>{lecture.learningOutcome}</p>
            </div>
        ))}
      </div>
    </>
  );
};

export default Lectures;