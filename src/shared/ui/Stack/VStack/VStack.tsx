import Flex, {type FlexProps} from "../Flex/Flex";
type VStackProps = Omit<FlexProps, 'direction'>

const VStack = (props: VStackProps) => {
    const {align = 'start'} =  props;
    return (
        <Flex direction={'column'} {...props} align={align}>{props.children}</Flex>
    );
};

export default VStack;
