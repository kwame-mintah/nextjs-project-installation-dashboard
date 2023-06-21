import Link from 'next/link';

export default function Page() {
  return (
    <p>
      This my help page <Link href="/"> Go back to home. </Link>{' '}
    </p>
  );
}
