import {useTagsQuery} from './queries';

export default function Articles() {
  const {tags, isTagsLoading} = useTagsQuery();

  console.log('tags', tags);

  return (
    <>
      {tags?.map(t => (
        <p key={t.id}>{t.name}</p>
      ))}
    </>
  );
}
