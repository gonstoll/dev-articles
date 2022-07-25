import {useQuery} from '@tanstack/react-query';
import axios from './axios';
import {Article, Tag} from './entities';

export function useTagsQuery() {
  async function getTags(): Promise<Array<Tag>> {
    const {data} = await axios.get('/tags');
    return data;
  }

  const {data, isLoading} = useQuery(['tags'], getTags);

  return {
    tagsData: data,
    isTagsLoading: isLoading,
  };
}

export function useArticlesQuery(tag?: string) {
  async function getArticles(tag?: string): Promise<Array<Article>> {
    const params = new URLSearchParams();
    if (tag) {
      params.set('tag', tag);
    }
    const {data} = await axios.get(`/articles?${params.toString()}`);
    return data;
  }

  const {data, isLoading} = useQuery(['articles'], () => getArticles(tag));

  return {
    articlesData: data,
    isArticlesLoading: isLoading,
  };
}
