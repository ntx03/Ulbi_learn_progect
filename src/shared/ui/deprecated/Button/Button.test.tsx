import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test clear theme', () => {
        render(<Button theme={ButtonTheme.BACKGROUND}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('background');
        screen.debug();
    });
});
