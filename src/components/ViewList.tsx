import React, { useState } from 'react'
import View from './View'

interface Props {
  views: viewsDefault[]
  setViews: React.Dispatch<React.SetStateAction<viewsDefault[]>>
  isSubmit: boolean
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
  onChangeEmailValue1: (emailValue: any) => any
  onChangeIdValue1: (emailValue: any) => any
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
  const {views, setViews, isSubmit, setIsSubmit, onChangeEmailValue1, onChangeIdValue1} = props

  const templateData:templateData = {
    fieldName: "",
    fieldValue: "",
    label: "",
    isRequired: false
  }
  
  const [activeId, setActiveId] = useState<number>(0)
  const [emailValue, setEmailValue] = useState<string>("")
  const [idValue, setIdValue] = useState<string>("")

  const handleChangeTemplate = (newView: viewsDefault, index: number) => {
    let newViews = [...views];
    newViews[index] = newView;
    setViews(newViews);
    setIsSubmit(false)
  }
  

  const handleAddView = () => {
    views.map((view, index) => {
      if(view.templateId == 0) {
        alert("Vui lòng nhập đầy đủ thông tin")
        setIsSubmit(true)
      } else if(view.templateId == 1) {
        if(emailValue == "" || emailValue == undefined) {
          alert("Vui lòng nhập đầy đủ thông tin")
          setIsSubmit(true)
        } else {
          setViews([...views, {isValid: false , templateId: 0, templateDatas: []}])
          setActiveId(prev => prev + 1)
        }
      } else if(view.templateId == 2) {
        if(idValue == "" || idValue == undefined) {
          alert("Vui lòng nhập đầy đủ thông tin")
          setIsSubmit(true)
        } else {
          setViews([...views, {isValid: false , templateId: 0, templateDatas: []}])
          setActiveId(prev => prev + 1)
        }
      }
    })
    // setViews([...views, {isValid: false , templateId: 0, templateDatas: []}])
    // setActiveId(prev => prev + 1)
  }

  console.log(views)

  const onChangeEmailValue = (emailValue:string) => {
    setEmailValue(emailValue)
  }

  const onChangeIdValue = (idValue:string) => {
    setIdValue(idValue)
  }

  onChangeEmailValue1(emailValue)
  onChangeIdValue1(idValue)

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
        views.map((view,index) => {
          return (
            <div key={index}>
              <View 
                setViews={setViews}
                isSubmit={isSubmit}
                viewIndex={index}
                activeId={activeId}
                view={view}
                onChangeTemplate = {(newView) => handleChangeTemplate(newView, index)}
                onChangeEmailValue={(emailValue) => onChangeEmailValue(emailValue)}
                onChangeIdValue={(idValue) => onChangeIdValue(idValue)}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default ViewList