import {render, screen} from "@testing-library/react";
import JokeArea from "../components/JokeArea";
import React from "react";

describe("Test JokeArea render", () => {
    it("should show title", () => {
        render(<JokeArea title={"Chuck joke from category: test"} chuck={"Joke"} loading={false}/>);
        const title = screen.getByRole("heading");
        expect(title).toBeTruthy();
        expect(title).toHaveTextContent("Chuck joke from category: test");
    })

    it("should show error message", () => {
        render(<JokeArea title={"Error message from server"} chuck={"Error"} loading={false}/>);
        const chuck = screen.getByText("Error");
        expect(chuck).toBeTruthy();
        expect(chuck).toHaveTextContent("Error");
    })
})