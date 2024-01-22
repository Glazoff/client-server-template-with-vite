import path from '../../App/Router/constants';
import LinkItem from '../../shared/link';

export default function ForumMainPage() {
  return (
    <>
      <h1>Страница Форума</h1>
      <LinkItem path={path.AddTopicPage} class="" label="Adding Topic Page" />
      <LinkItem path={path.TopicPage} class="" label="Topic Page" />

    </>
  );
}
