import { PostConfirmationTriggerEvent } from "aws-lambda";
import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient({});

export async function handler(event: PostConfirmationTriggerEvent) {
  const { userPoolId, userName } = event;
  const userType = event.request.userAttributes["custom:userType"];

  try {
    const command = new AdminAddUserToGroupCommand({
      UserPoolId: userPoolId,
      Username: userName,
      GroupName: userType === "expert" ? "Experts" : "BusinessUsers",
    });

    await client.send(command);
  } catch (error) {
    console.error("Error adding user to group:", error);
    throw error;
  }

  return event;
}