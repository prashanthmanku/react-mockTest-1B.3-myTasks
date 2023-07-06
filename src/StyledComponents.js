import styled from 'styled-components'

export const AppCard = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const AppWidthCard = styled.div`
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 767px) {
    display: flex;
  }
`

export const CreateTaskCard = styled.div`
  background-color: #1a171d;

  @media screen and (min-width: 767px) {
    width: 40%;
  }

  @media screen and (max-width: 767px) {
    height: 40vh;
  }
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
`

export const TasksCard = styled.div`
  background-color: #000000;

  min-height: 60vh;

  padding: 20px;
  @media screen and (min-width: 767px) {
    width: 70%;
  }
`

export const Form = styled.form`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`

export const FormHeading = styled.h1`
  margin: 0px;
  color: #f3aa4e;
  margin: 20px 0px;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const Label = styled.label`
  color: #ffffff;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 500;
`

export const Input = styled.input`
  height: 40px;
  padding: 8px 16px;
  background-color: #f1f5f9;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 15px;
  color: #64748b;
  font-weight: 500;
`

export const Select = styled.select`
  height: 40px;
  padding: 8px 16px;
  background-color: #f1f5f9;
  border-radius: 3px;
  border: none;
  outline: none;
  color: #000000;
  font-weight: 500;
  font-size: 15px;
`

export const Option = styled.option``

export const AddButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: center;
  background-color: #f3aa4e;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
`

export const TasksHeading = styled.h1`
  margin: 0px;
  color: #f1f5f9;
  font-size: 20px;
  font-weight: 600;
`

export const TagsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const TasksList = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const TaskItem = styled.li`
  background-color: #1a171d;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

// export const

export const TaskName = styled.p`
  margin: 0px;
  color: #f8f8f8;
  font-size: 18px;
  font-weight: 400;
  margin-right: 10px;
`

export const OptionId = styled.p`
  background-color: #f3aa4e;
  color: #323f4b;
  border: none;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
`
export const NoTasksHeading = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 170px;
  max-width: 400px;
  color: #f1f5f9;
  font-size: 20px;
  font-weight: 500;
`
