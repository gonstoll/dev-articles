import {useParams} from 'react-router';

export default function Articles() {
  const {tagName} = useParams<{tagName: string}>();

  return <p>Articles from tag: {tagName}</p>;
}
