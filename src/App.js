import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getFromQuerry, getRandomChuck} from "./redux/actions";
import SearchField from "./redux/components/SearchField";
import {Container, Paper} from "@material-ui/core";
import JokeArea from "./redux/components/JokeArea";


function App() {

  const dispatch = useDispatch();

  const chuck = useSelector(state => state.chuck);
  const categories = useSelector(state => state.categories);


  useEffect(() => {
    dispatch(getRandomChuck());
    dispatch(getCategories());
  }, [dispatch]);

  const handleSearchByText = (text) => {
      dispatch(getFromQuerry(text));
  }

  return (
      <React.Fragment>
          <Container maxWidth="md">
                <SearchField handleSearch={handleSearchByText} categories={categories}/>
                <JokeArea title={`Chuck joke from category: ${chuck.category}`} chuck={chuck.value}/>
          </Container>
      </React.Fragment>
  );
}

export default App;
