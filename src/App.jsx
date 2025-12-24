import classes from "./styles/app.module.css";

function App() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.section}>
          <div className={classes.left}>
            <img src="https://media.licdn.com/dms/image/v2/C5603AQH5wAtVVFVppQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1648885769733?e=1768435200&v=beta&t=PMZDB-CSRndPp6S9zMvJKcBXkpHypBwOXMwKu_5u9_Y" />
          </div>
          <div className={`${classes.right} ${classes.itCenter}`}>
            <div className={classes.title}>
              <h1>Trịnh Bá Chủ</h1>
              <h2>Web Developer</h2>
              <div>
                <div>
                  <strong>Linkedin:</strong>{" "}
                  <a href="https://www.linkedin.com/in/ch%E1%BB%A7-tr%E1%BB%8Bnh-b%C3%A1-3bb915163/">
                    https://www.linkedin.com/in/ch%E1%BB%A7-tr%E1%BB%8Bnh-b%C3%A1-3bb915163/
                  </a>
                </div>
                <div>
                  <strong>Email:</strong> tb.chu8@gmail.com
                </div>
                <div>
                  <strong>CV:</strong>{" "}
                  <a href="https://drive.google.com/file/d/1bkTVYQz8wMcArpC8qerIS5dwH34mtf4x/view">Click to download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>ABOUT</h3>
            {/* <h4>Lorem ipsum dolor</h4> */}
          </div>
          <div className={classes.right}>
            <div className={classes.wrap}>
              <p>
                I'm a frontend developer with more than 7 years of experience, specialized in optimizing web performance
                for both CSR and SSR applications. I have worked on complex product and outsourcing projects. In
                addition to frontend development, I have 3 years of backend experience with microservices, handling
                datasets of over 4 million records in PostgreSQL and MongoDB, and implementing CI/CD pipelines using
                GitLab CI. Beyond coding, I also contribute to project estimation, member proposals, and progress
                reporting.
              </p>
              <p>
                So, as you can see, eager to learn, eager to contribute is my passion, i can fit the position team
                needs, and always be available to learn things that can bring more benefit to my company.
              </p>
              <p>
                Interesting? Just take a look at my technical skill and products below to see if i have a chance to make
                your ideas happen!
              </p>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>SKILL</h3>
            {/* <h4>Lorem ipsum dolor</h4> */}
          </div>
          <div className={classes.right}>
            <div className={classes.skill}>
              <h4>Frontend (Core Expertise)</h4>
              <p>ReactJS, Next.js, TailwindCSS, Material UI.</p>
            </div>
            <div className={classes.skill}>
              <h4>Backend (Supporting Experience)</h4>
              <p>Node.js, NestJS.</p>
            </div>
            <div className={classes.skill}>
              <h4>Database (Supporting Experience)</h4>
              <p>PostgreSQL, MongoDB.</p>
            </div>
            <div className={classes.skill}>
              <h4>DevOps (Supporting Experience)</h4>
              <p>GitLab CI, Docker, K8s, AWS (S3, EC2).</p>
            </div>
            <div className={classes.skill}>
              <h4>Others (Supporting Experience)</h4>
              <p>GraphQL, REST APIs, Microservices, RabbitMQ, ELK.</p>
            </div>
            <div className={classes.skill}>
              <h4>Workflow</h4>
              <p>Agile/Scrum.</p>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>EXPERIENCE</h3>
            {/* <h4>Lorem ipsum dolor</h4> */}
          </div>
          <div className={classes.right}>
            <div className={classes.edu}>
              <div className="left">
                <h5>08/2023 - Today</h5>
                <h4>DTS COMMUNICATIONS TECHNOLOGY JOINT STOCK COMPANY</h4>
              </div>
              <div>
                <p>
                  <b>Position:</b> Fullstack Developer / Project Manager.
                </p>

                <p>
                  <b>Description of working:</b>{" "}
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                    className="ml-5"
                  >
                    <li>
                      Developed and optimized web features for Mobigames platform (30K+ CCU) using React, Next.js, and
                      NestJS.
                    </li>
                    <li>
                      Managed the company website (<a href="https://dts.com.vn">https://dts.com.vn</a>) as Project
                      Manager —handled estimation, member proposal, weekly progress tracking, and resolved blockers to
                      ensure timely delivery.
                    </li>
                    <li>Collaborated in backend microservices integration and CI/CD pipeline setup using GitLab CI.</li>
                    <li>Participated in project estimation, team assignment, and overall progress reporting.</li>
                  </ul>
                </p>

                <p>
                  <b>Tech stack:</b> React, Next.js, NestJS, GitLab CI.
                </p>

                <p>
                  <b>Projects:</b> Mobigames (<a href="https://mobigames.vn">https://mobigames.vn</a>), FlowOne-SPR, DTS
                  Website (<a href="https://dts.com.vn">https://dts.com.vn</a>).
                </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>09/ 2019 - 07/2023</h5>
                <h4>SETA INTERNATIONAL CO.,LTD</h4>
              </div>
              <div>
                <p>
                  <b>Position:</b> Frontend / Fullstack Developer
                </p>

                <p>
                  <b>Description of working:</b>{" "}
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                    className="ml-5"
                  >
                    <li>
                      Built and maintained multiple web apps within the Veritone ecosystem (Admin, Developer,
                      Attribution, Commerce Canal, Blue Eye AI).
                    </li>
                    <li>
                      Implemented large-scale image upload flow (10K+ images) from frontend to AWS S3 for AI training
                      data pipeline.
                    </li>
                    <li>
                      Resolved sub-project version conflicts via `npm link`, improving local development and integration
                      efficiency.
                    </li>
                    <li>
                      Contributed to AI annotation and automation tools with data visualization and microservice-based
                      architecture.
                    </li>
                  </ul>
                </p>

                <p>
                  <b>Tech stack:</b> React, Redux, Node.js, Express, PostgreSQL, Cypress, GraphQL, Microservices.
                </p>

                <p>
                  <b>Projects:</b> Veritone ecosystem (Admin, Developer, Attribution) -{" "}
                  <a href="https://www.veritone.com/">https://www.veritone.com/</a> , Commerce Canal (
                  <a href="https://app.purvey.ai">https://app.purvey.ai</a>), Blue Eye AI.
                </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>09/ 2018 - 09/ 2019</h5>
                <h4>BRAINOS SOLUTION LTD COMPANY</h4>
              </div>
              <div>
                <p>
                  <b>Position:</b> MEAN/ MERN Developer.
                </p>

                <p>
                  <b>Description of working:</b>{" "}
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                    className="ml-5"
                  >
                    <li>Developed and maintained Angular & React-based web apps.</li>
                    <li>
                      Defined project structure, conventions, and supported team members through technical training.
                    </li>
                  </ul>
                </p>

                <p>
                  <b>Tech stack:</b> Angular, React, Node.js, MongoDB, Bootstrap, Material UI.
                </p>

                <p>
                  <b>Projects:</b> LOF, Rentee, Wecheckin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>EDUCATION</h3>
            {/* <h4>Lorem ipsum dolor</h4> */}
          </div>
          <div className={classes.right}>
            <div className={classes.edu}>
              <div className="left">
                <h5>2013 - 2018</h5>
                <h4>Maritime University</h4>
              </div>
              <div>
                <p>High degree Information Technology major.</p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2017</h5>
                <h4>TOEIC</h4>
              </div>
              <div>
                <a href="https://drive.google.com/file/d/1-1V_ushEyCSnZJ95EV4ywd0-zLfleSYn/view?usp=sharing">
                  Click to view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
