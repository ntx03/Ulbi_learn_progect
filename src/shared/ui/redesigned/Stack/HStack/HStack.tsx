import Flex, { type FlexProps } from '../Flex/Flex';
type HStackProps = Omit<FlexProps, 'direction'>;
/**
 * Обертка которая выравнивает флекс компоненты по горизонтали (row).
 * Стили по умолчанию justify = 'start', align = 'center',  direction = 'row', max = false, gap = '8'
 * @param props align, direction, justify, gap, max
 * justify = 'start' | 'center' | 'end' | 'between'
 * align = 'start' | 'center' | 'end';
 * gap = '4' | '8' | '16' | '24' | '32';
 * max = width: 100%;
 */
const HStack = (props: HStackProps) => {
    return (
        <Flex direction={'row'} {...props}>
            {props.children}
        </Flex>
    );
};

export default HStack;
