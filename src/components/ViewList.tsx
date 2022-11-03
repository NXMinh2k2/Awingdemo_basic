import React, { useState } from 'react'
import View from './View'

interface Props {
  views: viewsDefault[]
  setViews: React.Dispatch<React.SetStateAction<viewsDefault[]>>
  isSubmit: boolean
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

export interface templateData {
  fieldName: string
  fieldValue: string
  label: string
  isRequired: boolean
}

export interface viewsDefault {
    templateId: number
    templateDatas: templateData[]
    isValid?: boolean
}

const ViewList = (props:Props) => {
  const {views, setViews, isSubmit, setIsSubmit} = props

  const templateData:templateData = {
    fieldName: "",
    fieldValue: "",
    label: "",
    isRequired: false
  }
  
  const [activeId, setActiveId] = useState<number>(0)

  const handleChangeTemplate = (newView: viewsDefault, index: number) => {
    let newViews = [...views]
    newViews[index] = newView
    setViews(newViews)
    setIsSubmit(false)
  }
  
  const handleAddView = () => {
    views.map((view, index) => {
      if(activeId == index) {
        if(view.templateId == 0) {
          alert("Vui lòng nhập đầy đủ thông tin")
          setIsSubmit(true)
        } else {
          let fieldRequireds = views[index].templateDatas.filter(x=> x.isRequired);
          let isValid = fieldRequireds.filter(x=> !x.fieldValue).length > 0
          if(isValid) {
            alert("Vui lòng nhập đầy đủ thông tin")
            setIsSubmit(true)
          } else {
              setViews([...views, {isValid: false , templateId: 0, templateDatas: []}])
              setActiveId(prev => prev + 1)
            }
        }
      }
    })
  }

  console.log(views)

  const handleChange = (index:number, fieldName: string, fieldValue: string) => {  
    setIsSubmit(false)  
    let newView = views[index];

    views[index].templateDatas.map((templateData) => {
      if(templateData.fieldName == fieldName) {
        templateData.fieldValue = fieldValue
        // setViews([newView])
      }
    })
  }

  return (
    <div>
      <div style={{display: 'flex', marginLeft: '45%'}}>
        {
          views.map((view, index) => {
            return (
              <div key={index}>
                    <button 
                      type='button'
                      className={activeId == index ? 'active' : ''} 
                      onClick={() => setActiveId(index)}
                    >
                      View {index}
                    </button>
              </div>
            )
          })
        }
        <button onClick={handleAddView}>+</button>
      </div>
      {
        views.map((view, index) => {
          return (
            <div key={index}>
              <View 
                setViews={setViews}
                isSubmit={isSubmit}
                viewIndex={index}
                activeId={activeId}
                view={view}
                onChangeTemplate = {(newView) => handleChangeTemplate(newView, index)}
                onChangeInputValue={(fieldName, fieldValue) => handleChange(index, fieldName, fieldValue)}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ViewList