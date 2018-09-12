console.info("Injected script");

if (document.readyState === 'loading') {
        document.addEventListener('readystatechange', () => {
                if (document.readyState === 'interactive') {
                        initExtension();
                }
        });
} else {
        initExtension();
}

function initExtension() {
        function do_not_like() {
                var xpath = '//button[contains(@class, "js-action-dismiss")]';
                var ads = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                for (var i = 0; i < ads.snapshotLength; i++) {
                        ads.snapshotItem(i).click();
                }
        }

        setInterval(do_not_like, 5000);
}
