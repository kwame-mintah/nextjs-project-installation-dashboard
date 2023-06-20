import Link from 'next/link';

export default function Page() {
  return (
    <p>
      This my dashboard <Link href="/"> Go back to home. </Link>{' '}
    </p>
  );
}
