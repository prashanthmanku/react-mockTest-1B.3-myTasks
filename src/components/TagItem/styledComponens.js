import styled from 'styled-components'

export const Tag = styled.li`
  margin-right: 15px;
  margin-bottom: 15px;
`

export const TagButton = styled.button`
  background-color: ${props => (props.isSelected ? '#f3aa4e' : 'transparent')};
  color: #f8f8f8;
  border: 1px solid #f3aa4e;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
`
