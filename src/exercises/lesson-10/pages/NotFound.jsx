import { Link, useLocation } from 'react-router';

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>
        No page exists for <code>{pathname}</code>.
      </p>
      <p>
        <Link to="/lessons/lesson-10">Go Home</Link>
      </p>
    </section>
  );
}
