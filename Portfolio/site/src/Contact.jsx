export default function Contact() {
    return (
        <>
            <section className="contact-container">

                <div className="contact-text">

                    <h1>contact request form</h1>

                    <h2>personal info</h2>

                </div>

                <div className="inputer">

                    <div className="div-input">

                        <div className="top"><a>name</a> <a className="required"> (required)</a></div>

                        <input className="middle" type="text" />

                        <div className="bottom"><a className="under-info">first</a></div>

                    </div>

                    <div className="div-input">

                        <div className="top"><a></a> <a className="required">‎ </a></div>

                        <input className="middle" type="text" />

                        <div className="bottom"><a className="under-info">last</a></div>

                    </div>

                    <div className="div-input">

                        <div className="top"><a>email</a> <a className="required"> (required)</a></div>

                        <input className="middle" type="text" />

                        <div className="bottom">‎ <a className="under-info">‎ </a></div>

                    </div>

                    <div className="div-input">

                        <div className="top"><a>confirm email</a> <a className="required"> (required)</a></div>

                        <input className="middle" type="text" />

                        <div className="bottom">‎ <a className="under-info">‎ </a></div>

                    </div>

                    <div className="div-input">

                        <div className="top"><a>entreprise</a></div>

                        <input className="middle" type="text" />

                        <div className="bottom">‎ <a className="under-info">‎ </a></div>

                    </div>

                    <div className="div-input">

                        <div className="top"><a>phone number</a> <a className="required"> </a></div>

                        <input className="middle" type="text" />

                        <div className="bottom">‎ <a className="under-info">‎ </a></div>

                    </div>


                </div>

                <button className="black-bt submit-button">Submit</button>
            </section>
        </>
    );
}
