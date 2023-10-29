import React from "react";
import './Dialog.css';

const Dialog = (props) => {

    const message = props.message;
    const onDialog = props.onDialog;

        return (
            <div className="dialog-container">
                <div className="dialog-body">
                    <h3>{message}</h3>
                    <div className="btn-grp">
                        <button
                            onClick={() => onDialog(true)}
                            className="btn-yes"
                        >Yes</button>
                        <button
                            onClick={() => onDialog(false)}
                            className="btn-no">No</button>
                    </div>
                </div>
            </div>
        )
}

export default Dialog;
