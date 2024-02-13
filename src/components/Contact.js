import { t } from "i18next";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text={t("contacts.title")}
          data-align="center"
        >
          {t("contacts.title")}
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                 {t("contacts.description")}
                </p>
                <p>
                  {t("contacts.description1")}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="fn_cs_contact_form">
          <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input id="name" type="text" placeholder={t("contacts.name")} />
                </li>
                <li>
                  <input id="email" type="text" placeholder={t("contacts.email")} />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    placeholder={t("contacts.message")}
                    defaultValue={""}
                  />
                </li>
                <li className="full">
                  <label className="fn__checkbox">
                    <input type="checkbox" />
                    <span className="fn__checkmark">
                      <img src="/svg/checked.svg" alt="" className="fn__svg" />
                    </span>
                    <p>
                     {t("contacts.agree")}
                    </p>
                  </label>
                  <div className="mw300">
                    <a
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                    >
                      <span>{t("contacts.sendMail")}</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success={t("contacts.success")}
            />
            <div className="empty_notice">
              <span>{t("contacts.fillFields")}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
