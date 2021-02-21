import {render, screen } from "@testing-library/react";
import React from "react";
import LogoTitle from "../components/LogoTitle";

/**
 * Testy pro komponentu LogoTitle
 * - zobrazeni obrazku s pozadovanym alt vlastnosti
 * - zobrazeni nadpisu s danym textem
 * */


const logoTProps = {
    image: "test_url",
    alt: "Test Logo",
    width: "0",
    height: "0",
    title: "Testing logo",
    link: "test_link"
};

describe("Test LogoTitle render", () => {
    it("should render image with alt", () => {
        render(<LogoTitle {...logoTProps}/>);
        const img = screen.getByAltText(/test logo/i);
        expect(img.src).toContain("test_url");
    })

    it("should render title", () => {
        render(<LogoTitle {...logoTProps}/>);
        const title = screen.getByRole("heading");
        expect(title).toHaveTextContent(/testing logo/i);
    })
})