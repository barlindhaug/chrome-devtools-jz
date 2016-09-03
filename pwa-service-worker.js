var colorLog = function colorLog(input) {
    console.log('%c' + input, 'color: #ff0000');
}

self.addEventListener('install', () => colorLog('Service Worker installed'));

self.addEventListener('activate', function() {
    colorLog('Service Worker active');
    self.setInterval(() => colorLog('running...'), 1000);
});
