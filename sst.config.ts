import { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";
import { DynamoDB, Cognito } from "./stacks/index";

export default {
  config(_input) {
    return {
      name: "ai-compass",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(DynamoDB)
       .stack(Cognito)
       .stack(RemixSite);
  }
} satisfies SSTConfig;