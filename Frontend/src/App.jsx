import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/contexts/theme-context";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <ThemeProvider storageKey="theme">
            <Outlet />
            <Toaster/>
        </ThemeProvider>
    );
}

export default App;
