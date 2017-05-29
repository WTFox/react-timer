var React = require('react');
var Navigation = require('Navigation');

// for components that do no require maintaining state,
// you can use arrow functions. Available in React > 14?
var Main = (props) => {
    return (
      <div>
        <div>
          <div>
            <Navigation />
            <p>Main rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    );
}

module.exports = Main;
