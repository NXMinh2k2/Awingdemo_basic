import React, { useState } from 'react'
import Form from './Form'
import ViewList, { viewsDefault } from './ViewList'

const Index = () => {

  const viewsData:viewsDefault[] = [
    {
      templateId: 0,
      templateDatas: [],
      isValid: false
    }
  ]

  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [activeNumber, setActiveNumber] = useState<number>(0)
  const [nameValue, setNameValue] = useState<string>()
  const [titleValue, setTitleValue] = useState<string>()
  const [emailValue, setEmailValue] = useState<string>("")
  const [idValue, setIdValue] = useState<string>("")
  const [views, setViews] = useState<viewsDefault[]>(viewsData)

  const onChangeNameValue = (nameValue:string) => {
    setNameValue(nameValue)
  }

  const onChangeTitleValue = (titleValue:string) => {
    setTitleValue(titleValue)
  }

  const onChangeEmailValue = (emailValue:string) => {
    setEmailValue(emailValue)
  }

  const onChangeIdValue = (idValue:string) => {
    setIdValue(idValue)
  }

  const handleSubmit = () => {
    if(activeNumber == 0) {
      if(nameValue == "" || nameValue == undefined || titleValue == "" || titleValue == undefined) {
        alert("Vui lòng nhập đầy đủ thông tin")
        setIsSubmit(true)
      }
    } else {
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
          }
        } else if(view.templateId == 2) {
          if(idValue == "" || idValue == undefined) {
            alert("Vui lòng nhập đầy đủ thông tin")
            setIsSubmit(true)
          } else {
            setViews([...views, {isValid: false , templateId: 0, templateDatas: []}])
          }
        }
      })
    }
  }

  return (
    <div>
        <button onClick={handleSubmit}>Submit</button>
        <div>
            <button 
              type='button' 
              className={activeNumber == 0 ? 'active': ''} 
              onClick={() => setActiveNumber(0)}>
                0
            </button>
            <button type='button' className={activeNumber == 0 ? '': 'active'} onClick={() => setActiveNumber(1)} 
            >1</button>
        </div>
        {
            activeNumber == 0 ? 
            <Form 
              onChangeNameValue={(nameValue) => onChangeNameValue(nameValue)}
              onChangeTitleValue={(titleValue) => onChangeTitleValue(titleValue)}
              isSubmit={isSubmit}
            /> : 
            <ViewList 
              views={views}
              setViews={setViews}
              isSubmit={isSubmit}
              setIsSubmit={setIsSubmit}
              onChangeEmailValue1={(emailValue) => onChangeEmailValue(emailValue)}
              onChangeIdValue1={(idValue) => onChangeIdValue(idValue)}
            />
        }
    </div>
  )
}

export default Index