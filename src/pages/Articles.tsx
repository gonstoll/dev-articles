import {useParams} from 'react-router';
import {useArticlesQuery} from '../queries';

export default function Articles() {
  const {tagName} = useParams<{tagName: string}>();
  const {articlesData} = useArticlesQuery(tagName);

  console.log('articlesData', articlesData);
  return <p>Articles from tag: {tagName}</p>;
}
