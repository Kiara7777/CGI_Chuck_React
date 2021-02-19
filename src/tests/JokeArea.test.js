import {render} from "@testing-library/react";
import JokeArea from "../components/JokeArea";
import React from "react";

it("Test JokeArea render", () => {
    const {getByText} = render(<JokeArea title={"Chuck joke from category: test"} chuck={"Joke"}/>);
    const joke = getByText("Joke");
    expect(joke).toBeTruthy();
})