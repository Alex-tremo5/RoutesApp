const Contact = () => {
  return (
    <>
      <div className="containerr contacto">
        <form className="form form-control form-control-lg">
          <h2 className="ask">Cuéntanos. ¿En qué te podemos ayudar?</h2>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Correo electrónico{" "}
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Descripción
            </label>
            <textarea
              className="form-control"
              placeholder="Write something.."
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="center">
            <button
              type="submit"
              className="btn btn-primary submit align-middle"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
