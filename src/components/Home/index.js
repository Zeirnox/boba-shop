import './index.css';
import Hero from '../../images/Hero.jpg';
import Heromobile from '../../images/Hero-mobile.jpg';
import Drink1 from '../../images/n1.jpg';
import Drink2 from '../../images/n2.jpg';
import Drink3 from '../../images/n3.jpg';

export default function Home() {
    return (
        <div>
            <img src={Hero} alt="Boba" className="hero"/>
            <img src={Heromobile} alt="Boba" className="hero--mobile" />
            
            <main>
                <h2 className="about">About Us</h2>
                <p>Adipisicing ullamco ea cupidatat occaecat nulla eiusmod ea nisi nisi dolore laborum. Aute non qui laboris pariatur duis. Enim fugiat cillum fugiat adipisicing deserunt non exercitation duis velit officia sint aliquip.</p>
                <div className="readMore-btn"><button>Read More</button></div>
            </main>

            <section className="menu">
                <h2>View Our Selections</h2>
                <div className="drinks">
                    <img src={Drink1} alt="Original Milk Tea" className="drink1" />
                    <img src={Drink2} alt="Strawberry Green Tea" className="drink2" />
                    <img src={Drink3} alt="Hokkaido Green Milk Tea" className="drink3" />
                </div>
                <div className="menu-btn"><button>View Menu</button></div>
            </section>

            <footer>
                <h2>Boba</h2>

                <section className="footer-section">
                    <div>
                        <h3>Contact</h3>
                        <p>Bobashop@email.com</p>
                    </div>

                    <div>
                        <h3>Locations</h3>
                            <div className="location-1">
                                <span>
                                    Spring Valley 
                                    <br></br> 
                                    <a>Address</a>
                                </span>
                            </div>
                            <div className="location-2">
                                <span>
                                    Spring Valley 
                                    <br></br> 
                                    <a>Address</a>
                                </span>
                            </div>
                            <div className="location-3">
                                <span>
                                    Spring Valley 
                                    <br></br> 
                                    <a>Address</a>
                                </span>
                            </div>
                    </div>
                
                    <div>
                        <h3>Follow</h3>
                    </div>
                </section>
            </footer>
        </div>
    )
}