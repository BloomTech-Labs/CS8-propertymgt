import AuthDetails from '../awsconfig';
let AWS_Auth;
const AmplifyConfig = {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: process.env.REACT_APP_IDPID, 
    // REQUIRED - Amazon Cognito Region
    region: process.env.REACT_APP_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: process.env.REACT_APP_UPID,
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: process.env.REACT_APP_UPWCID,
  },
};


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  AWS_Auth = AuthDetails;
} else {
  // production code
  AWS_Auth = AmplifyConfig;
}

export default AWS_Auth;

