import { useEffect } from "react";
import { useLectureContext } from "../hooks/useLectureContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Lectures = () => {
  const { lectures, dispatch } = useLectureContext();
  const { user } = useAuthContext()

  
  useEffect(() => {
    const fetchLectures = async () => {
      const response = await fetch("/api/lectures", {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_LECTURES", payload: json });
      }
    };

    if(user){
      fetchLectures();
    }
  }, [dispatch, user]);

  console.log('lectures', lectures)

  return (
    <>
    </>
  );
};

export default Lectures;