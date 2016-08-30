console.log('hi');

var request = new XMLHttpRequest();
request.open('GET', 'https://javazone.no/moosehead/data/workshopList', true);
request.send(null);

request.onreadystatechange = function() {
    if (request.readyState == 4) {
        const allWorkshops = JSON.parse(request.responseText);
        const chromeWorkshop = allWorkshops.filter(ws => ws.id === 'alt_du_ikke_visste_om_chrome_dev');
        console.log('Workshop: ' + chromeWorkshop[0].title);
    }
};