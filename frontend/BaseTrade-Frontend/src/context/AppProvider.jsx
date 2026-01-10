import { InvoiceProvider } from "./InvoiceContext";
import { RegisterTableProvider } from "./RegisterTableContext";

export const AppProvider = ({ children }) => {
    return (
        <InvoiceProvider>
            <RegisterTableProvider>
                {children}
            </RegisterTableProvider>
        </InvoiceProvider>
    )
}