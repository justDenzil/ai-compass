import { StackContext, Table } from "sst/constructs";

export function DynamoDB({ stack }: StackContext) {
  // Expert profiles table
  const expertProfilesTable = new Table(stack, "ExpertProfiles", {
    fields: {
      expertId: "string",
      name: "string",
      expertise: "string[]",
      understanding: "string",
      completionScore: "number",
      createdAt: "number",
    },
    primaryIndex: { partitionKey: "expertId" },
  });

  // Business profiles and leads table
  const businessLeadsTable = new Table(stack, "BusinessLeads", {
    fields: {
      leadId: "string",
      expertId: "string",
      businessName: "string",
      industry: "string",
      aiNeeds: "string",
      aiReadinessScore: "number",
      status: "string",
      createdAt: "number",
    },
    primaryIndex: { partitionKey: "leadId" },
    globalIndexes: {
      byExpert: { partitionKey: "expertId", sortKey: "createdAt" },
    },
  });

  // Conversational data table
  const conversationsTable = new Table(stack, "Conversations", {
    fields: {
      conversationId: "string",
      type: "string", // 'expert_onboarding' or 'business_assessment'
      participantId: "string", // expertId or leadId
      responses: "string[]",
      currentUnderstanding: "string",
      score: "number",
      createdAt: "number",
    },
    primaryIndex: { partitionKey: "conversationId" },
    globalIndexes: {
      byParticipant: { partitionKey: "participantId", sortKey: "createdAt" },
    },
  });

  return {
    expertProfilesTable,
    businessLeadsTable,
    conversationsTable,
  };
}