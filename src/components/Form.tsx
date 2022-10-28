import React, { useState } from 'react'

interface Props {
  onChangeNameValue: (childData: any) => void
  onChangeTitleValue: (titleValue: any) => any
  isSubmit: boolean
}

const Form = (props:Props) => {
  const {onChangeNameValue, onChangeTitleValue, isSubmit} = props
  
  const [nameValue, setNameValue] = useState<string>()
  const [titleValue, setTitleValue] = useState<string>()
  
  onChangeNameValue(nameValue)
  onChangeTitleValue(titleValue)
  
  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input value={nameValue} onChange={(e) => setNameValue(e.target.value)}/>
        {isSubmit && (nameValue=="" || nameValue == undefined) && <span className='active'>error</span>}
      </div>
      <div>
        <label htmlFor="">Title</label>
        <input value={titleValue} onChange={(e) => setTitleValue(e.target.value)}/>
        {isSubmit && (titleValue=="" || titleValue == undefined) && <span className='active'>error</span>}
     </div>
    </div>
  )
}

export default Form