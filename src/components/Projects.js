import React from "react";

const Projects = () => (
  <div>
    <div className="pgtitle" id="projects">
      <h1>MY PROJECTS</h1>
    </div>
    <div>
    <div className="row">
  <div className="column">
    <div className="box1">
      <div className="left">
        <h1 className="redtitle">Hotel Data Analysis</h1>
        <h3>Tools: WEKA, MS Excel, Power BI, Canva</h3>

        <p className="listtg">
          Conducted data analysis on hotel reservation data for Jaffer Hotels, a company with
          resorts on the coast of Kenya. The analysis was first performed using publicly available
          tools like WEKA and MS Excel for insights and reporting.
        </p>

        <p className="listtg">
          A follow-up visual analysis was completed using Power BI, with a presentation prepared for
          the client using Canva to communicate insights and drive conclusions.
        </p>
      </div>

      <div className="right">
        <div className="button-container">
          <button 
            title="View WEKA Project" 
            onClick={() => window.open("https://github.com/raghwaniharin/Info_703_Big_Data_Analytics_Assessment_ONE", "_blank")}
          >
            GO TO WEKA PROJECT
          </button>
          <button 
            title="View PowerBI Project" 
            onClick={() => window.open("https://github.com/raghwaniharin/INFO703_Big_Data_Analytics_A2", "_blank")}
          >
            GO TO POWERBI PROJECT
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="column">
    <div className="box1">
      <div className="left">
        <h1 className="redtitle">Selenium Automation & MSTest Unit Testing</h1>
        <h3>Tools: Selenium WebDriver, MSTest, Visual Studio</h3>

        <p className="listtg">
          Used <strong>Selenium WebDriver</strong> to automate tasks such as opening Calculator.net and performing basic 
          calculations. Also created scripts to extract all links from a webpage and set dropdown list values programmatically.
        </p>

        <p className="listtg">
          Additionally, created unit tests using <strong>MSTest</strong> for a custom implementation of a doubly linked list. 
          The project involved adding, editing, and removing nodes. My role included identifying errors in these functions, 
          modifying the logic, and retesting to ensure the list worked efficiently and correctly.
        </p>
      </div>

      <div className="right">
        <div className="button-container">
          <button
            title="View Selenium Project"
            onClick={() =>
              window.open("https://github.com/raghwaniharin/Selenium-Automation-Tests", "_blank")
            }
          >
            GO TO SELENIUM PROJECT
          </button>
          <button
            title="View MSTest Project"
            onClick={() =>
              window.open("https://github.com/raghwaniharin/MSTest-DoublyLinkedList", "_blank")
            }
          >
            GO TO MSTEST PROJECT
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="row">
        <div className="column">
          <div className="box1">
            <div className="left">
            <h1 className="redtitle">MIOK Safety App</h1>
            <h3>Android Studio - Kotlin</h3>
            <h4>In collaboration with Massey University</h4>
            <p className="listtg">
              A group project to develop two mobile applications on behalf of AWAI Massey University. MIOK Quick Response
              App for protecting children at home from domestic violence and the companion MIOK Information App for Parents and Caregivers.
              Each app is unique with its own navigation features and design implementation aimed to resonate with their
              respective target audiences.
            </p>
            <a href="https://github.com/Jandalslap/MIOK_Quick_Response_App" >
              <img src="/rs/icons/git.jpg" alt="GitHub" className="imgs5"  />
            </a>      
            <a href="https://www.massey.ac.nz/" >
              <img src="/icons/massey-university2755-1342116695.jpg" alt="GitHub" className="imgs5"  />
            </a>
            </div>
              <div className="right">
              <video width="320" height="240" controls>
                <source src="/rs/MIOK_Demo.mp4" type="video/mp4">
                </source>
              </video>
              </div> 
            
          </div>
        </div>
        <br></br>
        
        <div className="row">
        <div className="column">
          <div className="box1">
          <div className="left">
            <h1 className="redtitle">Game Development</h1>


            <h3>Godot 3.5.3 - GdScript</h3>
            
            <h4>Dangerous Dag</h4>
            <p>2D Platformer game to familiarise ourselves with the IDE and to learn 
              the basics of game development. Dag is looking for the ultimate pie 
              and his journey has led him to space. His mission is to collect  the 3 ingredients and hope 
              Space Sam gives him ethe ultimate pie recipe. 
            </p>
            <br /><br />
            <h4>Fission Fiasco</h4>
            {/* Add video for Fission Fiasco */}
            <p>
              2D platformer game simulating a nuclear reactor meltdown.<br></br>
               Nirav has to go through all the rooms and enable  the quarantine measures to 
               prevent nuclear fallout in the siberian peninsula.<br></br>
               Some of his coworkers had not followed proper protocol and have turned into zombies 
               so Nirav now also has to inject them witht the antidote to rescue them

            </p>
            </div>
            <div className="right">
            <div className="button-container">
                      <button 
                        title="PLAY GAME" 
                        onClick={() => window.open("https://skrilde3209.itch.io/fission-fiasco", "_blank")}
                      >
                        PLAY FISSION FIASCO
                      </button>
                      <button 
                        title="PLAY GAME" 
                        onClick={() => window.open("https://skrilde3209.itch.io/dangerous-dag", "_blank")}
                      >
                        PLAY DANGEROUS DAG
                      </button>
                    </div>

            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="box1">
            <div className="left">
            <h1 className="redtitle">Livestock Management Application</h1>
            <h3>Visual Studio Code - .Net MAUI & C# & SQL</h3>
            <h4>Application Development</h4>
            <p>Create an animal management system on Visual Studio
              such that farmer can keep a record of all animals 
              and their information.<br></br>
              It also has the abilities to add animals edit them or delete them.<br></br>
              All these features are put on different pages such as to 
              enable the handler to give restricted/limited access to certain people
              
            </p>
            <br /><br />
            <a href="https://github.com/raghwaniharin/Animal-Management--App" >
            <img src="rs/icons/git.jpg" alt="GitHub" className="imgs5"  />
           </a>
          </div>
          <div className="right">
              <video width="320" height="240" controls>
                <source src="/rs/Cow_Management.mp4" type="video/mp4">
                </source>
              </video>
              </div>

          </div>
        </div>

        <div className="column">
          <div className="box">
            <h1 className="redtitle">Convert Oracle Database to SQL RDBMS</h1>
            <h3>SQL Server Management Studio</h3>
            <p className="listtg">
              Convert a company's Oracle database to SQL and redesign all the tables and sort through
              the data to create new relationships. Rewrite field names and change field types according to
              SQL Standards.
            </p>
            <br /><br />
            <a href="https://github.com/raghwaniharin/SQL-601-" >
        <img src="rs/icons/git.jpg" alt="GitHub" className="imgs5"  />
      </a>
          </div>
        </div>

        <div className="column">
          <div className="box">
            <h1 className="redtitle">Convert Oracle Database to SQL RDBMS</h1>
            <h3>SQL Server Management Studio</h3>
            <p className="listtg">
              Convert a company's Oracle database to SQL and redesign all the tables and sort through
              the data to create new relationships. Rewrite field names and change field types according to
              SQL Standards.
            </p>
            <br /><br />
            <a href="https://github.com/raghwaniharin/SQL-601-" >
        <img src="rs/icons/git.jpg" alt="GitHub" className="imgs5"  />
      </a>
          </div>
        </div>

        <div className="column">
          <div className="box">
            <h1 className="redtitle">Convert Oracle Database to SQL RDBMS</h1>
            <h3>SQL Server Management Studio</h3>
            <p className="listtg">
              Convert a company's Oracle database to SQL and redesign all the tables and sort through
              the data to create new relationships. Rewrite field names and change field types according to
              SQL Standards.
            </p>
            <br /><br />
            <a href="https://github.com/raghwaniharin/SQL-601-" >
        <img src="rs/icons/git.jpg" alt="GitHub" className="imgs5"  />
      </a>
          </div>
        </div>

        <div className="column">
          <div className="box">
            <h1 className="redtitle">Convert Oracle Database to SQL RDBMS</h1>
            <h3>SQL Server Management Studio</h3>
            <p className="listtg">
              Convert a company's Oracle database to SQL and redesign all the tables and sort through
              the data to create new relationships. Rewrite field names and change field types according to
              SQL Standards.
            </p>
            <br /><br />
            <a href="https://github.com/raghwaniharin/SQL-601-" >
        <img src="rs/icons/git.jpg" alt="GitHub" className="imgs5"  />
      </a>
          </div>
        </div>

        <div className="column">
          <div className="box1">
                <div className="left">
                <h1 className="redtitle">FALAWEWE - African Apparel Store</h1>
                <h3>HTML5, CSS3, JavaScript & Bootstrap</h3>
                <p className="listtg">
                  Create a functioning website for an African apparel store selling clothes and shoes. <br></br>
                  The client needed a themed single-layout website.<br></br>
                  It also contains a fully functioning web-form for resposnses or queries and 
                  a separate page for each item where a user can select size and quantity of items they need
                </p>
                <br></br><br></br><br></br><br></br>
                <a 
                href="https://falawewebyjeetyoandharin.on.drv.tw/www.falawewe.blog/" 
                target="_blank" 
                rel="noopener noreferrer"
                  >
                    <button className="visit-button">
                      Visit Website
                    </button>
                  </a>
                  </div>
                      <div className="right">
                      <video width="320" height="240" controls>
                        <source src="\rs\falaweweaud.mp4" type="video/mp4">
                        </source>
                      </video>

                      </div>
          </div>
        </div>

        <div className="column">
          <div className="box">
            <h1 className="redtitle">Study the STUXNET Hack</h1>
            <h3>Research Paper/Presentation</h3>
            <p className="listtg">
              As part of the cybersecurity class, I researched the Stuxnet hack and created a simulation of the hack
              on a virtual machine to visualize the attack.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
);

export default Projects;
