
/*
=========================================================
* Student Name: Dhruvesh Solanki (301452856)
* Student ID: 301452856
* Landing Page Of My Portfolio Site  
=========================================================
*/

export default function Home(){
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href ='/about'
        // link.href = '../assets/file/DhruveshSolanki-Resume(Canada).pdf';
        // link.download = 'DhruveshSolanki-Resume(Canada).pdf';
        link.click();
    };

    return (<>
        <header id="home" className="header">
          <div className="overlay"></div>
          <div className="header-content container">
              <h1 className="header-title">
                  <span className="up">HI!</span>
                  <span className="down">I am Dhruvesh Solanki</span>
              </h1>
              <p className="header-subtitle">Software Developer</p>
  
              <button className="btn btn-primary" onClick={downloadResume}>About Me</button>
          </div>
      </header>
    </>)
}
