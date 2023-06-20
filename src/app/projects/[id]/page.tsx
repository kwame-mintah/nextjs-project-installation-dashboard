import Link from 'next/link';

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  return (
    <p>
      This my {params.id} <Link href="/"> Go back to home. </Link>{' '}
    </p>
  );
}
