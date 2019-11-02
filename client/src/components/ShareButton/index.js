import React, { Component } from 'react';
import { Button } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./style.css";

class ShareButton extends Component {

    state = {
        value: "",
        copied: false,
    };

    render () {
        return (
            <div>
                <CopyToClipboard 
                    // Ryan: Whatever Webpage Link inside 'text' will be copied to clipboard, when User clicks Share Button. Currently using facebook link as an example, and it needs to be replaced with the App's link.
                    text="https://www.facebook.com/"
                    onCopy={() => this.setState({copied: true})}>
                        <Button 
                            id="share-button">SHARE
                        </Button>
                </CopyToClipboard>
 
                {this.state.copied ? <span style={{color: 'blue'}}>Copied.</span> : null}
            </div>
        )
    }
}

export default ShareButton;
