import { Link } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className='dashboard-section-wrapper'>
      <div className="container">
        <div className="dashboard-section container-fluid clearfix">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card dashboard-items">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Prisoner's Dilemma</h5>
                  <p className="card-text">Play between <strong>two</strong> players using different <strong>strategies</strong> to find who wins!</p>
                  <p className="card-text">Available Strategies to choose from - <em id="strategiesList">Tit for tat, Attack, Generous, Unforgiving, Sneaky, Random, Jump, End up killing, Con</em></p>
                  <a href="../../../../../gameTheory/index.html" className="btn btn-primary" target='_blank'>Play</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated months ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card dashboard-items">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Competition</h5>
                  <p className="card-text">Competition? What is it exactly? We compete with others and find what?</p>
                  <p className="card-text">Satisfaction? Win? Is that all that’s important?</p>
                  <Link to="/blog" className="btn btn-primary">Read more</Link>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated years ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card dashboard-items">
                <div className="card-header">Featured</div>
                <img src="../../public/images/engineersdiary.png" className="card-img-top" alt="Engineers Diary" />
                <div className="card-body">
                  <h5 className="card-title">Engineers Diary</h5>
                  <p className="card-text">An attempt to share thoughts, articles, suggestions, opinions, views and ideas.</p>
                  <a href="https://niloydatta.blogspot.com/" className="btn btn-primary" target="_blank">Learn more</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated years ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;