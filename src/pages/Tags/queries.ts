import {useQuery} from '@tanstack/react-query';
import axios from '../../axios';
import {Tag} from './entities';

export function useTagsQuery() {
  async function getTags(): Promise<Array<Tag>> {
    const {data} = await axios.get('/tags');
    return data;
  }

  const {data, isLoading} = useQuery(['tags'], getTags);

  return {
    tags: data,
    isTagsLoading: isLoading,
  };
}
