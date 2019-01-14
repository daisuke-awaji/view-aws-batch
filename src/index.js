import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const jobs = {
 jobSummaryList: [
   {
     jobId: "e66ff5fd-a1ff-4640-b1a2-0b0a142f49bb",
     jobName: "example",
     createdAt: "2019/11/11 10:32:22",
     status: "RUNNING",
     statusReason: "hey you",
     startedAt: "4567898763456898",
     stoppedAt: "3200832858",
     // container: {
     //   exitCode: "1",
     //   reason: "yeah"
     // },
   },
   {
     jobId: "v0oijtwea0uiogfjoifupsb0dbs98bdfslj",
     jobName: "yeah",
     createdAt: "2019/02/11 09:32:22",
     status: "PENDING",
     statusReason: "waiting...",
     startedAt: "09vdsoj;lkadjsa",
     stoppedAt: "3456789876545678",
     // container: {
     //   exitCode: "1",
     //   reason: "yeah"
     // },
   },
   {
     jobId: "jjdsfajiofasfenwoaihbfdiojsfdkaljf;lsdjiofa",
     jobName: "jobNameだよ",
     createdAt: "2011/02/27 09:32:22",
     status: "FAILED",
     statusReason: "failed",
     startedAt: "09328502590",
     stoppedAt: "0490952935092",
     // container: {
     //   exitCode: "1",
     //   reason: "yeah"
     // },
   },
   {
     jobId: "78u3ie897yuj3u9r8wefuybhjkoi34uhitegrug98",
     jobName: "バッチその１",
     createdAt: "2011/02/27 09:32:22",
     status: "SUCCEEDED",
     statusReason: "successful done",
     startedAt: "09328502590",
     stoppedAt: "0490952935092",
     // container: {
     //   exitCode: "1",
     //   reason: "yeah"
     // },
   },
   {
     jobId: "jduisojnbvf68t79yhoibhvt768toil",
     jobName: "ばっちその２",
     createdAt: "2011/02/27 09:32:22",
     status: "SUCCEEDED",
     statusReason: "successful done",
     startedAt: "09328502590",
     stoppedAt: "0490952935092",
     // container: {
     //   exitCode: "1",
     //   reason: "yeah"
     // },
   },
 ],
 nextToken: "90ujb9908fd7s0jhbsdf0"
}

ReactDOM.render(<App jobs={jobs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
