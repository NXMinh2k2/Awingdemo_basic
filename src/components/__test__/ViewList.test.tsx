import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ViewList from "../ViewList";

describe('Name of the group', () => {
    test('render correctly', () => {
        render(<ViewList views={[{
          templateId: 0,
          templateDatas: [],
          isValid: false
        }]}/>)
        const viewButton = screen.getByRole('button', {name: /view 0/i})
        const addButton =  screen.getByRole('button', {name: /\+/i})
        const templateSpan = screen.getByText('Template')
        const combobox = screen.getByRole('combobox')
        expect(combobox).toBeInTheDocument()
        expect(viewButton).toBeInTheDocument()
        expect(addButton).toBeInTheDocument()
        expect(templateSpan).toBeInTheDocument()
      })

    test('Render view 0 if views has one element', () => {
      render(<ViewList views={[{
        templateId: 0,
        templateDatas: [],
        isValid: false
      }]}/>)
      const viewButton = screen.getByRole('button', {name: /view 0/i})
      expect(viewButton).toBeInTheDocument()
    })

    test('Render view 0, view 1 if views has two element', () => {
      render(<ViewList views={[{
        templateId: 0,
        templateDatas: [],
        isValid: false
      }, 
      {
        templateId: 1,
        templateDatas: [],
        isValid: false
      }  
    ]}/>)
      const zeroViewButton = screen.getByRole('button', {name: /view 0/i})
      const oneViewButton = screen.getByRole('button', {name: /view 1/i})
      expect(zeroViewButton).toBeInTheDocument()
      expect(oneViewButton).toBeInTheDocument()
    })

    test('handler are called', async () => {
      const setIsSubmitHandler = jest.fn()
      render(<ViewList views={[{
        templateId: 0,
        templateDatas: [],
        isValid: false
      }]}
        setIsSubmit={setIsSubmitHandler}
      />)

      const addButton =  screen.getByRole('button', {name: /\+/i})
      await userEvent.click(addButton)
      expect(setIsSubmitHandler).toHaveBeenCalledTimes(1)
    })
});