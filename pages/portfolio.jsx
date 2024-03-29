import Head from "next/head";

export default function Portfolio() {
  return (
    <div class="bg-dark">
      <Head>
        <title>Certified_Rice</title>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/certifiedrice"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className="topnav">
        <a className="active">Certified_Rice</a>
        <a href="./">Home</a>
        <a href="./contact">Contact</a>
        <a href="./portfolio">Portfolio/Work</a>
        <a href="./hire">Hire me!</a>
        <a href="https://github.com/CertifiedRice/certifiedrice-website">
          <i className="fa-brands fa-github"></i>&nbsp; Source
        </a>
      </div>

      <section class="container">
        <div class="pt-3">
          <h1>Certified_Rice</h1>
          <img
            src="https://avatars.githubusercontent.com/certifiedrice"
            className="profile-picture"
          ></img>
          <h3 className="underline">Portfolio and works</h3>
        </div>
<button
          type="button"
          class="btn btn-primary p-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          My Experience
        </button>
        <div className="projects">
          <div className="box">
            <h1>Razer Chroma Roblox Integration</h1>

            <p>Razer Chroma RGB with Roblox</p>

            <a href="https://www.youtube.com/watch?v=0CGDJt5zSPM">
              <button>Video Example</button>
            </a>

            <a href="https://github.com/CertifiedRice/Razer-Chroma-Roblox">
              <button>Project Code</button>
            </a>
          </div>

          <div className="box">
            <h1>Rusted Engine</h1>
            <p>2d game engine made in Java.</p>

            <a href="https://youtu.be/OF-beb1AVB4">
              <button>Video Example</button>
            </a>

            <a href="https://github.com/Rusted-Studio/Rusted-Engine">
              <button>Project Code</button>
            </a>
          </div>

          <div className="box">
            <h1>Rusted Script</h1>
            <p>High Level programming language made in Python.</p>

            <a href="https://github.com/Rusted-Script/Rusted-Script">
              <button>Project Code</button>
            </a>

            <a href="https://rusted-script.github.io">
              <button>Project Website</button>
            </a>
          </div>
        </div>

        <a href="https://github.com/CertifiedRice">
          <button>View more projects on my Github!</button>
        </a>

        <hr></hr>

        

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header bg-info">
                <h3 class="modal-title text-dark" id="exampleModalLabel">
                  My Experience
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-black bg-light">
                <table class="table">
                  <tbody>
                    <tr class="table-success">
                      <th>C#</th>
                      <th>Javascript</th>
                      <th>Lua</th>
                    </tr>
                    <tr class="table-primary">
                      <th>Python</th>
                      <th>PHP</th>
                      <th>Html & CSS</th>
                    </tr>
                    <tr class="table-info">
                      <th>Java</th>
                      <th>C++</th>
                      <th>Typescript</th>
                    </tr>
                    <tr class="table-secondary">
                      <th>Ruby</th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer bg-light">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

      
      </section>
    </div>
  );
}
