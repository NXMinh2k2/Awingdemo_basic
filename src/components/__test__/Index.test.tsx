import { fireEvent, getAllByAltText, getAllByText, getByAltText, getNodeText, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Index from '../Index'

describe('Index', () => { 
    test('render correctly', () => {
        render(<Index />)
        const submitButton = screen.getByRole('button', {name: 'Submit'})
        const zerobutton = screen.getByRole('button', {name: /0/i})
        const onebutton = screen.getByRole('button', {name: /1/i})
        expect(submitButton).toBeInTheDocument()
        expect(zerobutton).toBeInTheDocument()
        expect(onebutton).toBeInTheDocument()
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

    test('Render Template when click button 1 and check selected option', async () => {
        render(<Index />)
        const oneButton = screen.getByRole('button', {name: /1/i})
        await userEvent.click(oneButton)
        expect(screen.getByRole('button', {name: /view 0/i})).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /\+/i})).toBeInTheDocument()
        expect(screen.getByText("Template")).toBeInTheDocument()
        const options = screen.getAllByTestId('select-option')
        const combobox = screen.getByRole('combobox')
        await userEvent.selectOptions(combobox, '1')
        expect(options[1].ariaSelected).toBeTruthy

        const emailLabel = screen.getByText(/email/i)
        const ageLabel = screen.getByText(/age/i)
        const genderLabel = screen.getByText(/gender/i)
        const emailInput = screen.getByTestId('email')
        const ageInput = screen.getByTestId('age')
        const genderInput = screen.getByTestId('gender')
        expect(emailLabel).toBeInTheDocument()
        expect(ageLabel).toBeInTheDocument()
        expect(genderLabel).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(ageInput).toBeInTheDocument()
        expect(genderInput).toBeInTheDocument()
    })

        
    test('Show error when value email is empty', async () => {
        render(<Index />)
        const oneButton = screen.getByRole('button', {name: /1/i})
        await userEvent.click(oneButton)
        const combobox = screen.getByRole('combobox')
        await userEvent.selectOptions(combobox, '1')
        const emailInput = screen.getByTestId('email')
        userEvent.type(emailInput, '')
        const addButton = screen.getByRole('button', { name: /\+/i})
        userEvent.click(addButton)
        const errorSpan = screen.getAllByText('error')
        expect(errorSpan).toHaveLength(2)
    })

    test('Active button when click to it', async () => {
        render(<Index />)

        const zerobutton = screen.getByRole('button', {name: /0/i})
        await userEvent.click(zerobutton)
        expect(zerobutton).toHaveClass('active')

        const oneButton = screen.getByRole('button', {name: /1/i})
        await userEvent.click(oneButton)
        expect(oneButton).toHaveClass('active')
    })
})
    