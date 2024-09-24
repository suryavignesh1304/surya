import Header from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
    return (
        <section id="home" className="pt-20">
            <div className="">
                <div>
                    <div className="">
                        <figure className="">
                            <img src="/images/avatar-1.jpg" width={40} height={40} alt="Surya Vignesh Kapuganti" className="img-cover" />
                        </figure>
                        <div className="">
                            <span className="">
                                <span className=""></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="">
                        Building scalable MOdern software for the  Future 
                    </h2> 
                    <div className="">
                        ButtonPrimary

                        ButtonOutline
                    </div>
                </div>
                <div className="">
                    <figure className="">
                        <img src="/images/hero-banner.png" width={657} height={800} alt="Surya Vignesh Kapuganti" className="w-full" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default App;