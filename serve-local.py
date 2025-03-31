from http.server import HTTPServer, SimpleHTTPRequestHandler, test
import argparse
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    def do_GET(self):
        if not os.path.exists(self.translate_path(self.path)) and '.' not in self.path:
            self.path = 'index.html'
        return super().do_GET()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-p', '--port', type = int, default = 8000)
    args = parser.parse_args()

    os.chdir('public')
    test(CORSRequestHandler, HTTPServer, port = args.port)
