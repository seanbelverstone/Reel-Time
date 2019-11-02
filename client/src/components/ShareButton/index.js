import React, { Component } from 'react';
import { Button } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import "./style.css";

class ShareButton extends Component {

    state = {
        value: "",
        copied: false,
        copyToast: false
    };


    copyToast = () => {
        this.setState(prevState => ({
            copyToast: !prevState.copyToast
        }))
    }

            
    render () {
        return (
            <div>
                <div>
                    <CopyToClipboard 
                        // Ryan: Whatever Webpage Link inside 'text' will be copied to clipboard, when User clicks Share Button. Currently using facebook link as an example, and it needs to be replaced with the App's link.
                        text="https://www.facebook.com/"
                        onCopy={() => this.setState({copied: true})}>

                        <Button 
                            id="share-button"
                            onClick={this.copyToast}>SHARE
                        </Button>
                    </CopyToClipboard>
                </div>

                {
                    this.state.copyToast?

                    <Toast className="copy-toast">
                        <ToastHeader>
                            #Share #The #Reel
                        </ToastHeader>
                        <ToastBody>
                            Your link is copied to the Clipboard! Share with Friends! :)
                        </ToastBody>
                    </Toast>
                    :
                    <div></div>
                }
            </div>
        )
    }
}

export default ShareButton;
