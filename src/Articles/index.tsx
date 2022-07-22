import styled from 'styled-components';
import {useTagsQuery} from './queries';

export default function Articles() {
  const {tags, isTagsLoading} = useTagsQuery();

  console.log('tags', tags);

  return (
    <>
      {tags?.map(t => (
        <StyledText key={t.id}>{t.name}</StyledText>
      ))}
    </>
  );
}

const StyledText = styled.p`
  font-family: ${props => props.theme.fontFamiy};
`;
