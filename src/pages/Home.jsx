function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '6rem 0' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="fw-bold fs-5" style={{ color: '#D4AF37', letterSpacing: '3px' }}>
                TRENDZ WATCH
              </p>

              <h1 className="display-3 fw-bold text-white mb-4">
                Timeless Elegance for the Modern Era
              </h1>

              <p className="text-light fs-5 mb-5" style={{ opacity: 0.8 }}>
                Discover our exclusive collection of premium timepieces. 
                Designed for those who appreciate both precision engineering and trendsetting style.
              </p>

              <a 
                href="#shop" 
                className="btn btn-lg text-dark fw-bold px-5 py-3 shadow-lg" 
                style={{ backgroundColor: '#D4AF37', border: 'none', borderRadius: '50px' }}
              >
                Shop the Collection
              </a>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80"
                alt="Luxury classic watch on a dark background"
                className="img-fluid rounded shadow"
                style={{ transform: 'scale(1.05)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: '#0A0A0A', padding: '5rem 0' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-5">
              <h2 className="display-5 fw-bold" style={{ color: '#D4AF37' }}>About the Brand</h2>
            </div>

            <div className="col-md-7">
              <p className="text-white fs-5" style={{ opacity: 0.9 }}>
                We believe that a watch is more than just a tool to tell time—it is a statement of personal style. We take pride in sourcing high-quality materials to craft watches that stand out in any setting.
              </p>

              <p className="text-white fs-5 mb-0" style={{ opacity: 0.7 }}>
                Our approach blends classic watchmaking traditions with contemporary, responsive designs perfect for everyday wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '6rem 0' }}>
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-white text-center">The Trendz Edge</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ backgroundColor: '#242424' }}>
                <div className="card-body p-5">
                  <h4 className="fw-bold mb-3" style={{ color: '#D4AF37' }}>Premium Craftsmanship</h4>
                  <p className="text-light fs-6 mb-0" style={{ opacity: 0.8 }}>
                    Built with durable materials and precise quartz movements for lasting reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ backgroundColor: '#242424' }}>
                <div className="card-body p-5">
                  <h4 className="fw-bold mb-3" style={{ color: '#D4AF37' }}>Trendsetting Designs</h4>
                  <p className="text-light fs-6 mb-0" style={{ opacity: 0.8 }}>
                    A curated aesthetic that perfectly matches both casual and professional wardrobes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ backgroundColor: '#242424' }}>
                <div className="card-body p-5">
                  <h4 className="fw-bold mb-3" style={{ color: '#D4AF37' }}>Secure Shopping</h4>
                  <p className="text-light fs-6 mb-0" style={{ opacity: 0.8 }}>
                    Seamless cart functionality and encrypted checkout for a smooth experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="text-center" style={{ backgroundColor: '#0A0A0A', padding: '7rem 0' }}>
        <div className="container">
          <h2 className="display-4 fw-bold text-white">Ready to Upgrade Your Look?</h2>

          <p className="text-light fs-4 mt-4 mb-5" style={{ opacity: 0.8 }}>
            Browse our latest arrivals and find the perfect watch for your wrist.
          </p>

          <a
            href="#products"
            className="btn btn-lg text-dark fw-bold px-5 py-3"
            style={{ backgroundColor: '#D4AF37', border: 'none', borderRadius: '50px' }}
          >
            View Products
          </a>
        </div>
      </section>
    </>
  )
}

export default Home