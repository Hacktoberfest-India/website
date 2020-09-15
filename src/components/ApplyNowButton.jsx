import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import { Button } from '@material-ui/core'

class ApplyNowButton extends React.Component {
	constructor(props) {
	    super(props);
	    this.openForm = this.openForm.bind(this);
	  }
	
	  openForm() {
	    this.typeformEmbed.typeform.open();
	  }
	
	  render() {
	    return (
	      <div className="ExamplePopup">
	        <ReactTypeformEmbed
	          popup
	          autoOpen={false}
	          url="https://rishabh-bansal.typeform.com/to/f8BOxr7W"
	          hideHeaders
	          hideFooter
	          buttonText="Go!"
	          style={{ top: 100 }}
	          ref={tf => {
	            this.typeformEmbed = tf;
	          }}
            />
            
            <Button
                variant="contained"
                style={{
                    background: "#9c4668",
                    margin: "0 1rem",
                    padding: "1.7rem 2rem",
                    borderRadius: "3rem",
                    height: "3rem",
                    color: "#ffffff",
                    fontWeight: "900",
                    cursor: 'pointer'
                }}
                onClick={this.openForm}
            >
                Apply Now
            </Button>
	      </div>
	    );
	  }
	}
	
	export default ApplyNowButton;