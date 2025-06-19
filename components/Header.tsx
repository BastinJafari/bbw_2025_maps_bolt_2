import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/" style={{ textDecoration: 'underline' }}>Home</Link>
        <Link href="/about" style={{ textDecoration: 'underline' }}>About</Link>
      </nav>
    </header>
  );
}
