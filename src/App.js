import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Body from "./components/Body.js";
import Header from "./components/Header";
import "../index.css";

const queryClient = new QueryClient();

const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);
