const Contact = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Saint-Petersburg, Russia</p>
          </li>
          <li className="content-list__item">
            <a className="notlink" href="https://t.me/gagikpogosyan">
              <h2 className="title-2">Telegram</h2>
            </a>
            <p>
              <a href="tel:+79967996240">+7 (996) 799-62-40</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:pogosyangagik680@gmail.com">
                pogosyangagik680@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contact;
