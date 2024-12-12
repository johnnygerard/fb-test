import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "fb-test-f7ff5",
        appId: "1:1065786297338:web:c7767914e9bb7611837243",
        storageBucket: "fb-test-f7ff5.firebasestorage.app",
        apiKey: "AIzaSyCbDZGNJJSdZ6IaMZX-YRccezdM38Nw3Ms",
        authDomain: "fb-test-f7ff5.firebaseapp.com",
        messagingSenderId: "1065786297338",
      }),
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
