import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './WhoWeAre.scss'

const WhoWeAre = () => {
  return (
    <div className='who-we-are-section-wrapper'>
      <div className="container">
        <div className="who-we-are-section container-fluid clearfix">
          <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['fas', 'user-group']} /> Who we are
            </div>
            <div className="card-body">
              <h2>Front End Developer</h2>
              <blockquote>
              <p>“Every child is an artist, the problem is staying an artist when you grow up.”</p>
              <div className="text-right">Pablo Picasso</div></blockquote>
              <p>Hello! I am Nilay Datta, I like and try to play around with things, and have a passion to build efficient systems and processes.</p>
              <p>Please keep scrolling to view some of my works and to know more about me.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted"><FontAwesomeIcon icon={['fas', 'heart']} /> Happy Browsing!</small>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['fas', 'chart-line']} /> What we do
            </div>
            <div className="card-body">
              <ul className="what-we-do-list">
                <li><span className='feature-icon'><FontAwesomeIcon icon={['fas', 'code']} /></span> Web Design</li>
                <li><span className='feature-icon'><FontAwesomeIcon icon={['fas', 'cubes']} /></span> Web Development</li>
                <li><span className='feature-icon'><FontAwesomeIcon icon={['fas', 'book']} /></span> Responsive Web Design</li>
                <li><span className='feature-icon'><FontAwesomeIcon icon={['fas', 'coffee']} /></span> Creating Logos</li>
                <li><span className='feature-icon'><FontAwesomeIcon icon={['fas', 'bolt']} /></span> Business Cards</li>
                <li><span className='feature-icon'><FontAwesomeIcon icon={['fas', 'users']} /></span> SEO compatible sites</li>
              </ul>
            </div>
            <div className="card-footer">
              <small className="text-muted"><FontAwesomeIcon icon={['fas', 'user-ninja']} /> Anything you need?</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;