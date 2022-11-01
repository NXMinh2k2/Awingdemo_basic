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
  const [views, setViews] = useState<viewsDefault[]>(viewsData)

  const onChangeNameValue = (nameValue:string) => {
    setNameValue(nameValue)
  }

  const onChangeTitleValue = (titleValue:string) => {
    setTitleValue(titleValue)
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
        } else if (view.templateId == 1) {
            if(views[index].templateDatas[0].fieldValue == "" || views[index].templateDatas[0].fieldValue == undefined) {
              alert("Vui lòng nhập đầy đủ thông tin")
              setIsSubmit(true)
            }
        } else if(view.templateId == 2) {
            if(views[index].templateDatas[0].fieldValue == "" || views[index].templateDatas[0].fieldValue == undefined) {
              alert("Vui lòng nhập đầy đủ thông tin")
              setIsSubmit(true)
            }
      }})
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

            />
        }
    </div>
  )
}

export default Index