import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearError, getCategories, getFromCategory, getFromQuerry, getRandomChuck} from "./redux/actions";
import SearchField from "./redux/components/SearchField";
import {Container, Paper} from "@material-ui/core";
import JokeArea from "./redux/components/JokeArea";



function App() {

  const dispatch = useDispatch();

  const chuck = useSelector(state => state.chuck);
  const categories = useSelector(state => state.categories);
  const error = useSelector(state => state.error);


  useEffect(() => {
    dispatch(getRandomChuck());
    dispatch(getCategories());
  }, [dispatch]);

  const handleSearchByText = (text) => {
      dispatch(getFromQuerry(text));
      dispatch(clearError());
  }

  const handleSearchByCategory = category => {
      dispatch(getFromCategory(category));
      dispatch(clearError());
  }

  return (
      <React.Fragment>
          <Container maxWidth="md">
                <SearchField handleTextSearch={handleSearchByText}
                             categories={categories}
                             handleCategorySearch={handleSearchByCategory}
                />
                {error ?
                    <JokeArea title={"Error message from server "} chuck={error}/>
                    :
                    <JokeArea title={`Chuck joke from category: ${chuck.category}`} chuck={chuck.value} />
                }
          </Container>
      </React.Fragment>
  );
}

export default App;
