(function() {
    // WhatsApp widget setup
    var widget = document.createElement('div');
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.zIndex = '1000';
    widget.style.display = 'flex';
    widget.style.alignItems = 'center';
    widget.style.justifyContent = 'center';
    widget.style.backgroundColor = '#25D366';
    widget.style.borderRadius = '10px';
    widget.style.padding = '10px 15px';

    // WhatsApp logo URL (replace with your own image if necessary)
    var whatsappLogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';

    // Set up the widget with WhatsApp logo and text
    widget.innerHTML = '<a href="https://wa.me/254795001646" target="_blank" style="display: flex; align-items: center; text-decoration: none; color: white;">' +
        '<img src="' + whatsappLogoUrl + '" alt="WhatsApp" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;"/>' +
        '<span style="font-size: 16px; font-weight: bold;">Chat with Us</span>' +
        '</a>';

    document.body.appendChild(widget);
})();