import {render, screen, within} from "@testing-library/react";
import React from "react";
import SearchField from "../components/SearchField";
import userEvent from '@testing-library/user-event'


const textSearch = jest.fn();
const categorySearch = jest.fn();
const categories = ['a', 'b', 'c', 'd', 'e'];
const props = {
    handleTextSearch: textSearch,
    handleCategorySearch: categorySearch,
    categories
};
const typeText = "Testing text for chuck";
const category = categories[2];

beforeEach(() => {
    render(<SearchField {...props}/>);
})

describe("Test SearchFiled render", () => {
    it("should select input button", () => {
        expect(screen.queryByTestId("selectSearchField")).toBeInTheDocument();
        expect(screen.queryByRole("textbox")).toBeInTheDocument();
        expect(screen.queryByTestId("selectCategoryField")).not.toBeInTheDocument();
        expect(screen.queryByRole("button", {name: "Search"})).toBeInTheDocument();

    })

    it("should change to textField to select", () => {

        userEvent.click(screen.getByRole("button", {name: /Search by text/i}));
        const muiPopUp = within(screen.getByRole('listbox'));
        userEvent.click(muiPopUp.getByText(/Search by category/i));

        expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
        expect(screen.queryByTestId("selectCategoryField")).toBeInTheDocument();

    })
})

describe("Test input TextField  serachText", () => {
    it("empty field, should render required label", () => {

        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
        userEvent.click(screen.getByRole("button", {name: "Search"}));

        expect(screen.queryByText(/required/i)).toBeInTheDocument();
    })

    it("non tempty field", () => {

        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
        userEvent.type(screen.getByRole("textbox"), typeText);
        userEvent.click(screen.getByRole("button", {name: "Search"}));

        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();

        expect(textSearch).toHaveBeenCalled();
        expect(textSearch).toHaveBeenCalledWith(typeText);

    })
})

describe("Test select field, selcetCategory", () => {
    it("not selected, should render required label", () => {

        userEvent.click(screen.getByRole("button", {name: /Search by text/i}));
        const muiPopUp = within(screen.getByRole('listbox'));
        userEvent.click(muiPopUp.getByText(/Search by category/i));

        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();

        userEvent.click(screen.getByRole("button", {name: "Search"}));

        expect(screen.queryByText(/required/i)).toBeInTheDocument();

    })

    it("selected category", () => {

        userEvent.click(screen.getByRole("button", {name: /Search by text/i}));
        const muiPopUp = within(screen.getByRole('listbox'));
        userEvent.click(muiPopUp.getByText(/Search by category/i));

        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();

        userEvent.click(screen.getByRole("button", {name: /Category search/i}));
        const muiPopUpCategory = within(screen.getByRole('listbox'));
        userEvent.click(muiPopUpCategory.getByText(category));

        userEvent.click(screen.getByRole("button", {name: "Search"}));

        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();

        expect(categorySearch).toHaveBeenCalled();
        expect(categorySearch).toHaveBeenCalledWith(category);
    })
})