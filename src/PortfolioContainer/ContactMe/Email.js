import React from "react";
import "./Email.css";
import emailjs from "emailjs-com";
import Bbc from "../../assets/Homeimg/Bbc.jpeg";
import { Link, animateScroll as scroll, Button } from "react-scroll";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Email() {
  const form = useRef();
  function validateForm() {
    var a = document.forms["Form"]["name"].value;
    var b = document.forms["Form"]["email"].value;
    var c = document.forms["Form"]["message"].value;

    if ((a == null || a == "", b == null || b == "", c == null || c == "")) {
      alert(
        toast.error("Request Failed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        })
      );
      return false;
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_blwa5xo",
        "template_mrozx25",
        form.current,
        "mcSTNYvwkzGzcSarE"
      )

      .then(
        (result) => {
          console.log(toast("Message Sent!"), result.text);
        },
        (error) => {
          console.log(
            toast.error("Request Failed", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
            }),
            error.text
          );
        }
      );
    e.target.reset();
  };
  const notify = () =>
    toast.error("🦄 Wow so easy!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

  return (
    <section id="email">
      <h5>Lets Keep in Touch</h5>
      <h2
        style={{
          textShadow: "5px 3px 5px #9E9E9E",
        }}
      >
        Contact Me
      </h2>
      <div className="container email_container">
        <div className="inner_move">
          <article className="inner_bar">
            <h2
              style={{
                color: "#fff",
                fontFamily: "Poppins Bold",
                letterSpacing: ".2rem",
                fontSize: "2rem",
                marginLeft: 15,
                // marginTop: -30,
              }}
            >
              Get In Touch 📧
            </h2>
            <div className="aolz">
              <div className="aolz-icon">
                <a href="https://www.facebook.com/profile.php?id=100010794885920">
                  <i className="fa fa-facebook-square" color="white"></i>
                </a>
                <a href=".">
                  <i className="fa fa-google-plus-square" color="white"></i>
                </a>
                <a href="https://www.instagram.com/nishant_desai8/">
                  <i className="fa fa-instagram" color="white"></i>
                </a>
                <a href="https://wa.link/hnwfdi">
                  <i className="fa-brands fa-whatsapp" color="white"></i>
                </a>
                <a href=".">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div class="back-form">
              <div class="img-back">
                <h4>Send Your Email Here!</h4>
                <img
                  src={Bbc}
                  alt="image not found"
                  style={{ height: 186.31, width: 552.1 }}
                />
              </div>
              <form className="central-form " ref={form} onSubmit={sendEmail}>
                {/* <p>Please Fill All The Fields!</p> */}
                <label style={{ marginTop: 30 }} for="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  // onclick={IsEmpty()}
                  required
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <label for="message">Message</label>
                <textarea type="text" name="message"></textarea>
                <div
                  className="send-btn"
                  style={{ marginBottom: 20, marinLeft: 50 }}
                >
                  <button
                    type="submit"
                    style={{ marginLeft: 15 }}
                    className="btn primary-btn"
                    value="Send"
                  >
                    send<i class="fa fa-paper-plane"></i>
                  </button>
                  <ToastContainer
                    pauseOnHover={false}
                    draggable={false}
                    theme="dark"
                  />
                </div>
                {/* <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    // as="div"
                    className="relative "
                    // style={{ position: "relative", zIndex: 10 }}
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div
                        // className="fixed inset-0 bg-black bg-opacity-25"
                        style={{
                          position: "fixed",
                          inset: 0,
                          // backgroundColor: "",
                          opacity: 25,
                          // transform: "50%",

                          borderRadius: 100,
                          backdropFilter: "blur(1px)",
                        }}
                      />
                    </Transition.Child>

                    <div
                      // className="fixed inset-0 overflow-y-auto"
                      style={{ position: "fixed", inset: 0, overflowY: "auto" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          minHeight: "100%",
                          alignItems: "center",
                          justifyItems: "center",
                          p: 4,
                          marginLeft: 100,
                          marginBottom: 10,
                          textAlign: "center",
                        }}
                        // className="flex min-h-full items-center justify-center p-4 text-center"
                      >
                        <Transition.Child
                          as={Fragment}
                          // enter="ease-out duration-300"
                          // enterFrom="opacity-0 scale-95"
                          // enterTo="opacity-100 scale-100"
                          // leave="ease-in duration-200"
                          // leaveFrom="opacity-100 scale-100"
                          // leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel
                            // className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                            style={{
                              marginLeft: 915,
                              width: "20%",
                              overflow: "hidden",
                              backgroundColor: "#fff",
                              p: 6,
                              // backgroundColor: "rgba(0,0,0,0.3)",
                              borderRadius: "1rem",
                              textAlign: "left",
                              alignItems: "center",
                              boxShadow: "",
                              transition: "all",
                            }}
                          >
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                              style={{
                                marginLeft: 10,
                              }}
                            >
                              Message Sent
                            </Dialog.Title>
                            <div
                              // className="mt-2"
                              style={{ marginTop: 2, marginLeft: 10 }}
                            >
                              <p
                                style={{
                                  fontSize: "small",
                                  color: "gray",
                                  fontWeight: 500,
                                }}
                              >
                                Your payment has been successfully submitted.
                                We’ve sent you an email with all of the details
                                of your order.
                              </p>
                            </div>

                            <div
                              className="mt-4"
                              // style={{ marginTop: 4 }}
                            >
                              <button
                                type="button"
                                className="btn primary-btn"
                                style={{
                                  marginBottom: 10,
                                  marginLeft: 10,
                                }}
                                onClick={closeModal}
                              >
                                Got it, thanks!
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition> */}
                '
              </form>

              <div></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
