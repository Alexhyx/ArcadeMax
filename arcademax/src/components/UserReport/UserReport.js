import React from 'react';
import './UserReport.css';

class ReportIssue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issueType: '',
            link: '',
            description: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // Can access form values using this.state
    }

    render() {
        return (
            <div>
                <h2 id="report-title">REPORT</h2>
                <div className="report-area">
                    <form className="issue-form" onSubmit={this.handleSubmit}>
                        <h3 className="form-heading">Type of Issue</h3>
                        <input type="radio" id="user" name="issueType" value="Inappropriate Content / Behavior from Other Users" onChange={this.handleInputChange} />
                        <label htmlFor="user">Inappropriate Content / Behavior from Other Users</label><br />
                        <input type="radio" id="website" name="issueType" value="Website Issue" onChange={this.handleInputChange} />
                        <label htmlFor="website">Website Issue</label><br />

                        <h3 className="form-heading">Please enter the link to the issue</h3>
                        <textarea className="form-textbox" rows="1" cols="60" name="link" value={this.state.link} onChange={this.handleInputChange}></textarea>

                        <h3 className="form-heading">Please describe the issue</h3>
                        <textarea className="form-textbox" rows="5" cols="60" name="description" value={this.state.description} onChange={this.handleInputChange}></textarea><br />

                        <input type="submit" value="Submit" className="report-button" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ReportIssue;
