import './App.css';

function App() {
  return (
    <>
    <div className="links-portfolio">
      <center>
      <div className="p-pic">
        <img src="https://i.pinimg.com/736x/5a/0c/7b/5a0c7b76e2a8bcdbe571c5ba916f93fe.jpg" alt="on_your_internet" />
      </div>
      <div className="p-name">
          <h5>Badri Vishal Mani Tripathi</h5>
      </div>
      <span>Front End Developer</span>
      <hr />
      <div className="about-me">
        I am a Front end developer and a Python Programmer.
        <hr />
        I also like to code in, React JS, Java, C++, Java Script, HTML, CSS, and Python.
        <hr />
        On the right side you can see, languages i use, My skills, About Me, and more.
        <br />
        <hr />
        <div className="profiles-port">
        <a href="https://github.com/mrbluebird2"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="git-img" title="My GitHub Profile" /></a>                                                                                         
        <a href="https://codeforces.com/profile/Mr_BlueBird"><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codeforces-512.png" className="cf-img" title="My Codeforces Profile" /></a>
        <a href="https://atcoder.jp/users/Mr_BlueBird"><img src="https://bira37.github.io/a93aa273c58de43a48942a1f6b14418d.svg" className="ac-img" title="My AtCoder Profile" /></a>
        <a href="https://codechef.com/users/mrbluebird2"><img src="https://icons-for-free.com/iconfiles/png/512/codechef-1324440139527402917.png" className="cc-img" title="My CodeChef Profile" /></a>
        </div>
      </div>
    </center>
    </div>
    <div className="body">
    <h3 className="b-p-name">
      Badri Vishal Mani Tripathi
      <br />
      <h5>
        Front End Developer
      </h5>
    </h3>
    <div className="card c-1">
    <div className="card-body">
    <h5 className="card-title">Languages</h5>
    <p className="card-text">
      Here you will see all Languages i use for creating websites or solving problems.
    </p>
    <button className="btn btn-success">
      Flask
    </button>
    <button className="btn btn-warning">
      Python 3
    </button>
    <button className="btn btn-info">
      HTML
    </button>
    <button className="btn btn-dark">
      CSS
    </button>
    <button className="btn btn-danger">
      JS
    </button>
    <button className="btn btn-secondary">
      C++
    </button>
    </div>
    </div>
    <div className="card c-2">
    <div className="card-body">
    <h5 className="card-title">My Skills</h5>
    <p className="card-text">
      You can see my Skills below, I actually like to do Web Developement
    </p>
    <button className="btn btn-success">
      Web Developement
    </button>
    <button className="btn btn-warning">
      Front End Developement
    </button>
    <button className="btn btn-info">
      Back End Developement
    </button>
    <button className="btn btn-dark">
      Python Programming
    </button>
    <button className="btn btn-danger">
      Competitive Programming
    </button>
    <button className="btn btn-secondary">
      CSS, HTML, and React
    </button>
    </div>
    </div>
    <div className="card c-3">
    <div className="card-body">
    <h5 className="card-title">About Me</h5>
    <p className="card-text">
      I am a front end developer, I like to create projects and, after creating that I always upload it on github.
      <br />
      I am learning and interested in Computer Science.
      I am also learning DSA (Data structures and algorithms)
      <br />
      Thank you for visiting on my portfolio.
    </p>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
