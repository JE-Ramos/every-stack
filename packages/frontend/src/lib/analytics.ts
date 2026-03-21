import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import type { Analytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: import.meta.env["VITE_FIREBASE_API_KEY"] as string,
    authDomain: import.meta.env["VITE_FIREBASE_AUTH_DOMAIN"] as string,
    projectId: import.meta.env["VITE_FIREBASE_PROJECT_ID"] as string,
    appId: import.meta.env["VITE_FIREBASE_APP_ID"] as string,
    measurementId: import.meta.env["VITE_FIREBASE_MEASUREMENT_ID"] as string,
};

let analytics: Analytics | undefined;

function getAnalyticsInstance(): Analytics | undefined {
    if (analytics) return analytics;

    if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
        return undefined;
    }

    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    return analytics;
}

export function trackPageView(pagePath: string, pageTitle: string): void {
    const instance = getAnalyticsInstance();
    if (!instance) return;
    logEvent(instance, "page_view", { page_path: pagePath, page_title: pageTitle });
}

export function trackSearch(searchTerm: string, resultCount: number): void {
    const instance = getAnalyticsInstance();
    if (!instance) return;
    logEvent(instance, "search", { search_term: searchTerm, result_count: resultCount });
}

export function trackDocumentOpen(documentId: string, documentType: string): void {
    const instance = getAnalyticsInstance();
    if (!instance) return;
    logEvent(instance, "select_content", {
        content_type: documentType,
        item_id: documentId,
    });
}
