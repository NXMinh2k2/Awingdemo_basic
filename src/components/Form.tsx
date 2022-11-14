import React, { useState } from 'react'

interface Props {
  isSubmit: boolean
  onChangeInputValue: (value: any) => any
}

const Form = (props:Props) => {
  const {isSubmit, onChangeInputValue} = props
  
  const [nameValue, setNameValue] = useState<string>()
  const [titleValue, setTitleValue] = useState<string>()
  
  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input data-testid='name' value={nameValue} onChange={(e) => onChangeInputValue(e.target.value)}/>
        {isSubmit && (nameValue=="" || nameValue == undefined) && <span className='active'>error</span>}
      </div>
      <div>
        <label htmlFor="">Title</label>
        <input data-testid='title' value={titleValue} onChange={(e) => onChangeInputValue(e.target.value)}/>
        {isSubmit && (titleValue=="" || titleValue == undefined) && <span className='active'>error</span>}
     </div>
    </div>
  )
}

export default Form