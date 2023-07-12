import type {Meta, StoryObj} from "@storybook/react";
import Code, {type CodeProps} from "./Code";

const meta: Meta<typeof Code> = {
    title: "shared/Code",
    component: Code,
    // @ts-ignore
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<CodeProps>;

export const Normal: Story = {
    args: {
        text: 'const meta: Meta<typeof Code> = {\n' +
          '    title: "shared/Code",\n' +
          '    component: Code,\n' +
          '    // @ts-ignore\n' +
          '    tags: ["autodocs"],\n' +
          '    argTypes: {},\n' +
          '};\n' +
          '\n' +
          'export default meta;\n' +
          'type Story = StoryObj<CodeProps>;'
    },
    decorators: [],
};