import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Form from "../Form"

describe('Form', () => { 

    test('render correctly', () => {
        render(<Form />)
        const labelNameElement = screen.getByText("Name")
        const labelTitleElement = screen.getByText("Title")
        const nameInput = screen.getByTestId('name')
        const titleInput = screen.getByTestId('title')
        expect(labelNameElement).toBeInTheDocument()
        expect(labelTitleElement).toBeInTheDocument() 
        expect(nameInput).toBeInTheDocument()   
        expect(titleInput).toBeInTheDocument()   
    })

    test('Check value input', () => {
        const onChangeInputValueHandler = jest.fn()
        render(<Form onChangeInputValue={onChangeInputValueHandler}/>)
        const nameInput = screen.getByTestId('name')
        const titleInput = screen.getByTestId('title')

        userEvent.type(nameInput, '123')
        userEvent.type(titleInput, '456')
        expect(nameInput.value).toMatch('123')
        expect(titleInput.value).toMatch('456')
    })

    test('handlers are called', () => {
        const onChangeInputValueHandler = jest.fn()
        render(<Form onChangeInputValue={onChangeInputValueHandler}/>)
        const nameInput = screen.getByTestId('name')
        userEvent.type(nameInput, '1')
        expect(onChangeInputValueHandler).toHaveBeenCalledTimes(1)
    })
 })