export default function Navbar() {
  return (
    <>
      <nav className="navbar py-3 px-4 px-lg-5 shadow-sm" style={{ backgroundColor: '#1A1A1A' }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#" style={{ color: '#D4AF37', letterSpacing: '2px' }}>
            TRENDZ WATCH
          </a>
          
          <button 
            className="btn fw-bold px-4 py-2 shadow-sm" 
            type="button"
            style={{ backgroundColor: '#D4AF37', color: '#1A1A1A', border: 'none', borderRadius: '30px' }}
          >
            Shop Now
          </button>
        </div>
      </nav>
    </>
  )
}