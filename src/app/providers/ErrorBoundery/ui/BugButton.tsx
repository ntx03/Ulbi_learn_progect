import {classNames} from 'shared/lib/classNames/classNames'
import Button from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

interface BugButtonProps {
    className?: string
}

export const BugButton = ({className}: BugButtonProps) => {
    const [error, setError] = useState(false);
    const toggle = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error])

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={toggle} className={classNames('', {}, [className ?? ''])}>
            trow error
        </Button>
    )
};

export default BugButton;