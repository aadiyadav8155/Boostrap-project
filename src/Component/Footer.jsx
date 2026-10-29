export default function Footer() {
  return (
    <>
      <footer className="py-4" style={{ backgroundColor: '#D4AF37', color: '#e6e0f0' }}>
        <div className="container text-center">
          <h5 className="fw-bold" style={{ letterSpacing: '1px' }}>Trendz Watch</h5>

          <p className="mb-2" style={{ color: '#e5e4e2' }}>
            Premium timepieces and timeless elegance.
          </p>

          <small style={{ color: '#e5e4e2' }}>
            © {new Date().getFullYear()} Trendz Watch. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  )
}