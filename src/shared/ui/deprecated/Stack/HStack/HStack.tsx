import Flex, { type FlexProps } from '../Flex/Flex';
type HStackProps = Omit<FlexProps, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const HStack = (props: HStackProps) => {
    return (
        <Flex direction={'row'} {...props}>
            {props.children}
        </Flex>
    );
};

export default HStack;
