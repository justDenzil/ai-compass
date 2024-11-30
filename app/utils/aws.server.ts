import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const REGION = "us-east-1";

export const cognitoClient = new CognitoIdentityProviderClient({
  region: REGION,
});

const dynamoClient = new DynamoDBClient({
  region: REGION,
});

export const dynamoDbClient = DynamoDBDocumentClient.from(dynamoClient);