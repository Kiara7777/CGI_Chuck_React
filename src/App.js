import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getFromCategory, getFromQuerry, getRandomChuck} from "./redux/actions";


function App() {

  const dispatch = useDispatch();

  const chuck = useSelector(state => state.chuck);
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(getRandomChuck());
    dispatch(getCategories());
  }, [dispatch]);


  return (
      <div>
        
      </div>
  );
}

export default App;
