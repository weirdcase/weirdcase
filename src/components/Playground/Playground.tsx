import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Playground = () => {
  return (
    <div className='playground-section-wrapper'>
      <div className="container">
        <div className="playground-section container-fluid clearfix">
        <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['fas', 'ranking-star']} /> Playground
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card dashboard-items">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card dashboard-items">
                <img src="https://imageplaceholder.net/400x150" className="card-img-top" alt="Placeholder image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card dashboard-items">
                <img src="https://imageplaceholder.net/400x150" className="card-img-top" alt="Placeholder image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card dashboard-items">
                <img src="https://imageplaceholder.net/400x150" className="card-img-top" alt="Placeholder image" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;