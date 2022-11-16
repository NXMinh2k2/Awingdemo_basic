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
  const [views, setViews] = useState<viewsDefault[]>(viewsData)
  const [value, setValue] = useState<string>()

  const handleChangeValue = (value:string) => {
      setValue(value)
  }
  const handleSubmit = () => {
    if(activeNumber == 0) {
      if(value == "" || value == undefined || value == "" || value == undefined) {
        alert("Vui lòng nhập đầy đủ thông tin")
        setIsSubmit(true)
      }
    } else {
      views.map((view, index) => {
        if(view.templateId == 0) {
          alert("Vui lòng nhập đầy đủ thông tin")
          setIsSubmit(true)
        } else{
          let fieldRequireds = views[index].templateDatas.filter(x=> x.isRequired);
          let isValid = fieldRequireds.filter(x=> !x.fieldValue).length
          if(isValid > 0) {
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
              isSubmit={isSubmit}
              onChangeInputValue={(value) => handleChangeValue(value)}
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
