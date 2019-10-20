var Navbar = React.createClass({
    getDefaultProps(){
      return {
        brand:'ReactStrap'
      }
    },
    render(){
      return(
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">{this.props.brand}</a>
            </div>
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li className={(this.props.currentPage === 'home') ? 'active': ''}><a href="#">Home</a></li>
                <li className={(this.props.currentPage === 'about') ? 'active': ''}><a href="#">About</a></li>
                <li className={(this.props.currentPage === 'contact') ? 'active': ''}><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });

  var Jumbotron = React.createClass({
    render(){
      return(
        <div>
        <div className="jumbotron">
          <div className="container">
            <h1>{this.props.heading}</h1>
            <p className="lead">{this.props.text}</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
        </div>
        </div>
      );
    }
  });

  var Page = React.createClass({
    render(){
      var pageContent;
      if(this.props.currentPage == 'home'){
        pageContent = 'This is the home page';
      } else if(this.props.currentPage == 'about'){
        pageContent = 'This is the about page';
      } else if(this.props.currentPage == 'contact'){
        pageContent = 'This is the contact page';
      } else {
        pageContent = 'This is the home page';
      }
      return(
        <div>
          <div className="container">
            <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
            {pageContent}
          </div>
        </div>
      );
    }
  });
  var Theme = React.createClass({
    render(){
      return(
        <div>
          <Navbar currentPage='home' brand='ReactStrap' />
          <Jumbotron heading='Hello, world!' text='This is a Bootstrap theme that uses React.js components' />
          <Page currentPage='home' />
        </div>
      );
    }
  });

  ReactDOM.render(
    <div>
      <Theme />
    </div>,
    document.getElementById('root'));
