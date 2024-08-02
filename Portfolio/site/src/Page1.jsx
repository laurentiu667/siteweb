import UlSocial from "./UlSocial";
import ananas from "/image/ananas.png"
function Page1() {
    return (
        <>
            <div className="container-info-page1">
                <div className="container-info-text">
                    <div className="container-info-top">
                        <div className="container-info">
                            <h1>
                                Creative{" "}
                                <a className="bg-bl-white">FullStack</a> Web &
                                Mobile Developer
                            </h1>
                            <p>
                                I am a passionate developer with expertise in
                                <a className="bg-bl-white">React</a>,{" "}
                                <a className="bg-bl-white">Java</a>, and design
                                with <a className="bg-bl-white">Figma</a>. I
                                have created dynamic and responsive web
                                applications using React, and I have solid
                                experience in backend development with Java.
                                Additionally, I use Figma to design intuitive
                                and attractive user interfaces.
                            </p>
                        </div>
                        <div className="container-info-bouton">
                            <button className="black-bt hire-button">
                                Hire me Now
                            </button>
                            <button className="white-bt git-button">
                                My Github
                            </button>
                        </div>
                        <div className="container-step">
                            <div className="containerstep-general">
                                <div className="svg-step"></div>

                                <div className="step-info">
                                    <h4>Step 1</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Explicabo, et.
                                    </p>
                                </div>
                            </div>

                            <div className="containerstep-general">
                                <div className="svg-step"></div>

                                <div className="step-info">
                                    <h4>Step 2</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>

                            <div className="containerstep-general">
                                <div className="svg-step"></div>

                                <div className="step-info">
                                    <h4>Step 3</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-social">
                        
                        <UlSocial />
                    </div>
                </div>
                <div className="container-image-page1">
                    <div className="container-image">
                        <img src={ananas} alt="ananas" />
                    </div>
                    {/* <div className="under-image">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Page1;
