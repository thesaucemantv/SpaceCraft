import SwiftUI
import WebKit

struct ContentView: View {
    var body: some View {
        WebViewWrapper()
            .edgesIgnoringSafeArea(.all) // This makes the web view full screen
    }
}

// Wrap WKWebView to use it in SwiftUI
struct WebViewWrapper: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView {
        let webView = WKWebView()
        
        if let url = Bundle.main.url(forResource: "index", withExtension: "html") {
            webView.loadFileURL(url, allowingReadAccessTo: url)
        }
        
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {
        // Not needed for now, but required for UIViewRepresentable
    }
}

#Preview {
    ContentView()
}
