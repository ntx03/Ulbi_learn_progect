import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import "shared/config/i18n/i18n";
import "app/styles/index.scss";
import { ErrorBoundary } from "app/providers/ErrorBoundery";
import { StoreProvider } from "app/providers/StoreProvider";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
);
