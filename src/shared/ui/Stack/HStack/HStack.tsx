import Flex, {FlexProps} from "../Flex/Flex";
type HStackProps = Omit<FlexProps, 'direction'>

const HStack = (props: HStackProps) => {
    return (
       <Flex direction={'row'} {...props} children={props.children}/>
    );
};

export default HStack;