import type { Meta, StoryObj } from '@storybook/react';
import Flex, { type FlexProps } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    // @ts-ignore
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<FlexProps>;

export const FlexDirectionRow: Story = {
    args: {
        children: (
            <>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
            </>
        ),
        direction: 'row',
    },
    decorators: [],
};

export const FlexDirectionRowGap32: Story = {
    args: {
        children: (
            <>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
            </>
        ),
        direction: 'row',
        gap: '32',
    },
    decorators: [],
};

export const FlexDirectionColumn: Story = {
    args: {
        children: (
            <div>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
                <p>{`Hello medved!!!!`}</p>
            </div>
        ),
        direction: 'column',
    },
    decorators: [],
};
