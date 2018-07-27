const AmplifyConfig = {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: process.env.IDPID, 
    // REQUIRED - Amazon Cognito Region
    region: process.env.REGION_AUTH,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: process.env.UPID,
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: process.env.UPWCID,
  },
};

export default AmplifyConfig;
