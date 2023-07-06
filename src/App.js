import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'
import {
  AppCard,
  AppWidthCard,
  CreateTaskCard,
  TasksCard,
  Form,
  FormHeading,
  InputCard,
  Label,
  Input,
  Select,
  Option,
  AddButton,
  TagsList,
  TasksHeading,
  TasksList,
  TaskItem,
  TaskName,
  OptionId,
  NoTasksHeading,
} from './StyledComponents'

import TagItem from './components/TagItem'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    tasksList: [],
    activeTag: tagsList[0].optionId,
    inputText: '',
    selectedOptionText: tagsList[0].displayText,
    activeTagId: '',
  }

  changeInputText = e => {
    this.setState({inputText: e.target.value})
  }

  changeTag = e => {
    const selectedOptionText =
      e.target.options[e.target.selectedIndex].textContent
    console.log(selectedOptionText, 'll')
    this.setState({
      activeTag: e.target.value,
      selectedOptionText,
    })
  }

  onClickSubmit = e => {
    e.preventDefault()
    const {inputText, activeTag, tasksList, selectedOptionText} = this.state
    if (inputText.trim() !== '') {
      const newTask = {
        id: v4(),
        taskName: inputText,
        optionId: activeTag,
        selectedOptionText,
      }
      this.setState({
        tasksList: [...tasksList, newTask],
        inputText: '',
        activeTag: tagsList[0].optionId,
        selectedOptionText: tagsList[0].displayText,
      })
    }
  }

  selectTagButton = id => {
    const {activeTagId} = this.state
    if (id === activeTagId) {
      this.setState({activeTagId: ''})
    } else {
      this.setState({activeTagId: id})
    }
  }

  getFilterdList = () => {
    const {activeTagId, tasksList} = this.state
    const newList = tasksList.filter(each =>
      each.optionId.includes(activeTagId),
    )
    return newList
  }

  render() {
    const {activeTag, inputText, activeTagId} = this.state
    const fliteredList = this.getFilterdList()
    return (
      <AppCard>
        <AppWidthCard>
          <CreateTaskCard>
            <Form onSubmit={this.onClickSubmit}>
              <FormHeading>Create a task!</FormHeading>
              <InputCard>
                <Label htmlFor="task">Task</Label>
                <Input
                  type="text"
                  id="task"
                  placeholder="Enter the task here"
                  value={inputText}
                  onChange={this.changeInputText}
                />
              </InputCard>
              <InputCard>
                <Label htmlFor="tag">Tags</Label>
                <Select id="tag" value={activeTag} onChange={this.changeTag}>
                  {tagsList.map(each => (
                    <Option value={each.optionId} key={each.optionId}>
                      {each.displayText}
                    </Option>
                  ))}
                </Select>
              </InputCard>
              <AddButton type="submit">Add Task</AddButton>
            </Form>
          </CreateTaskCard>
          <TasksCard>
            <TasksHeading>Tags</TasksHeading>
            <TagsList>
              {tagsList.map(each => (
                <TagItem
                  tagDetails={each}
                  key={each.optionId}
                  selectTagButton={this.selectTagButton}
                  activeTagId={activeTagId}
                />
              ))}
            </TagsList>
            <TasksHeading>Tasks</TasksHeading>
            {fliteredList.length === 0 ? (
              <NoTasksHeading>No Tasks Added Yet</NoTasksHeading>
            ) : (
              <TasksList>
                {fliteredList.map(each => (
                  <TaskItem key={each.id}>
                    <TaskName>{each.taskName}</TaskName>
                    <OptionId>{each.selectedOptionText}</OptionId>
                  </TaskItem>
                ))}
              </TasksList>
            )}
          </TasksCard>
        </AppWidthCard>
      </AppCard>
    )
  }
}

export default App
