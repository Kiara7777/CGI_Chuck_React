import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getFromCategory, getFromQuerry, getRandomChuck, setLoading} from "./redux/actions";
import SearchField from "./components/SearchField";
import {Container} from "@material-ui/core";
import JokeArea from "./components/JokeArea";
import LogoTitle from "./components/LogoTitle";



function App() {

  const dispatch = useDispatch();

  const chuck = useSelector(state => state.chuck);
  const categories = useSelector(state => state.categories);
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);


  useEffect(() => {
    dispatch(getRandomChuck());
    dispatch(getCategories());
  }, [dispatch]);

  const handleSearchByText = (text) => {
      dispatch(setLoading(true));
      dispatch(getFromQuerry(text));
  }

  const handleSearchByCategory = category => {
      dispatch(setLoading(true));
      dispatch(getFromCategory(category));
  }

  return (
      <React.Fragment>
          <Container maxWidth="md">
              <LogoTitle image="images/chucknorris_logo.png"
                         alt="Chuck logo"
                         width="25%"
                         height="25%"
                         title="Chuck's jokes"/>

            <SearchField handleTextSearch={handleSearchByText}
                         categories={categories}
                         handleCategorySearch={handleSearchByCategory}
            />
            {error ?
                <JokeArea title={"Error message from server "} chuck={error} loading={loading}/>
                :
                <JokeArea title={`Chuck joke from category: ${chuck.category}`} chuck={chuck.value} loading={loading}/>
            }
          </Container>
      </React.Fragment>
  );
}

export default App;
