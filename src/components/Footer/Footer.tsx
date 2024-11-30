import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer-section-wrapper'>
      <div className="container">
        <div className="footer-section clearfix">
          <nav className="top-navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="footer-section-content">
                <div className="brand">
                  Weird<span>Case</span>&nbsp;
                </div>
                v1.0.0 | © 2024. All rights reserved.
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;

