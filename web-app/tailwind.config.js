/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#2563EB",
                "background-soft": "#F8FAFC",
                "background-white": "#FFFFFF",
                "text-main": "#0F172A",
                "text-muted": "#64748B",
                "success": "#16A34A",
                "warning": "#F59E0B",
                "error": "#DC2626",
            },
            fontFamily: {
                "display": ["Inter", "Poppins", "sans-serif"],
                "body": ["Inter", "Roboto", "sans-serif"],
            },
            borderRadius: {
                "medical": "12px",
                "button": "10px",
            },
            boxShadow: {
                "medical": "0 8px 24px rgba(0, 0, 0, 0.06)",
                "medical-hover": "0 12px 32px rgba(0, 0, 0, 0.08)",
            }
        },
    },
    plugins: [
        import('@tailwindcss/forms'),
        import('@tailwindcss/container-queries'),
    ],
}
