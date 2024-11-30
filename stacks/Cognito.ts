import { StackContext, Cognito as CognitoConstruct } from "sst/constructs";

export function Cognito({ stack }: StackContext) {
  const auth = new CognitoConstruct(stack, "Auth", {
    login: ["email", "phone"],
    cdk: {
      userPool: {
        selfSignUpEnabled: true,
        userVerification: {
          emailSubject: "Verify your email for AI Compass",
          emailBody: "Thanks for signing up! Your verification code is {####}",
        },
        customAttributes: {
          userType: {
            dataType: "String",
            mutable: true,
          },
        },
      },
    },
  });

  // Create auth trigger to assign user to groups
  auth.cdk.userPool.addTrigger("PostConfirmation", {
    handler: "functions/auth/postConfirmation.handler",
  });

  return auth;
}