import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Blog.scss'

const Blog = () => {
  return (
    <div className='blog-section-wrapper'>
      <div className="container">
        <div className="blog-section container-fluid clearfix">
          <div className="card">
            <div className="card-header primary-heading">
              <FontAwesomeIcon icon={['far', 'newspaper']} /> Blogs and Articles
            </div>
          </div>
          <div className="accordion blog-content" id="accordionExample-completion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCompletion" aria-expanded="true" aria-controls="collapseCompletion">
                  Competition
                </button>
              </h2>
              <div id="collapseCompletion" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample-completion">
                <div className="accordion-body">
                  <p className="card-text">Competition? What is it exactly? We compete with others and find what? Satisfaction? Win? Is that all that’s important? We make ourselves believe that through competition we can achieve more, get success. We select someone better than us and start competing with him, until he’s defeated. Then, another selection is made and the process continues…but to what extent will it continue? This is a journey that will never end because there will always be someone who’s better than you. You may think that you are the best for a specified time but then, you will see that someone will defeat you and take your place. Then? You will try harder to get back your position but alas! You are no match for him. Then will come the time when you will get broken down, crest-fallen and sweep into depression. Even, at the end, there will be no satisfaction. Life will become harder. All past victories will seem to be meaningless.</p>
                  <p className="card-text">The main object of life should be to do and achieve what you like to do and not what you should do. Competition often invokes feelings of jealousy, hatred and impatience in you against your enemies with time. You don’t have to form jealousy with someone and compete to live. You just have to enjoy your time on earth. Do what pleases you (Of course, not illegal ones) and do it for fun and satisfaction, not competition. Life would become more easier then. You would maintain only one emotion at that time throughout your life i.e. happiness. Even at failure and losing, life can be fun. Just you have to see the best side of it.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion blog-content" id="accordionExample2">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Engineers Diary
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                <div className="accordion-body">
                  <div className="row">
                    <div className="col col-12 col-md-4">
                      <img src="../../public/images/engineersdiary.png" className="accordian-image" alt="Engineers Diary"/><br/>
                    </div>
                    <div className="col col-12 col-md-8">
                      <p className="card-text">Engineers Diary is my first attempt to establish a common link between all the engineers and engineering students all around the globe.</p>
                      <p className="card-text">I have created an universal website where everyone will get a chance to share their thoughts, articles, suggestions, opinions, views and ideas.</p>
                      <a href="https://niloydatta.blogspot.com/" className="btn btn-primary" target="_blank">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;