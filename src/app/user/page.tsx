'use client';

import Link from 'next/link';

const getBackendStatus = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL}/`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return {
        content: response.statusText,
      };
    })
    .then((response) => response.content)
    .catch((err) => console.log(err));
};

export default async function Page() {
  return (
    <>
      <p>
        This my user page <Link href="/"> Go back to home. </Link>{' '}
        <button type="button" onClick={getBackendStatus}>
          Lets see something
        </button>
      </p>
    </>
  );
}
