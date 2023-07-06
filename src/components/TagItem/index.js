import {TagButton, Tag} from './styledComponens'

const TagItem = props => {
  const {tagDetails, selectTagButton, activeTagId} = props
  const {optionId, displayText} = tagDetails

  const onClickTag = () => {
    selectTagButton(optionId)
  }

  return (
    <Tag>
      <TagButton
        type="button"
        onClick={onClickTag}
        isSelected={activeTagId === optionId}
      >
        {displayText}
      </TagButton>
    </Tag>
  )
}

export default TagItem
