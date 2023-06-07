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
        This is an example. To be removed.
        {lectures.map((lecture) => (
            <div key={lecture._id}>
                <h3>{lecture.title}</h3>
            </div>
        ))}
      </div>
    </>
  );
};

export default Lectures;