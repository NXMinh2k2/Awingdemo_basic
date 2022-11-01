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
    const {view, setViews, viewIndex, activeId, onChangeTemplate, isSubmit, onChangeInputValue} = props
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
                isRequired: false
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
                isRequired: false
                },{
                fieldName: "username",
                fieldValue: "",
                label: "username",
                isRequired: false
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
            <option value="0">None</option>
            <option value="1">Template 1</option>
            <option value="2">Template 2</option>
        </select>
        {isSubmit && (templateId == 0) &&  <span className='active'>error</span>}
        <div>
            {
                view.templateDatas && view.templateDatas.map((data, index) => {
                switch (data.fieldName) {
                    case "email": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input value={data.fieldValue} onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                    {isSubmit  && <span className='active'>error</span>}
                                </div> 
                    case "age": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input value={data.fieldValue} onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                </div>
                    case "gender": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input value={data.fieldValue} onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                </div>
                    case "id": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input value={data.fieldValue} onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                    {isSubmit && <span className='active'>error</span>}
                                </div>
                    case "username": 
                        return  <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input value={data.fieldValue} onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
                                </div>
                    case "password": 
                        return <div key={index}>
                                    <label>{data.fieldName}</label>
                                    <input value={data.fieldValue} onChange={(e) => onChangeInputValue(data.fieldName, e.target.value)}/>
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