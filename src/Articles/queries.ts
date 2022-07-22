import {useQuery} from '@tanstack/react-query';
import axios from '../axios';
import {Tag} from './entities';

export function useTagsQuery() {
  async function getTags() {
    const {data} = await axios.get<Array<Tag>>('/tags');
    return data;
  }

  const {data, isLoading} = useQuery(['tags'], getTags);

  return {
    tags: data,
    isTagsLoading: isLoading,
  };
}
