import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from "../App";

describe('emoji app input ve filter tesleri', () => {
    let input

    beforeEach(() => {
        render(<App />)
        input = screen.getByTestId('input')
    })

    test('input ekranda bulunmalı', () => {
        expect(input).toBeInTheDocument();
    })

    test('input a değer girilince filtreleme yapılması', () => {
        const string = 'Yum'
        userEvent.type(string,input)
        expect(screen.getByText(string)).toBeInTheDocument();
    })
})