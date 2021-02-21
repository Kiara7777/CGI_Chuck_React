import {render, screen} from "@testing-library/react";
import JokeArea from "../components/JokeArea";
import React from "react";

/**
 * Testy pro komponentu JokeArea
 * - zobrazeni pozadovaneho nadpisu
 * - zobrazeni elementu s error zpravou
 * */

const title = "Chuck joke from category: test";
const error = "Error";

describe("Test JokeArea render", () => {
    it("should show title", () => {
        render(<JokeArea title={title} chuck={"Joke"} loading={false}/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeTruthy();
        expect(heading).toHaveTextContent(title);
    })

    it("should show error message", () => {
        render(<JokeArea title={"Error message from server"} chuck={error} loading={false}/>);
        const chuck = screen.getByText(error);
        expect(chuck).toBeTruthy();
        expect(chuck).toHaveTextContent(error);
    })
})