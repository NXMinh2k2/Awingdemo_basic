import { getAllByAltText, getAllByText, getByAltText, getNodeText, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Index from '../Index'

describe('Index', () => { 
    test('render correctly', () => {
        render(<Index />)
        const labelNameElement = screen.getByText("Name")
        const labelTitleElement = screen.getByText("Title")
        const submitButton = screen.getByRole('button', {name: 'Submit'})
        expect(labelNameElement).toBeInTheDocument()
        expect(labelTitleElement).toBeInTheDocument()    
        expect(submitButton).toBeInTheDocument()    
    })

    test('Should display error if name and title are empty when click button', () => {
        render(<Index />)
        const submitButton = screen.getByRole('button', {name: 'Submit'})
        const nameInput = screen.getByTestId('name')
        const titleInput = screen.getByTestId('title')
        userEvent.type(nameInput, '')
        userEvent.type(titleInput, '')
        userEvent.click(submitButton)

        const errorSpan = screen.getAllByText('error')
        expect(errorSpan).toHaveLength(2)
    })

    test('Should display error if email is empty when click button +', () => {
        render(<Index />)
        const addButton = screen.getByRole('button', {name: /\+/i})
        const emailInput = screen.getByTestId('email')
        userEvent.type(emailInput, '')
        userEvent.click(addButton)

        const errorSpan = screen.getAllByText('error')
        expect(errorSpan).toHaveLength(2)
    })
 })