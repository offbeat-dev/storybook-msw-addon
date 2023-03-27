import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { MockApi } from "./MockApi";

const results = [
  {
    id: 1,
    title: "Lorem Ipsum 1",
    tags: ["tag 1-1", "tag 1-2"],
  },
  {
    id: 2,
    title: "Lorem Ipsum 2",
    tags: ["tag 2-1", "tag 2-2"],
  },
];

const meta: Meta<typeof MockApi> = {
  title: "Mock API",
  component: MockApi,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MockApi>;

export const Default: Story = {
  args: {
    heading: "Mock API",
    endpoint: "/api/user",
  },
  parameters: {
    msw: {
      handlers: [
        rest.get("/api/user", (req, res, ctx) => {
          return res(ctx.json(results));
        }),
      ],
    },
  },
};
