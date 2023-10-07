import React from "react";

const Contact = () => {
  return (
    <>
    <div className="containers mt-2">
    <div className="row">
      <div className="col-md-3 offset-md-1">
        <div className="contact_info_item">
          
          <div className="contact_info_content">
            <div className="contact_info_title">Phone</div>
            <div className="contact_info_text">+91987654321</div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="contact_info_item">
          
          <div className="contact_info_content">
            <div className="contact_info_title">Email</div>
            <div className="contact_info_text">Saradune6@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="col-md-3 ">
        <div className="contact_info_item">
          
          <div className="contact_info_content">
            <div className="contact_info_title">Address</div>
            <div className="contact_info_text">
              Ghaziabad, Uttar Pradesh
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

      {/* conatct us form */}

      <div className="contact_form">
        <div className="containerz">
          <div className="row">
            <div className="col-lg-6 offset-lg-1">
              <div className="contact_form_container py-4">
                <div
                  className="contact_form_title"
                  style={{ fontWeight: "bolder" }}
                >
                  Get In Touch
                </div>
                <br />
                <form id="contact_form">
                  <div
                    className="contact_form_name"
                    style={{
                      display: "flex",
                      justifyContent: "between",
                      alignItems: "between",
                    }}
                  >
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your Name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      type="text"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone Number"
                      required={true}
                      minLength={10}
                      maxLength={10}
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }}
                    />
                  </div>

                  <div className="contact_form_text mt-4 ">
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="Message"
                      cols={30}
                      rows={10}
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button type="submit" className="button shadow__btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
