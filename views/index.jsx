var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
         <section className="wrapper style1">
            <div className="container">
               <div className="row">
                  <div className="8u">
                     <section>
                        <h2>Prototyp Modi testen</h2>
                        <p></p>
                        </section>
                  </div>
                  <div className="4u">
                     <section>
                        <h3>&nbsp;</h3>
                        <ul className="actions">
                           <li><a href="premium" className="button alt">Premiumversion</a></li>
                        </ul>
                        <ul className="actions">
                           <li><a href="basis" className="button alt">Basisversion</a></li>
                        </ul>
                        <ul className="actions">
                           <li><a href="advertisement" className="button alt">Advertisement</a></li>
                        </ul>
                     </section>
                  </div>
               </div>
            </div>
         </section>

      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;
