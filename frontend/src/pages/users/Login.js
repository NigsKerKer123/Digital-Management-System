import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };
  return (
    <section
      className="vh-100"
      style={{
        // Background picture
        backgroundImage: `url('https://private-user-images.githubusercontent.com/151451458/285633471-dfb7836b-5451-4a17-8b9f-3dfe5bad0230.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEwMTkzMjAsIm5iZiI6MTcwMTAxOTAyMCwicGF0aCI6Ii8xNTE0NTE0NTgvMjg1NjMzNDcxLWRmYjc4MzZiLTU0NTEtNGExNy04YjlmLTNkZmU1YmFkMDIzMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNlQxNzE3MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYTM2YjEzNTY5NzA3ODg0OWMwN2VkM2I3ZDMyOWRjYzdjODhmNGVlZjU5OGFkMmM5ODg3ZTQ1MTE1ZDlkMjBlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Jpj9uNTRwh-5UocMR3NS6y46q18m3ppBnBckFiG1YZE')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: "transparent",
      }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card"
              style={{ borderRadius: "1rem", border: "2px solid black" }}
            >
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://private-user-images.githubusercontent.com/151451458/285631874-1633c7f5-f05c-4334-aae1-80bca94837a4.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5NzkzNjQsIm5iZiI6MTcwMDk3OTA2NCwicGF0aCI6Ii8xNTE0NTE0NTgvMjg1NjMxODc0LTE2MzNjN2Y1LWYwNWMtNDMzNC1hYWUxLTgwYmNhOTQ4MzdhNC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNlQwNjExMDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MDY1MjdiZmVhMTVhNjE0M2JlMjgzYzUwNzg1NTNkYTM0YzhlMDk5MzYxY2Y1M2Y5M2U5NTRiYzNhZjI5YjU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.O31YWavgm6zSLXEEuud4TvXdOA5LPDdSVfut_Iws2pc"
                    alt="login form"
                    className="img-fluid"
                    style={{
                      borderRadius: "1rem 0 0 1rem",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        {/* Logo */}
                        <img
                          src="https://private-user-images.githubusercontent.com/151451458/284068075-597964c9-446b-4d33-979e-6e9c142d7a4a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5NzkwODMsIm5iZiI6MTcwMDk3ODc4MywicGF0aCI6Ii8xNTE0NTE0NTgvMjg0MDY4MDc1LTU5Nzk2NGM5LTQ0NmItNGQzMy05NzllLTZlOWMxNDJkN2E0YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyNlQwNjA2MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OWNlODBkMTJkNDdhZTRmYzAxNzE1ZDhlNGM1NmQzYzI1NGIwN2I1MWQ5YzYwMDc3YjQzYWQ1MmM3YjViMzE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.RTwtibWMryBKukqAGAsj9qpGYhkZs0ujyR1reQHo_aw"
                          alt="login form"
                          className="img-fluid"
                          style={{
                            borderRadius: "1rem 0 0 1rem",
                            width: "15%",
                            marginRight: "20px",
                          }}
                        />
                        <span className="h1 fw-bold mb-0">COB SBO</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      {/* Alert kung naay error */}
                      {error && (
                        <div
                          className="alert alert-danger d-flex align-items-center"
                          role="alert"
                        >
                          <i className="fas fa-exclamation-triangle me-3">
                            <img
                              src="https://www.pngall.com/wp-content/uploads/8/Red-Warning.png"
                              width="20"
                              alt="Alert img"
                            ></img>
                          </i>
                          <div>{error}</div>
                        </div>
                      )}

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          disabled={isLoading}
                          style={{
                            backgroundColor: "#343a40",
                            borderColor: "black",
                            transition:
                              "background-color 0.3s, border-color 0.3s",
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#ffd700"; // Gold background on hover
                            e.target.style.borderColor = "#ffd700"; // Gold border on hover
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#343a40"; // Revert background color on mouse out
                            e.target.style.borderColor = "black"; // Revert border color on mouse out
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2"></p>
                      <a
                        href="#!"
                        className="small text-muted"
                        style={{ marginRight: "20px" }}
                      >
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
