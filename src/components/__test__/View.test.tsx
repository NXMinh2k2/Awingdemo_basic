import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import View from "../View";

describe('View', () => {
    test('render option 1', async () => {{
        render(<View view={{
            templateId: 1,
            templateDatas: [{ 
                fieldName: "email",
                fieldValue: "",
                label: "email",
                isRequired: true
                },{
                fieldName: "age",
                fieldValue: "",
                label: "age",
                isRequired: false
                }, {
                fieldName: "gender",
                fieldValue: "",
                label: "gender",
                isRequired: false
                }],
            isValid: false
          }} />)

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
    }})

    test('render option 2', async () => {{
        render(<View view={{
            templateId: 2,
            templateDatas: [{
                fieldName: "id",
                fieldValue: "",
                label: "id",
                isRequired: true
                },{
                fieldName: "username",
                fieldValue: "",
                label: "username",
                isRequired: true
                },{
                fieldName: "password",
                fieldValue: "",
                label: "password",
                isRequired: false
                }],
            isValid: false
          }} />)

        const idlLabel = screen.getByText(/id/i)
        const usernameLabel = screen.getByText(/username/i)
        const passwordLabel = screen.getByText(/password/i)
        const idInput = screen.getByTestId('id')
        const usernameInput = screen.getByTestId('username')
        const passwordInput = screen.getByTestId('password')
        expect(idlLabel).toBeInTheDocument()
        expect(usernameLabel).toBeInTheDocument()
        expect(passwordLabel).toBeInTheDocument()
        expect(idInput).toBeInTheDocument()
        expect(usernameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()  
    }})

    test('handlers are called', async () => {
        const onChangeInputValueHandler = jest.fn()
        const onChangeTemplateHandler = jest.fn()
        render(<View view={{
            templateId: 1,
            templateDatas: [{ 
                fieldName: "email",
                fieldValue: "",
                label: "email",
                isRequired: true
                },{
                fieldName: "age",
                fieldValue: "",
                label: "age",
                isRequired: false
                }, {
                fieldName: "gender",
                fieldValue: "",
                label: "gender",
                isRequired: false
                }],
            isValid: false
          }
        } 
        onChangeTemplate={onChangeTemplateHandler}
        onChangeInputValue={onChangeInputValueHandler}
        />)

        const combobox = screen.getByRole('combobox')
        await userEvent.selectOptions(combobox, '1')
        expect(onChangeTemplateHandler).toHaveBeenCalledTimes(1)

        const emailInput = screen.getByTestId('email')
        await userEvent.type(emailInput, '1')
        expect(onChangeInputValueHandler).toHaveBeenCalledTimes(1)
    })
});