
import "./product.css"
function About(){
    return(
        <>
    <div className="container mt-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
            alt="Ecommerce"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">
          <h2 className="mb-4">ShopNow</h2>
          <p className="text-muted">
            Welcome to our online store! We provide high-quality products at
            affordable prices. Our goal is to make online shopping simple,
            secure, and enjoyable for everyone.
          </p>

          <p className="text-muted">
            From electronics and fashion to home essentials, we offer a wide
            range of products with fast delivery and secure payment options.
            Customer satisfaction is our top priority.
          </p>

          <button className="btn btn-primary mt-3">
            Learn More
          </button>
        </div>

      </div>
    </div>

        </>
    )
}
export default About;