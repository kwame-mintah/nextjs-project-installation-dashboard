import Link from 'next/link';

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}` +
      `/projects/` +
      params.id +
      `/details`,
  );

  const responseObject = await response.json();

  return (
    <>
      <h4>{JSON.stringify(responseObject)}</h4>
      <p>Download software packages for {responseObject.projectName} </p>
      <p>This page is for project with an ID: {params.id}</p>
      <Link href="/"> Go back to home. </Link>{' '}
    </>
  );
}
