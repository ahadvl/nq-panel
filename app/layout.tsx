import "../styles/style.css";
import { Theme } from "@yakad/ui";

export const runtime = "edge";

export default function Layout({ children }: any) {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href="favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#222222" />
                <meta name="description" content="Natiq Control Panel" />
                <link rel="apple-touch-icon" href="logo192.png" />
                <link rel="manifest" href="manifest.json" />
                <title>Natiq Panel</title>
            </head>
            <body>
                <Theme mode="system">{children}</Theme>
            </body>
        </html>
    );
}
