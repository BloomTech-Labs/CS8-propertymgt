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

export default AmplifyConfig;
