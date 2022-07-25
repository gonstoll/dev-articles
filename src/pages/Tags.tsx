import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useTagsQuery} from '../queries';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function Tags() {
  const {tagsData, isTagsLoading} = useTagsQuery();

  const tags = tagsData?.map(tag => (
    <Link key={tag.id} to={`/${tag.name}`}>
      {tag.name}
    </Link>
  ));

  return <StyledWrapper>{isTagsLoading ? 'loading' : tags}</StyledWrapper>;
}
