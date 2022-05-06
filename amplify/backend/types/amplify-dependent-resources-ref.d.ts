export type AmplifyDependentResourcesAttributes = {
  auth: {
    Instagram: {
      IdentityPoolId: 'string';
      IdentityPoolName: 'string';
      UserPoolId: 'string';
      UserPoolArn: 'string';
      UserPoolName: 'string';
      AppClientIDWeb: 'string';
      AppClientID: 'string';
      CreatedSNSRole: 'string';
    };
  };
  api: {
    Instagram: {
      GraphQLAPIKeyOutput: 'string';
      GraphQLAPIIdOutput: 'string';
      GraphQLAPIEndpointOutput: 'string';
    };
  };
};
