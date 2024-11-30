import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export interface ExpertProfile {
  expertId: string;
  name: string;
  expertise: string[];
  understanding: string;
  completionScore: number;
  createdAt: number;
}

export interface BusinessLead {
  leadId: string;
  expertId: string;
  businessName: string;
  industry: string;
  aiNeeds: string;
  aiReadinessScore: number;
  status: string;
  createdAt: number;
}

export interface Conversation {
  conversationId: string;
  type: 'expert_onboarding' | 'business_assessment';
  participantId: string;
  responses: string[];
  currentUnderstanding: string;
  score: number;
  createdAt: number;
}

export async function getExpertProfile(expertId: string): Promise<ExpertProfile | null> {
  const command = new GetCommand({
    TableName: process.env.EXPERT_PROFILES_TABLE,
    Key: { expertId },
  });

  try {
    const response = await docClient.send(command);
    return response.Item as ExpertProfile;
  } catch (error) {
    console.error("Error fetching expert profile:", error);
    return null;
  }
}

export async function saveExpertProfile(profile: ExpertProfile): Promise<void> {
  const command = new PutCommand({
    TableName: process.env.EXPERT_PROFILES_TABLE,
    Item: profile,
  });

  try {
    await docClient.send(command);
  } catch (error) {
    console.error("Error saving expert profile:", error);
    throw error;
  }
}

export async function getExpertLeads(expertId: string): Promise<BusinessLead[]> {
  const command = new QueryCommand({
    TableName: process.env.BUSINESS_LEADS_TABLE,
    IndexName: "byExpert",
    KeyConditionExpression: "expertId = :expertId",
    ExpressionAttributeValues: {
      ":expertId": expertId,
    },
  });

  try {
    const response = await docClient.send(command);
    return response.Items as BusinessLead[];
  } catch (error) {
    console.error("Error fetching expert leads:", error);
    return [];
  }
}

export async function saveConversation(conversation: Conversation): Promise<void> {
  const command = new PutCommand({
    TableName: process.env.CONVERSATIONS_TABLE,
    Item: conversation,
  });

  try {
    await docClient.send(command);
  } catch (error) {
    console.error("Error saving conversation:", error);
    throw error;
  }
}