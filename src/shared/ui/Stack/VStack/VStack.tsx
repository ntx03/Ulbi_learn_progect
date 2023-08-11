import Flex, {FlexProps} from "../Flex/Flex";
type VStackProps = Omit<FlexProps, 'direction'>

const VStack = (props: VStackProps) => {
    const {align = 'start'} =  props;
    return (
       <Flex direction={'column'} {...props} children={props.children} align={align}/>
    );
};

export default VStack;
