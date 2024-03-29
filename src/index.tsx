import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.scss';
import { ErrorBoundary } from '@/app/providers/ErrorBoundery';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { createRoot } from 'react-dom/client';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Конетйнер root не найден! Не удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
