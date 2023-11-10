import Flex, { type FlexProps } from '../Flex/Flex';
type VStackProps = Omit<FlexProps, 'direction'>;
/**
 * Обертка которая выравнивает флекс компоненты по вертикали (column).
 * Стили по умолчанию justify = 'start', align = 'start',  direction = 'column', max = false, gap = '8'
 * @param props align, direction, justify, gap, max
 * justify = 'start' | 'center' | 'end' | 'between'
 * align = 'start' | 'center' | 'end';
 * gap = '4' | '8' | '16' | '24' | '32';
 * max = width: 100%;
 */
const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex direction={'column'} {...props} align={align}>
            {props.children}
        </Flex>
    );
};

export default VStack;
