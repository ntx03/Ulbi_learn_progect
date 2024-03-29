import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    title?: string | null;
    text?: string | null;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4';

const mapSizeToClass: Record<TextSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h4',
    m: 'h3',
    l: 'h2',
};
/**
 * Компонент для отображения текста обычного, так и заголовка
 * @param title - текст для заголовка
 * @param text - обычный текст
 * @param variant вариант  текста 'primary' | 'error' | 'accent' (по умолчанию 'primary')
 * @param align - TextAlign = 'right' | 'left' | 'center' (по умолчанию 'left')
 * @param size - TextSize = 's' | 'm' | 'l' => s: 'h4', m:'h3', l: 'h2' (по умолчанию 'm')
 * @param bold - по умолчанию false
 * @param dataTestId по умолчанию 'Text'
 */
export const Text = ({
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    bold,
    'data-testid': dataTestId = 'Text',
}: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];
    return (
        <div
            className={classNames(cls.Text, { [cls.bold]: bold }, [
                className,
                cls[variant],
                cls[align],
                cls[sizeClass],
            ])}>
            {title && (
                <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
};
