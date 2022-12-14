import React, {useState} from 'react'
import { templateData, viewsDefault } from './ViewList';

interface Props{
    setViews: React.Dispatch<React.SetStateAction<viewsDefault[]>>
    view: viewsDefault
    onChangeTemplate:  (view: viewsDefault) => void
    viewIndex: number
    activeId: number
    isSubmit: boolean
    onChangeInputValue: (fieldName: string, fieldValue: string) => void
}

const View = (props:Props) => {
    const {view, viewIndex, activeId, onChangeTemplate, isSubmit, onChangeInputValue} = props
    const [templateId, setTemplateId] = useState<number>()

    const handleChangeTemplate = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let templateId = Number(e.target.value)
        setTemplateId(templateId)
        let newTemplateData : templateData[] = [];
        switch(templateId) {
            case 1: 
                newTemplateData = [{ 
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
                },
            ]
                break;
            case 2: 
                newTemplateData = [{
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
                },
            ]
                break;
    }
    let newView = {...view, templateId: templateId, templateDatas: newTemplateData};
    onChangeTemplate(newView)
}
  return (
    <div className={viewIndex == activeId ? "" : "template"}>
        <span>Template</span>
        <select onChange={(e) => handleChangeTemplate(e)}>
            <option data-testid="select-option" value="0">None</option>
            <option data-testid="select-option" value="1">Template 1</option>
            <option data-testid="select-option" value="2">Template 2</option>
        </select>
        {isSubmit && <span className='active'>error</span>}
        <div>
            {
                view.templateDatas && view.templateDatas.map((data, index) => {
                switch (data.fieldName) {
                    case "email": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input data-testid='email' onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                    {isSubmit  && <span className='active'>error</span>}
                                </div> 
                    case "age": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input data-testid='age' onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                </div>
                    case "gender": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input data-testid='gender' onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                </div>
                    case "id": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input data-testid='id' onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                    {isSubmit && <span className='active'>error</span>}
                                </div>
                    case "username": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input data-testid='username' onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                    {isSubmit && <span className='active'>error</span>}
                                </div>
                    case "password": 
                        return <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input data-testid='password' onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                </div>
                    default:
                        return "";
                }
                })
            }
        </div>
    </div>
  )
}

export default View