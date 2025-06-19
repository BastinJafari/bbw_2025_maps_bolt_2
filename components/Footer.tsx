export default function Footer() {
  return (
    <footer style={{ padding: '1rem 2rem', backgroundColor: '#f0f0f0', borderTop: '1px solid #ddd', textAlign: 'center', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} Hackathon Project</p>
    </footer>
  );
}
