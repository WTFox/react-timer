var React = require('react');
var Navigation = require('Navigation');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var Main = (props) => {
    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            {props.children}
          </div>
        </div>
      </div>
    );
}

module.exports = Main;
