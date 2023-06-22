import Link from 'next/link';

export default async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}` + `/projects/`,
  );

  const projectsResponse = await response.json();

  return (
    <>
      <h4>{JSON.stringify(projectsResponse)}</h4>
      <p>
        Your assigned to
        <Link href={'projects/' + `${projectsResponse.projects[0].projectId}`}>
          {' '}
          {projectsResponse.projects[0].projectName}{' '}
        </Link>
      </p>
      <p>
        This my projects page <Link href="/"> Go back to home. </Link>{' '}
      </p>
    </>
  );
}
