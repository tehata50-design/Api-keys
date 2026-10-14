# FreeKey Hub — APK + EXE packaging kit

This kit wraps the existing deployed FreeKey Hub website:
https://freekey-hub-vl6m1s.v2.appdeploy.ai/

## Important: what this kit is (and is not)
- It is a build kit, **not already-compiled APK/EXE installers**.
- The ChatGPT/AppDeploy environment does not have the Android SDK/Gradle or a Windows build host available, so it cannot honestly produce and test the final native binaries here.
- The included GitHub Actions workflows can build downloadable artifacts after you upload this folder to a GitHub repository and run the workflows.
- The apps load the deployed website, so an internet connection is required and website updates appear without reinstalling the wrapper.

## Build both installable files with GitHub Actions
1. Download and unzip this kit.
2. Create a new empty repository on GitHub.
3. Upload all files/folders from this kit to the repository and commit them.
4. Open the repository's **Actions** tab.
5. Run **Build Android APK**. When it finishes, download the `freekey-hub-debug-apk` artifact. Unzip it and install `app-debug.apk` on Android. You may need to allow installing apps from your browser/file manager. This is a debug APK for personal testing, not a Play Store release.
6. Run **Build Windows EXE**. Download the `freekey-hub-windows-installer` artifact. Unzip it and run `FreeKey Hub Setup.exe` on Windows.

## Security / trust
- This wrapper only opens the official deployed FreeKey Hub URL. It does not read your Google account, scrape accounts, or automatically create API keys.
- Only enter API credentials on the provider's official website. Keep keys private.
- GitHub Actions will build artifacts from the source in your repository. Review the files before running workflows.
- Windows may show an unrecognized-app warning because the installer is not code-signed. Do not bypass warnings unless you trust the source you built.

## Local build prerequisites (alternative)
- Node.js 20+
- Android: Android Studio/SDK, Java 17, and Android platform tools
- Windows EXE: build on Windows for the most reliable result

## Troubleshooting
- If the Android workflow fails during `npx cap add android`, inspect the Actions log and rerun after fixing the reported dependency/platform issue.
- If Windows SmartScreen warns, that is expected for an unsigned self-built installer.
