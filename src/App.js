import React, { Component } from 'react';
import AWS from 'aws-sdk';

AWS.config.update({
  "accessKeyId": process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  "secretAccessKey": process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  "region": process.env.REACT_APP_AWS_DEFAULT_REGION
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs.jobSummaryList,
    }
  }

  filterList = (e) => {
    const updateList = this.props.jobs.jobSummaryList.filter((item) => {
      return this.matchStringValue(item.jobId, e.target.value)
      || this.matchStringValue(item.jobName, e.target.value);
    })
    this.setState({jobs: updateList});
  }

  // strが targetと一致すればtrueを返却
  matchStringValue(str, target) {
    return str.toLowerCase().search( target.toLowerCase() ) !== -1;
  }

  componentDidMount() {
  }

  render() {
    let list = this.state.jobs.map((job) => (
      <li key={job.jobId}>
        {job.jobId} {job.jobName} {job.createdAt} {job.status} {job.statusReason} {job.startedAt} {job.stoppedAt}
      </li>
    ));

    return (
      <div>
        <form action="">
          <input
            type="text"
            ref="myinput"
            defaultValue=""
            onChange={this.filterList}
          />
        </form>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}


export default App;
